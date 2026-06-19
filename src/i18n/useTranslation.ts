import { en } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";
import type { Locale } from "./config";

const dicts = { en, ar } as const;

export function useTranslation(locale: Locale) {
  return dicts[locale];
}
