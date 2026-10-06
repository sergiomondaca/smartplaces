import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Shield, ShieldCheck, Sofa, Zap, Cctv, Activity, DoorOpen, Flame, Wind, CloudFog, Droplets,
  LockKeyhole, Siren, Plug, Lightbulb, Thermometer, ChevronLeft, ChevronRight, Menu, X, Check,
  Minus, Eye, Megaphone, BellRing, TrendingUp, ClipboardCheck, PenTool, Wrench, MonitorCheck,
  MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, ChevronDown, type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { enviarLead, leadSchema } from "@/lib/leads.functions";
import {
  CONTACTO, slides, pilares, zonas, tiempo, escalera, dispositivos, pasos, planes, cooperacion,
  compatibilidad, faqs, comunas, type Pilar,
} from "@/data/sitio";
import house1 from "@/assets/house1.jpg";
import cocina from "@/assets/cocina.jpg";
import living from "@/assets/living.jpg";
import energia from "@/assets/casa-energia.jpg";
import edificio from "@/assets/edificio.jpg";

const TITLE = "Smart Places | Seguridad proactiva y domótica en Santiago";
const DESC = "Domótica y seguridad residencial proactiva en Santiago: tu casa detecta, disuade y avisa antes de que algo pase. Cotiza gratis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Smart Places",
          description: DESC,
          address: { "@type": "PostalAddress", addressLocality: "Las Condes", addressRegion: "Santiago", addressCountry: "CL" },
          areaServed: "Santiago, Chile",
        }),
      },
    ],
  }),
  component: Index,
});

const imgs: Record<string, string> = { house1, cocina, living, energia };
const iconos: Record<string, LucideIcon> = { Cctv, Activity, DoorOpen, Flame, Wind, CloudFog, Droplets, LockKeyhole, Siren, Plug, Lightbulb, Thermometer };
const pilarIcon: Record<Pilar, LucideIcon> = { Seguridad: Shield, "Protección": ShieldCheck, Confort: Sofa, "Energía": Zap };
const WA = `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent("Hola Smart Places, quiero cotizar mi casa")}`;

function Index() {
  const [plan, setPlan] = useState("");
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Pilares />
        <Zonas />
        <Autorreparable />
        <Soluciones />
        <ComoFunciona />
        <Planes onCotizar={(p) => { setPlan(p); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }} />
        <Inmobiliarias />
        <Compatibilidad />
        <Faq />
        <Contacto plan={plan} setPlan={setPlan} />
      </main>
      <Footer />
      <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-status text-primary-foreground shadow-lg transition hover:scale-105">
        <MessageCircle className="h-7 w-7" />
      </a>
      <Toaster position="top-center" />
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ blanco = false }: { blanco?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 40 44" className="h-9 w-9" aria-hidden>
        <polygon points="20,2 38,12 38,32 20,42 2,32 2,12" className="fill-primary" />
        <polygon points="20,12 29,17 29,27 20,32 11,27 11,17" className="fill-accent" />
      </svg>
      <span className={`font-display text-xl lowercase tracking-tight ${blanco ? "text-primary-foreground" : "text-ink"}`}>
        <span className="font-light">smart</span> <span className="font-bold">places</span>
      </span>
    </span>
  );
}

function T({ fino, negrita, className = "" }: { fino: string; negrita: string; className?: string }) {
  return <h2 className={`text-3xl md:text-5xl ${className}`}><span className="font-light">{fino}</span> <span className="font-bold">{negrita}</span></h2>;
}

const nav = [["Inicio", "#inicio"], ["Soluciones", "#soluciones"], ["Cómo funciona", "#como-funciona"], ["Planes", "#planes"], ["Inmobiliarias", "#inmobiliarias"], ["Contacto", "#contacto"]];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${solid ? "bg-background shadow-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <a href="#inicio" aria-label="Smart Places, inicio"><Logo blanco={!solid} /></a>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className={`text-sm font-semibold transition hover:text-primary ${solid ? "text-ink" : "text-primary-foreground"}`}>{l}</a>)}
          <a href="#contacto" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent">Cotiza tu casa</a>
        </nav>
        <button className={`lg:hidden ${solid ? "text-ink" : "text-primary-foreground"}`} onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t bg-background px-5 pb-5 lg:hidden">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 font-semibold text-ink">{l}</a>)}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground">Cotiza tu casa</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);
  const go = (d: number) => setI((v) => (v + d + slides.length) % slides.length);
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[560px] overflow-hidden" aria-roledescription="carrusel"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, k) => (
        <img key={k} src={imgs[s.img]} alt="" aria-hidden width={1920} height={1088} loading={k === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${k === i ? "opacity-100" : "opacity-0"}`} />
      ))}
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-5">
        {slides.map((s, k) => k === i && (
          <div key={k} className="max-w-2xl text-primary-foreground" aria-live="polite">
            <h1 className="hero-in text-4xl leading-tight md:text-7xl"><span className="font-light">{s.titulo[0]}</span> <span className="font-bold">{s.titulo[1]}</span></h1>
            <p className="hero-in mt-5 text-lg md:text-2xl" style={{ animationDelay: "150ms" }}>{s.texto}</p>
            <a href={s.href} className="hero-in mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold transition hover:bg-accent" style={{ animationDelay: "300ms" }}>{s.cta}</a>
          </div>
        ))}
      </div>
      <button onClick={() => go(-1)} aria-label="Slide anterior" className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-primary-foreground/50 p-3 text-primary-foreground transition hover:bg-primary md:block"><ChevronLeft /></button>
      <button onClick={() => go(1)} aria-label="Slide siguiente" className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-primary-foreground/50 p-3 text-primary-foreground transition hover:bg-primary md:block"><ChevronRight /></button>
      <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Ir al slide ${k + 1}`} aria-current={k === i}
            className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2.5 bg-primary-foreground/70"}`} />
        ))}
      </div>
      <div className="diag-top absolute inset-x-0 bottom-0 h-[7vw] bg-background" />
    </section>
  );
}

function Pilares() {
  return (
    <section className="relative z-10 mx-auto -mt-4 max-w-7xl px-5 pb-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((p) => {
          const I = pilarIcon[p.nombre];
          return (
            <div key={p.nombre} className="reveal rounded-lg border bg-card p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-primary text-primary"><I className="h-7 w-7" strokeWidth={1.5} /></span>
              <h3 className="mt-4 text-xl font-bold text-ink">{p.nombre}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.texto}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Zonas() {
  const [act, setAct] = useState<number | null>(0);
  const z = act !== null ? zonas[act] : undefined;
  const tIcons = [Eye, Megaphone, BellRing, TrendingUp];
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Seguridad proactiva</p>
          <T fino="Tu casa" negrita="por zonas" className="mt-2 text-ink" />
          <p className="mt-4 text-muted-foreground">Cuatro anillos de protección. Cada uno detecta, disuade y avisa antes de que alguien llegue al siguiente.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="reveal relative overflow-hidden rounded-lg shadow-xl">
            <img src={house1} alt="Casa moderna con antejardín, reja y vereda" width={1920} height={1088} loading="lazy" className="w-full object-cover" />
            {zonas.map((zz, k) => (
              <button key={zz.n} style={{ left: `${zz.x}%`, top: `${zz.y}%` }}
                onMouseEnter={() => setAct(k)} onFocus={() => setAct(k)} onClick={() => setAct(k)}
                aria-label={`Zona ${zz.n}: ${zz.nombre}`} aria-pressed={act === k}
                className={`pulse-ring absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-bold text-primary-foreground shadow-lg transition ${act === k ? "scale-110 bg-primary" : "bg-accent"}`}>
                {zz.n}
              </button>
            ))}
          </div>
          <div className="reveal rounded-lg bg-card p-7 shadow-lg" aria-live="polite">
            {z && (
              <>
                <span className="text-sm font-semibold text-primary">Zona {z.n} de 4</span>
                <h3 className="mt-1 text-2xl font-bold text-ink">{z.nombre}</h3>
                <dl className="mt-5 space-y-4 text-sm">
                  {([["Qué detecta", z.detecta, Eye], ["Cómo disuade", z.disuade, Megaphone], ["A quién avisa", z.avisa, BellRing]] as const).map(([t, d, I]) => (
                    <div key={t} className="flex gap-3">
                      <I className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                      <div><dt className="font-semibold text-ink">{t}</dt><dd className="text-muted-foreground">{d}</dd></div>
                    </div>
                  ))}
                </dl>
              </>
            )}
            <div className="mt-6 flex gap-2">
              {zonas.map((zz, k) => <button key={zz.n} onClick={() => setAct(k)} className={`flex-1 rounded py-2 text-xs font-semibold ${act === k ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground"}`}>Zona {zz.n}</button>)}
            </div>
          </div>
        </div>
        <ol className="reveal mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {tiempo.map((t, k) => {
            const I = tIcons[k]!;
            return (
              <li key={t} className="relative flex flex-col items-center text-center">
                {k < tiempo.length - 1 && <span className="absolute left-1/2 top-7 hidden h-px w-full border-t-2 border-dashed border-accent md:block" />}
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground"><I className="h-6 w-6" strokeWidth={1.5} /></span>
                <span className="mt-3 font-display text-lg font-bold text-ink">{t}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Autorreparable() {
  return (
    <section className="diag-both bg-primary py-[10vw] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Siempre funcionando</p>
          <T fino="Un sistema que se" negrita="repara solo" className="mt-2" />
          <p className="mt-4 text-lg text-primary-foreground/90">Si una cámara o el internet fallan, el sistema se recupera automáticamente. Si no puede, avisa a nuestro técnico, no a ti.</p>
          <ol className="mt-8 flex flex-col gap-4 md:flex-row md:gap-2">
            {escalera.map((e, k) => (
              <li key={e} className="flex items-center gap-3 md:flex-1 md:flex-col md:text-center">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-primary-foreground font-bold">{k + 1}</span>
                <span className="text-sm font-semibold">{e}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="reveal rounded-lg bg-card p-6 text-card-foreground shadow-2xl">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Estado del sistema</h3>
            <span className="rounded bg-surface px-2 py-1 text-xs text-muted-foreground">Ejemplo</span>
          </div>
          <ul className="mt-4 divide-y">
            {["Cámara vereda", "Cámara reja", "Cámara acceso", "Cámara patio"].map((c) => (
              <li key={c} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-2"><Cctv className="h-4 w-4 text-muted-foreground" />{c}</span>
                <span className="flex items-center gap-2 text-status"><span className="h-2 w-2 rounded-full bg-status" />En línea</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded bg-surface p-3"><p className="text-muted-foreground">Disponibilidad de grabación</p><p className="font-display text-2xl font-bold text-primary">99,8 %</p></div>
            <div className="rounded bg-surface p-3"><p className="text-muted-foreground">Recuperaciones automáticas este mes</p><p className="font-display text-2xl font-bold text-primary">7</p></div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Última revisión: hace 2 min</p>
        </div>
      </div>
    </section>
  );
}

function Soluciones() {
  const [f, setF] = useState<Pilar | "Todos">("Todos");
  const tabs = ["Todos", "Seguridad", "Protección", "Confort", "Energía"] as const;
  const lista = f === "Todos" ? dispositivos : dispositivos.filter((d) => d.pilar === f);
  return (
    <section id="soluciones" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal text-center">
          <T fino="Nuestras" negrita="soluciones" className="text-ink" />
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Dispositivos que trabajan juntos, orquestados desde una sola app.</p>
        </div>
        <div role="tablist" className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={f === t} onClick={() => setF(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${f === t ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground hover:text-primary"}`}>{t}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lista.map((d) => {
            const I = iconos[d.icono] ?? Shield;
            return (
              <div key={d.nombre} className="rounded-lg border p-6 transition hover:border-primary hover:shadow-md">
                <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-primary text-primary"><I className="h-5 w-5" strokeWidth={1.5} /></span>
                <h3 className="mt-4 font-bold text-ink">{d.nombre}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const I = [ClipboardCheck, PenTool, Wrench, MonitorCheck];
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <T fino="Cómo" negrita="funciona" className="reveal text-center text-ink" />
        <ol className="mt-14 grid gap-10 md:grid-cols-4">
          {pasos.map((p, k) => {
            const Ic = I[k]!;
            return (
              <li key={p.titulo} className="reveal relative text-center">
                {k < pasos.length - 1 && <span className="absolute left-1/2 top-10 hidden w-full border-t-2 border-dotted border-primary md:block" />}
                <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-primary bg-background text-primary"><Ic className="h-8 w-8" strokeWidth={1.5} /></span>
                <p className="mt-4 text-sm font-semibold text-primary">Paso {k + 1}</p>
                <h3 className="text-lg font-bold text-ink">{p.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.texto}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Planes({ onCotizar }: { onCotizar: (p: string) => void }) {
  return (
    <section id="planes" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal text-center">
          <T fino="Elige tu" negrita="plan" className="text-ink" />
          <p className="mt-4 text-muted-foreground">Instalación + mensualidad de monitoreo. Precio según tu casa.</p>
        </div>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {planes.map((p) => (
            <div key={p.nombre} className={`reveal relative flex flex-col rounded-lg bg-card p-8 ${p.destacado ? "border-2 border-primary shadow-xl md:-translate-y-3" : "border shadow-sm"}`}>
              {p.destacado && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">Más elegido</span>}
              <h3 className="text-2xl font-bold text-ink">{p.nombre}</h3>
              <p className="text-sm text-muted-foreground">{p.sub}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => <li key={it} className="flex gap-2 text-sm"><Check className="h-5 w-5 shrink-0 text-primary" />{it}</li>)}
              </ul>
              <p className="mt-6 font-display text-lg font-bold text-ink">Precio según tu casa</p>
              <p className="text-xs text-muted-foreground">Instalación + mensualidad de monitoreo</p>
              <button onClick={() => onCotizar(p.nombre)} className={`mt-5 rounded-full py-3 font-semibold transition ${p.destacado ? "bg-primary text-primary-foreground hover:bg-accent" : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}>Cotizar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inmobiliarias() {
  return (
    <section id="inmobiliarias" className="scroll-mt-20 overflow-hidden bg-surface">
      <div className="grid lg:grid-cols-2">
        <div className="reveal mx-auto max-w-xl px-5 py-20 lg:ml-auto lg:pr-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Inmobiliarias y condominios</p>
          <T fino="Partners de tu" negrita="proyecto inmobiliario" className="mt-2 text-ink" />
          <p className="mt-4 text-muted-foreground">Implementamos domótica y seguridad por vivienda, equipamos el departamento modelo como piloto, capacitamos a tu sala de ventas y te entregamos material promocional para diferenciar tu proyecto.</p>
          <div className="mt-8 overflow-x-auto rounded-lg bg-card shadow">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="p-3 text-left font-semibold text-ink">Cooperación</th>{cooperacion.niveles.map((n) => <th key={n} className="p-3 text-center font-semibold text-primary">{n}</th>)}</tr></thead>
              <tbody>
                {cooperacion.filas.map((f) => (
                  <tr key={f.item} className="border-b last:border-0">
                    <td className="p-3 text-muted-foreground">{f.item}</td>
                    {f.v.map((v, k) => <td key={k} className="p-3 text-center">{v ? <Check className="mx-auto h-5 w-5 text-primary" aria-label="Sí" /> : <Minus className="mx-auto h-5 w-5 text-surface-2" aria-label="No" />}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="#contacto" className="mt-8 inline-block rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:bg-accent">Agenda una reunión</a>
        </div>
        <img src={edificio} alt="Edificio residencial moderno en Las Condes" width={1200} height={1408} loading="lazy" className="diag-left h-72 w-full object-cover lg:h-full" />
      </div>
    </section>
  );
}

function Compatibilidad() {
  return (
    <section className="border-y bg-surface py-14">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="text-2xl text-ink"><span className="font-light">Trabajamos con</span> <span className="font-bold">estándares abiertos</span></h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {compatibilidad.map((c) => <li key={c} className="rounded-full border bg-card px-5 py-2 text-sm font-semibold text-muted-foreground">{c}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const [o, setO] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <T fino="Preguntas" negrita="frecuentes" className="reveal text-center text-ink" />
        <div className="mt-10 divide-y rounded-lg border">
          {faqs.map((f, k) => (
            <div key={f.p}>
              <button onClick={() => setO(o === k ? null : k)} aria-expanded={o === k} className="flex w-full items-center justify-between p-5 text-left font-semibold text-ink">
                {f.p}<ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${o === k ? "rotate-180" : ""}`} />
              </button>
              {o === k && <p className="px-5 pb-5 text-muted-foreground">{f.r}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const vacio = { nombre: "", email: "", telefono: "", comuna: "", tipoPropiedad: "", mensaje: "" };

function Campo({ label, error, children, id }: { label: string; error?: string | undefined; children: ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-ink">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}

function Contacto({ plan, setPlan }: { plan: string; setPlan: (p: string) => void }) {
  const [v, setV] = useState(vacio);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<Record<string, string>>({});
  const [enviando, setEnviando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inp = "w-full rounded border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
  const set = (k: keyof typeof vacio) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });

  async function submit(e: FormEvent) {
    e.preventDefault();
    const data = { ...v, plan, consentimiento: ok };
    const r = leadSchema.safeParse(data);
    if (!r.success) {
      const m: Record<string, string> = {};
      r.error.issues.forEach((i) => { const k = String(i.path[0]); if (!m[k]) m[k] = i.message; });
      setErr(m); return;
    }
    setErr({}); setEnviando(true);
    try {
      await enviarLead({ data: r.data });
      toast.success("¡Gracias! Te contactaremos pronto para agendar tu visita.");
      setV(vacio); setOk(false); setPlan("");
    } catch {
      toast.error("No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally { setEnviando(false); }
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal rounded-lg bg-card p-8 shadow-lg">
          <T fino="Cotiza" negrita="tu casa" className="text-ink" />
          <p className="mt-2 text-muted-foreground">Visita técnica y diagnóstico gratuito.</p>
          <form ref={formRef} onSubmit={submit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
            <Campo id="nombre" label="Nombre" error={err["nombre"]}><input id="nombre" className={inp} value={v.nombre} onChange={set("nombre")} autoComplete="name" /></Campo>
            <Campo id="email" label="Email" error={err["email"]}><input id="email" type="email" className={inp} value={v.email} onChange={set("email")} autoComplete="email" /></Campo>
            <Campo id="telefono" label="Teléfono" error={err["telefono"]}><input id="telefono" type="tel" className={inp} value={v.telefono} onChange={set("telefono")} autoComplete="tel" placeholder="+56 9" /></Campo>
            <Campo id="comuna" label="Comuna" error={err["comuna"]}>
              <select id="comuna" className={inp} value={v.comuna} onChange={set("comuna")}>
                <option value="">Selecciona…</option>{comunas.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Campo>
            <Campo id="tipo" label="Tipo de propiedad" error={err["tipoPropiedad"]}>
              <select id="tipo" className={inp} value={v.tipoPropiedad} onChange={set("tipoPropiedad")}>
                <option value="">Selecciona…</option>
                <option value="casa">Casa</option><option value="departamento">Departamento</option>
                <option value="condominio">Condominio</option><option value="inmobiliaria">Inmobiliaria</option>
              </select>
            </Campo>
            <Campo id="plan" label="Plan de interés">
              <select id="plan" className={inp} value={plan} onChange={(e) => setPlan(e.target.value)}>
                <option value="">Aún no sé</option>{planes.map((p) => <option key={p.nombre}>{p.nombre}</option>)}
              </select>
            </Campo>
            <div className="sm:col-span-2">
              <Campo id="mensaje" label="Mensaje" error={err["mensaje"]}><textarea id="mensaje" rows={4} className={inp} value={v.mensaje} onChange={set("mensaje")} /></Campo>
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} className="mt-1 h-4 w-4 accent-primary" />
                Acepto que Smart Places use mis datos para contactarme sobre esta solicitud.
              </label>
              {err["consentimiento"] && <p className="mt-1 text-xs text-destructive" role="alert">{err["consentimiento"]}</p>}
            </div>
            <button disabled={enviando} className="rounded-full bg-primary py-4 font-semibold text-primary-foreground transition hover:bg-accent disabled:opacity-60 sm:col-span-2">
              {enviando ? "Enviando…" : "Solicitar visita gratuita"}
            </button>
          </form>
        </div>
        <div className="reveal flex flex-col gap-6">
          <ul className="space-y-4 rounded-lg bg-card p-7 shadow">
            <li className="flex gap-3"><MapPin className="text-primary" />{CONTACTO.direccion}</li>
            <li className="flex gap-3"><Phone className="text-primary" /><a href={`tel:${CONTACTO.telefono.replace(/\s/g, "")}`} className="hover:text-primary">{CONTACTO.telefono}</a></li>
            <li className="flex gap-3"><Mail className="text-primary" /><a href={`mailto:${CONTACTO.email}`} className="hover:text-primary">{CONTACTO.email}</a></li>
            <li><a href={WA} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-full bg-status px-5 py-3 font-semibold text-primary-foreground"><MessageCircle className="h-5 w-5" />Escríbenos por WhatsApp</a></li>
          </ul>
          <iframe title="Mapa de Las Condes, Santiago" src="https://www.google.com/maps?q=Las+Condes,+Santiago,+Chile&z=13&output=embed" loading="lazy"
            className="h-80 w-full flex-1 rounded-lg border-0 shadow grayscale" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <Logo blanco />
        <nav className="flex flex-wrap gap-5 text-sm">{nav.map(([l, h]) => <a key={h} href={h} className="opacity-80 hover:opacity-100">{l}</a>)}</nav>
        <div className="flex gap-4">
          {[[Instagram, "Instagram"], [Facebook, "Facebook"], [Linkedin, "LinkedIn"]].map(([I, n]) => {
            const Ic = I as LucideIcon;
            return <a key={n as string} href="#" aria-label={n as string} className="grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/30 hover:bg-primary"><Ic className="h-4 w-4" /></a>;
          })}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-ink-foreground/15 px-5 pt-6 text-xs opacity-70 md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Smart Places SpA</span>
        <a href="#" className="hover:underline">Política de privacidad</a>
      </div>
    </footer>
  );
}
