import createMiddleware from 'next-intl/middleware';
import { locales } from '@/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: locales[0],
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt-BR)/:path*']
};
