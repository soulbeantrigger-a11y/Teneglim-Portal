import { fileURLToPath, URL } from "node:url";
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const root = fileURLToPath(new URL(".", import.meta.url));

// 独立官网工程：构建产物可部署到任意子路径（GitHub Pages / OSS / 个人服务器）
// base: './' 让相对路径生效，避免部署到子目录后资源 404
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5174,
    open: false,
    // 本地开发时，把 /downloads/* 映射到主项目 Tauri 安装包构建目录，
    // 这样预览站可直接下载真实安装包（生产部署时请将安装包放到 dist/downloads/）
    configureServer(server) {
      const releases = path.resolve(root, "../src-tauri/target/release/bundle/nsis");
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/downloads/")) {
          const name = path.basename(req.url);
          const file = path.join(releases, name);
          if (fs.existsSync(file)) {
            res.setHeader("Content-Type", "application/octet-stream");
            res.setHeader("Content-Disposition", `attachment; filename="${name}"`);
            fs.createReadStream(file).pipe(res);
            return;
          }
        }
        next();
      });
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});