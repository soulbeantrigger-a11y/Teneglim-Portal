<template>
  <section id="download" class="section download">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Download</span>
        <h2 class="section-title">免费下载 · 即刻开始</h2>
        <p class="section-desc">
          当前版本 v{{ version }}。工具运行在本地，无需注册账号，数据完全由你掌控。
        </p>
      </div>

      <div class="download-grid">
        <!-- 主下载卡 -->
        <div class="download-main reveal">
          <div class="dl-top">
            <div class="dl-version">
              <span class="dl-ver-label">最新版本</span>
              <b class="dl-ver-num">v{{ version }}</b>
              <span class="dl-ver-date">2026 · 全新发布</span>
            </div>
            <div class="dl-badges">
              <span v-for="b in badges" :key="b" class="badge">{{ b }}</span>
            </div>
          </div>

          <div class="dl-actions">
            <a class="btn btn-gold dl-btn" :href="winUrl" :download="winName">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path
                  d="M10 1a1 1 0 0 1 1 1v8.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4L9 10.6V2a1 1 0 0 1 1-1zM2 17a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z"
                />
              </svg>
              下载 Windows 安装包
            </a>
            <a class="btn btn-ghost dl-btn" href="#sponsor" @click.prevent="go('#sponsor')">
              支持创作
            </a>
          </div>
          <p class="dl-size">Windows 64 位 · 安装包约 160 MB · 双击即装，无需联网</p>
        </div>

        <!-- 下载说明卡 -->
        <div class="download-notes reveal" style="animation-delay: 0.1s">
          <div v-for="n in notes" :key="n.title" class="note-item">
            <span class="note-ico" v-html="n.icon"></span>
            <div>
              <h4 class="note-title">{{ n.title }}</h4>
              <p class="note-text">{{ n.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 其他平台 -->
      <div class="other-platforms reveal">
        <h3 class="op-title">其他方式</h3>
        <div class="op-list">
          <div v-for="p in others" :key="p.name" class="op-card">
            <span class="op-name">{{ p.name }}</span>
            <span class="op-desc">{{ p.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const version = "1.1.0";
// 生产部署时：将安装包复制到 website/dist/downloads/ 目录即可被正确引用
const winUrl = "./downloads/TeneglimScribe-Setup-1.1.0.exe";
const winName = "TeneglimScribe-Setup-1.1.0.exe";

const badges = ["本地优先", "无需注册", "AI 加持", "永久免费"];

const notes = [
  {
    title: "自带 AI 配置面板",
    text: "首次启动前往「设置」填入你的大模型 API Key（默认支持 Kimi，可切换其他模型），即可开始创作。",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2.5"/><path d="M8 21h8M12 18v3"/><path d="M7 9l3 3-3 3M12 15h5"/></svg>',
  },
  {
    title: "数据完全本地",
    text: "所有作品、设定、正文都保存在你指定的本地目录，支持导入已有小说目录与一键备份。",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  },
  {
    title: "Windows / macOS / Linux",
    text: "提供 Windows 安装包，macOS 与 Linux 可通过源码构建。",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M8 10h8M8 14h5"/></svg>',
  },
];

const others = [
  { name: "macOS", desc: "源码构建（Tauri）" },
  { name: "Linux", desc: "源码构建（AppImage）" },
];

function go(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.download {
  background: linear-gradient(180deg, transparent, rgba(19, 26, 48, 0.5) 20%, transparent 100%);
}

.download-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
  max-width: 980px;
  margin: 0 auto;
}

.download-main,
.download-notes {
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid rgba(212, 178, 87, 0.16);
  backdrop-filter: blur(10px);
  padding: 34px;
}

.download-main {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(420px 260px at 100% 0%, rgba(212, 178, 87, 0.14), transparent 62%),
    var(--bg-card);
}
.download-main::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.dl-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}
.dl-version {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dl-ver-label {
  font-size: 12px;
  letter-spacing: 3px;
  color: var(--text-dim);
  text-transform: uppercase;
}
.dl-ver-num {
  font-family: var(--font-display);
  font-size: 42px;
  color: var(--gold-light);
  letter-spacing: 2px;
}
.dl-ver-date {
  font-size: 13px;
  color: var(--text-dim);
}
.dl-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.badge {
  padding: 5px 13px;
  border-radius: 999px;
  font-size: 12px;
  color: var(--gold-light);
  background: rgba(212, 178, 87, 0.1);
  border: 1px solid rgba(212, 178, 87, 0.25);
}

.dl-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.dl-btn {
  flex: 1;
  min-width: 210px;
}
.dl-size {
  font-size: 12.5px;
  color: var(--text-dim);
  text-align: center;
}

.download-notes {
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
}
.note-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.note-ico {
  flex: none;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--gold);
  background: rgba(212, 178, 87, 0.09);
  border: 1px solid rgba(212, 178, 87, 0.22);
}
.note-ico :deep(svg) {
  width: 21px;
  height: 21px;
}
.note-title {
  font-size: 15.5px;
  color: var(--text-hi);
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}
.note-text {
  font-size: 13.5px;
  color: var(--text-dim);
  line-height: 1.8;
}

.other-platforms {
  max-width: 980px;
  margin: 40px auto 0;
}
.op-title {
  text-align: center;
  font-family: var(--font-display);
  font-size: 16px;
  letter-spacing: 4px;
  color: var(--text-dim);
  margin-bottom: 18px;
}
.op-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.op-card {
  padding: 16px 20px;
  border-radius: var(--radius-md);
  background: rgba(19, 26, 48, 0.5);
  border: 1px solid rgba(212, 178, 87, 0.12);
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  transition: border-color 0.3s ease;
}
.op-card:hover {
  border-color: rgba(212, 178, 87, 0.4);
}
.op-name {
  font-size: 15px;
  color: var(--text-hi);
  letter-spacing: 1px;
}
.op-desc {
  font-size: 12.5px;
  color: var(--text-dim);
}

@media (max-width: 900px) {
  .download-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 620px) {
  .op-list {
    grid-template-columns: 1fr;
  }
  .dl-ver-num {
    font-size: 34px;
  }
}
</style>