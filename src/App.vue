<template>
  <div class="site">
    <!-- 星野装饰 -->
    <div class="stars-field" aria-hidden="true">
      <i v-for="i in starSeeds.length" :key="i" :style="starStyle(i)"></i>
    </div>

    <AppNav />

    <main>
      <HeroSection />
      <ScreenshotsSection />
      <FeaturesSection />
      <WorkflowSection />
      <DownloadSection />
      <SponsorSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import AppNav from "./components/AppNav.vue";
import HeroSection from "./components/HeroSection.vue";
import ScreenshotsSection from "./components/ScreenshotsSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import WorkflowSection from "./components/WorkflowSection.vue";
import DownloadSection from "./components/DownloadSection.vue";
import SponsorSection from "./components/SponsorSection.vue";
import AppFooter from "./components/AppFooter.vue";

// 星星数量（前端 90 颗 + 固定定位，散落生成）
const starSeeds = Array.from({ length: 90 }, (_, i) => i + 1);

function starStyle(i) {
  const seed = i * 7919 + 31;
  const x = ((seed * 13) % 98) + 1;
  const y = ((seed * 17) % 96) + 1;
  const size = (seed % 3 === 0 ? 3 : 2) + (seed % 2);
  const delay = (seed % 8) * 0.6;
  const duration = 4 + (seed % 5);
  return {
    left: x + "%",
    top: y + "%",
    width: size + "px",
    height: size + "px",
    animationDelay: delay + "s",
    animationDuration: duration + "s",
  };
}

// 全局滚动渐入动画
let revealIo = null;
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  revealIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealIo.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => revealIo.observe(el));
}

onMounted(initReveal);
onUnmounted(() => revealIo && revealIo.disconnect());
</script>
