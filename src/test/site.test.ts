import { describe, expect, it } from 'vitest';
import { SITE, whatsappLink } from '../config/site';
describe('Appointment contact configuration', () => {
  it('opens the official Brazilian WhatsApp number through wa.me', () => {
    expect(SITE.whatsappNumber).toBe('5518996452218');
    const url = new URL(whatsappLink());
    expect(url.origin + url.pathname).toBe('https://wa.me/5518996452218');
  });
  it('uses the exact supplied contact message', () => {
    const url = new URL(whatsappLink());
    expect(url.searchParams.get('text')).toBe('Olá! Vim através do site e gostaria de saber mais sobre o acompanhamento com a Dra. Vanessa.');
  });
  it('encodes the message exactly as the supplied URL', () => {
    expect(whatsappLink()).toBe('https://wa.me/5518996452218?text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20com%20a%20Dra.%20Vanessa.');
  });
  it('does not send patients to a fabricated number when no number is supplied', () => {
    expect(whatsappLink('')).toBe('#contato');
  });
});
