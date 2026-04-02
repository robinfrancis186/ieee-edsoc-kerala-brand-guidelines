import React from "react";

const C = {
  navy: "#1B3A6B",
  navyDark: "#0F2347",
  navyLight: "#2A5298",
  orange: "#F47A20",
  orangeLight: "#FFA050",
  orangeDark: "#C95F00",
  white: "#FFFFFF",
  lightGray: "#F4F6F9",
  midGray: "#9EAFC2",
  darkGray: "#3D4A5C",
};

/* ── Helpers ── */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: C.lightGray,
        color: C.darkGray,
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: 4,
        fontFamily: "monospace",
      }}
    >
      {children}
    </span>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <div style={{ width: 4, height: 20, background: C.orange, borderRadius: 2 }} />
        <h2 style={{ fontSize: 16, fontWeight: 800, color: C.navy, margin: 0 }}>{title}</h2>
      </div>
      {subtitle && (
        <p style={{ fontSize: 12, color: C.midGray, margin: "0 0 0 20px" }}>{subtitle}</p>
      )}
    </div>
  );
}

function Card({
  children,
  pad = 24,
  style = {},
}: {
  children: React.ReactNode;
  pad?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E8ECF2",
        borderRadius: 16,
        padding: pad,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Logo SVG Variants (inline, brand-accurate) ── */

function LogoFull({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "#fff" : C.navy;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <img
        src={dark ? "/ieee-logo-white.png" : "/ieee-logo-colour.png"}
        alt="IEEE EdSoc Kerala"
        style={{ height: 52 }}
      />
    </div>
  );
}

function LogoWordmark({ dark = false }: { dark?: boolean }) {
  const primary = dark ? "#fff" : C.navy;
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: C.orange, letterSpacing: "0.08em" }}>
        IEEE
      </div>
      <div style={{ fontSize: 16, fontWeight: 800, color: primary, letterSpacing: "0.01em" }}>
        Education Society
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: dark ? C.midGray : C.darkGray, letterSpacing: "0.04em" }}>
        Kerala Chapter
      </div>
    </div>
  );
}

function LogoMonogram({ dark = false }: { dark?: boolean }) {
  const bg = dark ? C.white : C.navy;
  const text = dark ? C.navy : C.white;
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 12,
        background: bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 800, color: C.orange, lineHeight: 1, letterSpacing: "0.06em" }}>
        IEEE
      </span>
      <span style={{ fontSize: 8, fontWeight: 700, color: text, lineHeight: 1 }}>EdSoc</span>
      <span style={{ fontSize: 7, fontWeight: 600, color: text, lineHeight: 1, opacity: 0.7 }}>Kerala</span>
    </div>
  );
}

function LogoIcon() {
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyLight} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 2px 12px ${C.navy}40`,
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 900, color: C.orange, letterSpacing: "0.04em" }}>
        IEE
      </span>
    </div>
  );
}

/* ── Color Token Row ── */

function ColorRow({
  name,
  token,
  hex,
  rgb,
  dark = false,
}: {
  name: string;
  token: string;
  hex: string;
  rgb: string;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "10px 0",
        borderBottom: "1px solid #F0F2F5",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: hex,
          border: hex === "#FFFFFF" ? "1px solid #E8ECF2" : "none",
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: C.navy, margin: 0 }}>{name}</p>
        <p style={{ fontSize: 10, color: C.midGray, margin: "1px 0 0", fontFamily: "monospace" }}>
          {token}
        </p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: C.darkGray, margin: 0, fontFamily: "monospace" }}>
          {hex}
        </p>
        <p style={{ fontSize: 10, color: C.midGray, margin: "1px 0 0", fontFamily: "monospace" }}>
          {rgb}
        </p>
      </div>
    </div>
  );
}

/* ── Icon Asset ── */

function IconAsset({
  label,
  children,
  bg = "#fff",
}: {
  label: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #E8ECF2",
        background: "#fff",
      }}
    >
      <div
        style={{
          height: 80,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <div style={{ padding: "6px 10px", borderTop: "1px solid #E8ECF2" }}>
        <p style={{ fontSize: 10, fontWeight: 600, color: C.darkGray, margin: 0, textAlign: "center" }}>{label}</p>
      </div>
    </div>
  );
}

/* ── Social Template ── */

function SocialTemplate({
  label,
  size,
  bg,
  accent,
  dark = true,
}: {
  label: string;
  size: string;
  bg: string;
  accent: string;
  dark?: boolean;
}) {
  const text = dark ? "#fff" : C.navy;
  const sub = dark ? C.midGray : C.darkGray;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          background: bg,
          boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
          position: "relative",
        }}
      >
        {/* Top stripe */}
        <div style={{ height: 4, background: accent }} />
        <div style={{ padding: "16px 18px 18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <img
              src={dark ? "/ieee-logo-white.png" : "/ieee-logo-colour.png"}
              alt="Logo"
              style={{ height: 28 }}
            />
            <span style={{ fontSize: 8, color: sub, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {size}
            </span>
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ width: 24, height: 2, background: accent, borderRadius: 1, marginBottom: 8 }} />
            <p style={{ fontSize: 8, fontWeight: 700, color: accent, margin: "0 0 4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              IEEE EdSoc Kerala
            </p>
            <p style={{ fontSize: 13, fontWeight: 800, color: text, margin: 0, lineHeight: 1.2 }}>
              Event Title Goes Here
            </p>
            <p style={{ fontSize: 9, color: sub, margin: "6px 0 0" }}>
              Date · Venue · City
            </p>
          </div>
          {/* Bottom bar */}
          <div style={{ height: 2, background: accent, marginTop: 14, opacity: 0.4 }} />
        </div>
      </div>
      <p style={{ fontSize: 10, fontWeight: 600, color: C.midGray, margin: 0, textAlign: "center" }}>
        {label}
      </p>
    </div>
  );
}

/* ── Email Signature Preview ── */

function EmailSignature() {
  return (
    <div
      style={{
        borderLeft: `4px solid ${C.orange}`,
        paddingLeft: 16,
        display: "flex",
        gap: 16,
        alignItems: "center",
      }}
    >
      <img src="/ieee-logo-colour.png" alt="Logo" style={{ height: 44 }} />
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, color: C.navy, margin: 0 }}>Your Name</p>
        <p style={{ fontSize: 11, color: C.darkGray, margin: "1px 0 0" }}>
          Committee Lead · IEEE Education Society
        </p>
        <p style={{ fontSize: 11, color: C.midGray, margin: "1px 0 0" }}>Kerala Chapter</p>
        <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
          <span style={{ fontSize: 10, color: C.orange, fontWeight: 600 }}>edsoc.ieee.kerala@example.org</span>
          <span style={{ fontSize: 10, color: C.midGray }}>+91 00000 00000</span>
        </div>
      </div>
    </div>
  );
}

/* ── Business Card ── */

function BusinessCard({ flip = false }: { flip?: boolean }) {
  if (flip) {
    return (
      <div
        style={{
          width: 240,
          height: 136,
          borderRadius: 10,
          background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navyLight} 100%)`,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
          flexShrink: 0,
        }}
      >
        {/* decorative circuit dots */}
        <svg style={{ position: "absolute", inset: 0, opacity: 0.15 }} width="100%" height="100%">
          <pattern id="bc-dot" patternUnits="userSpaceOnUse" width="18" height="18">
            <circle cx="9" cy="9" r="1.5" fill={C.orange} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bc-dot)" />
        </svg>
        <div style={{ position: "absolute", inset: 0, padding: "14px 18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <img src="/ieee-logo-white.png" alt="Logo" style={{ height: 32 }} />
          <div>
            <div style={{ width: 28, height: 2, background: C.orange, borderRadius: 1, marginBottom: 6 }} />
            <p style={{ fontSize: 8, color: C.midGray, margin: 0 }}>IEEE Education Society · Kerala Chapter</p>
            <p style={{ fontSize: 8, color: C.midGray, margin: "2px 0 0" }}>Advancing Engineering Education</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: 240,
        height: 136,
        borderRadius: 10,
        background: "#fff",
        border: `1px solid #E8ECF2`,
        borderLeft: `6px solid ${C.orange}`,
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        flexShrink: 0,
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p style={{ fontSize: 13, fontWeight: 800, color: C.navy, margin: 0 }}>Your Name</p>
        <p style={{ fontSize: 10, color: C.orange, fontWeight: 600, margin: "2px 0 0", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Committee Role
        </p>
        <p style={{ fontSize: 9, color: C.darkGray, margin: "2px 0 0" }}>IEEE Education Society · Kerala Chapter</p>
      </div>
      <div>
        <p style={{ fontSize: 9, color: C.midGray, margin: 0 }}>edsoc.ieee.kerala@example.org</p>
        <p style={{ fontSize: 9, color: C.midGray, margin: "1px 0 0" }}>+91 00000 00000</p>
        <p style={{ fontSize: 9, color: C.midGray, margin: "1px 0 0" }}>www.ieee-edsoc-kerala.org</p>
      </div>
    </div>
  );
}

/* ── Letterhead ── */

function Letterhead() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #E8ECF2",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(90deg, ${C.navyDark} 60%, ${C.navyLight} 100%)`,
          padding: "18px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src="/ieee-logo-white.png" alt="Logo" style={{ height: 40 }} />
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 9, color: C.midGray, margin: 0 }}>IEEE Education Society</p>
          <p style={{ fontSize: 9, color: C.midGray, margin: 0 }}>Kerala Chapter</p>
        </div>
      </div>
      <div style={{ height: 4, background: C.orange }} />
      {/* Body */}
      <div style={{ padding: "20px 28px" }}>
        <p style={{ fontSize: 10, color: C.midGray, margin: "0 0 14px" }}>April 2, 2026</p>
        <p style={{ fontSize: 10, color: C.darkGray, lineHeight: 1.7, margin: 0 }}>
          Dear [Recipient Name],
          <br /><br />
          We are pleased to inform you that IEEE Education Society Kerala Chapter will be hosting its Annual Technical Symposium on [Date] at [Venue], bringing together educators and engineers from across the state.
          <br /><br />
          [Body of letter continues here...]
        </p>
      </div>
      {/* Footer */}
      <div
        style={{
          borderTop: `3px solid ${C.lightGray}`,
          padding: "12px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 8, color: C.midGray, margin: 0 }}>IEEE Education Society · Kerala Chapter · www.ieee-edsoc-kerala.org</p>
        <div style={{ width: 24, height: 3, background: C.orange, borderRadius: 2 }} />
      </div>
    </div>
  );
}

/* ── Typography Specimen ── */

function TypoSpecimen() {
  return (
    <Card>
      <p style={{ fontSize: 10, fontWeight: 700, color: C.midGray, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
        Complete Type Specimen — Inter
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          {[
            { size: 36, weight: 800, label: "Display" },
            { size: 26, weight: 700, label: "H1" },
            { size: 20, weight: 700, label: "H2" },
            { size: 16, weight: 600, label: "H3" },
          ].map((t) => (
            <div key={t.label} style={{ marginBottom: 14 }}>
              <p
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight as any,
                  color: C.navy,
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                IEEE EdSoc Kerala
              </p>
              <p style={{ fontSize: 9, color: C.midGray, margin: "2px 0 0", fontFamily: "monospace" }}>
                {t.label} · Inter {t.weight} · {t.size}px
              </p>
            </div>
          ))}
        </div>
        <div>
          {[
            { size: 15, weight: 400, label: "Body", color: C.darkGray },
            { size: 13, weight: 400, label: "Small Body", color: C.darkGray },
            { size: 11, weight: 500, label: "Caption", color: C.midGray },
            { size: 9, weight: 700, label: "Label / Tag", color: C.orange },
          ].map((t) => (
            <div key={t.label} style={{ marginBottom: 14 }}>
              <p
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight as any,
                  color: t.color,
                  margin: 0,
                  lineHeight: 1.6,
                  textTransform: t.size === 9 ? "uppercase" : "none",
                  letterSpacing: t.size === 9 ? "0.1em" : "normal",
                }}
              >
                Advancing engineering education across Kerala through collaboration, innovation, and community.
              </p>
              <p style={{ fontSize: 9, color: C.midGray, margin: "2px 0 0", fontFamily: "monospace" }}>
                {t.label} · Inter {t.weight} · {t.size}px
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ── Main ── */

export default function BrandAssets() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.lightGray,
        fontFamily: "'Inter', sans-serif",
        padding: "0 0 60px",
      }}
    >
      {/* Hero banner */}
      <div
        style={{
          background: `linear-gradient(120deg, ${C.navyDark} 0%, ${C.navyLight} 100%)`,
          padding: "44px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 80% 50%, ${C.orange}35 0%, transparent 55%)`,
          }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 36, height: 2, background: C.orange, borderRadius: 2 }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.orange }}>
              Official Brand Asset Library
            </span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.1 }}>
            Brand Assets Kit
          </h1>
          <p style={{ fontSize: 14, color: C.midGray, margin: 0, maxWidth: 480 }}>
            IEEE Education Society — Kerala Chapter. All logos, color tokens, typography, social templates, stationery, and iconography for official use.
          </p>
        </div>
      </div>

      <div style={{ padding: "48px 64px" }}>

        {/* ── 1. Logo Variants ── */}
        <section style={{ marginBottom: 52 }}>
          <SectionHeader
            title="Logo Variants"
            subtitle="Use the appropriate variant for each context. Never recreate these manually."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {/* Primary Light */}
            <Card pad={20}>
              <p style={{ fontSize: 9, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Primary · Light BG
              </p>
              <div style={{ background: "#fff", borderRadius: 10, padding: 20, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 90 }}>
                <LogoFull />
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Tag>PNG</Tag><Tag>SVG</Tag><Tag>Light</Tag>
              </div>
            </Card>

            {/* Primary Dark */}
            <Card pad={20}>
              <p style={{ fontSize: 9, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Primary · Dark BG
              </p>
              <div style={{ background: C.navyDark, borderRadius: 10, padding: 20, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 90 }}>
                <LogoFull dark />
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Tag>PNG</Tag><Tag>SVG</Tag><Tag>Dark</Tag>
              </div>
            </Card>

            {/* Wordmark */}
            <Card pad={20}>
              <p style={{ fontSize: 9, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Wordmark Only
              </p>
              <div style={{ background: "#fff", borderRadius: 10, padding: 20, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 90 }}>
                <LogoWordmark />
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                <Tag>Text</Tag><Tag>SVG</Tag>
              </div>
            </Card>

            {/* Monogram */}
            <Card pad={20}>
              <p style={{ fontSize: 9, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Monogram / App Icon
              </p>
              <div style={{ background: C.lightGray, borderRadius: 10, padding: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, minHeight: 90 }}>
                <LogoMonogram />
                <LogoMonogram dark />
                <LogoIcon />
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                <Tag>App Icon</Tag><Tag>Favicon</Tag>
              </div>
            </Card>
          </div>

          {/* Monochrome row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16 }}>
            <Card pad={20}>
              <p style={{ fontSize: 9, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Monochrome · Black
              </p>
              <div style={{ background: "#fff", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 70 }}>
                <img src="/ieee-logo-black.png" alt="Logo" style={{ height: 40 }} />
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
                <Tag>Print</Tag><Tag>Emboss</Tag>
              </div>
            </Card>
            <Card pad={20}>
              <p style={{ fontSize: 9, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Monochrome · White
              </p>
              <div style={{ background: C.darkGray, borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 70 }}>
                <img src="/ieee-logo-white.png" alt="Logo" style={{ height: 40 }} />
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
                <Tag>Watermark</Tag><Tag>Overlay</Tag>
              </div>
            </Card>
            <Card pad={20}>
              <p style={{ fontSize: 9, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Monochrome · Navy
              </p>
              <div style={{ background: C.lightGray, borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 70 }}>
                <img src="/ieee-logo-colour.png" alt="Logo" style={{ height: 40 }} />
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
                <Tag>Letterhead</Tag><Tag>Forms</Tag>
              </div>
            </Card>
          </div>
        </section>

        {/* ── 2. Color System ── */}
        <section style={{ marginBottom: 52 }}>
          <SectionHeader
            title="Color System Tokens"
            subtitle="Hex and RGB values for digital and print implementation."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            <Card>
              <p style={{ fontSize: 10, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Primary Brand Colors
              </p>
              <ColorRow name="IEEE Navy" token="--color-navy" hex="#1B3A6B" rgb="27, 58, 107" />
              <ColorRow name="Navy Dark" token="--color-navy-dark" hex="#0F2347" rgb="15, 35, 71" />
              <ColorRow name="Navy Light" token="--color-navy-light" hex="#2A5298" rgb="42, 82, 152" />
              <ColorRow name="IEEE Orange" token="--color-orange" hex="#F47A20" rgb="244, 122, 32" />
              <ColorRow name="Orange Light" token="--color-orange-light" hex="#FFA050" rgb="255, 160, 80" />
              <ColorRow name="Orange Dark" token="--color-orange-dark" hex="#C95F00" rgb="201, 95, 0" />
            </Card>
            <Card>
              <p style={{ fontSize: 10, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Neutral & Structural Colors
              </p>
              <ColorRow name="White" token="--color-white" hex="#FFFFFF" rgb="255, 255, 255" />
              <ColorRow name="Light Gray (BG)" token="--color-light-gray" hex="#F4F6F9" rgb="244, 246, 249" />
              <ColorRow name="Mid Gray" token="--color-mid-gray" hex="#9EAFC2" rgb="158, 175, 194" />
              <ColorRow name="Dark Gray (Text)" token="--color-dark-gray" hex="#3D4A5C" rgb="61, 74, 92" />
            </Card>
          </div>
        </section>

        {/* ── 3. Typography Specimen ── */}
        <section style={{ marginBottom: 52 }}>
          <SectionHeader
            title="Typography Asset"
            subtitle="The complete typographic scale for web and print applications."
          />
          <TypoSpecimen />
        </section>

        {/* ── 4. Social & Communications ── */}
        <section style={{ marginBottom: 52 }}>
          <SectionHeader
            title="Social & Communication Assets"
            subtitle="Ready-to-use templates for digital presence and outreach."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            <SocialTemplate
              label="Instagram / LinkedIn Square"
              size="1080×1080"
              bg={C.navyDark}
              accent={C.orange}
            />
            <SocialTemplate
              label="Instagram Story"
              size="1080×1920"
              bg={C.navy}
              accent={C.orangeLight}
            />
            <SocialTemplate
              label="Twitter / WhatsApp Share"
              size="1200×630"
              bg={C.lightGray}
              accent={C.navy}
              dark={false}
            />
            <SocialTemplate
              label="Event Thumbnail (Light)"
              size="800×800"
              bg="#fff"
              accent={C.orange}
              dark={false}
            />
          </div>
        </section>

        {/* ── 5. Stationery ── */}
        <section>
          <SectionHeader
            title="Stationery Assets"
            subtitle="Business cards, letterheads, and email signatures."
          />
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 32 }}>
            <Card>
              <p style={{ fontSize: 10, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Official Letterhead (A4 / Letter)
              </p>
              <div style={{ background: C.lightGray, padding: 24, borderRadius: 8 }}>
                <Letterhead />
              </div>
            </Card>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <Card>
                <p style={{ fontSize: 10, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                  Business Card (Front & Back)
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
                  <BusinessCard />
                  <BusinessCard flip />
                </div>
              </Card>
              <Card>
                <p style={{ fontSize: 10, fontWeight: 700, color: C.midGray, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                  Email Signature
                </p>
                <EmailSignature />
              </Card>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
