<template>
  <section id="workflow" class="section workflow">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Workflow</span>
        <h2 class="section-title">一部长篇，如何诞生</h2>
        <p class="section-desc">
          从设定到正文的完整链路：先搭骨架，再填血肉，AI 全程陪跑但决定权始终在你。
        </p>
      </div>

      <div class="workflow-track">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="step reveal"
          :style="{ animationDelay: i * 0.1 + 's' }"
        >
          <div class="step-node">
            <span class="step-num">{{ String(i + 1).padStart(2, "0") }}</span>
          </div>
          <div class="step-card">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <div class="workflow-note reveal">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 8h.01" />
        </svg>
        每一步 AI 产出都可以人工修改确认，写作风格默认网文叙事、聚焦剧情推进。
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: "建立作品与设定",
    desc: "新建作品、设置世界观与编年史，为每个重要角色建立角色卡片，注入语料库素材。",
  },
  {
    title: "规划卷章结构",
    desc: "分卷管理，每卷确定核心内容、角色成长与冲突；指定开始钩子、结尾钩子保证卷间连贯。",
  },
  {
    title: "AI 生成章节大纲",
    desc: "一键生成章节大纲：开头钩子、登场人物、核心事件、冲突、核心收获，先确认再动笔。",
  },
  {
    title: "AI 正文写作",
    desc: "严格依据已确认大纲与角色设定，生成 3000 字以上网文风正文，剧情紧凑、人设不崩。",
  },
  {
    title: "去 AI 味润色",
    desc: "自动消除典型 AI 表达，打散规整句式，让文字更像真人手写，读起来自然流畅。",
  },
  {
    title: "人工审核发布",
    desc: "全流程人工掌控，随时修改、续写或重写，定稿后的内容完整保存在本地。",
  },
];
</script>

<style scoped>
.workflow {
  background: linear-gradient(180deg, transparent, rgba(19, 26, 48, 0.5) 20%, transparent 100%);
}

.workflow-track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  counter-reset: step;
}
.workflow-track::before {
  content: "";
  position: absolute;
  top: 27px;
  left: 9%;
  right: 9%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 178, 87, 0.5) 12%,
    rgba(212, 178, 87, 0.5) 88%,
    transparent
  );
}

.step {
  position: relative;
  text-align: center;
}
.step-node {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(160deg, #131a30, #0e1426);
  border: 1.5px solid rgba(212, 178, 87, 0.55);
  box-shadow: 0 0 22px rgba(212, 178, 87, 0.22);
}
.step-num {
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--gold-light);
  letter-spacing: 1px;
}
.step-card {
  padding: 24px 22px;
  border-radius: var(--radius-md);
  background: var(--bg-card);
  border: 1px solid rgba(212, 178, 87, 0.12);
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.step:hover .step-card {
  transform: translateY(-4px);
  border-color: rgba(212, 178, 87, 0.4);
}
.step-title {
  font-family: var(--font-display);
  font-size: 17px;
  color: var(--text-hi);
  letter-spacing: 1.5px;
  margin-bottom: 10px;
}
.step-desc {
  font-size: 13.5px;
  color: var(--text-dim);
  line-height: 1.9;
}

.workflow-note {
  max-width: 640px;
  margin: 52px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 26px;
  border-radius: 999px;
  font-size: 13.5px;
  color: var(--text-dim);
  background: rgba(212, 178, 87, 0.06);
  border: 1px solid rgba(212, 178, 87, 0.18);
}
.workflow-note svg {
  color: var(--gold);
  flex: none;
}

@media (max-width: 980px) {
  .workflow-track {
    grid-template-columns: repeat(2, 1fr);
  }
  .workflow-track::before {
    display: none;
  }
}
@media (max-width: 620px) {
  .workflow-track {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .step {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    text-align: left;
  }
  .step-node {
    margin: 0;
    width: 46px;
    height: 46px;
    flex: none;
  }
}
</style>