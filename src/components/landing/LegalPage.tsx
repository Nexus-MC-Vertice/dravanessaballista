import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SITE, whatsappLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <>
    <header className="border-b border-border bg-sand-soft">
      <div className="mx-auto max-w-3xl px-5 py-6">
        <Button variant="ghost" asChild className="min-h-11"><Link to="/"><ArrowLeft /> {SITE.name}</Link></Button>
      </div>
    </header>
    <main className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h1>
      <div className="mt-10 space-y-9 text-base leading-relaxed text-muted-foreground [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_p+p]:mt-4">{children}</div>
      <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">Dúvidas sobre estas informações? <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">Entre em contato pelo WhatsApp.</a></p>
    </main>
    <footer className="border-t border-border bg-sand-soft px-5 py-8 text-center text-sm text-muted-foreground">{SITE.name} · {SITE.qualification} · {SITE.crm}</footer>
  </>;
}