import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CONSENT_KEY, OPEN_CONSENT_EVENT, readConsent, saveConsent, type ConsentChoice } from "@/lib/consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!readConsent()) setOpen(true);
    const reopen = () => setOpen(true);
    const sync = (e: StorageEvent) => { if (e.key === CONSENT_KEY && readConsent()) setOpen(false); };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener(OPEN_CONSENT_EVENT, reopen); window.removeEventListener("storage", sync); };
  }, []);

  if (!open) return null;
  const choose = (c: ConsentChoice) => { saveConsent(c); setOpen(false); };
  const btn = "inline-flex min-h-11 flex-1 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors sm:flex-none";

  return (
    <div role="dialog" aria-live="polite" aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl animate-fade-up rounded-2xl border border-border bg-card p-4 shadow-soft sm:bottom-5 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <p className="text-[0.85rem] leading-relaxed text-muted-foreground sm:text-sm">
          <span className="font-semibold text-primary">Sua privacidade importa.</span>{" "}
          Usamos cookies para medir visitas e melhorar sua experiência, sem coletar dados de saúde. Você decide.{" "}
          <Link to="/privacidade" className="font-medium text-primary underline underline-offset-2">Saiba mais</Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => choose("rejected")} className={`${btn} border border-primary/25 text-primary hover:bg-primary/5`}>Recusar</button>
          <button type="button" onClick={() => choose("accepted")} className={`${btn} bg-primary text-primary-foreground hover:bg-primary/90`}>Aceitar</button>
        </div>
      </div>
    </div>
  );
}
