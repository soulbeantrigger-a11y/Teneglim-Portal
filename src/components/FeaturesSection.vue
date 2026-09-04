<template>
  <section id="features" class="section features">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Core Features</span>
        <h2 class="section-title">为长篇创作而生</h2>
        <p class="section-desc">
          不止是「AI 写作」，更是一套从设定、大纲到正文的完整创作工作台。
        </p>
      </div>

      <div class="features-grid">
        <article
          v-for="(f, i) in features"
          :key="f.title"
          class="feature-card reveal"
          :style="{ animationDelay: (i % 3) * 0.12 + 's' }"
        >
          <div class="feature-icon" v-html="f.icon"></div>
          <h3 class="feature-title">{{ f.title }}</h3>
          <p class="feature-desc">{{ f.desc }}</p>
          <ul class="feature-tags">
            <li v-for="t in f.tags" :key="t">{{ t }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "结构化管理",
    desc: "作品 → 卷 → 章节三层结构，卷与章节大纲内置开头钩子、结尾钩子、核心冲突，长篇不跑偏、不断线。",
    tags: ["分卷管理", "章节大纲", "钩子衔接"],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h9"/><path d="M15 17l2 2 4-4"/></svg>',
  },
  {
    title: "完整设定体系",
    desc: "世界观、编年史、角色卡片、语料库、事件线一应俱全。写作时严格依据角色设定，人物永远不「OOC」。",
    tags: ["世界观", "角色卡片", "事件线", "语料库"],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  },
  {
    title: "AI 大纲工坊",
    desc: "让 AI 依据世界观与设定文档生成卷大纲、章节大纲，先确认再动笔，每一章都带着明确目标展开。",
    tags: ["卷大纲", "章节大纲", "AI 生成"],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v6H3"/><path d="M9 3l-4 5h8l4-5"/><path d="M9 21v-6H3"/><path d="M9 21l-4-5h8l4 5"/><path d="M15 8h6v6h-6z"/></svg>',
  },
  {
    title: "AI 正文写作",
    desc: "默认接入 Kimi 大模型（可更换），按已确认的大纲生成 3000 字以上的网文风正文，剧情紧凑、节奏在线。",
    tags: ["Kimi 大模型", "3000 字/章", "网文风格"],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  },
  {
    title: "去 AI 味处理",
    desc: "自动识别并改写典型 AI 表达，打破规整句式，让正文更口语化、更自然——读者看不出机器的痕迹。",
    tags: ["去 AI 味", "句式打散", "自然口语"],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.7H20l-4.9 3.6 1.9 5.7-5-3.6-5 3.6 1.9-5.7L4 8.7h6.1z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/></svg>',
  },
  {
    title: "漫剧分镜创作",
    desc: "从小说一键生成商业漫剧分镜工单：镜头时长、运镜、绘图指令、配音标注一应俱全，衔接 AI 视频生产。",
    tags: ["漫剧制作", "分镜工单", "视频合成"],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M10 9l5 3-5 3z"/></svg>',
  },
];

</script>

<style scoped>
.features {
  background: linear-gradient(180deg, transparent, rgba(19, 26, 48, 0.45) 18%, transparent 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.feature-card {
  position: relative;
  padding: 34px 30px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid rgba(212, 178, 87, 0.14);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}
.feature-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  opacity: 0;
  transition: opacity 0.35s ease;
}
.feature-card:hover {
  transform: translateY(-6px);
  border-color: rgba(212, 178, 87, 0.45);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.35), 0 0 30px rgba(212, 178, 87, 0.08);
}
.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  margin-bottom: 22px;
  color: var(--gold);
  background: linear-gradient(160deg, rgba(212, 178, 87, 0.16), rgba(212, 178, 87, 0.04));
  border: 1px solid rgba(212, 178, 87, 0.3);
  box-shadow: 0 0 20px rgba(212, 178, 87, 0.12);
}
.feature-icon :deep(svg) {
  width: 26px;
  height: 26px;
}

.feature-title {
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--text-hi);
  letter-spacing: 2px;
  margin-bottom: 12px;
}
.feature-desc {
  font-size: 14.5px;
  color: var(--text-dim);
  line-height: 1.9;
  margin-bottom: 18px;
}

.feature-tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.feature-tags li {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  color: var(--gold-light);
  background: rgba(212, 178, 87, 0.1);
  border: 1px solid rgba(212, 178, 87, 0.22);
}

@media (max-width: 980px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .feature-card {
    padding: 28px 22px;
  }
}
</style>