const NAVY = "#1B3A6B";
const NAVY_DARK = "#0F2347";
const NAVY_LIGHT = "#2A5298";
const ORANGE = "#F47A20";
const ORANGE_LIGHT = "#FFA050";
const ORANGE_DARK = "#C95F00";
const MID_GRAY = "#9EAFC2";
const LIGHT_GRAY = "#F4F6F9";

/* ─── SVG Patterns ─── */

function PatternDiagonalLines({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
          <rect width="20" height="20" fill={bg} />
          <line x1="0" y1="0" x2="0" y2="20" stroke={color} strokeWidth="3" strokeOpacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function PatternDots({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill={bg} />
          <circle cx="10" cy="10" r="2.5" fill={color} fillOpacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function PatternGrid({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="28" height="28">
          <rect width="28" height="28" fill={bg} />
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function PatternHex({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="34.64" height="40">
          <rect width="34.64" height="40" fill={bg} />
          <polygon
            points="17.32,0 34.64,10 34.64,30 17.32,40 0,30 0,10"
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.28"
          />
          <polygon
            points="17.32,20 34.64,30 34.64,50 17.32,60 0,50 0,30"
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.28"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function PatternCircuits({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="60" height="60">
          <rect width="60" height="60" fill={bg} />
          <line x1="0" y1="20" x2="20" y2="20" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
          <line x1="20" y1="20" x2="20" y2="0" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="20" cy="20" r="2.5" fill={color} fillOpacity="0.4" />
          <line x1="30" y1="40" x2="60" y2="40" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
          <line x1="40" y1="40" x2="40" y2="60" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="40" cy="40" r="2.5" fill={color} fillOpacity="0.4" />
          <line x1="0" y1="55" x2="10" y2="55" stroke={color} strokeWidth="1" strokeOpacity="0.25" />
          <line x1="50" y1="10" x2="60" y2="10" stroke={color} strokeWidth="1" strokeOpacity="0.25" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function PatternWaves({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="60" height="20">
          <rect width="60" height="20" fill={bg} />
          <path
            d="M0 10 Q15 0 30 10 Q45 20 60 10"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function PatternCrossHatch({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill={bg} />
          <line x1="0" y1="0" x2="20" y2="20" stroke={color} strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="20" y1="0" x2="0" y2="20" stroke={color} strokeWidth="0.8" strokeOpacity="0.25" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function PatternTriangles({ id, color, bg }: { id: string; color: string; bg: string }) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="40" height="40">
          <rect width="40" height="40" fill={bg} />
          <polygon points="20,4 36,34 4,34" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.28" />
          <polygon points="20,36 36,6 4,6" fill="none" stroke={color} strokeWidth="0.6" strokeOpacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ─── Corner Decorations ─── */

function CornerAccent({ color, size = 32 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <line x1="0" y1="40" x2="40" y2="40" stroke={color} strokeWidth="3" />
      <line x1="0" y1="0" x2="0" y2="40" stroke={color} strokeWidth="3" />
      <circle cx="6" cy="34" r="3" fill={color} />
    </svg>
  );
}

function CornerBracket({ color, size = 32 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <path d="M0 0 L0 40 L40 40" fill="none" stroke={color} strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

function CornerDiamond({ color, size = 32 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <polygon points="0,20 20,0 40,20 20,40" fill="none" stroke={color} strokeWidth="2.5" />
      <polygon points="0,20 20,8 40,20 20,32" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" />
    </svg>
  );
}

/* ─── Border Frames ─── */

function BorderDouble({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        outline: `1.5px solid ${color}`,
        outlineOffset: "5px",
        padding: 16,
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}

function BorderCornermarks({ children, color }: { children: React.ReactNode; color: string }) {
  const mark = (
    rotate: string,
    pos: { top?: number; bottom?: number; left?: number; right?: number }
  ) => (
    <div style={{ position: "absolute", ...pos, transform: rotate, lineHeight: 0 }}>
      <CornerBracket color={color} size={28} />
    </div>
  );
  return (
    <div style={{ position: "relative", padding: 20 }}>
      {mark("rotate(0deg)", { top: 0, left: 0 })}
      {mark("rotate(90deg)", { top: 0, right: 0 })}
      {mark("rotate(180deg)", { bottom: 0, right: 0 })}
      {mark("rotate(270deg)", { bottom: 0, left: 0 })}
      {children}
    </div>
  );
}

/* ─── Pattern Card ─── */

function PatternCard({
  label,
  tag,
  children,
}: {
  label: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #E8ECF2",
        background: "white",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ height: 130, position: "relative" }}>{children}</div>
      <div style={{ padding: "10px 14px", borderTop: "1px solid #E8ECF2" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: NAVY, margin: 0 }}>{label}</p>
        <p style={{ fontSize: 10, color: MID_GRAY, margin: "2px 0 0", fontFamily: "monospace" }}>
          {tag}
        </p>
      </div>
    </div>
  );
}

/* ─── Poster Mockup ─── */

function PosterMockup({
  label,
  bg,
  accent,
  patternEl,
  textColor = "#fff",
}: {
  label: string;
  bg: string;
  accent: string;
  patternEl: React.ReactNode;
  textColor?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "2/3",
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          background: bg,
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        }}
      >
        {patternEl}
        {/* Accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: accent,
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            padding: 24,
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src="/__mockup/images/ieee-logo.jpeg"
              alt="IEEE Logo"
              style={{ height: 36, borderRadius: 6 }}
            />
          </div>
          <div>
            <div
              style={{
                width: 40,
                height: 3,
                background: accent,
                borderRadius: 2,
                marginBottom: 10,
              }}
            />
            <p
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: 6,
              }}
            >
              IEEE EdSoc Kerala
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: textColor,
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              Technical Seminar 2026
            </p>
            <p style={{ fontSize: 10, color: textColor, opacity: 0.7, marginBottom: 16 }}>
              March 15, 2026 · TKM College of Engineering, Kollam
            </p>
            <div
              style={{
                display: "inline-block",
                background: accent,
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: 6,
              }}
            >
              Register Free →
            </div>
          </div>
        </div>
        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: accent,
            opacity: 0.5,
          }}
        />
      </div>
      <p style={{ fontSize: 11, fontWeight: 600, color: MID_GRAY, textAlign: "center" }}>
        {label}
      </p>
    </div>
  );
}

/* ─── Section Header ─── */

function SectionHeader({ title }: { title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
      <div style={{ height: 1, flex: 1, background: "#E8ECF2" }} />
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: MID_GRAY,
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </span>
      <div style={{ height: 1, flex: 1, background: "#E8ECF2" }} />
    </div>
  );
}

/* ─── Main Component ─── */

export function PosterPatterns() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: LIGHT_GRAY,
        fontFamily: "'Inter', sans-serif",
        padding: "48px 64px",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderRadius: 20,
          padding: "40px 56px",
          marginBottom: 48,
          background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY_LIGHT} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 80% 50%, ${ORANGE}40 0%, transparent 55%)`,
          }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 40, height: 2, background: ORANGE, borderRadius: 2 }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: ORANGE,
              }}
            >
              Official Brand Asset
            </span>
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 10px", lineHeight: 1.1 }}>
            Poster Design Patterns
          </h1>
          <p style={{ fontSize: 15, color: MID_GRAY, margin: 0, maxWidth: 520 }}>
            A collection of approved background patterns, border frames, corner accents, and full poster mockups for IEEE Education Society Kerala Chapter official communications.
          </p>
        </div>
      </div>

      {/* ── 1. Background Patterns ── */}
      <section style={{ marginBottom: 52 }}>
        <SectionHeader title="Background Patterns" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 16 }}>
          <PatternCard label="Diagonal Lines" tag="pattern-diagonal-navy">
            <PatternDiagonalLines id="pdl-nav" color={NAVY} bg={LIGHT_GRAY} />
          </PatternCard>
          <PatternCard label="Diagonal Lines (Dark)" tag="pattern-diagonal-dark">
            <PatternDiagonalLines id="pdl-dark" color={NAVY_LIGHT} bg={NAVY_DARK} />
          </PatternCard>
          <PatternCard label="Dot Grid" tag="pattern-dots-navy">
            <PatternDots id="pd-nav" color={NAVY} bg={LIGHT_GRAY} />
          </PatternCard>
          <PatternCard label="Dot Grid (Dark)" tag="pattern-dots-dark">
            <PatternDots id="pd-dark" color={ORANGE_LIGHT} bg={NAVY_DARK} />
          </PatternCard>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <PatternCard label="Fine Grid" tag="pattern-grid-navy">
            <PatternGrid id="pg-nav" color={NAVY} bg="#fff" />
          </PatternCard>
          <PatternCard label="Fine Grid (Orange)" tag="pattern-grid-orange">
            <PatternGrid id="pg-org" color={ORANGE} bg={LIGHT_GRAY} />
          </PatternCard>
          <PatternCard label="Hexagonal" tag="pattern-hex-navy">
            <PatternHex id="ph-nav" color={NAVY_LIGHT} bg={LIGHT_GRAY} />
          </PatternCard>
          <PatternCard label="Hexagonal (Dark)" tag="pattern-hex-dark">
            <PatternHex id="ph-dark" color={ORANGE} bg={NAVY_DARK} />
          </PatternCard>
        </div>
      </section>

      {/* ── 2. Signature Patterns ── */}
      <section style={{ marginBottom: 52 }}>
        <SectionHeader title="Signature Brand Patterns" />
        <p style={{ fontSize: 13, color: MID_GRAY, marginBottom: 20, marginTop: -12 }}>
          These patterns incorporate tech-inspired elements that reflect the IEEE brand personality.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <PatternCard label="Circuit Board (Light)" tag="pattern-circuit-light">
            <PatternCircuits id="pc-lig" color={NAVY} bg="#fff" />
          </PatternCard>
          <PatternCard label="Circuit Board (Dark)" tag="pattern-circuit-dark">
            <PatternCircuits id="pc-dark" color={ORANGE_LIGHT} bg={NAVY_DARK} />
          </PatternCard>
          <PatternCard label="Sine Waves" tag="pattern-waves-navy">
            <PatternWaves id="pw-nav" color={NAVY_LIGHT} bg={LIGHT_GRAY} />
          </PatternCard>
          <PatternCard label="Sine Waves (Orange)" tag="pattern-waves-orange">
            <PatternWaves id="pw-org" color={ORANGE} bg={NAVY_DARK} />
          </PatternCard>
          <PatternCard label="Cross-Hatch" tag="pattern-crosshatch-navy">
            <PatternCrossHatch id="pch-nav" color={NAVY} bg="#fff" />
          </PatternCard>
          <PatternCard label="Cross-Hatch (Dark)" tag="pattern-crosshatch-dark">
            <PatternCrossHatch id="pch-dark" color={ORANGE_LIGHT} bg={NAVY_DARK} />
          </PatternCard>
          <PatternCard label="Triangles" tag="pattern-triangles-navy">
            <PatternTriangles id="pt-nav" color={NAVY_LIGHT} bg={LIGHT_GRAY} />
          </PatternCard>
          <PatternCard label="Triangles (Dark)" tag="pattern-triangles-dark">
            <PatternTriangles id="pt-dark" color={ORANGE} bg={NAVY_DARK} />
          </PatternCard>
        </div>
      </section>

      {/* ── 3. Border Frames ── */}
      <section style={{ marginBottom: 52 }}>
        <SectionHeader title="Border & Frame Styles" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {/* Double Rule */}
          <div
            style={{
              background: "white",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #E8ECF2",
            }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, color: MID_GRAY, marginBottom: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Double Rule Border
            </p>
            <BorderDouble color={NAVY}>
              <div style={{ textAlign: "center", padding: 12 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: NAVY, margin: 0 }}>Poster Title Here</p>
                <p style={{ fontSize: 10, color: MID_GRAY, margin: "4px 0 0" }}>IEEE EdSoc Kerala</p>
              </div>
            </BorderDouble>
            <p style={{ fontSize: 10, color: MID_GRAY, marginTop: 12, fontFamily: "monospace" }}>border-double-navy</p>
          </div>

          {/* Corner Marks */}
          <div
            style={{
              background: "white",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #E8ECF2",
            }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, color: MID_GRAY, marginBottom: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Corner Bracket Frame
            </p>
            <div style={{ background: LIGHT_GRAY, borderRadius: 8 }}>
              <BorderCornermarks color={NAVY}>
                <div style={{ textAlign: "center", padding: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: NAVY, margin: 0 }}>Poster Title Here</p>
                  <p style={{ fontSize: 10, color: MID_GRAY, margin: "4px 0 0" }}>IEEE EdSoc Kerala</p>
                </div>
              </BorderCornermarks>
            </div>
            <p style={{ fontSize: 10, color: MID_GRAY, marginTop: 12, fontFamily: "monospace" }}>frame-corner-brackets</p>
          </div>

          {/* Orange Accent Frame */}
          <div
            style={{
              background: "white",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #E8ECF2",
            }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, color: MID_GRAY, marginBottom: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Accent Top + Bottom Bar
            </p>
            <div
              style={{
                border: `1px solid ${NAVY}20`,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div style={{ height: 5, background: ORANGE }} />
              <div style={{ textAlign: "center", padding: 20, background: "#fff" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: NAVY, margin: 0 }}>Poster Title Here</p>
                <p style={{ fontSize: 10, color: MID_GRAY, margin: "4px 0 0" }}>IEEE EdSoc Kerala</p>
              </div>
              <div style={{ height: 5, background: NAVY }} />
            </div>
            <p style={{ fontSize: 10, color: MID_GRAY, marginTop: 12, fontFamily: "monospace" }}>frame-accent-bars</p>
          </div>
        </div>
      </section>

      {/* ── 4. Corner Accents ── */}
      <section style={{ marginBottom: 52 }}>
        <SectionHeader title="Corner Accent Elements" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {[
            { label: "L-Corner (Navy)", el: <CornerAccent color={NAVY} size={48} />, bg: "#fff" },
            { label: "L-Corner (Orange)", el: <CornerAccent color={ORANGE} size={48} />, bg: "#fff" },
            { label: "Bracket (Navy)", el: <CornerBracket color={NAVY} size={48} />, bg: "#fff" },
            { label: "Bracket (Orange)", el: <CornerBracket color={ORANGE} size={48} />, bg: "#fff" },
            { label: "L-Corner (White)", el: <CornerAccent color="#fff" size={48} />, bg: NAVY_DARK },
            { label: "L-Corner (Orange/Dark)", el: <CornerAccent color={ORANGE_LIGHT} size={48} />, bg: NAVY_DARK },
            { label: "Diamond (Navy)", el: <CornerDiamond color={NAVY} size={48} />, bg: "#fff" },
            { label: "Diamond (Orange)", el: <CornerDiamond color={ORANGE} size={48} />, bg: "#fff" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid #E8ECF2",
                background: "white",
              }}
            >
              <div
                style={{
                  height: 90,
                  background: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.el}
              </div>
              <div style={{ padding: "8px 12px", borderTop: "1px solid #E8ECF2" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: NAVY, margin: 0 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Gradient Overlays ── */}
      <section style={{ marginBottom: 52 }}>
        <SectionHeader title="Gradient Overlays" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            {
              label: "Navy Diagonal",
              style: { background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY_LIGHT} 100%)` },
            },
            {
              label: "Orange Accent",
              style: { background: `linear-gradient(135deg, ${ORANGE_DARK} 0%, ${ORANGE_LIGHT} 100%)` },
            },
            {
              label: "Navy + Orange Split",
              style: { background: `linear-gradient(120deg, ${NAVY_DARK} 55%, ${ORANGE} 100%)` },
            },
            {
              label: "Deep Space",
              style: { background: `radial-gradient(ellipse at top left, ${NAVY_LIGHT} 0%, ${NAVY_DARK} 70%)` },
            },
            {
              label: "Warm Horizontal",
              style: { background: `linear-gradient(90deg, ${NAVY} 0%, ${ORANGE} 100%)` },
            },
            {
              label: "Subtle Light",
              style: { background: `linear-gradient(180deg, #ffffff 0%, ${LIGHT_GRAY} 100%)` },
            },
            {
              label: "Radial Orange",
              style: { background: `radial-gradient(circle at 30% 70%, ${ORANGE}60 0%, ${NAVY_DARK} 60%)` },
            },
            {
              label: "Navy Vertical",
              style: { background: `linear-gradient(180deg, ${NAVY_DARK} 0%, ${NAVY_LIGHT} 100%)` },
            },
          ].map((g) => (
            <div
              key={g.label}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #E8ECF2",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ height: 90, ...g.style }} />
              <div style={{ padding: "8px 12px", background: "white", borderTop: "1px solid #E8ECF2" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: NAVY, margin: 0 }}>{g.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Full Poster Mockups ── */}
      <section style={{ marginBottom: 32 }}>
        <SectionHeader title="Full Poster Mockups" />
        <p style={{ fontSize: 13, color: MID_GRAY, marginBottom: 24, marginTop: -12 }}>
          Example A4 portrait posters showing patterns and elements combined in production-ready layouts.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          <PosterMockup
            label="Dark · Circuit Pattern"
            bg={NAVY_DARK}
            accent={ORANGE}
            patternEl={<PatternCircuits id="pm-c1" color={ORANGE_LIGHT} bg={NAVY_DARK} />}
          />
          <PosterMockup
            label="Dark · Hex Pattern"
            bg={NAVY_DARK}
            accent={ORANGE}
            patternEl={<PatternHex id="pm-h1" color={NAVY_LIGHT} bg={NAVY_DARK} />}
          />
          <PosterMockup
            label="Light · Diagonal Lines"
            bg="#fff"
            accent={NAVY}
            textColor={NAVY}
            patternEl={<PatternDiagonalLines id="pm-d1" color={NAVY} bg="#fff" />}
          />
          <PosterMockup
            label="Light · Dot Grid"
            bg={LIGHT_GRAY}
            accent={ORANGE}
            textColor={NAVY}
            patternEl={<PatternDots id="pm-dt1" color={NAVY} bg={LIGHT_GRAY} />}
          />
        </div>
      </section>

      {/* ── Usage Notes ── */}
      <div
        style={{
          borderRadius: 16,
          padding: "28px 36px",
          background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY_LIGHT} 100%)`,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
        }}
      >
        {[
          {
            icon: "✓",
            title: "Use patterns as backgrounds",
            desc: "Keep patterns at low opacity (20–40%) so text stays legible. Never use a busy pattern without a translucent overlay.",
          },
          {
            icon: "✓",
            title: "Combine with solid color blocks",
            desc: "Anchor patterns with a full-bleed solid color zone for headlines and key information so nothing competes with the message.",
          },
          {
            icon: "✗",
            title: "Avoid mixing patterns",
            desc: "Use only one pattern per poster. Mixing two background patterns creates visual noise that undermines the brand.",
          },
        ].map((note) => (
          <div key={note.title} style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: note.icon === "✓" ? "#3BA35F30" : "#D9302530",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                color: note.icon === "✓" ? "#7EE7A8" : "#FF7B6B",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              {note.icon}
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>
                {note.title}
              </p>
              <p style={{ fontSize: 12, color: MID_GRAY, margin: 0, lineHeight: 1.55 }}>
                {note.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
