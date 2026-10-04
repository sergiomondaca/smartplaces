import { createFileRoute } from "@tanstack/react-router";

import heroHouse from "@/assets/hero-house.jpg";
import phoneScene from "@/assets/phone-scene.jpg";
import cameraLock from "@/assets/camera-lock.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Places — Automatización, IoT y Seguridad Integral" },
      {
        name: "description",
        content:
          "Smart Places integra dispositivos de distintas marcas en una sola app: automatización, seguridad, vigilancia, confort y alarmas para casas, departamentos y empresas.",
      },
      { property: "og:title", content: "Smart Places — Tu lugar, orquestado" },
      {
        property: "og:description",
        content:
          "Automatización, IoT, seguridad y confort orquestados desde una sola app. Paquetes para casas, departamentos y empresas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "40+", label: "Marcas integradas" },
  { value: "0.4s", label: "Respuesta al toque" },
  { value: "100%", label: "Bajo tu control" },
  { value: "24/7", label: "Monitoreo activo" },
];

const devices = [
  { label: "Luces · escena noche", delay: "0s" },
  { label: "Clima · 21°", delay: ".3s" },
  { label: "Puerta · cerrada", delay: ".6s" },
  { label: "Cámara · activa", delay: ".9s" },
];

const services = [
  {
    n: "01",
    title: "Automatización",
    text: "Escenas y rutinas que se ejecutan solas según tu día.",
  },
  {
    n: "02",
    title: "Seguridad",
    text: "Sensores, control de accesos y respaldo ante intrusiones.",
  },
  {
    n: "03",
    title: "Vigilancia",
    text: "Cámaras y monitoreo remoto desde tu teléfono.",
  },
  {
    n: "04",
    title: "Confort",
    text: "Clima, audio y cortinas que se adaptan a ti.",
  },
];

const packages = [
  {
    tag: "Residencial",
    title: "Casa",
    features: [
      "Automatización de luces y clima",
      "Cámaras y sensores",
      "App integradora",
    ],
    cta: "Cotizar casa",
    featured: false,
  },
  {
    tag: "Departamento",
    title: "Depto",
    features: ["Accesos y cerraduras", "Escenas compactas", "Monitoreo remoto"],
    cta: "Cotizar departamento",
    featured: true,
  },
  {
    tag: "Empresarial",
    title: "Empresa",
    features: [
      "Alarmas y control de accesos",
      "Vigilancia multi-sitio",
      "Panel centralizado",
    ],
    cta: "Cotizar empresa",
    featured: false,
  },
];

const clients = [
  "Norte Residencial",
  "Casa Aurora",
  "Torre Vela",
  "Grupo Meridiano",
  "Hotel Solana",
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-line/70 bg-background/85 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <a href="#" className="font-display text-2xl tracking-tight">
            Smart<span className="text-primary">Places</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#ecosistema" className="transition-colors hover:text-foreground">
              Ecosistema
            </a>
            <a href="#servicios" className="transition-colors hover:text-foreground">
              Servicios
            </a>
            <a href="#paquetes" className="transition-colors hover:text-foreground">
              Paquetes
            </a>
            <a href="#contacto" className="transition-colors hover:text-foreground">
              Contacto
            </a>
          </div>
          <a
            href="#contacto"
            className="rounded-[4px] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
          >
            Cotizar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative">
        <div className="bg-diagonal-lines pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-14 pt-20">
          <div className="anim-rise flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.2em] text-primary">
            <span className="anim-flick h-2 w-2 rounded-full bg-primary" />
            Un toque. Toda la casa responde.
          </div>
          <h1 className="mt-6 font-display text-[clamp(3.4rem,11vw,9.5rem)] uppercase leading-[.84] tracking-tight">
            <span className="anim-rise block" style={{ animationDelay: "80ms" }}>
              Enciende
            </span>
            <span className="anim-rise block" style={{ animationDelay: "160ms" }}>
              tu <span className="text-primary">casa</span>
            </span>
            <span className="anim-rise block" style={{ animationDelay: "240ms" }}>
              con una app
            </span>
          </h1>
          <p
            className="anim-rise mt-8 max-w-[52ch] text-pretty text-lg text-muted-foreground"
            style={{ animationDelay: "320ms" }}
          >
            Smart Places integra tus dispositivos de distintas marcas en una
            sola plataforma: automatización, seguridad, vigilancia, confort y
            alarmas, orquestados al instante.
          </p>
          <div
            className="anim-rise mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#contacto"
              className="rounded-[4px] bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-foreground"
            >
              Cotizar mi proyecto
            </a>
            <a
              href="#ecosistema"
              className="rounded-[4px] border border-line px-6 py-3 transition-colors hover:border-primary hover:text-primary"
            >
              Ver el ecosistema
            </a>
          </div>
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6">
          <img
            src={heroHouse}
            alt="Casa moderna al anochecer con iluminación inteligente y cámara de seguridad"
            width={1600}
            height={704}
            className="aspect-[16/7] w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-border"
          />
        </div>
      </header>

      {/* Stats */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosistema */}
      <section id="ecosistema" className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-none tracking-tight">
            El ecosistema
            <br />
            <span className="text-primary">que responde</span>
          </h2>
          <p className="max-w-[34ch] text-pretty text-sm text-muted-foreground">
            Cada dispositivo, sin importar la marca, obedece al mismo lenguaje.
            Una app, reglas que se ejecutan solas.
          </p>
        </div>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-5">
          <div className="flex min-h-[320px] flex-col justify-between rounded-[min(1vw,12px)] bg-surface p-8 ring-1 ring-line md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[.2em] text-primary">
              App integradora · Smart Places
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {devices.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3 rounded-[6px] border border-line p-4"
                >
                  <span
                    className="anim-glow h-3 w-3 rounded-full bg-primary"
                    style={{ animationDelay: d.delay }}
                  />
                  <span className="text-sm">{d.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              Reglas que se activan solas: al abrir la puerta principal, las
              luces y el clima responden.
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6 md:col-span-2">
            <img
              src={phoneScene}
              alt="Mano sosteniendo un teléfono con la app de control del hogar"
              width={816}
              height={816}
              loading="lazy"
              className="h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-border"
            />
            <img
              src={cameraLock}
              alt="Cámara de seguridad y cerradura inteligente en una puerta de entrada"
              width={816}
              height={816}
              loading="lazy"
              className="h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-border"
            />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <div className="mb-8 font-mono text-[11px] uppercase tracking-[.2em] text-primary">
            (a) Servicios integrales
          </div>
          <div className="grid gap-px overflow-hidden rounded-[min(1vw,12px)] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.n}
                className="group flex min-h-[220px] flex-col justify-between bg-background p-7 transition-colors hover:bg-surface"
              >
                <span className="font-mono text-xs text-primary">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl uppercase">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section id="paquetes" className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-none tracking-tight">
            Paquetes por
            <br />
            <span className="text-primary">segmento</span>
          </h2>
          <p className="max-w-[30ch] text-pretty text-sm text-muted-foreground">
            Soluciones armadas para tu tipo de espacio. Cotización a la medida.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.title}
              className={
                p.featured
                  ? "relative flex flex-col overflow-hidden rounded-[min(1vw,12px)] bg-surface p-8 ring-1 ring-primary"
                  : "flex flex-col rounded-[min(1vw,12px)] bg-surface p-8 ring-1 ring-line"
              }
            >
              {p.featured && (
                <div className="anim-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-primary/10" />
              )}
              <div
                className={
                  p.featured
                    ? "font-mono text-[11px] uppercase tracking-[.2em] text-primary"
                    : "font-mono text-[11px] uppercase tracking-[.2em] text-muted-foreground"
                }
              >
                {p.tag}
              </div>
              <div className="mt-3 font-display text-3xl uppercase">{p.title}</div>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <div key={f} className="flex gap-2">
                    <span className="text-primary">→</span> {f}
                  </div>
                ))}
              </div>
              <a
                href="#contacto"
                className={
                  p.featured
                    ? "mt-8 rounded-[4px] bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
                    : "mt-8 rounded-[4px] border border-line py-3 text-center text-sm transition-colors hover:border-primary hover:text-primary"
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="mb-8 font-mono text-[11px] uppercase tracking-[.2em] text-primary">
            (b) Confían en Smart Places
          </div>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 font-display text-2xl uppercase tracking-tight text-muted-foreground">
            {clients.map((c) => (
              <span key={c} className="opacity-70">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="relative overflow-hidden border-t border-line">
        <div className="bg-diagonal-lines pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-28 text-center">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[.85] tracking-tight">
            Cotiza tu
            <br />
            <span className="text-primary">proyecto hoy</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-pretty text-lg text-muted-foreground">
            Cuéntanos tu espacio. Diseñamos, instalamos y orquestamos todo bajo
            una sola app.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contacto@smartplaces.cl"
              className="rounded-[4px] bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-foreground"
            >
              Solicitar cotización
            </a>
            <a
              href="mailto:contacto@smartplaces.cl"
              className="rounded-[4px] border border-line px-8 py-4 transition-colors hover:border-primary hover:text-primary"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-background">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-10">
          <a href="#" className="font-display text-2xl tracking-tight">
            Smart<span className="text-primary">Places</span>
          </a>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              WhatsApp
            </a>
            <a
              href="mailto:contacto@smartplaces.cl"
              className="transition-colors hover:text-foreground"
            >
              contacto@smartplaces.cl
            </a>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            © 2026 Smart Places · Automatización · IoT · Seguridad
          </div>
        </div>
      </footer>
    </div>
  );
}
