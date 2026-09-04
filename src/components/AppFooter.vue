<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="brand-name">宵荧·执笔</span>
          <span class="brand-sub">Teneglim Scribe · 让 AI 助你落笔成章</span>
        </div>

        <div class="footer-links">
          <a href="#features" @click.prevent="go('#features')">核心特性</a>
          <a href="#workflow" @click.prevent="go('#workflow')">写作流程</a>
          <a href="#download" @click.prevent="go('#download')">下载</a>
          <a href="#sponsor" @click.prevent="go('#sponsor')">支持创作</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ year }} 宵荧·执笔 Teneglim Scribe · 数据本地存储，免费开源精神
        </p>
        <p class="tech">
          Vue 3 · Element Plus · Vite · Python · Kimi 大模型
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();

function go(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(212, 178, 87, 0.14);
  background: linear-gradient(180deg, rgba(7, 10, 22, 0.6), var(--bg-0));
  padding: 52px 0 30px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  padding-bottom: 28px;
  border-bottom: 1px dashed rgba(212, 178, 87, 0.16);
}
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.brand-name {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--text-hi);
  letter-spacing: 4px;
}
.brand-sub {
  font-size: 12.5px;
  color: var(--text-dim);
  letter-spacing: 2px;
}

.footer-links {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}
.footer-links a {
  color: var(--text-body);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1px;
  transition: color 0.25s ease;
}
.footer-links a:hover {
  color: var(--gold-light);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 24px;
}
.copyright {
  font-size: 13px;
  color: var(--text-dim);
}
.tech {
  font-size: 12px;
  color: #5d6273;
  letter-spacing: 1px;
}

@media (max-width: 620px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>