<template>
  <section id="top" class="hero">
    <div class="hero-glow hero-glow-a" aria-hidden="true"></div>
    <div class="hero-glow hero-glow-b" aria-hidden="true"></div>

    <div class="container hero-inner">
      <div class="hero-badge">
        <span class="dot"></span> v{{ version }} · AI 写作助手 · 本地优先
      </div>

      <h1 class="hero-title">
        让每一缕灵感
        <span class="hero-grad">落笔成章</span>
      </h1>

      <p class="hero-sub">
        宵荧·执笔（Teneglim Scribe）—— 面向网络小说作者的智能写作助手。
        <br class="desktop-br" />
        从世界观、角色卡片到卷章大纲，再到网文风格的正文生成，
        <br class="desktop-br" />
        AI 陪你走完长篇创作的每一步，数据始终保存在你自己的电脑里。
      </p>

      <div class="hero-actions">
        <a class="btn btn-gold" href="#download" @click.prevent="go('#download')">
          <svg viewBox="0 0 20 20" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path
              d="M10 1a1 1 0 0 1 1 1v8.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4L9 10.6V2a1 1 0 0 1 1-1zM2 17a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z"
            />
          </svg>
          免费下载
        </a>
        <a class="btn btn-ghost" href="#features" @click.prevent="go('#features')">了解特性</a>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <b>6+</b><span>核心创作模块</span>
        </div>
        <div class="stat">
          <b>3000+</b><span>单章目标字数</span>
        </div>
        <div class="stat">
          <b>100%</b><span>数据本地存储</span>
        </div>
        <div class="stat">
          <b>多平台</b><span>Windows / macOS / Linux</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const version = "1.1.0";

function go(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 0 80px;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}
.hero-glow-a {
  width: 560px;
  height: 560px;
  top: -140px;
  right: -120px;
  background: radial-gradient(circle, rgba(90, 110, 190, 0.4), transparent 65%);
  animation: glow-pulse 9s ease-in-out infinite;
}
.hero-glow-b {
  width: 520px;
  height: 520px;
  bottom: -180px;
  left: -140px;
  background: radial-gradient(circle, rgba(212, 178, 87, 0.22), transparent 65%);
  animation: glow-pulse 11s ease-in-out infinite reverse;
}

.hero-inner {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 20px;
  border-radius: 999px;
  border: 1px solid rgba(212, 178, 87, 0.35);
  background: rgba(212, 178, 87, 0.07);
  color: var(--gold-light);
  font-size: 13px;
  letter-spacing: 1.5px;
  margin-bottom: 34px;
}
.hero-badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7dd3c8;
  box-shadow: 0 0 10px #7dd3c8;
  animation: star-twinkle 2.6s ease-in-out infinite;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 7vw, 72px);
  line-height: 1.25;
  color: var(--text-hi);
  letter-spacing: 6px;
  font-weight: 700;
  margin-bottom: 28px;
  text-shadow: 0 0 60px rgba(212, 178, 87, 0.18);
}
.hero-grad {
  display: block;
  background: linear-gradient(160deg, #d4a93c 0%, #f0e0a8 45%, #d4a93c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: glow-pulse 5s ease-in-out infinite;
}

.hero-sub {
  max-width: 660px;
  margin: 0 auto 44px;
  color: var(--text-body);
  font-size: 16px;
  line-height: 2.1;
  letter-spacing: 0.6px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 70px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 880px;
  margin: 0 auto;
  padding: 30px 20px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid rgba(212, 178, 87, 0.16);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.3);
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
}
.stat b {
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--gold-light);
  letter-spacing: 1px;
}
.stat span {
  font-size: 12.5px;
  color: var(--text-dim);
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 60px;
  }
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .hero-actions {
    margin-bottom: 48px;
  }
}
</style>