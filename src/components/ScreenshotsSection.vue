<template>
  <section id="screenshots" class="section screenshots">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Screenshots</span>
        <h2 class="section-title">真实界面 · 所见即所得</h2>
        <p class="section-desc">
          以下均为宵荧·执笔实际运行界面截图。你的灵感，从工作台到成章，都在这一方深空里完成。
        </p>
      </div>

      <!-- 浏览器窗口拟真 -->
      <div class="shot-stage reveal">
        <div class="shot-window">
          <div class="win-bar">
            <span class="win-dot red"></span>
            <span class="win-dot yellow"></span>
            <span class="win-dot green"></span>
            <span class="win-title">{{ current.title }}</span>
            <span class="win-hint">Teneglim Scribe</span>
          </div>
          <div class="win-screen">
            <transition :name="fadeName" mode="out-in">
              <img
                :key="current.src"
                :src="current.src"
                :alt="current.alt"
                class="shot-img"
                loading="lazy"
              />
            </transition>
          </div>
        </div>

        <div class="shot-caption">
          <p class="caption-text">{{ current.desc }}</p>
        </div>

        <!-- 缩略图切换 -->
        <div class="shot-tabs">
          <button
            v-for="(s, i) in shots"
            :key="s.id"
            class="shot-tab"
            :class="{ active: active === i }"
            @click="switchShot(i)"
          >
            <img :src="s.src" :alt="s.title" class="tab-img" loading="lazy" />
            <span class="tab-name">{{ s.title }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import imgDashboard from "../assets/screenshots/app-dashboard.jpg";
import imgAIOutline from "../assets/screenshots/app-ai-outline.jpg";
import imgCharacters from "../assets/screenshots/app-characters.jpg";
import imgWrite from "../assets/screenshots/app-write.jpg";
import imgDrama from "../assets/screenshots/app-drama.jpg";
import imgSponsor from "../assets/screenshots/app-sponsor.jpg";

const shots = [
  {
    id: "dashboard",
    title: "工作台",
    src: imgDashboard,
    alt: "宵荧·执笔工作台界面",
    desc: "作品数据总览、最近编辑与快捷入口一屏尽览，所有创作进度一目了然。",
  },
  {
    id: "ai-outline",
    title: "AI 大纲工坊",
    src: imgAIOutline,
    alt: "AI 大纲工坊界面",
    desc: "输入一句话，AI 为你展开完整卷纲与章节大纲；左栏设定上下文，右栏对话生成，层层雕琢你的故事骨架。",
  },
  {
    id: "characters",
    title: "角色管理",
    src: imgCharacters,
    alt: "角色管理界面",
    desc: "角色卡牌化管理，人设、性格、关系网随取随用，写作时 AI 时刻记得他们是谁。",
  },
  {
    id: "write",
    title: "章节写作",
    src: imgWrite,
    alt: "章节写作界面",
    desc: "沉浸式编辑器 + AI 侧栏助手，续写、润色、去 AI 味一步到位，正文创作行云流水。",
  },
  {
    id: "drama",
    title: "漫剧制作",
    src: imgDrama,
    alt: "漫剧制作界面",
    desc: "小说一键转漫剧，分镜、台词、场景逐镜编排，你的故事还可以被「看见」。",
  },
  {
    id: "sponsor",
    title: "支持创作",
    src: imgSponsor,
    alt: "支持创作界面",
    desc: "一盏盏为创作者点亮的小灯，也请照亮这盏陪你入夜写字的微光。",
  },
];

const active = ref(0);
const current = computed(() => shots[active.value]);

function switchShot(i) {
  active.value = i;
}
</script>

<style scoped>
.screenshots {
  background: linear-gradient(180deg, transparent, rgba(19, 26, 48, 0.55) 20%, transparent 100%);
}

.shot-stage {
  max-width: 1080px;
  margin: 0 auto;
}

.shot-window {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #0d1224;
  border: 1px solid rgba(212, 178, 87, 0.22);
  box-shadow:
    0 26px 70px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.03) inset;
}

.win-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(180deg, #161b30, #111627);
  border-bottom: 1px solid rgba(212, 178, 87, 0.12);
}
.win-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.win-dot.red { background: #ff5f57; }
.win-dot.yellow { background: #febc2e; }
.win-dot.green { background: #28c840; }
.win-title {
  margin-left: 10px;
  font-size: 13px;
  color: var(--text-body);
  letter-spacing: 1px;
}
.win-hint {
  margin-left: auto;
  font-size: 11px;
  color: #5d6273;
  letter-spacing: 2px;
}

.win-screen {
  position: relative;
  aspect-ratio: 16 / 10;
  background: #0a0e1c;
}
.shot-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: #0a0e1c;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}

.shot-caption {
  margin: 18px 0 22px;
  text-align: center;
}
.caption-text {
  font-size: 15px;
  color: var(--text-body);
  letter-spacing: 1px;
  line-height: 1.9;
  max-width: 720px;
  margin: 0 auto;
}

.shot-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.shot-tab {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  border: 1px solid rgba(212, 178, 87, 0.16);
  background: #10152a;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  text-align: left;
}
.shot-tab:hover {
  transform: translateY(-3px);
  border-color: rgba(212, 178, 87, 0.45);
}
.shot-tab.active {
  border-color: var(--gold);
  box-shadow: 0 0 0 1px var(--gold), 0 10px 26px rgba(0, 0, 0, 0.4);
}
.tab-img {
  width: 100%;
  aspect-ratio: 16 / 9.2;
  object-fit: cover;
  display: block;
  opacity: 0.75;
  filter: saturate(0.92);
  transition: opacity 0.25s ease;
}
.shot-tab.active .tab-img,
.shot-tab:hover .tab-img {
  opacity: 1;
}
.tab-name {
  display: block;
  padding: 9px 12px;
  font-size: 13px;
  color: var(--text-body);
  letter-spacing: 1px;
  background: linear-gradient(180deg, rgba(19, 26, 48, 0.6), rgba(11, 15, 30, 0.9));
}
.shot-tab.active .tab-name {
  color: var(--gold-light);
}

@media (max-width: 700px) {
  .shot-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
  .win-hint {
    display: none;
  }
}
@media (max-width: 420px) {
  .shot-tabs {
    grid-template-columns: 1fr;
  }
}
</style>