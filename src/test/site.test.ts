import { describe, expect, it } from 'vitest';
import { SITE, whatsappLink } from '../config/site';
describe('Appointment contact configuration', () => {
  it('opens the official Brazilian WhatsApp number with the appointment message', () => {
    expect(SITE.whatsappNumber).toBe('5518996452218');
    const url = new URL(whatsappLink());
    expect(url.origin + url.pathname).toBe('https://wa.me/5518996452218');
    expect(url.searchParams.get('text')).toBe('Olá, Dra. Vanessa! Gostaria de informações sobre uma consulta de Psiquiatria.');
  });
  it('does not send patients to a fabricated number when no number is supplied', () => {
    expect(whatsappLink('')).toBe('#contato');
  });
});
