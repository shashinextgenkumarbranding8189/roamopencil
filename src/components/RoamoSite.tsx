import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBlaxo from "@/assets/roamoproduct/hero section/BLAXO-PENCILs.webp";
import heroBluzo from "@/assets/roamoproduct/hero section/BLUZO-PACKs.webp";
import heroImperiumBox from "@/assets/roamoproduct/hero section/IMPERIUM-PENCIL-DOUBLE-BOXs.webp";
import heroImperium from "@/assets/roamoproduct/hero section/IMPERIUM-PENCILs.webp";
import imgRoamo from "@/assets/roamoproduct/BLAXO/BLAXO-10PENCILs.webp";
import imgImperium from "@/assets/roamoproduct/IMPERIUM/IMPERIUM-PENCIL-COLORSs.webp";
import imgColour from "@/assets/roamoproduct/Roamo products/RP-ROAMO-ERASERs.webp";
import imgPartner from "@/assets/roamoproduct/IMPERIUM/IMPERIUM-WOOD-PENCILs.webp";
import impColors from "@/assets/roamoproduct/IMPERIUM/IMPERIUM-PENCIL-COLORSs.webp";
import impDoubleBox from "@/assets/roamoproduct/IMPERIUM/IMPERIUM-PENCIL-DOUBLE-BOXs.webp";
import impPencil from "@/assets/roamoproduct/IMPERIUM/IMPERIUM-PENCILs.webp";
import impWoodPencil from "@/assets/roamoproduct/IMPERIUM/IMPERIUM-WOOD-PENCILs.webp";
import impExtra from "@/assets/roamoproduct/IMPERIUM/IMPERIUMPENCILIMAGE.jpeg";
import blaxoPencil from "@/assets/roamoproduct/BLAXO/BLAXO-PENCILs.webp";
import bluzoPack from "@/assets/roamoproduct/BLUZO/BLUZO-PACKs.webp";
import rpNoDust from "@/assets/roamoproduct/Roamo products/RP-NODUST-ERASERs.webp";
import rpEraser from "@/assets/roamoproduct/Roamo products/RP-ROAMO-ERASERs.webp";
import rpEraserSharp from "@/assets/roamoproduct/Roamo products/RP-ERASER-SHARPs.webp";
import rpTriangular from "@/assets/roamoproduct/Roamo products/RP-TRIANGULAR-PENCILs.webp";

// Logo served from public folder (works in both local dev and production)
const LOGO_URL = "/roamo-logo.png";

const WA_NUMBER = "918355015584";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const DEFAULT_MSG = "Hello ROAMO, I am interested in your stationery products.";
const productMsg = (p: string) => `Hello ROAMO, I am interested in ${p}.`;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// ── Gold particle canvas ──────────────────────────────────────────────────────
function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const particles: { x: number; y: number; r: number; vx: number; vy: number; a: number; va: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const COUNT = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -(Math.random() * 0.22 + 0.06),
        a: Math.random(),
        va: (Math.random() - 0.5) * 0.004,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.va;
        if (p.a < 0) p.a = 0, p.va *= -1;
        if (p.a > 1) p.a = 1, p.va *= -1;
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216,177,90,${p.a * 0.55})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [reduce]);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden />;
}

// ── Floating stationery shapes (SVG-based, pure CSS animated) ─────────────────
function FloatingStationery() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  // Pencil SVG inline — antique gold tones, premium minimal
  const Pencil = ({ style, cls }: { style?: React.CSSProperties; cls?: string }) => (
    <svg viewBox="0 0 28 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={`float-pencil ${cls ?? ""}`} style={style} aria-hidden>
      {/* Eraser tip */}
      <rect x="6" y="0" width="16" height="14" rx="3" fill="#d8b15a" opacity="0.85"/>
      <rect x="6" y="10" width="16" height="4" fill="#b8924a" opacity="0.7"/>
      {/* Body */}
      <rect x="7" y="14" width="14" height="128" fill="#c9a84c" opacity="0.72"/>
      {/* Label band */}
      <rect x="7" y="62" width="14" height="28" fill="#111" opacity="0.38"/>
      <rect x="7" y="64" width="14" height="2" fill="#d8b15a" opacity="0.6"/>
      <rect x="7" y="86" width="14" height="2" fill="#d8b15a" opacity="0.6"/>
      {/* Wood */}
      <rect x="7" y="142" width="14" height="18" fill="#c9a050" opacity="0.55"/>
      {/* Graphite tip */}
      <polygon points="7,160 21,160 14,180" fill="#c9a84c" opacity="0.65"/>
      <polygon points="10,165 18,165 14,180" fill="#555" opacity="0.6"/>
    </svg>
  );

  // Eraser SVG
  const Eraser = ({ style, cls }: { style?: React.CSSProperties; cls?: string }) => (
    <svg viewBox="0 0 72 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`float-eraser ${cls ?? ""}`} style={style} aria-hidden>
      <rect x="0" y="0" width="72" height="32" rx="5" fill="#c9a84c" opacity="0.6"/>
      <rect x="0" y="22" width="72" height="10" rx="3" fill="#b8924a" opacity="0.5"/>
      <rect x="8" y="8" width="42" height="10" rx="2" fill="#111" opacity="0.28"/>
      <rect x="8" y="10" width="42" height="2" fill="#d8b15a" opacity="0.5"/>
    </svg>
  );

  // Ruler SVG
  const Ruler = ({ style, cls }: { style?: React.CSSProperties; cls?: string }) => (
    <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`float-ruler ${cls ?? ""}`} style={style} aria-hidden>
      <rect x="0" y="0" width="200" height="24" rx="3" fill="#c9a84c" opacity="0.5"/>
      {[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190].map((x,i)=>(
        <rect key={x} x={x+4} y={0} width="1" height={i%5===0?14:8} fill="#7a5e2a" opacity="0.7"/>
      ))}
      <rect x="0" y="20" width="200" height="4" rx="2" fill="#b8924a" opacity="0.4"/>
    </svg>
  );

  return (
    <div className="float-layer" aria-hidden>
      <Pencil cls="fp1" />
      <Pencil cls="fp2" />
      <Pencil cls="fp3" />
      <Eraser cls="fe1" />
      <Eraser cls="fe2" />
      <Ruler cls="fr1" />
      <Pencil cls="fp4" />
    </div>
  );
}

// ── Hero Product Slider ───────────────────────────────────────────────────────
const SLIDES = [
  {
    img: heroBlaxo,
    name: "BLAXO Pencils",
    tag: "Black Series",
  },
  {
    img: heroBluzo,
    name: "BLUZO Pencils",
    tag: "Blue Series",
  },
  {
    img: heroImperium,
    name: "Imperium Pencil",
    tag: "Wood-Free Range",
  },
  {
    img: heroImperiumBox,
    name: "Imperium Double Box",
    tag: "Retail Pack",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduce = useReducedMotion();

  const goTo = useCallback((idx: number, d = 1) => {
    setDir(d);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length, 1), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1), [current, goTo]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
      setDir(1);
    }, 4200);
  }, []);

  useEffect(() => {
    if (reduce) return;
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [reduce, startTimer]);

  const pauseTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const variants = reduce
    ? { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.95 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.95 }),
      };

  const slide = SLIDES[current]!;

  return (
    <div className="hero-slider" onMouseEnter={pauseTimer} onMouseLeave={startTimer}>
      {/* Ambient glow behind slider */}
      <div className="slider-glow" aria-hidden />

      <div className="slider-frame">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduce ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="slider-slide"
          >
            <div className="slider-img-wrap">
              <img src={slide.img} alt={`ROAMO product`} width={900} height={900} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="slider-controls">
        <button className="slider-btn" onClick={prev} aria-label="Previous product">
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="slider-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="slider-btn" onClick={next} aria-label="Next product">
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

// ── 3D Stacked Carousel ──────────────────────────────────────────────────────
const CAROUSEL_ITEMS = [
  { img: imgRoamo,   alt: "BLAXO Pencil",              enquiry: wa(productMsg("BLAXO pencils")) },
  { img: imgImperium,alt: "Imperium Colour Range",      enquiry: wa(productMsg("Imperium pencils")) },
  { img: imgColour,  alt: "ROAMO Eraser",               enquiry: wa("Hello ROAMO, I am interested in your erasers and stationery products.") },
  { img: imgPartner, alt: "Imperium Wood Pencil",        enquiry: wa(DEFAULT_MSG) },
];

const TOTAL = CAROUSEL_ITEMS.length;

function mod(n: number, m: number) { return ((n % m) + m) % m; }

function StackedCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(0); // -1 prev, 1 next
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduce = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((idx: number, d: number) => {
    setDir(d);
    setActive(idx);
    if (!reduce) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActive(a => mod(a + 1, TOTAL));
        setDir(1);
      }, 4500);
    }
  }, [reduce]);

  const next = useCallback(() => goTo(mod(active + 1, TOTAL), 1), [active, goTo]);
  const prev = useCallback(() => goTo(mod(active - 1, TOTAL), -1), [active, goTo]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(a => mod(a + 1, TOTAL));
      setDir(1);
    }, 4500);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (reduce) return;
    startTimer();
    return () => stopTimer();
  }, [reduce, startTimer, stopTimer]);

  // Touch support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  // Each card gets a position index relative to active: 0=front, ±1=side, ±2=back
  const getPos = (i: number) => {
    const d = mod(i - active, TOTAL);
    if (d === 0) return 0;
    if (d === 1) return 1;
    if (d === TOTAL - 1) return -1;
    if (d === 2) return 2;
    return -2;
  };

  const cardStyle = (pos: number): React.CSSProperties => {
    if (pos === 0) return {
      zIndex: 10, transform: "translateX(0) scale(1) rotateY(0deg)",
      opacity: 1, filter: "brightness(1)",
    };
    if (pos === 1) return {
      zIndex: 7, transform: "translateX(56%) scale(0.88) rotateY(-8deg)",
      opacity: 0.7, filter: "brightness(0.55)",
    };
    if (pos === -1) return {
      zIndex: 7, transform: "translateX(-56%) scale(0.88) rotateY(8deg)",
      opacity: 0.7, filter: "brightness(0.55)",
    };
    if (pos === 2) return {
      zIndex: 4, transform: "translateX(92%) scale(0.76) rotateY(-14deg)",
      opacity: 0.35, filter: "brightness(0.3)",
    };
    return {
      zIndex: 4, transform: "translateX(-92%) scale(0.76) rotateY(14deg)",
      opacity: 0.35, filter: "brightness(0.3)",
    };
  };

  return (
    <section className="carousel-section">
      <div className="carousel-head">
        <div className="section-kicker">Our Collections</div>
        <h2>Explore the ROAMO range.</h2>
      </div>

      <div
        className="carousel-stage"
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel-track">
          {CAROUSEL_ITEMS.map((item, i) => {
            const pos = getPos(i);
            const style = cardStyle(pos);
            const isActive = pos === 0;
            return (
              <a
                key={item.alt}
                className={`c-card${isActive ? " c-card--active" : ""}`}
                style={style}
                href={isActive ? item.enquiry : undefined}
                target={isActive ? "_blank" : undefined}
                rel={isActive ? "noopener noreferrer" : undefined}
                onClick={e => { if (!isActive) { e.preventDefault(); goTo(i, pos > 0 ? 1 : -1); } }}
                aria-label={isActive ? `Enquire about ${item.alt}` : item.alt}
                aria-hidden={!isActive}
              >
                <div className="c-card-img">
                  <img src={item.img} alt={item.alt} loading="lazy" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Nav arrows */}
        <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="carousel-dots">
        {CAROUSEL_ITEMS.map((item, i) => (
          <button
            key={i}
            className={`carousel-dot${i === active ? " active" : ""}`}
            onClick={() => goTo(i, i > active ? 1 : -1)}
            aria-label={`Go to ${item.alt}`}
          />
        ))}
      </div>
    </section>
  );
}

// ── Enquiry Form ─────────────────────────────────────────────────────────────
const ENQUIRY_TYPES = [
  "General Enquiry",
  "ROAMO Pencils",
  "Imperium Pencils",
  "Colour & Form / Erasers",
  "Retail / Distribution",
  "Bulk Order",
  "Other",
];

function EnquiryForm() {
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });
  type FormErrors = { name?: string; phone?: string; email?: string; enquiryType?: string; message?: string };
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }));

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!fields.name.trim()) e.name = "Name is required.";
    if (!fields.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^\+?[\d\s\-().]{7,20}$/.test(fields.phone.trim())) e.phone = "Enter a valid phone number.";
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) e.email = "Enter a valid email address.";
    if (!fields.enquiryType) e.enquiryType = "Please select an enquiry type.";
    if (!fields.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const lines = [
      `Hello ROAMO,`,
      ``,
      `*Name:* ${fields.name.trim()}`,
      `*Phone:* ${fields.phone.trim()}`,
      fields.email.trim() ? `*Email:* ${fields.email.trim()}` : null,
      `*Enquiry Type:* ${fields.enquiryType}`,
      ``,
      `*Message:*`,
      fields.message.trim(),
    ].filter(l => l !== null).join("\n");

    window.open(wa(lines), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const reset = () => { setFields({ name: "", phone: "", email: "", enquiryType: "", message: "" }); setErrors({}); setSubmitted(false); };

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="wrap enquiry-wrap">
        {/* Left: heading block */}
        <div className="enquiry-intro">
          <div className="section-kicker">Get in touch</div>
          <h2 className="enquiry-heading">
            Tell us what<br />
            <span className="goldtext">you need.</span>
          </h2>
          <div className="enquiry-rule" aria-hidden />
          <p className="enquiry-sub">
            Fill in the form and your enquiry will be sent directly to our team on WhatsApp. No logins, no waiting — just a conversation.
          </p>
          <div className="enquiry-trust">
            <div className="eq-trust-item">
              <span className="eq-trust-icon">✦</span>
              <span>Replies within one business day</span>
            </div>
            <div className="eq-trust-item">
              <span className="eq-trust-icon">✦</span>
              <span>Retail &amp; bulk enquiries welcome</span>
            </div>
            <div className="eq-trust-item">
              <span className="eq-trust-icon">✦</span>
              <span>No account needed</span>
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <div className="enquiry-card">
          {submitted ? (
            <div className="enquiry-success">
              <div className="eq-success-icon" aria-hidden>
                <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                  <circle cx="24" cy="24" r="22" stroke="#d8b15a" strokeWidth="1.5"/>
                  <path d="M14 24l7 7 13-13" stroke="#d8b15a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>WhatsApp opened!</h3>
              <p>Your message has been pre-filled. Just hit send in WhatsApp and we'll get back to you shortly.</p>
              <button className="btn gold enquiry-reset-btn" onClick={reset}>Send another enquiry</button>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
              <div className="eq-row eq-row--2">
                {/* Name */}
                <div className={`eq-field${errors.name ? " eq-field--error" : ""}`}>
                  <label htmlFor="eq-name" className="eq-label">
                    Full Name <span className="eq-required" aria-hidden>*</span>
                  </label>
                  <input
                    id="eq-name"
                    type="text"
                    className="eq-input"
                    placeholder="e.g. Arjun Sharma"
                    value={fields.name}
                    onChange={set("name")}
                    autoComplete="name"
                    maxLength={80}
                  />
                  {errors.name && <span className="eq-error" role="alert">{errors.name}</span>}
                </div>
                {/* Phone */}
                <div className={`eq-field${errors.phone ? " eq-field--error" : ""}`}>
                  <label htmlFor="eq-phone" className="eq-label">
                    Phone Number <span className="eq-required" aria-hidden>*</span>
                  </label>
                  <input
                    id="eq-phone"
                    type="tel"
                    className="eq-input"
                    placeholder="e.g. +91 98765 43210"
                    value={fields.phone}
                    onChange={set("phone")}
                    autoComplete="tel"
                    maxLength={20}
                  />
                  {errors.phone && <span className="eq-error" role="alert">{errors.phone}</span>}
                </div>
              </div>

              <div className="eq-row eq-row--2">
                {/* Email */}
                <div className={`eq-field${errors.email ? " eq-field--error" : ""}`}>
                  <label htmlFor="eq-email" className="eq-label">
                    Email <span className="eq-optional">(optional)</span>
                  </label>
                  <input
                    id="eq-email"
                    type="email"
                    className="eq-input"
                    placeholder="e.g. arjun@example.com"
                    value={fields.email}
                    onChange={set("email")}
                    autoComplete="email"
                    maxLength={120}
                  />
                  {errors.email && <span className="eq-error" role="alert">{errors.email}</span>}
                </div>
                {/* Enquiry type */}
                <div className={`eq-field${errors.enquiryType ? " eq-field--error" : ""}`}>
                  <label htmlFor="eq-type" className="eq-label">
                    Enquiry Type <span className="eq-required" aria-hidden>*</span>
                  </label>
                  <div className="eq-select-wrap">
                    <select
                      id="eq-type"
                      className="eq-input eq-select"
                      value={fields.enquiryType}
                      onChange={set("enquiryType")}
                    >
                      <option value="" disabled>Select a category…</option>
                      {ENQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <svg className="eq-select-chevron" viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden>
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {errors.enquiryType && <span className="eq-error" role="alert">{errors.enquiryType}</span>}
                </div>
              </div>

              {/* Message */}
              <div className={`eq-field${errors.message ? " eq-field--error" : ""}`}>
                <label htmlFor="eq-message" className="eq-label">
                  Message <span className="eq-required" aria-hidden>*</span>
                </label>
                <textarea
                  id="eq-message"
                  className="eq-input eq-textarea"
                  placeholder="Tell us about your requirements — products, quantities, timeline…"
                  value={fields.message}
                  onChange={set("message")}
                  rows={5}
                  maxLength={1200}
                />
                {errors.message && <span className="eq-error" role="alert">{errors.message}</span>}
                <span className="eq-char-count">{fields.message.length} / 1200</span>
              </div>

              <button type="submit" className="eq-submit">
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Send Enquiry via WhatsApp
                <span className="eq-submit-arrow">↗</span>
              </button>

              <p className="eq-disclaimer">
                Clicking send will open WhatsApp with your message pre-filled. No data is stored on our servers.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Imperium Collection Grid ─────────────────────────────────────────────────
const IMPERIUM_PRODUCTS = [
  { img: impPencil,    name: "Imperium Pencil",      desc: "Smooth, consistent writing in a sleek wood-free design." },
  { img: impColors,    name: "Imperium Colour Range", desc: "Vibrant colour grades for students and creatives." },
  { img: impDoubleBox, name: "Imperium Double Box",   desc: "Retail-ready double-pack presentation for the shelf." },
  { img: impWoodPencil,name: "Imperium Wood Pencil",  desc: "Classic wood-barrel variant with the Imperium identity." },
];

function ImperiumCollection() {
  return (
    <section className="imp-collection-section">
      <div className="wrap">
        <div className="imp-collection-head">
          <div className="section-kicker">Imperium Range</div>
          <h2>Explore the Imperium Collection.</h2>
        </div>
        <div className="imp-grid">
          {IMPERIUM_PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              className="imp-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="imp-card-img">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


const NAV = [
  { href: "#roamo", label: "ROAMO Pencils" },
  { href: "#imperium", label: "Imperium" },
  { href: "#about", label: "About" },
  { href: "#partner", label: "Partner" },
];

const tap = { whileTap: { scale: 0.97 } };

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap navin">
        <a className="brand" href="#home" aria-label="ROAMO home">
          <img src={LOGO_URL} alt="ROAMO" width={166} height={58} />
        </a>
        <div className="links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </div>
        <motion.a className="navcta" href="#partner" {...tap}>
          Partner with us <span>↗</span>
        </motion.a>
        <motion.button
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          {...tap}
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                {n.label}
              </motion.a>
            ))}
            <a className="btn gold" href="#partner" onClick={() => setOpen(false)}>
              Partner with us <span>↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function RoamoSite() {
  const root = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: "(min-width: 801px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 800px) and (prefers-reduced-motion: no-preference)",
        },
        (c) => {
          const desktop = !!c.conditions?.["desktop"];
          const ease = "power3.out";

          // HERO timeline
          const tl = gsap.timeline({ defaults: { ease } });
          tl.from(".hero .eyebrow", { opacity: 0, x: -16, duration: 0.7 })
            .from(".hero h1 .line > span", { yPercent: 110, duration: 1.1, stagger: 0.12, ease: "power4.out" }, "-=0.4")
            .from(".hero-copy > p", { opacity: 0, y: 18, duration: 0.8 }, "-=0.6")
            .from(".hero-actions > .cta", { opacity: 0, y: 16, duration: 0.6, stagger: 0.12 }, "-=0.5")
            .from(".proof span", { opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
            .from(".hero-slider", { opacity: 0, x: 40, duration: 1.1, ease: "expo.out" }, 0.3)
            .from(".scroll-cue", { opacity: 0, duration: 0.8 }, "-=0.4");

          if (desktop) {
            // Subtle parallax on slider
            gsap.to(".hero-art-inner", {
              yPercent: -6,
              ease: "none",
              scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
            });
            // Breathing glow
            gsap.to(".hero-glow", {
              x: 40, y: 30, scale: 1.15, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut",
            });
            gsap.to(".hero-glow2", {
              x: -30, y: 20, scale: 1.1, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2,
            });
            // Floating pencils — continuous drift
            gsap.utils.toArray<HTMLElement>(".float-pencil").forEach((el, i) => {
              gsap.to(el, {
                y: `random(-22, 22)`, x: `random(-10, 10)`, rotation: `random(-8, 8)`,
                duration: `random(5, 9)`, repeat: -1, yoyo: true, ease: "sine.inOut",
                delay: i * 0.7,
              });
            });
            gsap.utils.toArray<HTMLElement>(".float-eraser").forEach((el, i) => {
              gsap.to(el, {
                y: `random(-16, 16)`, x: `random(-8, 8)`, rotation: `random(-6, 6)`,
                duration: `random(4, 7)`, repeat: -1, yoyo: true, ease: "sine.inOut",
                delay: i * 0.9,
              });
            });
            gsap.utils.toArray<HTMLElement>(".float-ruler").forEach((el, i) => {
              gsap.to(el, {
                y: `random(-10, 10)`, x: `random(-12, 12)`, rotation: `random(-4, 4)`,
                duration: `random(6, 10)`, repeat: -1, yoyo: true, ease: "sine.inOut",
                delay: i * 1.1,
              });
            });
          }

          const reveal = (targets: string, trigger: string, vars: gsap.TweenVars = {}) =>
            gsap.from(targets, {
              opacity: 0,
              y: desktop ? 36 : 20,
              duration: 0.9,
              ease,
              stagger: 0.1,
              scrollTrigger: { trigger, start: "top 85%", once: true },
              ...vars,
            });

          reveal(".stripitem", ".intro-strip", { y: 16, stagger: 0.08 });

          document.querySelectorAll<HTMLElement>(".section-head").forEach((h) => {
            gsap.from(h.querySelectorAll(".section-kicker, h2, p"), {
              opacity: 0, y: desktop ? 30 : 18, duration: 0.9, ease, stagger: 0.12,
              scrollTrigger: { trigger: h, start: "top 85%", once: true },
            });
          });
          gsap.utils.toArray<HTMLElement>(".rule").forEach((r) =>
            gsap.from(r, { scaleX: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: r, start: "top 90%", once: true } }),
          );

          // Products: card rise + image mask reveal
          gsap.utils.toArray<HTMLElement>(".product").forEach((card, i) => {
            const t = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 85%", once: true } });
            t.from(card, { opacity: 0, y: desktop ? 50 : 24, duration: 0.9, ease, delay: desktop ? i * 0.12 : 0 })
              .from(card.querySelector(".product-img"), { clipPath: "inset(100% 0 0 0)", duration: 1.1, ease: "expo.out" }, "<0.1")
              .from(card.querySelector(".product-img img"), { scale: 1.2, duration: 1.4, ease: "expo.out" }, "<")
              .from(card.querySelectorAll(".product-body > *"), { opacity: 0, y: 12, stagger: 0.08, duration: 0.6 }, "-=0.9");
          });

          // Imperium storytelling
          const imp = gsap.timeline({ scrollTrigger: { trigger: ".imperium", start: "top 70%", once: true }, defaults: { ease } });
          imp.from(".imperium-copy > .section-kicker, .imperium-copy h2, .imperium-copy > p", { opacity: 0, y: 28, stagger: 0.12, duration: 0.9 })
            .from(".feature", { opacity: 0, y: 14, stagger: 0.07, duration: 0.5 }, "-=0.4")
            .from(".imperium-copy > .cta", { opacity: 0, y: 14, duration: 0.6 }, "-=0.2")
            .from(".imperium-art", { clipPath: "inset(0 0 0 100% round 24px)", duration: 1.3, ease: "expo.inOut" }, 0.1);
          if (desktop) {
            gsap.fromTo(".imperium-art img", { yPercent: 6, scale: 1.08 }, {
              yPercent: -6, scale: 1, ease: "none",
              scrollTrigger: { trigger: ".imperium", start: "top bottom", end: "bottom top", scrub: true },
            });
          }

          reveal(".eraser-tile", ".eraser-grid", { stagger: 0.15 });
          gsap.from(".eraser-tile .num", { opacity: 0, x: -20, duration: 1, ease, scrollTrigger: { trigger: ".eraser-grid", start: "top 80%", once: true } });

          const pt = gsap.timeline({ scrollTrigger: { trigger: ".partnerbox", start: "top 85%", once: true }, defaults: { ease } });
          pt.from(".partnerbox", { opacity: 0, y: 40, scale: 0.98, duration: 1 })
            .from(".partnerbox > div > *", { opacity: 0, y: 16, stagger: 0.1, duration: 0.6 }, "-=0.6")
            .from(".partnerbox > .cta", { opacity: 0, x: 20, duration: 0.6 }, "-=0.3");

          reveal(".footerin > *", ".footer", { y: 14, start: "top 95%" } as gsap.TweenVars);
        },
      );
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root}>
      <Header />

      <header className="hero" id="home">
        {/* Background layers */}
        <div className="hero-bg-texture" aria-hidden />
        <GoldParticles />
        <FloatingStationery />
        <div className="hero-glow" aria-hidden />
        <div className="hero-glow hero-glow2" aria-hidden />

        <div className="wrap hero-grid">
          {/* Left: Content */}
          <div className="hero-copy">
            <div className="eyebrow">A sharper stationery story</div>
            <h1>
              <span className="line"><span>Write Bolder.</span></span>
              <span className="line"><span className="goldtext">Go Further.</span></span>
            </h1>
            <p>
              Thoughtfully presented pencils and everyday stationery for students, creators, retailers and growing
              distribution networks.
            </p>
            <div className="hero-actions">
              <motion.a
                className="btn gold cta"
                href="https://roamopencils.com/#roamo"
                target="_blank"
                rel="noopener noreferrer"
                {...tap}
              >
                Explore products <span>↗</span>
              </motion.a>
              <motion.a
                className="btn dark cta"
                href="https://roamopencils.com/#partner"
                target="_blank"
                rel="noopener noreferrer"
                {...tap}
              >
                Become a business partner
              </motion.a>
            </div>
            <div className="proof">
              <span>Designed for everyday writing</span>
              <span>Retail &amp; bulk enquiries</span>
            </div>
          </div>

          {/* Right: Product Slider */}
          <div className="hero-art-inner">
            <HeroSlider />
          </div>
        </div>

        <a className="scroll-cue" href="#roamo" aria-label="Scroll to products">
          Scroll <i />
        </a>
      </header>

      <div className="stats-bar">
        <div className="wrap stats-inner">
          <div className="stat-item">
            <span className="stat-num">3</span>
            <span className="stat-label">Collections</span>
          </div>
          <div className="stat-divider" aria-hidden />
          <div className="stat-item">
            <span className="stat-num">15+</span>
            <span className="stat-label">Premium Grades</span>
          </div>
          <div className="stat-divider" aria-hidden />
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Quality Assured</span>
          </div>
        </div>
      </div>


      {/* ── About Us ── */}
      <section className="about-section" id="about">
        <div className="wrap about-grid">

          {/* Left: Content */}
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-eyebrow">
              <span className="about-eyebrow-line" aria-hidden />
              Our Story
            </div>

            <h2 className="about-heading">
              Crafting <span className="goldtext">a better</span><br />
              stationery story.
            </h2>

            <div className="about-rule" aria-hidden />

            <p className="about-lead">
              ROAMO was built on a simple belief. Everyday stationery deserves exceptional design. From bold pencil ranges to colourful erasers, we create products that stand out on shelves and stay true to what students, creators and businesses actually need.
            </p>
            <p className="about-body">
              Based in Lucknow, India, our team works closely with retailers, distributors and bulk buyers across the country. Every ROAMO product is designed with a clear identity, consistent quality and a commitment to making the stationery market a more exciting place.
            </p>

            <div className="about-pillars">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                      <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.91 18L10 15.27L5.09 18L6 12.14L2 8.27L7.91 7.26L10 2Z" stroke="#d8b15a" strokeWidth="1.4" strokeLinejoin="round"/>
                    </svg>
                  ),
                  label: "Design Led",
                  desc: "Every product built around a clear visual identity.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                      <path d="M3 10h14M10 3v14" stroke="#d8b15a" strokeWidth="1.6" strokeLinecap="round"/>
                      <circle cx="10" cy="10" r="8" stroke="#d8b15a" strokeWidth="1.4"/>
                    </svg>
                  ),
                  label: "Trade Focused",
                  desc: "Built for retailers, distributors and bulk buyers.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                      <path d="M4 10l4.5 4.5L16 6" stroke="#d8b15a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="8" stroke="#d8b15a" strokeWidth="1.4"/>
                    </svg>
                  ),
                  label: "Quality Assured",
                  desc: "Consistent performance across every range and SKU.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.label}
                  className="about-pillar"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
                >
                  <span className="about-pillar-icon" aria-hidden>{p.icon}</span>
                  <div>
                    <strong>{p.label}</strong>
                    <span>{p.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              className="about-cta-btn"
              href={wa("Hello ROAMO, I would like to know more about your brand and story.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: "0 14px 36px #d8b15a55" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Get in touch
              <span className="about-cta-arrow">↗</span>
            </motion.a>
          </motion.div>

          {/* Right: Logo panel */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="about-logo-frame">
              {/* Layered glows */}
              <div className="about-logo-glow about-logo-glow--outer" aria-hidden />
              <div className="about-logo-glow about-logo-glow--inner" aria-hidden />

              {/* Corner accents */}
              <span className="about-corner about-corner--tl" aria-hidden />
              <span className="about-corner about-corner--tr" aria-hidden />
              <span className="about-corner about-corner--bl" aria-hidden />
              <span className="about-corner about-corner--br" aria-hidden />

              <img
                src={LOGO_URL}
                alt="ROAMO — Write Bolder, Go Further"
                width={520}
                height={200}
                className="about-logo-img"
              />
              <div className="about-logo-tagline">Write Bolder. Go Further.</div>

              {/* Bottom brand strip */}
              <div className="about-logo-strip" aria-hidden>
                <span />
                <span>Est. Lucknow, India</span>
                <span />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <main>
        <section className="section" id="roamo">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">01 / The signature range</div>
                <h2>Meet the ROAMO Products.</h2>
              </div>
              <p>
                Explore the BLAXO, BLUZO ranges and More Products, built around memorable packaging and a clear product identity.
                Contact us for current availability and trade enquiries.
              </p>
            </div>
            <div className="rule" />
            <div className="products">
              {[
                { name: "BLAXO", pill: "Black series", img: blaxoPencil, alt: "ROAMO BLAXO pencil", text: "A bold, premium-looking pencil range with a distinctive black-and-gold visual identity." },
                { name: "BLUZO", pill: "Blue series", img: bluzoPack, alt: "ROAMO BLUZO pencil", text: "A fresh blue-accented pencil range designed to stand apart on the stationery shelf." },
              ].map((p) => (
                <motion.article key={p.name} className="product" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
                  <div className="product-img">
                    <img src={p.img} alt={p.alt} width={800} height={800} loading="lazy" />
                  </div>
                  <div className="product-body">
                    <div className="product-top">
                      <h3>{p.name}</h3>
                      <span className="pill">{p.pill}</span>
                    </div>
                    <p>{p.text}</p>
                    <a className="textlink" href={wa(productMsg(`${p.name} pencils`))} target="_blank" rel="noopener">
                      Enquire about {p.name} <span>→</span>
                    </a>
                  </div>
                </motion.article>
              ))}

              {/* Col 3 — Additional Products 2×2 grid */}
              <motion.article
                className="product product--additional"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                <div className="product-img product-img--grid">
                  {[rpNoDust, rpEraser, rpEraserSharp, rpTriangular].map((img, i) => (
                    <div key={i} className="product-img-cell">
                      <img src={img} alt="ROAMO additional product" width={400} height={400} loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="product-body">
                  <div className="product-top">
                    <h3>More Products</h3>
                    <span className="pill">Stationery</span>
                  </div>
                  <p>Erasers, triangular pencils and everyday stationery essentials from the ROAMO range.</p>
                  <a className="textlink" href={wa("Hello ROAMO, I am interested in your additional stationery products.")} target="_blank" rel="noopener">
                    Enquire about range <span>→</span>
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="section erasers" id="erasers">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">02 / More stationery</div>
                <h2>
                  Small essentials.
                  <br />
                  <span className="goldtext">Big personality.</span>
                </h2>
              </div>
              <p>
                Colourful erasers and upcoming stationery products will have their own space, with room for pack shots,
                close-ups and new collections.
              </p>
            </div>
            <div className="eraser-grid">
              {[
                { img: rpNoDust,     alt: "ROAMO No-Dust Eraser",    wa: "No-Dust Eraser" },
                { img: rpEraser,     alt: "ROAMO Eraser",             wa: "ROAMO Eraser" },
                { img: rpEraserSharp,alt: "ROAMO Eraser Sharp",       wa: "ROAMO Eraser Sharp" },
                { img: rpTriangular, alt: "ROAMO Triangular Pencil",  wa: "ROAMO Triangular Pencil" },
              ].map((p, i) => (
                <a
                  key={p.alt}
                  className="eraser-tile eraser-tile--img"
                  href={wa(`Hello ROAMO, I am interested in the ${p.wa}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="eraser-tile-img">
                    <img src={p.img} alt={p.alt} loading="lazy" width={800} height={800} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section imperium" id="imperium">
          <div className="wrap imperium-grid">
            <div className="imperium-copy">
              <div className="section-kicker">03 / Imperium Pencils</div>
              <h2>Rethink the everyday pencil.</h2>
              <p>
                The Imperium Wood-Free Pencil range is built for consistent, smooth writing — engineered without wood
                for a uniform feel from tip to end. Ideal for students, professionals and bulk buyers.
              </p>
              <div className="feature-list">
                <div className="feature">Wood-Free range</div>
                <div className="feature">Everyday writing</div>
                <div className="feature">Retail enquiries</div>
                <div className="feature">Future SKUs</div>
              </div>
              <motion.a
                className="imperium-cta"
                href={wa(productMsg("Imperium Wood-Free pencils"))}
                target="_blank"
                rel="noopener"
                {...tap}
              >
                Ask about Imperium <span>↗</span>
              </motion.a>
            </div>
            <div className="imperium-art">
              <img src={impExtra} alt="Imperium Wood-Free pencil range" width={1200} height={1200} loading="lazy" />
            </div>
          </div>
        </section>

        <ImperiumCollection />

        <StackedCarousel />

        <section className="partner" id="partner">
          <div className="wrap">
            <div className="partnerbox">
              <div>
                <div className="section-kicker">04 / Trade &amp; distribution</div>
                <h2>Let's grow the market together.</h2>
                <p>
                  Are you a retailer, dealer, distributor, school or bulk buyer? Contact the ROAMO team to discuss
                  products, availability and business enquiries.
                </p>
                <p className="contact-number">
                  Business enquiries: <a href="tel:+918174907302">+91 8174907302</a>
                </p>
              </div>
              <motion.a className="btn gold cta" id="whatsappLink" href={wa(DEFAULT_MSG)} target="_blank" rel="noopener" {...tap}>
                Start a WhatsApp enquiry <span>↗</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Distributor Enquiry ── */}
      <section className="dist-section" id="distributor">
        <div className="dist-bg-glow" aria-hidden />
        <div className="wrap dist-wrap">

          {/* Left: content */}
          <motion.div
            className="dist-copy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="dist-eyebrow">
              <span className="dist-eyebrow-line" aria-hidden />
              Partner with ROAMO
            </div>
            <h2 className="dist-heading">
              Become a ROAMO<br />
              <span className="goldtext">Distributor.</span>
            </h2>
            <p className="dist-lead">
              We are looking for passionate wholesalers, retailers, stationery shops and distribution partners across India. Join the ROAMO network and bring premium stationery to your market.
            </p>

            <div className="dist-features">
              {[
                { icon: "◈", text: "Wholesale pricing for bulk orders" },
                { icon: "◈", text: "Dedicated support from our trade team" },
                { icon: "◈", text: "Full BLAXO, BLUZO and Imperium range" },
                { icon: "◈", text: "Flexible minimum order quantities" },
              ].map((f) => (
                <div key={f.text} className="dist-feature">
                  <span className="dist-feature-icon" aria-hidden>{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            className="dist-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <div className="dist-card-inner">
              <div className="dist-card-logo">
                <img src={LOGO_URL} alt="ROAMO" width={140} height={52} />
              </div>

              <div className="dist-card-divider" aria-hidden />

              <p className="dist-card-tagline">
                Ready to stock ROAMO products? Get in touch with our trade team today.
              </p>

              <div className="dist-card-actions">
                <motion.a
                  className="dist-btn dist-btn--primary"
                  href={`https://wa.me/918174907302?text=${encodeURIComponent("Hello ROAMO, I am interested in becoming a distributor or retail partner.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, boxShadow: "0 14px 36px #d8b15a55" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Enquire on WhatsApp
                </motion.a>
              </div>

              <p className="dist-card-note">
                Our trade team responds within one business day.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <EnquiryForm />

      <footer className="footer">
        {/* ── Main footer grid ── */}
        <div className="wrap footer-main">

          {/* Col 1: Brand */}
          <div className="footer-col footer-brand-col">
            <a href="#home" className="footer-logo-link" aria-label="ROAMO home">
              <img src="/roamo-logo.png" alt="ROAMO Pencils" width={180} height={64} loading="lazy" style={{ width: 180, height: "auto" }} />
            </a>
            <div className="footer-gold-line" aria-hidden />
            <p className="footer-tagline">
              Thoughtfully designed pencils for a brighter, more creative tomorrow.
            </p>
            <div className="footer-socials">
              {/* Instagram */}
              <a href={wa("Hello ROAMO, I found you on Instagram!")} target="_blank" rel="noopener" aria-label="Instagram" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href={wa("Hello ROAMO, I found you on Facebook!")} target="_blank" rel="noopener" aria-label="Facebook" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href={wa("Hello ROAMO, I found you on LinkedIn!")} target="_blank" rel="noopener" aria-label="LinkedIn" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href={wa("Hello ROAMO, I found you on YouTube!")} target="_blank" rel="noopener" aria-label="YouTube" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-divider" aria-hidden />

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" className="footer-link">
                  <span>Home</span>
                  <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                    <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  <span>About Us</span>
                  <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                    <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href={wa(DEFAULT_MSG)} target="_blank" rel="noopener" className="footer-link">
                  <span>Contact Us</span>
                  <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                    <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-divider" aria-hidden />

          {/* Col 3: Collections */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Our Collections</h4>
            <ul className="footer-links-list footer-collections-list">
              {[
                { name: "ROAMO", msg: productMsg("ROAMO pencils") },
                { name: "Imperium", msg: productMsg("Imperium Wood-Free pencils") },
                { name: "Colour & Form", msg: productMsg("ROAMO erasers and stationery") },
                { name: "Partner Network", msg: DEFAULT_MSG },
              ].map(({ name, msg }) => (
                <li key={name}>
                  <a href={wa(msg)} target="_blank" rel="noopener" className="footer-link footer-collection-link">
                    <span className="footer-collection-name">{name}</span>
                    <svg viewBox="0 0 16 16" fill="none" width="12" height="12" className="footer-link-arrow">
                      <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-divider" aria-hidden />

          {/* Col 4: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:support@roamopencils.com" className="footer-contact-item">
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  support@roamopencils.com
                </a>
              </li>
              <li>
                <a href={wa("Hello ROAMO, I would like to enquire about your products.")} target="_blank" rel="noopener" className="footer-contact-item">
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </span>
                  WhatsApp: 8355015584
                </a>
              </li>
              <li>
                <a href={wa(DEFAULT_MSG)} target="_blank" rel="noopener" className="footer-contact-item footer-enquiry-link">
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </span>
                  Business Enquiries
                  <svg viewBox="0 0 16 16" fill="none" width="11" height="11" style={{ marginLeft: 4 }}>
                    <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <div className="wrap footer-bottom-inner">
            <span className="footer-copy">© 2024 ROAMO Pencils · Imperium Pencils · Lucknow, India</span>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="footer-bottom-sep" aria-hidden>|</span>
              <a href="/terms-conditions">Terms &amp; Conditions</a>
              <button
                className="footer-backtop"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
              >
                <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                  <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
