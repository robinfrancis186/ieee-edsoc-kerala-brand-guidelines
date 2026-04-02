import { useState } from "react";

const BRAND = {
  colors: {
    navy: "#1B3A6B",
    orange: "#F47A20",
    white: "#FFFFFF",
    lightGray: "#F4F6F9",
    midGray: "#9EAFC2",
    darkGray: "#3D4A5C",
    navyDark: "#0F2347",
    navyLight: "#2A5298",
    orangeLight: "#FFA050",
    orangeDark: "#C95F00",
  },
};

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="mb-16 scroll-mt-24">
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px flex-1" style={{ background: BRAND.colors.midGray }} />
      <h2
        className="text-xs font-bold tracking-widest uppercase px-4"
        style={{ color: BRAND.colors.midGray }}
      >
        {title}
      </h2>
      <div className="h-px flex-1" style={{ background: BRAND.colors.midGray }} />
    </div>
    {children}
  </section>
);

const ColorSwatch = ({
  name,
  hex,
  textLight = false,
}: {
  name: string;
  hex: string;
  textLight?: boolean;
}) => (
  <div className="rounded-xl overflow-hidden shadow-md" style={{ width: 160 }}>
    <div
      className="h-24 flex items-end p-3"
      style={{ backgroundColor: hex }}
    >
      <span
        className="text-xs font-mono font-bold"
        style={{ color: textLight ? "#fff" : "#1B3A6B" }}
      >
        {hex}
      </span>
    </div>
    <div className="bg-white px-3 py-2 border-t" style={{ borderColor: "#E8ECF2" }}>
      <p className="text-xs font-semibold" style={{ color: BRAND.colors.darkGray }}>
        {name}
      </p>
    </div>
  </div>
);

const TypeSpec = ({
  label,
  sample,
  spec,
  style,
}: {
  label: string;
  sample: string;
  spec: string;
  style: React.CSSProperties;
}) => (
  <div
    className="rounded-xl p-6 border"
    style={{ borderColor: "#E8ECF2", background: "#FAFBFD" }}
  >
    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.midGray }}>
      {label}
    </p>
    <p style={style}>{sample}</p>
    <p className="text-xs mt-3 font-mono" style={{ color: BRAND.colors.midGray }}>
      {spec}
    </p>
  </div>
);

const UsageRule = ({
  icon,
  label,
  type,
}: {
  icon: string;
  label: string;
  type: "do" | "dont";
}) => (
  <div
    className="flex items-start gap-3 p-4 rounded-lg"
    style={{
      background: type === "do" ? "#EEF7EF" : "#FDECEA",
      borderLeft: `4px solid ${type === "do" ? "#3BA35F" : "#D93025"}`,
    }}
  >
    <span className="text-lg leading-none">{icon}</span>
    <div>
      <span
        className="text-xs font-bold uppercase tracking-wide"
        style={{ color: type === "do" ? "#3BA35F" : "#D93025" }}
      >
        {type === "do" ? "Do" : "Don't"}
      </span>
      <p className="text-sm mt-0.5" style={{ color: BRAND.colors.darkGray }}>
        {label}
      </p>
    </div>
  </div>
);

const MockupCard = ({
  bg,
  children,
  label,
}: {
  bg: string;
  children: React.ReactNode;
  label: string;
}) => (
  <div className="flex flex-col gap-2">
    <div
      className="rounded-xl p-6 flex items-center justify-center"
      style={{ background: bg, minHeight: 120 }}
    >
      {children}
    </div>
    <p className="text-xs text-center font-medium" style={{ color: BRAND.colors.midGray }}>
      {label}
    </p>
  </div>
);

const NAV_ITEMS = [
  { id: "identity", label: "Identity" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "logo-usage", label: "Logo Usage" },
  { id: "voice", label: "Voice & Tone" },
  { id: "applications", label: "Applications" },
];

export function BrandGuidelines() {
  const [activeNav, setActiveNav] = useState("identity");

  const scrollTo = (id: string) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Inter', sans-serif", background: BRAND.colors.lightGray }}>
      {/* Sidebar */}
      <aside
        className="w-64 shrink-0 sticky top-0 h-screen overflow-y-auto flex flex-col"
        style={{ background: BRAND.colors.navyDark }}
      >
        <div className="p-6 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <img
            src="/__mockup/images/ieee-logo.jpeg"
            alt="IEEE Education Society Kerala Chapter"
            className="w-full rounded-lg"
            style={{ maxWidth: 180 }}
          />
        </div>
        <nav className="p-4 flex-1">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 px-3" style={{ color: BRAND.colors.midGray }}>
            Brand Guide
          </p>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all mb-1"
              style={{
                background: activeNav === item.id ? BRAND.colors.orange : "transparent",
                color: activeNav === item.id ? "#fff" : BRAND.colors.midGray,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: BRAND.colors.midGray }}>
            © 2026 IEEE Education Society<br />Kerala Chapter
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Hero */}
        <div
          className="relative px-16 py-20 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${BRAND.colors.navyDark} 0%, ${BRAND.colors.navyLight} 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 50%, ${BRAND.colors.orange} 0%, transparent 60%)`,
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: BRAND.colors.orange }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: BRAND.colors.orange }}>
                Official Brand Document
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Brand Guidelines
            </h1>
            <p className="text-lg" style={{ color: BRAND.colors.midGray, maxWidth: 480 }}>
              IEEE Education Society — Kerala Chapter visual identity standards and usage guidelines for all official communications.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <div>
                <p className="text-xs uppercase tracking-wider" style={{ color: BRAND.colors.midGray }}>Version</p>
                <p className="text-white font-semibold">1.0 · 2026</p>
              </div>
              <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
              <div>
                <p className="text-xs uppercase tracking-wider" style={{ color: BRAND.colors.midGray }}>Status</p>
                <p className="text-white font-semibold">Active</p>
              </div>
              <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
              <div>
                <p className="text-xs uppercase tracking-wider" style={{ color: BRAND.colors.midGray }}>Maintained by</p>
                <p className="text-white font-semibold">Marketing Committee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-16 py-14">

          {/* 1. Identity */}
          <Section id="identity" title="Brand Identity">
            <div className="grid grid-cols-2 gap-8">
              <div
                className="rounded-2xl p-8"
                style={{ background: "white", border: "1px solid #E8ECF2" }}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND.colors.navy }}>Mission</h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.darkGray }}>
                  The IEEE Education Society Kerala Chapter advances the theory and practice of education in electrical and computer engineering, supporting its members and the profession through innovation, collaboration, and knowledge sharing.
                </p>
              </div>
              <div
                className="rounded-2xl p-8"
                style={{ background: "white", border: "1px solid #E8ECF2" }}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND.colors.navy }}>Vision</h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.darkGray }}>
                  To be the premier professional community fostering educational excellence and technological advancement across Kerala, empowering the next generation of engineers and educators.
                </p>
              </div>
              <div
                className="rounded-2xl p-8 col-span-2"
                style={{ background: `linear-gradient(135deg, ${BRAND.colors.navyDark}, ${BRAND.colors.navyLight})` }}
              >
                <h3 className="text-lg font-bold mb-4 text-white">Brand Pillars</h3>
                <div className="grid grid-cols-4 gap-6">
                  {["Education", "Innovation", "Community", "Excellence"].map((pillar, i) => (
                    <div key={pillar} className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg"
                        style={{ background: BRAND.colors.orange, color: "#fff" }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-white font-semibold text-sm">{pillar}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* 2. Colors */}
          <Section id="colors" title="Color Palette">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.darkGray }}>
                  Primary Colors
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <ColorSwatch name="IEEE Navy" hex={BRAND.colors.navy} textLight />
                  <ColorSwatch name="IEEE Orange" hex={BRAND.colors.orange} textLight />
                  <ColorSwatch name="White" hex={BRAND.colors.white} />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.darkGray }}>
                  Extended Palette
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <ColorSwatch name="Navy Dark" hex={BRAND.colors.navyDark} textLight />
                  <ColorSwatch name="Navy Light" hex={BRAND.colors.navyLight} textLight />
                  <ColorSwatch name="Orange Light" hex={BRAND.colors.orangeLight} />
                  <ColorSwatch name="Orange Dark" hex={BRAND.colors.orangeDark} textLight />
                  <ColorSwatch name="Mid Gray" hex={BRAND.colors.midGray} />
                  <ColorSwatch name="Dark Gray" hex={BRAND.colors.darkGray} textLight />
                  <ColorSwatch name="Light Gray" hex={BRAND.colors.lightGray} />
                </div>
              </div>
              <div
                className="rounded-xl p-6"
                style={{ background: "white", border: "1px solid #E8ECF2" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.darkGray }}>
                  CSS Design Tokens
                </h3>
                <pre
                  className="text-xs p-4 rounded-lg overflow-x-auto"
                  style={{ background: BRAND.colors.navyDark, color: "#7EE7A8", lineHeight: 1.8 }}
                >
{`:root {
  --color-navy:        #1B3A6B;
  --color-navy-dark:   #0F2347;
  --color-navy-light:  #2A5298;
  --color-orange:      #F47A20;
  --color-orange-light:#FFA050;
  --color-orange-dark: #C95F00;
  --color-mid-gray:    #9EAFC2;
  --color-dark-gray:   #3D4A5C;
  --color-bg:          #F4F6F9;
}`}
                </pre>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.darkGray }}>
                  Accessible Contrast Pairs
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { bg: BRAND.colors.navy, fg: "#fff", label: "Navy / White", ratio: "11.2:1 ✓ AAA" },
                    { bg: BRAND.colors.orange, fg: BRAND.colors.navyDark, label: "Orange / Navy Dark", ratio: "4.6:1 ✓ AA" },
                    { bg: BRAND.colors.navyDark, fg: BRAND.colors.orangeLight, label: "Navy Dark / Orange Light", ratio: "7.1:1 ✓ AAA" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="rounded-xl p-4 flex flex-col gap-2"
                      style={{ background: c.bg }}
                    >
                      <p className="font-bold text-sm" style={{ color: c.fg }}>
                        Aa Bb Cc 123
                      </p>
                      <p className="text-xs" style={{ color: c.fg, opacity: 0.8 }}>
                        {c.label}
                      </p>
                      <p className="text-xs font-mono mt-1" style={{ color: c.fg, opacity: 0.65 }}>
                        {c.ratio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* 3. Typography */}
          <Section id="typography" title="Typography">
            <div className="space-y-6">
              <div
                className="rounded-2xl p-8"
                style={{ background: "white", border: "1px solid #E8ECF2" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BRAND.colors.midGray }}>
                  Primary Typeface
                </p>
                <p className="text-4xl font-bold mb-2" style={{ color: BRAND.colors.navy, fontFamily: "'Inter', sans-serif" }}>
                  Inter
                </p>
                <p className="text-sm" style={{ color: BRAND.colors.darkGray }}>
                  Used for all digital interfaces, body text, and UI elements. Clean, highly legible at all sizes, and optimized for screens.
                </p>
                <div className="flex gap-6 mt-4 flex-wrap">
                  {[
                    { weight: "400", label: "Regular" },
                    { weight: "500", label: "Medium" },
                    { weight: "600", label: "SemiBold" },
                    { weight: "700", label: "Bold" },
                    { weight: "800", label: "ExtraBold" },
                  ].map((w) => (
                    <div key={w.weight} className="text-center">
                      <p className="text-2xl" style={{ fontWeight: w.weight, color: BRAND.colors.navy }}>Ag</p>
                      <p className="text-xs mt-1" style={{ color: BRAND.colors.midGray }}>{w.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <TypeSpec
                  label="Display / Hero"
                  sample="Education for Tomorrow"
                  spec="Inter 800 · 48px / 52px · Navy"
                  style={{ fontSize: 32, fontWeight: 800, color: BRAND.colors.navy, lineHeight: 1.1 }}
                />
                <TypeSpec
                  label="Heading H1"
                  sample="Annual Technical Symposium"
                  spec="Inter 700 · 32px / 40px · Navy"
                  style={{ fontSize: 24, fontWeight: 700, color: BRAND.colors.navy, lineHeight: 1.25 }}
                />
                <TypeSpec
                  label="Heading H2"
                  sample="Chapter Events & Activities"
                  spec="Inter 600 · 24px / 32px · Navy"
                  style={{ fontSize: 20, fontWeight: 600, color: BRAND.colors.navy }}
                />
                <TypeSpec
                  label="Body Text"
                  sample="IEEE Education Society Kerala Chapter brings together educators, researchers, and practitioners committed to advancing the field of engineering education."
                  spec="Inter 400 · 16px / 26px · Dark Gray"
                  style={{ fontSize: 15, fontWeight: 400, color: BRAND.colors.darkGray, lineHeight: 1.65 }}
                />
                <TypeSpec
                  label="Caption / Label"
                  sample="Event Date · Location · Category"
                  spec="Inter 500 · 12px / 16px · Mid Gray · tracking-wider"
                  style={{ fontSize: 12, fontWeight: 500, color: BRAND.colors.midGray, letterSpacing: "0.06em", textTransform: "uppercase" }}
                />
                <TypeSpec
                  label="Accent / Highlight"
                  sample="Register Now →"
                  spec="Inter 700 · 16px · Orange"
                  style={{ fontSize: 16, fontWeight: 700, color: BRAND.colors.orange }}
                />
              </div>
            </div>
          </Section>

          {/* 4. Logo Usage */}
          <Section id="logo-usage" title="Logo Usage">
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-6">
                <MockupCard bg="white" label="Primary — Light Background">
                  <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="w-40 rounded" />
                </MockupCard>
                <MockupCard bg={BRAND.colors.navyDark} label="Primary — Dark Background">
                  <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="w-40 rounded" style={{ filter: "brightness(0) invert(1)" }} />
                </MockupCard>
                <MockupCard bg={BRAND.colors.lightGray} label="Primary — Gray Background">
                  <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="w-40 rounded" />
                </MockupCard>
              </div>
              <div
                className="rounded-xl p-6"
                style={{ background: "white", border: "1px solid #E8ECF2" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.darkGray }}>
                  Clear Space Rule
                </h3>
                <div className="flex items-center gap-8">
                  <div
                    className="relative rounded-xl p-8 flex items-center justify-center"
                    style={{ border: `2px dashed ${BRAND.colors.orange}`, background: "#FFF8F3" }}
                  >
                    <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="w-32 rounded" />
                    <div
                      className="absolute top-2 left-2 text-xs font-bold"
                      style={{ color: BRAND.colors.orange }}
                    >
                      ← min clear space →
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.darkGray }}>
                      Always maintain a minimum clear space equal to the height of the "IEEE" wordmark around all sides of the logo. This clear space must be free of any text, graphics, or other visual elements.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-lg p-3" style={{ background: BRAND.colors.lightGray }}>
                        <p className="text-xs font-semibold" style={{ color: BRAND.colors.navy }}>Minimum Size (Digital)</p>
                        <p className="text-sm font-bold mt-1" style={{ color: BRAND.colors.orange }}>120px wide</p>
                      </div>
                      <div className="rounded-lg p-3" style={{ background: BRAND.colors.lightGray }}>
                        <p className="text-xs font-semibold" style={{ color: BRAND.colors.navy }}>Minimum Size (Print)</p>
                        <p className="text-sm font-bold mt-1" style={{ color: BRAND.colors.orange }}>30mm wide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.darkGray }}>
                  Usage Rules
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <UsageRule type="do" icon="✓" label="Use the official logo files provided by the chapter committee" />
                  <UsageRule type="dont" icon="✗" label="Distort, stretch, or change the logo's proportions" />
                  <UsageRule type="do" icon="✓" label="Maintain clear space around the logo at all times" />
                  <UsageRule type="dont" icon="✗" label="Change the logo colors or add gradients or effects" />
                  <UsageRule type="do" icon="✓" label="Use on approved background colors (white, navy, light gray)" />
                  <UsageRule type="dont" icon="✗" label="Place the logo on busy or clashing background images" />
                  <UsageRule type="do" icon="✓" label="Reproduce the logo at legible sizes (min 120px or 30mm)" />
                  <UsageRule type="dont" icon="✗" label="Recreate the logo using different fonts or elements" />
                </div>
              </div>
            </div>
          </Section>

          {/* 5. Voice & Tone */}
          <Section id="voice" title="Voice & Tone">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "white", border: "1px solid #E8ECF2" }}
                >
                  <h3 className="text-base font-bold mb-4" style={{ color: BRAND.colors.navy }}>Brand Personality</h3>
                  <div className="space-y-3">
                    {[
                      { trait: "Authoritative", desc: "Expert and credible — we are IEEE" },
                      { trait: "Approachable", desc: "Welcoming to students and professionals alike" },
                      { trait: "Inspiring", desc: "We motivate the next generation of engineers" },
                      { trait: "Progressive", desc: "Forward-thinking, embracing new ideas" },
                      { trait: "Community-First", desc: "Kerala-rooted, globally connected" },
                    ].map((p) => (
                      <div key={p.trait} className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                          style={{ background: BRAND.colors.orange }}
                        />
                        <div>
                          <span className="text-sm font-semibold" style={{ color: BRAND.colors.navy }}>
                            {p.trait}
                          </span>
                          <span className="text-sm" style={{ color: BRAND.colors.darkGray }}>
                            {" "}— {p.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "white", border: "1px solid #E8ECF2" }}
                >
                  <h3 className="text-base font-bold mb-4" style={{ color: BRAND.colors.navy }}>Writing Examples</h3>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Event Announcement",
                        good: "Join us for the Annual Technical Symposium — a gathering of Kerala's brightest minds in engineering education.",
                        bad: "We are having a symposium.",
                      },
                      {
                        label: "Call to Action",
                        good: "Shape the future of engineering education. Become a member today.",
                        bad: "Click here to sign up.",
                      },
                    ].map((ex) => (
                      <div key={ex.label}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.colors.midGray }}>
                          {ex.label}
                        </p>
                        <div className="rounded-lg p-3 mb-1" style={{ background: "#EEF7EF", borderLeft: `3px solid #3BA35F` }}>
                          <p className="text-xs font-bold text-green-700 mb-0.5">Do</p>
                          <p className="text-sm" style={{ color: BRAND.colors.darkGray }}>{ex.good}</p>
                        </div>
                        <div className="rounded-lg p-3" style={{ background: "#FDECEA", borderLeft: `3px solid #D93025` }}>
                          <p className="text-xs font-bold text-red-700 mb-0.5">Don't</p>
                          <p className="text-sm" style={{ color: BRAND.colors.darkGray }}>{ex.bad}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* 6. Applications */}
          <Section id="applications" title="Brand Applications">
            <div className="space-y-6">
              {/* Email Header */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: BRAND.colors.midGray }}>
                  Email / Newsletter Header
                </p>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <div
                    className="px-8 py-5 flex items-center justify-between"
                    style={{ background: BRAND.colors.navyDark }}
                  >
                    <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="h-10 rounded" />
                    <div className="flex gap-6">
                      {["Events", "Research", "Membership", "Contact"].map((link) => (
                        <span key={link} className="text-sm font-medium" style={{ color: BRAND.colors.midGray }}>
                          {link}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="px-8 py-10"
                    style={{ background: `linear-gradient(135deg, ${BRAND.colors.navy} 0%, ${BRAND.colors.navyLight} 100%)` }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BRAND.colors.orange }}>
                      Upcoming Event
                    </p>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      IEEE EdSoc Kerala Chapter Seminar 2026
                    </h2>
                    <p style={{ color: BRAND.colors.midGray, fontSize: 14 }}>
                      Join 200+ educators and engineers for a day of keynotes, workshops, and networking.
                    </p>
                    <button
                      className="mt-5 px-6 py-2.5 rounded-lg text-sm font-bold transition-all"
                      style={{ background: BRAND.colors.orange, color: "white" }}
                    >
                      Register Now →
                    </button>
                  </div>
                </div>
              </div>

              {/* Event Badge */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: BRAND.colors.midGray }}>
                  Event Badge / Certificate Header
                </p>
                <div
                  className="rounded-2xl p-8 flex items-center gap-8"
                  style={{
                    background: "white",
                    border: `2px solid ${BRAND.colors.navy}`,
                    boxShadow: `0 0 0 4px ${BRAND.colors.orange}20`,
                  }}
                >
                  <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="h-20 rounded-lg" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND.colors.orange }}>
                      IEEE Education Society
                    </p>
                    <h2 className="text-2xl font-bold mt-1" style={{ color: BRAND.colors.navy }}>
                      Kerala Chapter
                    </h2>
                    <p className="text-sm mt-1" style={{ color: BRAND.colors.midGray }}>
                      Certificate of Participation · 2026
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-sm text-center leading-tight"
                      style={{ background: `linear-gradient(135deg, ${BRAND.colors.orange}, ${BRAND.colors.orangeDark})` }}
                    >
                      IEEE<br />SEAL
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Post */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: BRAND.colors.midGray }}>
                  Social Media Post Template
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-2xl p-8 flex flex-col justify-between"
                    style={{
                      background: `linear-gradient(145deg, ${BRAND.colors.navyDark} 0%, ${BRAND.colors.navyLight} 100%)`,
                      minHeight: 260,
                      aspectRatio: "1/1",
                    }}
                  >
                    <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="h-10 rounded" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BRAND.colors.orange }}>
                        #IEEEKerala · #EdSoc
                      </p>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        Empowering Kerala's Engineering Future
                      </h3>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl p-8 flex flex-col justify-between"
                    style={{
                      background: `linear-gradient(145deg, ${BRAND.colors.orange} 0%, ${BRAND.colors.orangeDark} 100%)`,
                      minHeight: 260,
                      aspectRatio: "1/1",
                    }}
                  >
                    <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="h-10 rounded" style={{ filter: "brightness(0) invert(1)" }} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white opacity-70">
                        Call for Members
                      </p>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        Join IEEE EdSoc Kerala Chapter Today
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer
            className="rounded-2xl p-8 flex items-center justify-between"
            style={{ background: BRAND.colors.navyDark }}
          >
            <div>
              <p className="font-bold text-white">IEEE Education Society — Kerala Chapter</p>
              <p className="text-sm mt-1" style={{ color: BRAND.colors.midGray }}>
                Brand Guidelines v1.0 · For internal and official use only
              </p>
            </div>
            <img src="/__mockup/images/ieee-logo.jpeg" alt="Logo" className="h-12 rounded" />
          </footer>
        </div>
      </main>
    </div>
  );
}
