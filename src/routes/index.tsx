import { createFileRoute } from "@tanstack/react-router";

import cameraLock from "@/assets/camera-lock.jpg";
import heroHouse from "@/assets/hero-house.jpg";
import phoneScene from "@/assets/phone-scene.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Places — Automatización e IoT para cada espacio" },
      {
        name: "description",
        content:
          "Integra automatización, IoT, seguridad, vigilancia, confort y alarmas en una sola app para casas, departamentos y empresas.",
      },
      { property: "og:title", content: "Smart Places — Todo tu espacio conectado" },
      {
        property: "og:description",
        content:
          "Soluciones integrales para controlar dispositivos de distintas marcas desde una sola app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const solutions = [
  {
    number: "01",
    title: "Automatización",
    text: "Luces, clima, cortinas y rutinas que responden a tu forma de vivir.",
    icon: "bolt",
  },
  {
    number: "02",
    title: "Seguridad",
    text: "Accesos, sensores y alarmas conectados para proteger cada punto.",
    icon: "shield",
  },
  {
    number: "03",
    title: "Vigilancia",
    text: "Cámaras y alertas en vivo, disponibles estés donde estés.",
    icon: "camera",
  },
  {
    number: "04",
    title: "Confort",
    text: "Ambientes que ajustan temperatura, iluminación y audio por ti.",
    icon: "sun",
  },
];

const segments = [
  {
    label: "Residencial",
    title: "Casa",
    description: "Control integral para vivir con más seguridad, eficiencia y confort.",
    items: ["Iluminación y clima", "Cámaras y sensores", "Escenas automatizadas"],
  },
  {
    label: "Vivienda vertical",
    title: "Departamento",
    description: "Tecnología compacta que simplifica cada acceso y ambiente.",
    items: ["Cerraduras inteligentes", "Monitoreo remoto", "Control desde la app"],
  },
  {
    label: "Corporativo",
    title: "Empresa",
    description: "Una operación conectada, escalable y visible desde un solo lugar.",
    items: ["Control de accesos", "Vigilancia multi-sitio", "Panel centralizado"],
  },
];

function TechIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "shield") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9.5 12 1.6 1.6 3.7-4"/></svg>;
  }
  if (name === "camera") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="7" width="14" height="11" rx="2"/><path d="m17 10 4-2v9l-4-2M7 7l1-2h4l1 2"/></svg>;
  }
  if (name === "sun") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-5 md:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Smart Places, inicio">
            <span className="grid h-9 w-9 place-items-center rounded-[4px] bg-primary text-primary-foreground">
              <span className="h-3.5 w-3.5 border-2 border-current" />
            </span>
            <span className="font-display text-xl font-bold">Smart<span className="text-primary">Places</span></span>
          </a>
          <div className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
            <a href="#plataforma" className="transition-colors hover:text-primary">Plataforma</a>
            <a href="#soluciones" className="transition-colors hover:text-primary">Soluciones</a>
            <a href="#segmentos" className="transition-colors hover:text-primary">Segmentos</a>
          </div>
          <Button asChild size="lg" className="h-11 rounded-[4px] px-5 shadow-none">
            <a href="#contacto">Cotizar proyecto <ArrowIcon /></a>
          </Button>
        </div>
      </nav>

      <main>
        <header id="inicio" className="border-b border-border">
          <div className="mx-auto max-w-[1360px] px-5 pb-14 pt-16 text-center md:px-10 md:pb-20 md:pt-24">
            <div className="anim-rise mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2 text-xs font-semibold text-primary">
              <span className="status-dot h-2 w-2 rounded-full bg-primary" />
              Tecnología que conecta tu espacio
            </div>
            <h1 className="anim-rise mx-auto mt-7 max-w-[1000px] font-display text-5xl font-bold leading-[1.04] text-balance md:text-7xl lg:text-[5.4rem]" style={{ animationDelay: "80ms" }}>
              Todo tu espacio. <span className="text-primary">Una sola app.</span>
            </h1>
            <p className="anim-rise mx-auto mt-7 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-xl" style={{ animationDelay: "150ms" }}>
              Integramos automatización, IoT, seguridad, vigilancia, confort y alarmas para que dispositivos de distintas marcas trabajen juntos.
            </p>
            <div className="anim-rise mt-10 flex flex-col justify-center gap-3 sm:flex-row" style={{ animationDelay: "220ms" }}>
              <Button asChild size="lg" className="h-13 rounded-[4px] px-8 text-base shadow-none">
                <a href="#contacto">Diseñar mi solución <ArrowIcon /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 rounded-[4px] px-8 text-base shadow-none">
                <a href="#plataforma">Conocer la plataforma</a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto max-w-[1360px] px-5 pb-5 md:px-10 md:pb-10">
            <div className="relative overflow-hidden rounded-[6px] bg-muted">
              <img src={heroHouse} alt="Casa moderna equipada con iluminación y seguridad inteligente" width={1600} height={700} className="aspect-[16/7] min-h-[320px] w-full object-cover" />
              <div className="absolute inset-0 bg-hero-shade" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 text-primary-foreground md:bottom-8 md:left-8 md:right-8">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[.16em] opacity-80">Sistema conectado</div>
                  <div className="mt-2 font-display text-2xl font-semibold md:text-3xl">Tu espacio responde en tiempo real</div>
                </div>
                <div className="flex items-center gap-2 rounded-[4px] border border-primary-foreground/30 bg-foreground/70 px-4 py-3 text-sm backdrop-blur-md">
                  <span className="status-dot h-2 w-2 rounded-full bg-status" />
                  12 dispositivos activos
                </div>
              </div>
              <span className="device-marker left-[18%] top-[36%]"><span />Iluminación</span>
              <span className="device-marker right-[14%] top-[24%]"><span />Cámara</span>
            </div>
          </div>
        </header>

        <section className="border-b border-border bg-panel">
          <div className="mx-auto grid max-w-[1360px] grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 md:px-10">
            {[
              ["40+", "marcas integrables"],
              ["1", "app central"],
              ["24/7", "control disponible"],
              ["3", "tipos de espacios"],
            ].map(([value, label]) => (
              <div key={label} className="px-4 py-8 first:pl-0 md:px-8 md:py-10">
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">{value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="plataforma" className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-[1360px] items-center gap-14 px-5 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
            <div className="relative min-h-[560px] overflow-hidden rounded-[6px] bg-muted">
              <img src={phoneScene} alt="Aplicación Smart Places controlando dispositivos del hogar" width={800} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute bottom-5 left-5 right-5 border border-primary/15 bg-background/92 p-5 backdrop-blur-lg md:left-auto md:w-[310px]">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div><div className="text-xs text-muted-foreground">Casa principal</div><div className="mt-1 font-display font-semibold">Todo está bien</div></div>
                  <span className="status-dot h-2.5 w-2.5 rounded-full bg-status" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 text-sm">
                  <div className="bg-panel p-3"><span className="text-muted-foreground">Clima</span><strong className="mt-1 block text-lg">21°</strong></div>
                  <div className="bg-panel p-3"><span className="text-muted-foreground">Accesos</span><strong className="mt-1 block text-lg">Seguro</strong></div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="section-label">01 / Plataforma</div>
              <h2 className="mt-6 max-w-[620px] font-display text-4xl font-bold leading-tight text-balance md:text-6xl">Distintas marcas.<br/><span className="text-primary">Un mismo lenguaje.</span></h2>
              <p className="mt-7 max-w-[570px] text-lg leading-relaxed text-muted-foreground">Smart Places reúne dispositivos, reglas y alertas en una experiencia simple. Tú defines cómo debe funcionar tu espacio; la plataforma se encarga de coordinarlo.</p>
              <div className="mt-10 divide-y divide-border border-y border-border">
                {["Control centralizado desde cualquier lugar", "Rutinas automáticas según horarios y eventos", "Integración flexible de dispositivos multimarca"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 py-5"><span className="font-display text-sm font-semibold text-primary">0{index + 1}</span><span className="font-medium">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="soluciones" className="border-b border-border bg-panel">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-2">
              <div><div className="section-label">02 / Soluciones</div><h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">Tecnología aplicada<br/>a lo que importa.</h2></div>
              <p className="max-w-[560px] self-end text-lg leading-relaxed text-muted-foreground lg:justify-self-end">Diseñamos el sistema alrededor de tu espacio, con equipos que colaboran para simplificar tareas y anticipar eventos.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {solutions.map((solution) => (
                <article key={solution.number} className="group border-b border-border py-10 md:border-r md:px-7 md:first:pl-0 md:nth-[2]:border-r-0 lg:border-r lg:nth-[2]:border-r lg:last:border-r-0 lg:last:pr-0">
                  <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-[4px] bg-accent text-primary [&_svg]:h-6 [&_svg]:w-6"><TechIcon name={solution.icon} /></span><span className="font-display text-sm text-muted-foreground">{solution.number}</span></div>
                  <h3 className="mt-12 font-display text-2xl font-semibold">{solution.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{solution.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-[1360px] items-center gap-14 px-5 py-24 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:py-32">
            <div>
              <div className="section-label">03 / Seguridad conectada</div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">Visibilidad total.<br/><span className="text-primary">Decisiones al instante.</span></h2>
              <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-muted-foreground">Cámaras, cerraduras, sensores y alarmas trabajan como un solo sistema. Recibe alertas relevantes y actúa desde tu teléfono.</p>
              <div className="mt-9 flex items-center gap-6 border-l-2 border-primary pl-5"><strong className="font-display text-3xl">24/7</strong><span className="max-w-[220px] text-sm text-muted-foreground">Tu espacio disponible para supervisión en todo momento.</span></div>
            </div>
            <img src={cameraLock} alt="Cámara y cerradura inteligente integradas por Smart Places" width={800} height={800} loading="lazy" className="aspect-[4/3] w-full rounded-[6px] object-cover" />
          </div>
        </section>

        <section id="segmentos" className="border-b border-border bg-panel">
          <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 lg:py-32">
            <div className="section-label">04 / Soluciones por espacio</div>
            <h2 className="mt-6 max-w-[820px] font-display text-4xl font-bold leading-tight md:text-6xl">La escala cambia.<br/>El control sigue siendo simple.</h2>
            <div className="mt-14 grid border-x border-t border-border md:grid-cols-3">
              {segments.map((segment) => (
                <article key={segment.title} className="flex min-h-[440px] flex-col border-b border-border p-7 md:border-r md:p-9 md:last:border-r-0">
                  <div className="text-xs font-semibold uppercase tracking-[.14em] text-primary">{segment.label}</div>
                  <h3 className="mt-5 font-display text-3xl font-bold">{segment.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{segment.description}</p>
                  <ul className="mt-8 space-y-3 text-sm">
                    {segment.items.map((item) => <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-primary" />{item}</li>)}
                  </ul>
                  <Button asChild variant="outline" className="mt-auto h-11 rounded-[4px] justify-between shadow-none">
                    <a href="#contacto">Cotizar {segment.title.toLowerCase()} <ArrowIcon /></a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-20 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:py-24">
            <div><div className="text-xs font-semibold uppercase tracking-[.16em] opacity-75">Tu próximo espacio inteligente</div><h2 className="mt-5 max-w-[820px] font-display text-4xl font-bold leading-tight md:text-6xl">Conversemos sobre tu proyecto.</h2><p className="mt-5 max-w-[660px] text-lg opacity-80">Diseñamos una solución integral según tu espacio, tus dispositivos y la forma en que quieres vivir o trabajar.</p></div>
            <Button asChild size="lg" variant="secondary" className="h-14 rounded-[4px] px-8 text-base shadow-none">
              <a href="mailto:contacto@smartplaces.cl">Solicitar cotización <ArrowIcon /></a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-primary-foreground">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-12 md:grid-cols-3 md:px-10">
          <div><div className="font-display text-xl font-bold">Smart<span className="text-link">Places</span></div><p className="mt-3 max-w-[280px] text-sm opacity-60">Automatización, IoT y seguridad para espacios que responden.</p></div>
          <div className="text-sm opacity-70 md:text-center"><a href="#plataforma" className="hover:opacity-100">Plataforma</a><span className="mx-4 opacity-30">/</span><a href="#soluciones" className="hover:opacity-100">Soluciones</a><span className="mx-4 opacity-30">/</span><a href="#segmentos" className="hover:opacity-100">Segmentos</a></div>
          <div className="text-sm opacity-60 md:text-right">© 2026 Smart Places<br/>contacto@smartplaces.cl</div>
        </div>
      </footer>
    </div>
  );
}