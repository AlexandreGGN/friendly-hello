import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Wrench, Gauge, Disc3, Droplets, Snowflake, Cpu, Car, BatteryCharging,
  ShieldCheck, Clock, ClipboardCheck, Sparkles, Phone, MapPin, MessageCircle,
  Menu, X, CalendarClock, Mail,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import { site, whatsappLink } from "@/config/site";

const title = `${site.nome} | Mecânica, revisão e manutenção automotiva`;
const desc = "Revisão, freios, suspensão, alinhamento, diagnóstico eletrônico e mais. Solicite seu orçamento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#etapas", label: "Como funciona" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

const servicos = [
  { icon: Wrench, t: "Mecânica geral", d: "Reparos de motor, câmbio e componentes com diagnóstico preciso." },
  { icon: Droplets, t: "Troca de óleo e filtros", d: "Lubrificantes adequados à especificação do seu veículo." },
  { icon: Disc3, t: "Freios", d: "Pastilhas, discos, fluido e revisão completa do sistema." },
  { icon: Car, t: "Suspensão", d: "Amortecedores, molas, buchas e pivôs para mais estabilidade." },
  { icon: Gauge, t: "Alinhamento e balanceamento", d: "Mais segurança e vida útil para os pneus." },
  { icon: Cpu, t: "Diagnóstico eletrônico", d: "Leitura por scanner para identificar falhas com agilidade." },
  { icon: Snowflake, t: "Ar-condicionado", d: "Higienização, carga de gás e manutenção do sistema." },
  { icon: BatteryCharging, t: "Elétrica e bateria", d: "Testes, troca de bateria e reparos elétricos." },
];

const diferenciais = [
  { icon: ShieldCheck, t: "Transparência", d: "Orçamento explicado antes do serviço" },
  { icon: ClipboardCheck, t: "Diagnóstico preciso", d: "Equipamentos de leitura eletrônica" },
  { icon: Clock, t: "Agilidade", d: "Prazos combinados com você" },
  { icon: Sparkles, t: "Cuidado", d: "Seu carro tratado com atenção" },
];

const etapas = [
  { t: "Contato", d: "Fale conosco e conte o que seu veículo precisa." },
  { t: "Avaliação", d: "Fazemos a inspeção e o diagnóstico do problema." },
  { t: "Orçamento", d: "Você recebe o orçamento detalhado para aprovar." },
  { t: "Execução", d: "Realizamos o serviço com peças adequadas." },
  { t: "Entrega", d: "Explicamos o que foi feito e entregamos o veículo." },
];

const galeria = [
  { src: hero, alt: "Veículo elevado em oficina sendo inspecionado por mecânico", w: 1600, h: 1008 },
  { src: g1, alt: "Mecânico substituindo disco de freio", w: 1024, h: 1024 },
  { src: g2, alt: "Equipamento de alinhamento instalado na roda de um carro", w: 1024, h: 1024 },
  { src: g3, alt: "Mecânico usando scanner de diagnóstico no motor", w: 1024, h: 1024 },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const ext = site.whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {};

function CtaButton({ children, variant = "lime" }: { children: React.ReactNode; variant?: "lime" | "outline" }) {
  const cls =
    variant === "lime"
      ? "bg-lime text-lime-foreground hover:brightness-95"
      : "border border-forest-foreground/40 text-forest-foreground hover:bg-forest-foreground/10";
  return (
    <a href={whatsappLink()} {...ext} className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${cls}`}>
      {children}
    </a>
  );
}

function SectionTitle({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className={`mb-2 text-sm font-bold uppercase tracking-[0.2em] ${light ? "text-lime" : "text-primary"}`}>{kicker}</p>
      <h2 className={`text-4xl font-bold uppercase md:text-5xl ${light ? "text-forest-foreground" : "text-forest"}`}>{title}</h2>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  useReveal();

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-lime focus:px-4 focus:py-2 focus:text-lime-foreground">
        Pular para o conteúdo
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-forest-foreground/10 bg-forest/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <a href="#inicio" className="flex items-center gap-2 text-forest-foreground" aria-label={`${site.nome} — início`}>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-lime text-lime-foreground"><Wrench className="h-5 w-5" aria-hidden /></span>
            <span className="font-display text-2xl font-bold uppercase tracking-wide">{site.nome}</span>
          </a>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-8">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-sm font-medium text-forest-foreground/80 transition hover:text-lime">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:block"><CtaButton>Solicitar orçamento</CtaButton></div>
          <button className="text-forest-foreground lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="menu-mobile" aria-label="Menu móvel" className="border-t border-forest-foreground/10 bg-forest px-4 pb-6 lg:hidden">
            <ul className="flex flex-col py-2">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-forest-foreground/90 hover:text-lime">{n.label}</a></li>
              ))}
            </ul>
            <CtaButton>Solicitar orçamento</CtaButton>
          </nav>
        )}
      </header>

      <main id="conteudo">
        <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden bg-forest pt-16">
          <img src={hero} alt="" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-20 md:px-6">
            <div className="max-w-2xl animate-rise">
              <p className="mb-4 inline-block rounded-full bg-lime/15 px-4 py-1 text-sm font-semibold text-lime">{site.slogan}</p>
              <h1 className="text-5xl font-extrabold uppercase leading-[0.95] text-forest-foreground md:text-7xl">
                Manutenção automotiva <span className="text-lime">com confiança</span>
              </h1>
              <p className="mt-6 text-lg text-forest-foreground/80">
                Mecânica, freios, suspensão, alinhamento e diagnóstico eletrônico em um só lugar — com atendimento transparente do início ao fim.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaButton><MessageCircle className="h-5 w-5" aria-hidden /> Solicitar orçamento</CtaButton>
                <a href="#servicos" className="inline-flex items-center justify-center rounded-md border border-forest-foreground/40 px-6 py-3 font-semibold text-forest-foreground transition hover:bg-forest-foreground/10">Ver serviços</a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Diferenciais" className="bg-lime">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:px-6 lg:grid-cols-4">
            {diferenciais.map(({ icon: I, t, d }) => (
              <li key={t} className="flex items-start gap-3 text-lime-foreground">
                <I className="mt-1 h-6 w-6 shrink-0" aria-hidden />
                <div><p className="font-display text-xl font-bold uppercase">{t}</p><p className="text-sm opacity-80">{d}</p></div>
              </li>
            ))}
          </ul>
        </section>

        <section id="servicos" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
          <SectionTitle kicker="Serviços" title="Tudo que seu carro precisa" />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map(({ icon: I, t, d }) => (
              <li key={t} className="reveal group rounded-xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-card">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-accent text-primary transition group-hover:bg-lime group-hover:text-lime-foreground"><I className="h-6 w-6" aria-hidden /></span>
                <h3 className="text-2xl font-bold uppercase text-forest">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="sobre" className="bg-secondary">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:px-6 lg:grid-cols-2">
            <img src={g3} alt="Mecânico realizando diagnóstico eletrônico" width={1024} height={1024} loading="lazy" className="reveal aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
            <div className="reveal">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">Sobre a oficina</p>
              <h2 className="text-4xl font-bold uppercase text-forest md:text-5xl">Compromisso com o seu veículo</h2>
              <p className="mt-6 text-muted-foreground">
                No {site.nome}, cada veículo recebe atenção individual. Explicamos o diagnóstico com clareza, apresentamos o orçamento antes de qualquer serviço e mantemos você informado durante todo o processo.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Orçamento aprovado por você", "Explicação clara do serviço", "Ambiente organizado", "Atendimento próximo"].map((i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-forest">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-lime text-lime-foreground"><ShieldCheck className="h-4 w-4" aria-hidden /></span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="etapas" className="bg-forest">
          <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
            <SectionTitle kicker="Como funciona" title="Etapas do atendimento" light />
            <ol className="grid gap-6 md:grid-cols-5">
              {etapas.map((e, i) => (
                <li key={e.t} className="reveal relative rounded-xl border border-forest-foreground/10 p-6">
                  <span className="font-display text-5xl font-extrabold text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-2xl font-bold uppercase text-forest-foreground">{e.t}</h3>
                  <p className="mt-2 text-sm text-forest-foreground/70">{e.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
          <SectionTitle kicker="Galeria" title="Nosso trabalho" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {galeria.map((g, i) => (
              <figure key={i} className={`reveal overflow-hidden rounded-xl ${i === 0 ? "sm:col-span-2 lg:row-span-2" : i === 3 ? "lg:col-span-2" : ""}`}>
                <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="h-full min-h-56 w-full object-cover transition duration-700 hover:scale-105" />
              </figure>
            ))}
          </div>
        </section>

        <section id="contato" className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
            <SectionTitle kicker="Contato" title="Fale com a gente" />
            <div className="grid gap-6 md:grid-cols-3">
              <ContactCard icon={Phone} title="Telefone / WhatsApp">
                {site.telefone ? <a className="hover:text-primary" href={`tel:${site.telefone.replace(/\D/g, "")}`}>{site.telefone}</a> : <Pending />}
                {site.whatsapp && <a href={whatsappLink()} {...ext} className="mt-2 block font-semibold text-primary">Chamar no WhatsApp</a>}
                {site.email && <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" aria-hidden />{site.email}</a>}
              </ContactCard>
              <ContactCard icon={MapPin} title="Endereço">
                {site.endereco ? <address className="not-italic">{site.endereco}</address> : <Pending />}
                {site.mapsUrl && <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block font-semibold text-primary">Ver no mapa</a>}
              </ContactCard>
              <ContactCard icon={CalendarClock} title="Horários">
                {site.horarios.length ? (
                  <ul>{site.horarios.map((h) => <li key={h.dias}><strong>{h.dias}:</strong> {h.horas}</li>)}</ul>
                ) : <Pending />}
              </ContactCard>
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <div className="reveal mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-4xl font-bold uppercase text-primary-foreground md:text-5xl">Seu carro merece cuidado</h2>
              <p className="mt-2 text-primary-foreground/80">Solicite um orçamento sem compromisso.</p>
            </div>
            <CtaButton><MessageCircle className="h-5 w-5" aria-hidden /> Solicitar orçamento</CtaButton>
          </div>
        </section>
      </main>

      <footer className="bg-forest text-forest-foreground/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm md:flex-row md:items-center md:justify-between md:px-6">
          <p className="font-display text-xl font-bold uppercase text-forest-foreground">{site.nome}</p>
          <ul className="flex flex-wrap gap-6">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-lime">{n.label}</a></li>)}
          </ul>
          <p>© {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

function Pending() {
  return <span className="italic text-muted-foreground">A definir</span>;
}

function ContactCard({ icon: I, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="reveal rounded-xl border bg-card p-6">
      <span className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-lime text-lime-foreground"><I className="h-6 w-6" aria-hidden /></span>
      <h3 className="mb-2 text-2xl font-bold uppercase text-forest">{title}</h3>
      <div className="text-foreground/80">{children}</div>
    </div>
  );
}
