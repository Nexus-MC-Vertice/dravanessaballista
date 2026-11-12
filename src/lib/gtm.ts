// Google Tag Manager com Consent Mode v2: tag sempre presente, consentimento "denied" por padrão até "Aceitar".
import { CONSENT_EVENT, readConsent, type ConsentRecord } from "@/lib/consent";

export const GTM_ID = "GTM-MNBN29XV";
type W = Window & { dataLayer?: unknown[]; __gtmLoaded?: boolean };

function gtag(..._args: unknown[]) {
  const w = window as W;
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments);
}

export const consentState = (granted: boolean) => {
  const v = granted ? "granted" : "denied";
  return { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v };
};

export function loadGtm() {
  const w = window as W;
  if (w.__gtmLoaded) return;
  w.__gtmLoaded = true;
  gtag("consent", "default", { ...consentState(false), wait_for_update: 500 });
  if (readConsent()?.choice === "accepted") gtag("consent", "update", consentState(true));
  w.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

/** Envia "whatsapp_click" ao dataLayer em qualquer link wa.me (usar como acionador no GTM). */
function onClick(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
  if (!a) return;
  (window as W).dataLayer?.push({ event: "whatsapp_click", link_url: a.href, link_text: a.textContent?.trim().slice(0, 80) });
}

export function initGtm() {
  loadGtm();
  const onChange = (e: Event) => {
    const rec = (e as CustomEvent<ConsentRecord>).detail;
    gtag("consent", "update", consentState(rec?.choice === "accepted"));
    if (rec?.choice === "accepted") (window as W).dataLayer!.push({ event: "consent_granted" });
  };
  window.addEventListener(CONSENT_EVENT, onChange);
  document.addEventListener("click", onClick, true);
  return () => { window.removeEventListener(CONSENT_EVENT, onChange); document.removeEventListener("click", onClick, true); };
}
