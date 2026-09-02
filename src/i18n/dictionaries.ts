import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./en";

export type { Dictionary };

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> => dictionaries[locale]();
