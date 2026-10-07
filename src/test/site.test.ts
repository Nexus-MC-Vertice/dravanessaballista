import { describe, expect, it } from 'vitest';
import { SITE, whatsappLink } from '../config/site';
describe('Appointment contact configuration', () => {
  it('does not send patients to a fabricated number when no number is supplied', () => {
    expect(SITE.whatsappNumber).toBe('');
    expect(whatsappLink()).toBe('#contato');
  });
});
