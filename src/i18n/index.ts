import type { Profile } from '../data/profile';
import enProfile from '../data/profile';
import deProfile from '../data/profile.de';
import { strings, type Locale } from './strings';

export type { Locale };

export function getProfile(locale: Locale): Profile {
  return locale === 'de' ? deProfile : enProfile;
}

export function t(locale: Locale) {
  return strings[locale];
}

export function htmlLang(locale: Locale): string {
  return locale === 'de' ? 'de-CH' : 'en-CH';
}

export function ogLocale(locale: Locale): string {
  return locale === 'de' ? 'de_DE' : 'en_US';
}

/**
 * Builds the English and German URLs for a given locale-agnostic base path
 * (e.g. '/experience' or '/case-studies/ai-cross-selling'), for use in
 * hreflang tags and the language switcher.
 */
export function buildLocalizedPaths(basePath: string): Record<Locale, string> {
  if (basePath === '/') {
    // The site root keeps its slash ('/'), but every other path — including the
    // German home — is slash-less to match trailingSlash: 'never'. Emitting
    // '/de/' here would make the German homepage's canonical/hreflang point at a
    // URL that 308-redirects to '/de'.
    return { en: '/', de: '/de' };
  }
  return { en: basePath, de: `/de${basePath}` };
}
