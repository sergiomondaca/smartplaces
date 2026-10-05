import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { enviarLead, leadSchema } from "@/lib/leads.functions";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Smart Places",
          description:
            "Domótica y seguridad inteligente proactiva para casas, departamentos y empresas en Santiago de Chile.",
          areaServed: { "@type": "City", name: "Santiago de Chile" },
          address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
          email: "contacto@smartplaces.cl",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/56900000000?text=Hola%20Smart%20Places%2C%20quiero%20una%20evaluaci%C3%B3n%20gratuita";

/* ============ Datos editables ============ */

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
  },
  {
    id: 2,
    nombre: "Reja / antejardín",
    sensor: "Sensor de apertura o cruce de línea",
    disuasion: "Sirena corta + luces de la casa encendidas",
    escalamiento: "Notificación inmediata a tu celular con video en vivo",
  },
  {
    id: 3,
    nombre: "Fachada / accesos",
    sensor: "Intento de apertura en puerta o ventana",
    disuasion: "Sirena completa + iluminación total",
    escalamiento: "Alerta a vecinos y contactos de confianza",
  },
  {
    id: 4,
    nombre: "Interior",
    sensor: "Intrusión confirmada por sensores interiores",
    disuasion: "Alarma máxima + grabación continua",
    escalamiento: "Botón de pánico y aviso a central de monitoreo",
  },
];

const escenas = [
  {
    nombre: "Salgo de casa",
    detalle: "Todo se arma: luces y enchufes off, cámaras en modo vigilancia, puertas verificadas.",
    icono: "salir",
  },
  {
    nombre: "Llego a casa",
    detalle: "Se desarma el perímetro, se encienden las luces de entrada y el clima se ajusta.",
    icono: "casa",
  },
  {
    nombre: "Modo vacaciones",
    detalle: "Simulación de presencia: luces, cortinas y audio siguen tu rutina habitual.",
    icono: "palmera",
  },
  {
    nombre: "Buenas noches",
    detalle: "Se arma el perímetro, bajan las luces y quedan activos sólo los sensores nocturnos.",
    icono: "luna",
  },
  {
    nombre: "Visita detectada",
    detalle: "La cámara reconoce a la visita, te avisa y puedes abrir o hablar desde la app.",
    icono: "campana",
  },
];

const sensores = [
  { nombre: "Monóxido de carbono (CO)", detalle: "Detecta el gas invisible e inodoro antes de que sea peligroso.", icono: "co" },
  { nombre: "Humo", detalle: "Alerta inmediata ante humo, con aviso a tu celular y contactos.", icono: "humo" },
  { nombre: "Fugas de gas", detalle: "Sensor de gas con cierre automático de la llave de paso.", icono: "gas" },
  { nombre: "Filtraciones de agua", detalle: "Detecta agua donde no debe haber y corta la válvula automáticamente.", icono: "agua" },
  { nombre: "Temperatura y humedad", detalle: "Cuida tu hogar, tus equipos y tu bodega de vinos.", icono: "temp" },
  { nombre: "Corte de energía", detalle: "Avisa al instante y mantiene lo crítico funcionando con UPS.", icono: "energia" },
];

const escalera = [
  "Reconexión de cámara",
  "Reinicio de software",
  "Reinicio de equipo",
  "Reinicio de red",
  "Aviso al técnico",
];

const planes = [
  {
    nombre: "Esencial",
    mensual: 19990,
    anual: 16990,
    instalacion: "desde $199.000",
    detalle: "Para partir protegiendo lo esencial",
    items: ["Cámaras con IA + alertas", "Escenas básicas", "App con control total", "Soporte remoto"],
  },
  {
    nombre: "Hogar Proactivo",
    mensual: 34990,
    anual: 29990,
    instalacion: "desde $349.000",
    destacado: true,
    detalle: "La defensa por zonas completa",
    items: [
      "Todo lo de Esencial",
      "Seguridad por 4 zonas",
      "Sensores CO / agua / gas",
      "Monitoreo autorreparable",
      "Informe mensual de tu sistema",
    ],
  },
  {
    nombre: "Total",
    mensual: 54990,
    anual: 46990,
    instalacion: "cotización a medida",
    detalle: "Protección máxima, sin puntos ciegos",
    items: [
      "Todo lo de Hogar Proactivo",
      "Central de monitoreo 24/7",
      "Botón de pánico",
      "UPS y respaldo 4G",
    ],
  },
];

const pasos = [
  { numero: "01", titulo: "Evaluación en terreno", detalle: "Visitamos tu espacio, detectamos puntos débiles y escuchamos lo que necesitas." },
  { numero: "02", titulo: "Diseño a medida", detalle: "Definimos zonas, sensores, escenas y equipos según tu propiedad y presupuesto." },
  { numero: "03", titulo: "Instalación", detalle: "Instalamos, configuramos y te dejamos la app funcionando el mismo día." },
  { numero: "04", titulo: "Monitoreo continuo", detalle: "El sistema se cuida solo y nosotros vigilamos su salud mes a mes." },
];

const testimonios = [
  {
    texto: "Ejemplo: “Desde que instalamos Smart Places, el sistema disuadió dos merodeos en la vereda antes de que tocaran la reja.”",
    autor: "Cliente ejemplo — Casa en La Reina",
  },
  {
    texto: "Ejemplo: “El sensor de agua cortó la válvula solo cuando se rompió un flexible. Nos ahorró un desastre.”",
    autor: "Cliente ejemplo — Depto. en Ñuñoa",
  },
  {
    texto: "Ejemplo: “Se cortó la luz en el barrio y ni nos dimos cuenta: el UPS y el 4G mantuvieron todo grabando.”",
    autor: "Cliente ejemplo — Local en Providencia",
  },
];

const faqs = [
  {
    pregunta: "¿Funciona sin internet?",
    respuesta:
      "Sí. Las escenas y la alarma funcionan de forma local aunque se caiga internet. Con el respaldo 4G (plan Total) además sigues recibiendo alertas y video en tu celular.",
  },
  {
    pregunta: "¿Qué pasa si se corta la luz?",
    respuesta:
      "El sistema lo detecta al instante y te avisa. Con UPS, lo crítico (cámaras, alarma y red) sigue funcionando durante el corte.",
  },
  {
    pregunta: "¿Mis grabaciones son privadas?",
    respuesta:
      "Sí. La grabación es local, en tu propiedad. Nadie más tiene acceso a tus videos: tú decides qué se comparte y con quién.",
  },
  {
    pregunta: "¿Puedo usar mis cámaras actuales?",
    respuesta:
      "En la mayoría de los casos, sí. Integramos equipos de distintas marcas en una sola app. En la evaluación revisamos la compatibilidad de lo que ya tienes.",
  },
  {
    pregunta: "¿Qué comunas cubren?",
    respuesta:
      "Trabajamos en todo Santiago. Para regiones, evaluamos caso a caso según el proyecto. Escríbenos y lo vemos juntos.",
  },
];

const interesesOpciones = ["Seguridad", "Escenas inteligentes", "Sensores CO / agua", "Monitoreo 24/7"];

const CLP = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

/* ============ Iconos ============ */

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .8-.2 1.4Z" /></svg>;
}

function EscenaIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "h-6 w-6" };
  if (name === "salir") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></svg>;
  if (name === "casa") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M9 22V12h6v10" /></svg>;
  if (name === "palmera") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M13 8c0-3 2-5 5-5-1 2-1 4 0 5M13 8c0-3-2-5-5-5 1 2 1 4 0 5M13 8c-3 0-5 2-5 5 2-1 4-1 5 0M13 8c3 0 5 2 5 5-2-1-4-1-5 0M13 8v13" /></svg>;
  if (name === "luna") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M10.3 21a2 2 0 0 0 3.4 0" /></svg>;
}

function SensorIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "h-6 w-6" };
  if (name === "co") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5c-1-1-1-4 0-5M12 15.5c-1.5-1.5-1.5-5.5 0-7M15.5 14.5c1-1 1-4 0-5" /></svg>;
  if (name === "humo") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-4 3-6 5-9Z" /><path d="M10 13a2 2 0 0 0 4 0" /></svg>;
  if (name === "gas") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 2v4M8 6h8l1 14H7L8 6Z" /><path d="M9.5 12h5" /></svg>;
  if (name === "agua") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" /></svg>;
  if (name === "temp") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M10 4a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z" /><circle cx="12" cy="17" r="1.5" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" /></svg>;
}

/* ============ Hero: casa isométrica con anillos ============ */

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
          <ellipse cx="320" cy="220" rx={a.rx} ry={a.ry} fill="none" stroke="var(--color-primary)" strokeWidth="1.5" className="ring-wave" style={{ animationDelay: a.delay }} />
          <text x={320 + a.rx * 0.72} y={220 - a.ry * 0.72} fill="var(--color-muted-foreground)" fontSize="10" fontFamily="Space Grotesk, sans-serif" className="ring-wave" style={{ animationDelay: a.delay }}>
            {a.label}
          </text>
        </g>
      ))}
      <g>
        <path d="M320 130 400 176 320 222 240 176Z" fill="url(#houseFill)" stroke="var(--color-primary)" strokeWidth="1.5" />
        <path d="M240 176 320 222 320 268 240 222Z" fill="oklch(0.17 0.02 240)" stroke="var(--color-border)" strokeWidth="1" />
        <path d="M400 176 320 222 320 268 400 222Z" fill="oklch(0.21 0.03 230)" stroke="var(--color-border)" strokeWidth="1" />
        <path d="M262 196 296 216 296 238 262 218Z" fill="var(--color-primary)" opacity="0.85" />
        <path d="M344 216 378 196 378 218 344 238Z" fill="var(--color-primary)" opacity="0.5" />
        <circle cx="320" cy="220" r="5" fill="var(--color-status)" className="status-dot" />
      </g>
    </svg>
  );
}

/* ============ Zonas interactivas ============ */

function ZonasInteractivas() {
  const [activa, setActiva] = useState(0);
  const zona = zonas[activa] ?? zonas[0]!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
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
        <div className="mt-4 grid grid-cols-4 gap-2">
          {zonas.map((z, i) => (
            <button
              key={z.id}
              onClick={() => setActiva(i)}
              aria-pressed={i === activa}
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

/* ============ Escenas con mini mockup de app ============ */

function Escenas() {
  const [activas, setActivas] = useState<Record<string, boolean>>({ "Salgo de casa": true });

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
      <div className="grid gap-4 sm:grid-cols-2">
        {escenas.map((e) => {
          const on = !!activas[e.nombre];
          return (
            <button
              key={e.nombre}
              onClick={() => setActivas((prev) => ({ ...prev, [e.nombre]: !on }))}
              aria-pressed={on}
              className={`group rounded-xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                on ? "glass border-primary/50" : "border-border bg-card hover:border-primary/40"
              }`}
              style={on ? { boxShadow: "0 0 30px -10px color-mix(in oklab, var(--color-primary) 45%, transparent)" } : undefined}
            >
              <div className="flex items-center justify-between">
                <span className={`grid h-11 w-11 place-items-center rounded-lg ${on ? "bg-accent text-primary" : "bg-muted text-muted-foreground"}`}>
                  <EscenaIcon name={e.icono} />
                </span>
                <span className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-primary" : "bg-input"}`}>
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-background transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{e.nombre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detalle}</p>
            </button>
          );
        })}
      </div>

      {/* Mini mockup de app */}
      <div className="glass mx-auto w-full max-w-[340px] rounded-3xl p-5">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-border" />
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <div className="text-xs text-muted-foreground">Mi casa</div>
            <div className="font-display font-bold">Escenas</div>
          </div>
          <span className="status-dot h-2.5 w-2.5 rounded-full bg-status" />
        </div>
        <div className="divide-y divide-border">
          {escenas.map((e) => {
            const on = !!activas[e.nombre];
            return (
              <div key={e.nombre} className="flex items-center justify-between py-3.5">
                <span className={`text-sm ${on ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{e.nombre}</span>
                <span className={`h-2 w-2 rounded-full ${on ? "bg-primary" : "bg-input"}`} style={on ? { boxShadow: "0 0 8px var(--color-primary)" } : undefined} />
              </div>
            );
          })}
        </div>
        <div className="mt-4 rounded-lg bg-accent/60 p-3 text-center text-xs text-primary">
          Toca las tarjetas y mira la app reaccionar
        </div>
      </div>
    </div>
  );
}

/* ============ Planes con toggle mensual/anual ============ */

function Planes() {
  const [anual, setAnual] = useState(false);

  return (
    <div>
      <div className="mt-10 flex items-center justify-center gap-4">
        <span className={`text-sm font-semibold ${!anual ? "text-foreground" : "text-muted-foreground"}`}>Mensual</span>
        <button
          onClick={() => setAnual(!anual)}
          aria-pressed={anual}
          aria-label="Cambiar entre precio mensual y anual"
          className={`relative h-7 w-13 rounded-full transition-colors ${anual ? "bg-primary" : "bg-input"}`}
        >
          <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-background transition-all ${anual ? "left-[26px]" : "left-0.5"}`} />
        </button>
        <span className={`text-sm font-semibold ${anual ? "text-foreground" : "text-muted-foreground"}`}>
          Anual <span className="ml-1 rounded-full bg-status/15 px-2 py-0.5 text-xs text-status">ahorra ~15%</span>
        </span>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {planes.map((plan) => (
          <article
            key={plan.nombre}
            className={`relative flex flex-col rounded-xl p-8 ${plan.destacado ? "glass border-primary/50" : "border border-border bg-card"}`}
            style={plan.destacado ? { boxShadow: "0 0 40px -12px color-mix(in oklab, var(--color-primary) 40%, transparent)" } : undefined}
          >
            {plan.destacado && (
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Más elegido</span>
            )}
            <h3 className="font-display text-2xl font-bold">{plan.nombre}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.detalle}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-primary">{CLP.format(anual ? plan.anual : plan.mensual)}</span>
              <span className="text-sm text-muted-foreground">/ mes{anual ? " · pagado anual" : ""}</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">+ instalación {plan.instalacion}</div>
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
  );
}

/* ============ FAQ acordeón ============ */

function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f, i) => {
        const open = abierta === i;
        return (
          <div key={f.pregunta}>
            <button
              onClick={() => setAbierta(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-display text-lg font-semibold">{f.pregunta}</span>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <p className="overflow-hidden leading-relaxed text-muted-foreground">{f.respuesta}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ============ Formulario de contacto ============ */

const inputClass =
  "h-12 w-full rounded-md border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function FormularioLead() {
  const [valores, setValores] = useState({
    nombre: "",
    telefono: "",
    email: "",
    comuna: "",
    tipoPropiedad: "" as string,
    intereses: [] as string[],
  });
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  function actualizar(campo: string, valor: string) {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErrores((e) => ({ ...e, [campo]: "" }));
  }

  function toggleInteres(interes: string) {
    setValores((v) => ({
      ...v,
      intereses: v.intereses.includes(interes) ? v.intereses.filter((i) => i !== interes) : [...v.intereses, interes],
    }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = leadSchema.safeParse(valores);
    if (!parsed.success) {
      const nuevos: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const campo = String(issue.path[0] ?? "general");
        if (!nuevos[campo]) nuevos[campo] = issue.message;
      }
      setErrores(nuevos);
      return;
    }
    setEstado("enviando");
    try {
      await enviarLead({ data: parsed.data });
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="glass rounded-xl p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-status/15 text-status">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">¡Recibimos tu solicitud!</h3>
        <p className="mt-3 text-muted-foreground">Te contactaremos para agendar tu evaluación gratuita. Si quieres hablar ahora, escríbenos por WhatsApp.</p>
        <Button asChild className="mt-6 rounded-md shadow-none">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Hablar por WhatsApp</a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-xl p-7 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm font-semibold">Nombre</label>
          <input id="nombre" className={inputClass} value={valores.nombre} onChange={(e) => actualizar("nombre", e.target.value)} placeholder="Tu nombre" autoComplete="name" />
          {errores["nombre"] && <p className="mt-1.5 text-xs text-alert">{errores["nombre"]}</p>}
        </div>
        <div>
          <label htmlFor="telefono" className="mb-2 block text-sm font-semibold">Teléfono</label>
          <input id="telefono" className={inputClass} value={valores.telefono} onChange={(e) => actualizar("telefono", e.target.value)} placeholder="+56 9 ..." autoComplete="tel" inputMode="tel" />
          {errores["telefono"] && <p className="mt-1.5 text-xs text-alert">{errores["telefono"]}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email</label>
          <input id="email" type="email" className={inputClass} value={valores.email} onChange={(e) => actualizar("email", e.target.value)} placeholder="tu@email.cl" autoComplete="email" />
          {errores["email"] && <p className="mt-1.5 text-xs text-alert">{errores["email"]}</p>}
        </div>
        <div>
          <label htmlFor="comuna" className="mb-2 block text-sm font-semibold">Comuna</label>
          <input id="comuna" className={inputClass} value={valores.comuna} onChange={(e) => actualizar("comuna", e.target.value)} placeholder="Ej: Las Condes" />
          {errores["comuna"] && <p className="mt-1.5 text-xs text-alert">{errores["comuna"]}</p>}
        </div>
      </div>

      <div className="mt-5">
        <span className="mb-2 block text-sm font-semibold">Tipo de propiedad</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["casa", "Casa"],
            ["departamento", "Departamento"],
            ["condominio", "Condominio"],
            ["local", "Local / empresa"],
          ].map(([valor, label]) => (
            <button
              type="button"
              key={valor}
              onClick={() => actualizar("tipoPropiedad", valor!)}
              aria-pressed={valores.tipoPropiedad === valor}
              className={`rounded-md border px-3 py-2.5 text-sm font-medium transition-all ${
                valores.tipoPropiedad === valor
                  ? "border-primary bg-accent text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {errores["tipoPropiedad"] && <p className="mt-1.5 text-xs text-alert">{errores["tipoPropiedad"]}</p>}
      </div>

      <div className="mt-5">
        <span className="mb-2 block text-sm font-semibold">Me interesa</span>
        <div className="flex flex-wrap gap-2">
          {interesesOpciones.map((interes) => {
            const on = valores.intereses.includes(interes);
            return (
              <button
                type="button"
                key={interes}
                onClick={() => toggleInteres(interes)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  on ? "border-primary bg-accent text-primary" : "border-border bg-card text-muted-foreground hover:border-primary/50"
                }`}
              >
                {interes}
              </button>
            );
          })}
        </div>
      </div>

      {estado === "error" && (
        <p className="mt-5 rounded-md border border-alert/40 bg-alert/10 px-4 py-3 text-sm text-alert">
          No pudimos enviar tu solicitud. Revisa tu conexión e intenta de nuevo, o escríbenos por WhatsApp.
        </p>
      )}

      <Button type="submit" disabled={estado === "enviando"} size="lg" className="mt-7 h-13 w-full rounded-md text-base shadow-none">
        {estado === "enviando" ? "Enviando…" : "Solicitar evaluación gratuita"} <ArrowIcon />
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Sin compromiso. Tus datos sólo se usan para contactarte.</p>
    </form>
  );
}

/* ============ Página ============ */

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
          <div className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            <a href="#zonas" className="transition-colors hover:text-primary">Zonas</a>
            <a href="#escenas" className="transition-colors hover:text-primary">Escenas</a>
            <a href="#sensores" className="transition-colors hover:text-primary">Sensores</a>
            <a href="#planes" className="transition-colors hover:text-primary">Planes</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
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

        {/* 3. Seguridad por zonas */}
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

        {/* 4. Escenas inteligentes */}
        <section id="escenas" className="border-b border-border bg-panel">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">03 / Escenas inteligentes con IA</div>
            <h2 className="mt-6 max-w-[820px] font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              Tu casa sigue tu rutina. <span className="text-primary">Solita.</span>
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-muted-foreground">
              Un toque y todo el espacio se reorganiza: luces, enchufes, clima, cámaras y alarmas. Prueba los interruptores.
            </p>
            <div className="mt-14">
              <Escenas />
            </div>
          </div>
        </section>

        {/* 5. Sensores de vida y patrimonio */}
        <section id="sensores" className="border-b border-border">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">04 / Sensores de vida y patrimonio</div>
            <h2 className="mt-6 max-w-[820px] font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              Protegemos <span className="text-primary">lo que no ves.</span>
            </h2>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sensores.map((s) => (
                <article key={s.nombre} className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary">
                    <SensorIcon name={s.icono} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.nombre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detalle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Comunidad conectada */}
        <section id="comunidad" className="border-b border-border bg-panel">
          <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-5 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
            <div>
              <div className="section-label">05 / Comunidad conectada</div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
                Tu barrio se entera <span className="text-primary">al mismo tiempo que tú.</span>
              </h2>
              <p className="mt-6 max-w-[540px] text-lg leading-relaxed text-muted-foreground">
                Cuando el sistema escala una alerta, puede avisar automáticamente al grupo de seguridad de tu barrio o condominio. Vecinos conectados, respuesta más rápida.
              </p>
            </div>
            {/* Ilustración: vecinos recibiendo notificación */}
            <div className="glass rounded-2xl p-7">
              <div className="text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">Alerta de zona 3 · hace 12 seg</div>
              <div className="mt-5 space-y-3">
                {[
                  ["Tú", "Intento de apertura en puerta principal", true],
                  ["Vecina — Casa 12", "Recibió la alerta y está mirando", false],
                  ["Conserjería", "En camino a verificar", false],
                ].map(([quien, msg, propio]) => (
                  <div key={quien as string} className={`flex items-start gap-3 rounded-lg border p-4 ${propio ? "border-primary/40 bg-accent/50" : "border-border bg-card"}`}>
                    <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${propio ? "bg-alert" : "bg-status"}`} />
                    <div>
                      <div className="text-sm font-semibold">{quien}</div>
                      <div className="text-sm text-muted-foreground">{msg}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Sistema autorreparable */}
        <section id="autorreparable" className="relative border-b border-border">
          <div className="bg-dotgrid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">06 / Sistema autorreparable</div>
            <h2 className="mt-6 max-w-[820px] font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              Tu sistema <span className="text-primary">se cuida solo.</span>
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-muted-foreground">
              Si algo falla, el sistema intenta recuperarse solo, paso a paso. Y si necesita ayuda, avisa al técnico — nunca te molesta a ti.
            </p>

            {/* Escalera de recuperación */}
            <div className="mt-14 flex flex-col gap-3 md:flex-row md:items-stretch">
              {escalera.map((paso, i) => (
                <div key={paso} className="flex flex-1 items-center gap-3 md:flex-col md:gap-0">
                  <div
                    className={`flex flex-1 items-center gap-3 rounded-lg border p-4 md:w-full md:flex-col md:items-start md:gap-3 ${
                      i === escalera.length - 1 ? "border-alert/40 bg-alert/5" : "glass"
                    }`}
                  >
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-xs font-bold ${
                      i === escalera.length - 1 ? "bg-alert/15 text-alert" : "bg-accent text-primary"
                    }`}>
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium">{paso}</span>
                  </div>
                  {i < escalera.length - 1 && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-muted-foreground md:my-2 md:rotate-90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
                  )}
                </div>
              ))}
            </div>

            {/* Contadores */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {[
                ["99,9%", "disponibilidad de grabación"],
                ["+1.200", "recuperaciones automáticas al mes"],
                ["<48h", "tiempo medio de reposición de equipos"],
              ].map(([valor, label]) => (
                <div key={label} className="glass rounded-xl p-7 text-center">
                  <div className="font-display text-4xl font-bold text-primary text-glow">{valor}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Con UPS y respaldo 4G, lo crítico sigue funcionando incluso con cortes de luz o internet.
            </p>
          </div>
        </section>

        {/* 8. Planes */}
        <section id="planes" className="border-b border-border bg-panel">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">07 / Planes mensuales</div>
            <h2 className="mt-6 max-w-[760px] font-display text-4xl font-bold leading-tight md:text-6xl">
              Protección continua, <span className="text-primary">sin letra chica.</span>
            </h2>
            <Planes />
          </div>
        </section>

        {/* 9. Cómo funciona */}
        <section id="como-funciona" className="border-b border-border">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">08 / Cómo funciona</div>
            <h2 className="mt-6 max-w-[760px] font-display text-4xl font-bold leading-tight md:text-6xl">
              De la primera visita <span className="text-primary">al control total.</span>
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pasos.map((paso) => (
                <article key={paso.numero} className="rounded-xl border border-border bg-card p-7">
                  <div className="font-display text-sm font-bold text-primary">{paso.numero}</div>
                  <h3 className="mt-4 font-display text-xl font-bold">{paso.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{paso.detalle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Testimonios + FAQ */}
        <section id="faq" className="border-b border-border bg-panel">
          <div className="mx-auto grid max-w-[1360px] gap-14 px-5 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
            <div>
              <div className="section-label">09 / Testimonios</div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">Lo que dicen nuestros clientes.</h2>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">Ejemplos ilustrativos — se reemplazarán por testimonios reales</p>
              <div className="mt-10 space-y-5">
                {testimonios.map((t) => (
                  <blockquote key={t.autor} className="glass rounded-xl p-6">
                    <p className="leading-relaxed text-foreground">{t.texto}</p>
                    <footer className="mt-4 text-sm text-muted-foreground">{t.autor}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label">10 / Preguntas frecuentes</div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">Todo claro, antes de partir.</h2>
              <div className="mt-10">
                <Faq />
              </div>
            </div>
          </div>
        </section>

        {/* 11. CTA final + formulario */}
        <section id="contacto" className="relative">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent)" }} />
          <div className="relative mx-auto grid max-w-[1360px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-2 lg:items-center lg:py-32">
            <div>
              <div className="section-label">11 / Evaluación gratuita</div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
                Revisamos tu espacio y te decimos <span className="text-primary text-glow">exactamente qué necesita.</span>
              </h2>
              <p className="mt-6 max-w-[540px] text-lg leading-relaxed text-muted-foreground">
                Sin compromiso. Un especialista visita tu casa, departamento, condominio o local en Santiago y diseña la defensa por zonas a tu medida.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><span className="status-dot h-2 w-2 rounded-full bg-status" /> Respondemos el mismo día hábil</span>
              </div>
            </div>
            <FormularioLead />
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <footer className="border-t border-border bg-panel">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-14 md:grid-cols-4 md:px-10">
          <div>
            <div className="font-display text-xl font-bold">Smart<span className="text-primary">Places</span></div>
            <p className="mt-3 max-w-[260px] text-sm text-muted-foreground">Domótica y seguridad proactiva. Tu casa actúa antes de que algo pase.</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Contacto</div>
            <div className="mt-3 space-y-2 text-muted-foreground">
              <div>contacto@smartplaces.cl</div>
              <div>Santiago de Chile</div>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><WhatsAppIcon /> WhatsApp</a>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Secciones</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-muted-foreground">
              <a href="#zonas" className="hover:text-primary">Zonas</a>
              <a href="#escenas" className="hover:text-primary">Escenas</a>
              <a href="#sensores" className="hover:text-primary">Sensores</a>
              <a href="#planes" className="hover:text-primary">Planes</a>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Legal</div>
            <div className="mt-3 space-y-2 text-muted-foreground">
              <a href="#" className="block hover:text-primary">Política de privacidad</a>
              <a href="#" className="block hover:text-primary">Términos de servicio</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1360px] px-5 py-5 text-center text-xs text-muted-foreground md:px-10">
            © 2026 Smart Places · Santiago de Chile
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-status text-background shadow-lg transition-transform hover:scale-110"
        style={{ boxShadow: "0 0 24px color-mix(in oklab, var(--color-status) 50%, transparent)" }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
