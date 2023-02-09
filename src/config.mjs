import defaultImage from './assets/images/BookNow.jpg';

const CONFIG = {
  name: 'Tuckers Tours Belfast Ltd',

  origin: 'https://tuckerstoursbelfast.netlify.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'Tuckers Tours Belfast Ltd',
  description:
    "Tuckers Tours Belfast Ltd: Discover the beauty of Belfast with our expert-led tours. Experience the city's rich history and culture like never before.",
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
