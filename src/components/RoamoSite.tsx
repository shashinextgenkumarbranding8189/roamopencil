import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/assets/roamo-logo.png.asset.json";
import blaxo from "@/assets/blaxo.jpg";
import bluzo from "@/assets/bluzo.jpg";

const WA_NUMBER = "918174907302";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const DEFAULT_MSG = "Hello ROAMO, I am interested in your stationery products.";
const productMsg = (p: string) => `Hello ROAMO, I am interested in ${p}.`;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const NAV = [
  { href: "#roamo", label: "ROAMO Pencils" },
  { href: "#imperium", label: "Imperium Pencils" },
  { href: "#erasers", label: "Erasers" },
  { href: "#partner", label: "Business Partner" },
];

const tap = { whileTap: { scale: 0.97 } };

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const sentinel = document.getElementById("home");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([e]) => setScrolled(e.boundingClientRect.top < -40),
      { threshold: [0, 0.9, 1] },
    );
    io.observe(sentinel);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap navin">
        <a className="brand" href="#home" aria-label="ROAMO home">
          <img src={logo.url} alt="ROAMO" width={166} height={58} />
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
          const desktop = !!c.conditions?.desktop;
          const ease = "power3.out";

          // HERO timeline
          const tl = gsap.timeline({ defaults: { ease } });
          tl.from(".hero .eyebrow", { opacity: 0, x: -16, duration: 0.7 })
            .from(".hero h1 .line > span", { yPercent: 110, duration: 1.1, stagger: 0.12, ease: "power4.out" }, "-=0.4")
            .from(".hero-copy > p", { opacity: 0, y: 18, duration: 0.8 }, "-=0.6")
            .from(".hero-actions > .cta", { opacity: 0, y: 16, duration: 0.6, stagger: 0.12 }, "-=0.5")
            .from(".proof span", { opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
            .from(".hero-art", { clipPath: "inset(12% 12% 12% 12% round 28px)", opacity: 0, duration: 1.3, ease: "expo.out" }, 0.25)
            .from("#heroProduct", { scale: 1.15, duration: 1.6, ease: "expo.out" }, 0.3)
            .from(".hero-art .ring", { scale: 0.6, opacity: 0, duration: 1.4, stagger: 0.15 }, 0.5)
            .from(".art-tag", { opacity: 0, y: 14, duration: 0.7 }, "-=0.8")
            .from(".scroll-cue", { opacity: 0, duration: 0.8 }, "-=0.4");

          if (desktop) {
            gsap.to(".hero-art-inner", {
              yPercent: -8,
              ease: "none",
              scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
            });
            gsap.to(".hero-glow", {
              x: 40, y: 30, scale: 1.1, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut",
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
        <div className="hero-glow" aria-hidden />
        <div className="wrap hero-grid">
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
              <motion.a className="btn gold cta" href="#roamo" {...tap}>
                Explore products <span>↗</span>
              </motion.a>
              <motion.a className="btn dark cta" href="#partner" {...tap}>
                Become a business partner
              </motion.a>
            </div>
            <div className="proof">
              <span>Designed for everyday writing</span>
              <span>Retail &amp; bulk enquiries</span>
            </div>
          </div>
          <div className="hero-art-inner">
            <div className="hero-art">
              <i className="ring" aria-hidden />
              <i className="ring sm" aria-hidden />
              <img id="heroProduct" src={blaxo} alt="ROAMO BLAXO pencil packaging" width={1024} height={1024} />
              <div className="art-tag">
                <b>ROAMO Pencils</b>
                <span>BLUZO · BLAXO · More to come</span>
              </div>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#roamo" aria-label="Scroll to products">
          Scroll <i />
        </a>
      </header>

      <div className="intro-strip">
        <div className="wrap stripin">
          <div className="stripitem"><strong>ROAMO</strong><span>Distinctive pencil collections</span></div>
          <div className="stripitem"><strong>Imperium</strong><span>Wood-Free pencil range</span></div>
          <div className="stripitem"><strong>Colour &amp; form</strong><span>Erasers and stationery essentials</span></div>
          <div className="stripitem"><strong>Partner network</strong><span>Retail, distribution and bulk supply</span></div>
        </div>
      </div>

      <main>
        <section className="section" id="roamo">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">01 / The signature range</div>
                <h2>Meet the ROAMO pencils.</h2>
              </div>
              <p>
                Explore the BLAXO and BLUZO ranges, built around memorable packaging and a clear product identity.
                Contact us for current availability and trade enquiries.
              </p>
            </div>
            <div className="rule" />
            <div className="products">
              {[
                { name: "BLAXO", pill: "Black series", img: blaxo, alt: "ROAMO BLAXO pencil pack", text: "A bold, premium-looking pencil range with a distinctive black-and-gold visual identity." },
                { name: "BLUZO", pill: "Blue series", img: bluzo, alt: "ROAMO BLUZO pencil packaging", text: "A fresh blue-accented pencil range designed to stand apart on the stationery shelf." },
              ].map((p) => (
                <motion.article key={p.name} className="product" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
                  <div className="product-img">
                    <img src={p.img} alt={p.alt} width={1024} height={1024} loading="lazy" />
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
            </div>
          </div>
        </section>

        <section className="section imperium" id="imperium">
          <div className="wrap imperium-grid">
            <div className="imperium-copy">
              <div className="section-kicker">02 / Imperium Pencils</div>
              <h2>Rethink the everyday pencil.</h2>
              <p>
                Discover the Imperium Wood-Free Pencil range. Product details and photographs can be updated as the
                range expands.
              </p>
              <div className="feature-list">
                <div className="feature">Wood-Free range</div>
                <div className="feature">Everyday writing</div>
                <div className="feature">Retail enquiries</div>
                <div className="feature">Future SKUs</div>
              </div>
              <motion.a className="btn gold cta" href={wa(productMsg("Imperium Wood-Free pencils"))} target="_blank" rel="noopener" {...tap}>
                Ask about Imperium <span>↗</span>
              </motion.a>
            </div>
            <div className="imperium-art">
              <img src={bluzo} alt="Pencil product visual" width={1024} height={1024} loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section erasers" id="erasers">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">03 / More stationery</div>
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
              <div className="eraser-tile">
                <div>
                  <div className="section-kicker">ROAMO Erasers</div>
                  <h3>Colour your stationery shelf.</h3>
                  <p>Explore colourful, triangular, neon and other eraser styles as product photography becomes available.</p>
                </div>
                <div className="num">01 — 03</div>
              </div>
              <div className="eraser-tile">
                <div>
                  <div className="section-kicker">Future collections</div>
                  <h3>More products, one clear identity.</h3>
                  <p>Designed to make space for new SKUs without rebuilding the website layout each time.</p>
                </div>
                <a className="textlink" href={wa("Hello ROAMO, I would like to discuss bulk requirements.")} target="_blank" rel="noopener">
                  Discuss bulk requirements <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

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
                  Business enquiries: <a href="tel:+918174907302">8174907302</a>
                </p>
              </div>
              <motion.a className="btn gold cta" id="whatsappLink" href={wa(DEFAULT_MSG)} target="_blank" rel="noopener" {...tap}>
                Start a WhatsApp enquiry <span>↗</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footerin">
          <a className="footbrand" href="#home">
            <img src={logo.url} alt="ROAMO" width={118} height={42} loading="lazy" />
          </a>
          <div>ROAMO Pencils · Imperium Pencils · Lucknow, India</div>
          <div className="footerlinks">
            <a href="mailto:support@roamopencils.com">support@roamopencils.com</a>
            <a href="tel:+918174907302">Call: 8174907302</a>
            <a href="#partner">Business enquiries</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
