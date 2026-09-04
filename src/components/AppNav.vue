<template>
  <header class="nav" :class="{ scrolled }">
    <div class="nav-inner container">
      <a class="brand" href="#top" @click.prevent="scrollTo('#top')">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="26" height="26">
            <path
              d="M16 3c4 5 5 9 5 13a5 5 0 0 1-10 0c0-4 1-8 5-13z"
              fill="url(#g1)"
            />
            <path
              d="M13 18.5c3 2.6 7 2.6 10 0"
              stroke="#f0e0a8"
              stroke-width="1.4"
              fill="none"
              stroke-linecap="round"
            />
            <circle cx="16" cy="7" r="1.4" fill="#fff" opacity="0.9" />
            <defs>
              <linearGradient id="g1" x1="16" y1="3" x2="16" y2="21">
                <stop offset="0" stop-color="#f0e0a8" />
                <stop offset="1" stop-color="#c9902f" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="brand-text">
          <span class="brand-name">宵荧·执笔</span>
          <span class="brand-sub">Teneglim Scribe</span>
        </span>
      </a>

      <nav class="nav-links" :class="{ open }">
        <a href="#features" @click.prevent="go('#features')">核心特性</a>
        <a href="#workflow" @click.prevent="go('#workflow')">写作流程</a>
        <a href="#download" @click.prevent="go('#download')">下载</a>
        <a href="#sponsor" @click.prevent="go('#sponsor')">支持创作</a>
        <a class="nav-cta" href="#download" @click.prevent="go('#download')">立即使用</a>
      </nav>

      <button class="nav-toggle" :aria-expanded="open" aria-label="菜单" @click="open = !open">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const open = ref(false);
const scrolled = ref(false);

function go(hash) {
  open.value = false;
  scrollTo(hash);
}
function scrollTo(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
function onScroll() {
  scrolled.value = window.scrollY > 24;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}
.nav.scrolled {
  background: rgba(7, 10, 22, 0.82);
  backdrop-filter: blur(14px);
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.35);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(160deg, rgba(212, 178, 87, 0.16), rgba(212, 178, 87, 0.04));
  border: 1px solid rgba(212, 178, 87, 0.35);
  box-shadow: 0 0 18px rgba(212, 178, 87, 0.18);
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}
.brand-name {
  color: var(--text-hi);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 3px;
  font-family: var(--font-display);
}
.brand-sub {
  font-size: 11px;
  letter-spacing: 2.5px;
  color: var(--gold);
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 34px;
}
.nav-links a {
  color: var(--text-body);
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1px;
  transition: color 0.25s ease;
  position: relative;
}
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -6px;
  height: 1.5px;
  background: linear-gradient(90deg, var(--gold), var(--gold-light));
  transition: right 0.28s ease;
}
.nav-links a:hover::after,
.nav-links a.active::after {
  right: 0;
}
.nav-links a:hover {
  color: var(--gold-light);
}
.nav-cta {
  padding: 9px 22px;
  border-radius: 999px;
  background: linear-gradient(160deg, #d4a93c, #f0e0a8);
  color: #2a2108 !important;
  font-weight: 600;
  box-shadow: 0 4px 18px rgba(212, 178, 87, 0.35);
}
.nav-cta::after {
  display: none;
}
.nav-cta:hover {
  transform: translateY(-1px);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.nav-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text-hi);
  border-radius: 2px;
  transition: all 0.3s ease;
}
.nav-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-toggle.open span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 860px) {
  .nav-toggle {
    display: flex;
  }
  .nav-links {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 6px;
    padding: 20px 28px 26px;
    background: rgba(7, 10, 22, 0.96);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(212, 178, 87, 0.14);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    transform: translateY(-130%);
    transition: transform 0.35s ease;
    align-items: stretch;
  }
  .nav-links.open {
    transform: translateY(0);
  }
  .nav-links a {
    padding: 12px 8px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .nav-links a::after {
    display: none;
  }
  .nav-cta {
    text-align: center;
    margin-top: 10px;
  }
}
</style>