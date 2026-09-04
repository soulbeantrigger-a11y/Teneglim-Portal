<template>
  <section id="sponsor" class="section sponsor">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Support</span>
        <h2 class="section-title">支持创作</h2>
        <p class="section-desc">愿每一束灵感，都能被温柔照亮。</p>
      </div>

      <div class="sponsor-card reveal">
        <!-- 左：感谢致辞 -->
        <div class="letter">
          <span class="letter-deco" aria-hidden="true">❝</span>
          <h3 class="letter-title">致每一位造梦者</h3>
          <p class="letter-body">
            如果本工具曾为你的故事点亮过哪怕一缕微光，让你在长夜里多写了几行字——那么这场相遇，本身就已值得。
          </p>
          <p class="letter-body">
            若你也恰好喜欢这份陪伴，愿它在你笔下的路上照得久一些，不妨循着缘分，为这盏灯添一滴灯油。
          </p>
          <ul class="letter-list">
            <li><span class="gem">◆</span>让功能常新，让免费恒久</li>
            <li><span class="gem">◆</span>让每次落笔，都更顺手</li>
            <li><span class="gem">◆</span>让灵感火花，不期而遇</li>
          </ul>
          <p class="letter-sign">— 姜生鹿梦（*恽）</p>
        </div>

        <!-- 右：收款码相框 -->
        <div class="qr">
          <div class="qr-frame">
            <span class="corner corner-tl"></span>
            <span class="corner corner-tr"></span>
            <span class="corner corner-bl"></span>
            <span class="corner corner-br"></span>
            <div class="qr-inner">
              <img :src="qrSrc" alt="微信收款码" class="qr-img" />
            </div>
            <div class="qr-glow"></div>
          </div>
          <div class="qr-caption">
            <span class="qr-line"></span>
            <p class="qr-name">缘来 · 请作者喝杯茶</p>
            <span class="qr-line"></span>
          </div>
          <p class="qr-note">姜生鹿梦（*恽）</p>
        </div>
      </div>

      <p class="sponsor-footer reveal">
        <span class="footer-deco">✦</span>
        愿你笔下的故事，长明不灭
        <span class="footer-deco">✦</span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import qrImg from "@/assets/qrcode-wechat.jpg";

const qrSrc = qrImg;

onMounted(() => {
  const el = document.querySelector("#sponsor .qr-img");
  if (el) {
    el.onerror = () => {
      el.style.display = "none";
      const tip = document.createElement("p");
      tip.className = "qr-fallback";
      tip.textContent = "（收款码图片待替换）";
      el.parentElement.appendChild(tip);
    };
  }
});
</script>

<style scoped>
.sponsor {
  background: linear-gradient(180deg, transparent, rgba(19, 26, 48, 0.5) 22%, transparent 100%);
}

.sponsor-card {
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 44px;
  align-items: center;
  padding: 48px 52px;
  border-radius: var(--radius-lg);
  position: relative;
  background:
    repeating-linear-gradient(0deg, rgba(212, 178, 87, 0.028) 0 2px, transparent 2px 4px),
    linear-gradient(165deg, #1b1f33 0%, #141830 100%);
  border: 1px solid rgba(212, 178, 87, 0.22);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.4);
}
/* 鎏金描边 */
.sponsor-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-lg);
  padding: 1.5px;
  background: linear-gradient(
    160deg,
    rgba(138, 109, 31, 0.7),
    rgba(212, 178, 87, 0.9) 30%,
    rgba(240, 224, 168, 0.7) 50%,
    rgba(212, 178, 87, 0.9) 70%,
    rgba(138, 109, 31, 0.7)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* 左：致辞 */
.letter {
  position: relative;
}
.letter-deco {
  position: absolute;
  top: -40px;
  left: -10px;
  font-size: 110px;
  line-height: 1;
  color: rgba(212, 178, 87, 0.14);
  font-family: Georgia, serif;
  pointer-events: none;
}
.letter-title {
  position: relative;
  font-family: var(--font-display);
  font-size: 22px;
  letter-spacing: 6px;
  color: var(--gold-light);
  margin: 0 0 18px;
  padding-left: 14px;
  border-left: 3px solid var(--gold);
}
.letter-body {
  line-height: 2.1;
  font-size: 15px;
  color: var(--text-body);
  letter-spacing: 0.6px;
  margin-bottom: 12px;
  text-indent: 2em;
}
.letter-list {
  list-style: none;
  padding: 14px 0 14px 4px;
  margin: 18px 0 20px;
  border-top: 1px dashed rgba(212, 178, 87, 0.32);
  border-bottom: 1px dashed rgba(212, 178, 87, 0.32);
}
.letter-list li {
  font-size: 14px;
  color: var(--text-body);
  letter-spacing: 1.5px;
  padding: 6px 0;
  display: flex;
  align-items: center;
  gap: 12px;
}
.gem {
  color: var(--gold);
  font-size: 10px;
  text-shadow: 0 0 8px rgba(212, 178, 87, 0.6);
}
.letter-sign {
  text-align: right;
  font-family: var(--font-display);
  color: var(--gold);
  letter-spacing: 2px;
  font-style: italic;
  font-size: 14px;
}

/* 右：收款码 */
.qr {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qr-frame {
  position: relative;
  width: 226px;
  height: 226px;
  padding: 10px;
  border-radius: 14px;
  background:
    radial-gradient(circle at 50% 50%, rgba(255, 250, 230, 0.08), rgba(212, 178, 87, 0.05)),
    linear-gradient(160deg, #1e2237, #181c31);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.05),
    0 10px 34px rgba(0, 0, 0, 0.45),
    0 0 44px rgba(212, 178, 87, 0.14);
}
.qr-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  overflow: hidden;
  background: #fff;
  z-index: 1;
}
.qr-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: transform 0.5s ease;
}
.qr-frame:hover .qr-img {
  transform: scale(1.05);
}
.qr-fallback {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #555;
  font-size: 13px;
  background: #fafafa;
}

.corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--gold);
  z-index: 3;
  filter: drop-shadow(0 0 4px rgba(212, 178, 87, 0.55));
}
.corner-tl {
  top: -8px;
  left: -8px;
  border-top: 2px solid;
  border-left: 2px solid;
  border-top-left-radius: 7px;
}
.corner-tr {
  top: -8px;
  right: -8px;
  border-top: 2px solid;
  border-right: 2px solid;
  border-top-right-radius: 7px;
}
.corner-bl {
  bottom: -8px;
  left: -8px;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-bottom-left-radius: 7px;
}
.corner-br {
  bottom: -8px;
  right: -8px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  border-bottom-right-radius: 7px;
}

.qr-glow {
  position: absolute;
  inset: -24px;
  background: radial-gradient(circle at 50% 50%, rgba(212, 178, 87, 0.3), transparent 70%);
  z-index: 0;
  animation: glow-pulse 4s ease-in-out infinite;
  pointer-events: none;
}

.qr-caption {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  width: 100%;
}
.qr-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 178, 87, 0.55) 30%,
    rgba(240, 224, 168, 0.7) 50%,
    rgba(212, 178, 87, 0.55) 70%,
    transparent
  );
}
.qr-name {
  font-family: var(--font-display);
  font-size: 13px;
  letter-spacing: 3px;
  color: var(--gold);
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
}
.qr-note {
  margin-top: 8px;
  font-family: var(--font-display);
  color: var(--gold);
  font-size: 12px;
  letter-spacing: 3px;
  font-style: italic;
  opacity: 0.8;
}

/* 底部寄语 */
.sponsor-footer {
  text-align: center;
  margin-top: 44px;
  font-family: var(--font-display);
  letter-spacing: 6px;
  color: var(--gold);
  font-size: 15px;
}
.footer-deco {
  color: var(--gold);
  margin: 0 14px;
  text-shadow: 0 0 10px rgba(212, 178, 87, 0.5);
  animation: star-twinkle 4s ease-in-out infinite;
}

@media (max-width: 900px) {
  .sponsor-card {
    grid-template-columns: 1fr;
    padding: 36px 26px;
    gap: 34px;
  }
  .letter-deco {
    font-size: 80px;
    top: -28px;
  }
}
</style>