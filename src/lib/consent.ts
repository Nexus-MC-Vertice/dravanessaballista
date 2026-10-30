// Registro de consentimento de cookies (LGPD). Lido sempre no momento do envio de qualquer tag.
export const CONSENT_KEY = "cookie_consent";
export const CONSENT_VERSION = "2026-10-30";
export const CONSENT_EVENT = "cookie-consent-change";
export const OPEN_CONSENT_EVENT = "cookie-consent-open";

export type ConsentChoice = "accepted" | "rejected";
export type ConsentRecord = { choice: ConsentChoice; version: string; at: string };

export function readConsent(): ConsentRecord | null {
  try {
    const r = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    return r && (r.choice === "accepted" || r.choice === "rejected") ? r : null;
  } catch { return null; }
}

export function saveConsent(choice: ConsentChoice): ConsentRecord {
  const rec = { choice, version: CONSENT_VERSION, at: new Date().toISOString() };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(rec)); } catch { /* armazenamento indisponível */ }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: rec }));
  return rec;
}

/** Use antes de carregar/enviar qualquer tag de anúncios ou métricas. */
export const hasMarketingConsent = () => readConsent()?.choice === "accepted";

export const openConsentSettings = () => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
