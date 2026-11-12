// Google Tag Manager carregado somente após "Aceitar" (LGPD + Consent Mode v2).
import { CONSENT_EVENT, readConsent, type ConsentRecord } from "@/lib/consent";

export const GTM_ID = "GTM-MNBN29XV";
type W = Window & { dataLayer?: unknown[]; __gtmLoaded?: boolean };

function gtag(..._args: unknown[]) {
  const w = window as W;
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments);
}

const state = (granted: boolean) => {
  const v = granted ? "granted" : "denied";
  return { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v };
};

export function loadGtm() {
  const w = window as W;
  if (w.__gtmLoaded) { gtag("consent", "update", state(true)); return; }
  w.__gtmLoaded = true;
  gtag("consent", "default", state(true));
  w.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

export function initGtm() {
  if (readConsent()?.choice === "accepted") loadGtm();
  const onChange = (e: Event) => {
    const rec = (e as CustomEvent<ConsentRecord>).detail;
    if (rec?.choice === "accepted") loadGtm();
    else if ((window as W).__gtmLoaded) gtag("consent", "update", state(false));
  };
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}
