import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Places — Tu casa actúa antes de que algo pase" },
      {
        name: "description",
        content:
          "Domótica y seguridad inteligente en Santiago de Chile. Sistemas que disuaden al intruso antes de que cruce la primera barrera. Evaluación gratuita.",
      },
      { property: "og:title", content: "Smart Places — Tu casa actúa antes de que algo pase" },
      {
        property: "og:description",
        content:
          "Seguridad proactiva y automatización integral para casas, departamentos y empresas. Todo orquestado desde una sola app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/56900000000?text=Hola%20Smart%20Places%2C%20quiero%20una%20evaluaci%C3%B3n%20gratuita";

const problemas = [
  {
    antes: "Reacciona tarde",
    despues: "Disuade temprano",
    detalle:
      "La alarma tradicional suena cuando el intruso ya está adentro. Smart Places actúa en la vereda: luz focal, voz disuasiva y alerta antes del primer cruce.",
  },
  {
    antes: "Cámaras que nadie mira",
    despues: "IA que detecta y actúa",
    detalle:
      "Grabar lo que ya pasó no protege. Nuestras cámaras con IA reconocen merodeo, distinguen personas de mascotas y gatillan acciones reales.",
  },
  {
    antes: "Falla y nadie avisa",
    despues: "Se recupera sola",
    detalle:
      "Monitoreo de salud del sistema 24/7. Si un sensor se desconecta o falla la red, el sistema avisa y conmuta a respaldo automáticamente.",
  },
];

const zonas = [
  {
    id: 1,
    nombre: "Perímetro / vereda",
    sensor: "Cámara con IA detecta merodeo",
    disuasion: "Luz focal + mensaje de voz disuasivo",
    escalamiento: "Registro del evento y aviso silencioso a tu celular",
    segundo: "0",
  },
  {
    id: 2,
    nombre: "Reja / antejardín",
    sensor: "Sensor de apertura o cruce de línea",
    disuasion: "Sirena corta + luces de la casa encendidas",
    escalamiento: "Notificación inmediata a tu celular con video en vivo",
    segundo: "5",
  },
  {
    id: 3,
    nombre: "Fachada / accesos",
    sensor: "Intento de apertura en puerta o ventana",
    disuasion: "Sirena completa + iluminación total",
    escalamiento: "Alerta a vecinos y contactos de confianza",
    segundo: "15",
  },
  {
    id: 4,
    nombre: "Interior",
    sensor: "Intrusión confirmada por sensores interiores",
    disuasion: "Alarma máxima + grabación continua",
    escalamiento: "Botón de pánico y aviso a central de monitoreo",
    segundo: "30",
  },
];

const planes = [
  {
    nombre: "Hogar Esencial",
    precio: "$19.990",
    detalle: "Para departamentos y casas compactas",
    items: ["Cámaras con IA en accesos", "Sensores de apertura", "App con alertas en vivo", "Soporte remoto"],
  },
  {
    nombre: "Hogar Proactivo",
    precio: "$34.990",
    destacado: true,
    detalle: "La defensa por zonas completa",
    items: ["Todo lo de Hogar Esencial", "Disuasión por zonas (luz, voz, sirena)", "Monitoreo de salud del sistema", "Respaldos y recuperación automática"],
  },
  {
    nombre: "Empresa",
    precio: "A medida",
    detalle: "Locales, oficinas y multi-sitio",
    items: ["Control de accesos", "Vigilancia multi-sitio", "Central de monitoreo", "SLA y soporte prioritario"],
  },
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-4 w-4"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .8-.2 1.4Z" /></svg>;
}

/* Plano isométrico de la casa con anillos concéntricos que se iluminan hacia adentro */
function HouseRings() {
  const anillos = [
    { rx: 300, ry: 128, delay: "0s", label: "Zona 1" },
    { rx: 232, ry: 99, delay: "0.6s", label: "Zona 2" },
    { rx: 164, ry: 70, delay: "1.2s", label: "Zona 3" },
    { rx: 96, ry: 41, delay: "1.8s", label: "Zona 4" },
  ];
  return (
    <svg viewBox="0 0 640 360" className="w-full" role="img" aria-label="Plano de casa con anillos de seguridad por zonas">
      <defs>
        <linearGradient id="houseFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.24 0.045 215)" />
          <stop offset="100%" stopColor="oklch(0.19 0.018 240)" />
        </linearGradient>
      </defs>
      {anillos.map((a) => (
        <g key={a.label}>
          <ellipse
            cx="320" cy="220" rx={a.rx} ry={a.ry}
            fill="none" stroke="var(--color-primary)" strokeWidth="1.5"
            className="ring-wave" style={{ animationDelay: a.delay }}
          />
          <text
            x={320 + a.rx * 0.72} y={220 - a.ry * 0.72}
            fill="var(--color-muted-foreground)" fontSize="10" fontFamily="Space Grotesk, sans-serif"
            className="ring-wave" style={{ animationDelay: a.delay }}
          >
            {a.label}
          </text>
        </g>
      ))}
      {/* Casa isométrica */}
      <g>
        <path d="M320 130 400 176 320 222 240 176Z" fill="url(#houseFill)" stroke="var(--color-primary)" strokeWidth="1.5" />
        <path d="M240 176 320 222 320 268 240 222Z" fill="oklch(0.17 0.02 240)" stroke="var(--color-border)" strokeWidth="1" />
        <path d="M400 176 320 222 320 268 400 222Z" fill="oklch(0.21 0.03 230)" stroke="var(--color-border)" strokeWidth="1" />
        {/* Ventanas encendidas */}
        <path d="M262 196 296 216 296 238 262 218Z" fill="var(--color-primary)" opacity="0.85" />
        <path d="M344 216 378 196 378 218 344 238Z" fill="var(--color-primary)" opacity="0.5" />
        {/* Punto central: la casa protegida */}
        <circle cx="320" cy="220" r="5" fill="var(--color-status)" className="status-dot" />
      </g>
    </svg>
  );
}

/* Diagrama interactivo de seguridad por zonas */
function ZonasInteractivas() {
  const [activa, setActiva] = useState(0);
  const zona = zonas[activa];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      {/* Anillos clicables */}
      <div className="relative mx-auto w-full max-w-[520px]">
        <svg viewBox="0 0 520 320" className="w-full">
          {zonas.map((z, i) => {
            const rx = 240 - i * 56;
            const ry = 130 - i * 30;
            const seleccionado = i === activa;
            return (
              <ellipse
                key={z.id}
                cx="260" cy="170" rx={rx} ry={ry}
                fill={seleccionado ? "color-mix(in oklab, var(--color-primary) 8%, transparent)" : "transparent"}
                stroke={seleccionado ? "var(--color-primary)" : "var(--color-border)"}
                strokeWidth={seleccionado ? 2.5 : 1.5}
                className="cursor-pointer transition-all duration-300 hover:stroke-primary"
                onClick={() => setActiva(i)}
                style={seleccionado ? { filter: "drop-shadow(0 0 12px color-mix(in oklab, var(--color-primary) 60%, transparent))" } : undefined}
              />
            );
          })}
          <circle cx="260" cy="170" r="6" fill="var(--color-status)" className="status-dot" />
          <text x="260" y="196" textAnchor="middle" fill="var(--color-muted-foreground)" fontSize="11" fontFamily="Space Grotesk, sans-serif">TU CASA</text>
        </svg>
        {/* Botones de zona */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {zonas.map((z, i) => (
            <button
              key={z.id}
              onClick={() => setActiva(i)}
              className={`rounded-md border px-2 py-2.5 text-xs font-semibold transition-all ${
                i === activa
                  ? "border-primary bg-accent text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              Zona {z.id}
            </button>
          ))}
        </div>
      </div>

      {/* Detalle de la zona activa */}
      <div key={zona.id} className="anim-rise glass rounded-xl p-7 md:p-9">
        <div className="flex items-center justify-between">
          <div className="section-label">Zona {zona.id}</div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="status-dot h-2 w-2 rounded-full bg-status" />
            Activa 24/7
          </div>
        </div>
        <h3 className="mt-4 font-display text-3xl font-bold">{zona.nombre}</h3>
        <div className="mt-7 space-y-5">
          {[
            ["Sensor", zona.sensor, "text-foreground"],
            ["Disuasión", zona.disuasion, "text-primary"],
            ["Escalamiento", zona.escalamiento, "text-foreground"],
          ].map(([etapa, texto, color], i) => (
            <div key={etapa} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/40 bg-accent font-display text-xs font-bold text-primary">{i + 1}</span>
                {i < 2 && <span className="mt-1 w-px flex-1 bg-border" />}
              </div>
              <div className="pb-1">
                <div className="text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">{etapa}</div>
                <div className={`mt-1 font-medium ${color}`}>{texto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Línea de tiempo animada: segundo 0 → 5 → 15 → 30 */
function Timeline() {
  const marcas = [
    { s: "0", label: "Detección en la vereda", pct: "0%" },
    { s: "5", label: "Disuasión activa", pct: "16%" },
    { s: "15", label: "Sirena y alertas", pct: "50%" },
    { s: "30", label: "Central notificada", pct: "100%" },
  ];
  return (
    <div className="mt-16">
      <div className="relative h-1 rounded-full bg-border">
        <div className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-primary opacity-30" />
        {marcas.map((m) => (
          <span key={m.s} className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background" style={{ left: m.pct }} />
        ))}
      </div>
      <div className="relative mt-4 h-14">
        {marcas.map((m) => (
          <div key={m.s} className="absolute -translate-x-1/2 text-center" style={{ left: m.pct }}>
            <div className="font-display text-lg font-bold text-primary">seg {m.s}</div>
            <div className="mt-0.5 max-w-[110px] text-xs leading-snug text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex h-18 max-w-[1360px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Smart Places, inicio">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-primary/40 bg-accent">
              <span className="h-3 w-3 rounded-full bg-primary" style={{ boxShadow: "0 0 10px var(--color-primary)" }} />
            </span>
            <span className="font-display text-xl font-bold">Smart<span className="text-primary">Places</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#problema" className="transition-colors hover:text-primary">El problema</a>
            <a href="#zonas" className="transition-colors hover:text-primary">Seguridad por zonas</a>
            <a href="#planes" className="transition-colors hover:text-primary">Planes</a>
          </div>
          <Button asChild className="rounded-md shadow-none">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
          </Button>
        </div>
      </nav>

      <main>
        {/* 1. Hero */}
        <header id="inicio" className="relative border-b border-border">
          <div className="bg-dotgrid absolute inset-0 opacity-60" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 10%, transparent), transparent)" }} />
          <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 px-5 py-20 md:px-10 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="anim-rise inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent/60 px-4 py-2 text-xs font-semibold text-primary">
                <span className="status-dot h-2 w-2 rounded-full bg-status" />
                Seguridad proactiva · Santiago de Chile
              </div>
              <h1 className="anim-rise mt-7 font-display text-5xl font-bold leading-[1.05] text-balance md:text-6xl lg:text-7xl" style={{ animationDelay: "90ms" }}>
                Tu casa <span className="text-primary text-glow">actúa antes</span> de que algo pase.
              </h1>
              <p className="anim-rise mt-6 max-w-[540px] text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "170ms" }}>
                Automatizamos todo lo automatizable y protegemos tu espacio de forma proactiva: el sistema disuade al intruso antes de que cruce la primera barrera, no sólo graba lo que ya pasó.
              </p>
              <div className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "250ms" }}>
                <Button asChild size="lg" className="h-13 rounded-md px-8 text-base shadow-none">
                  <a href="#contacto">Evaluación gratuita <ArrowIcon /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-md px-8 text-base shadow-none">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Hablar por WhatsApp</a>
                </Button>
              </div>
            </div>
            <div className="anim-rise glass rounded-2xl p-6 md:p-8" style={{ animationDelay: "300ms" }}>
              <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-[.14em]">Defensa perimetral activa</span>
                <span className="flex items-center gap-2"><span className="status-dot h-2 w-2 rounded-full bg-status" /> En línea</span>
              </div>
              <HouseRings />
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center text-xs text-muted-foreground">
                <div><strong className="block font-display text-lg text-foreground">4</strong>zonas de defensa</div>
                <div><strong className="block font-display text-lg text-foreground">&lt;5s</strong>primera respuesta</div>
                <div><strong className="block font-display text-lg text-foreground">24/7</strong>monitoreo activo</div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. El problema */}
        <section id="problema" className="border-b border-border bg-panel">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">01 / El problema</div>
            <h2 className="mt-6 max-w-[820px] font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              La seguridad tradicional llega tarde. <span className="text-primary">La nuestra llega antes.</span>
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {problemas.map((p) => (
                <article key={p.antes} className="glass rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-alert">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                    {p.antes}
                  </div>
                  <div className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-status">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                    {p.despues}
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.detalle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Seguridad por zonas (interactiva) */}
        <section id="zonas" className="relative border-b border-border">
          <div className="bg-dotgrid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">02 / Seguridad por zonas</div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <h2 className="font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
                Cuatro anillos de defensa. <span className="text-primary">Cero sorpresas.</span>
              </h2>
              <p className="max-w-[520px] self-end text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
                Cada zona tiene su sensor, su disuasión y su escalamiento. Toca cada anillo para ver cómo responde el sistema, capa por capa.
              </p>
            </div>
            <div className="mt-14">
              <ZonasInteractivas />
            </div>
            <Timeline />
          </div>
        </section>

        {/* 4. Planes */}
        <section id="planes" className="border-b border-border bg-panel">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">03 / Planes mensuales</div>
            <h2 className="mt-6 max-w-[760px] font-display text-4xl font-bold leading-tight md:text-6xl">
              Protección continua, <span className="text-primary">sin letra chica.</span>
            </h2>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {planes.map((plan) => (
                <article
                  key={plan.nombre}
                  className={`relative flex flex-col rounded-xl p-8 ${
                    plan.destacado
                      ? "glass border-primary/50"
                      : "border border-border bg-card"
                  }`}
                  style={plan.destacado ? { boxShadow: "0 0 40px -12px color-mix(in oklab, var(--color-primary) 40%, transparent)" } : undefined}
                >
                  {plan.destacado && (
                    <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Más elegido</span>
                  )}
                  <h3 className="font-display text-2xl font-bold">{plan.nombre}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.detalle}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-primary">{plan.precio}</span>
                    {plan.precio !== "A medida" && <span className="text-sm text-muted-foreground">/ mes</span>}
                  </div>
                  <ul className="mt-7 space-y-3 text-sm">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-status" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={plan.destacado ? "default" : "outline"} className="mt-8 h-12 rounded-md justify-between shadow-none">
                    <a href="#contacto">Empezar ahora <ArrowIcon /></a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Contacto */}
        <section id="contacto" className="relative">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent)" }} />
          <div className="relative mx-auto max-w-[1360px] px-5 py-24 text-center md:px-10 lg:py-32">
            <div className="section-label">04 / Evaluación gratuita</div>
            <h2 className="mx-auto mt-6 max-w-[820px] font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              Revisamos tu espacio y te decimos <span className="text-primary text-glow">exactamente qué necesita.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-muted-foreground">
              Sin compromiso. Un especialista visita tu casa, departamento o empresa en Santiago y diseña la defensa por zonas a tu medida.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-md px-9 text-base shadow-none">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Agendar por WhatsApp</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-md px-9 text-base shadow-none">
                <a href="mailto:contacto@smartplaces.cl">contacto@smartplaces.cl</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-panel">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-5 py-12 md:grid-cols-3 md:px-10">
          <div>
            <div className="font-display text-xl font-bold">Smart<span className="text-primary">Places</span></div>
            <p className="mt-3 max-w-[280px] text-sm text-muted-foreground">Domótica y seguridad proactiva. Tu casa actúa antes de que algo pase.</p>
          </div>
          <div className="text-sm text-muted-foreground md:text-center">
            <a href="#problema" className="hover:text-primary">El problema</a>
            <span className="mx-4 opacity-30">/</span>
            <a href="#zonas" className="hover:text-primary">Zonas</a>
            <span className="mx-4 opacity-30">/</span>
            <a href="#planes" className="hover:text-primary">Planes</a>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">© 2026 Smart Places · Santiago de Chile<br />contacto@smartplaces.cl</div>
        </div>
      </footer>
    </div>
  );
}
