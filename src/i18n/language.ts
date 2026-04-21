import i18n, { SUPPORTED_LANGUAGES, type AppLanguage } from "./config";

export function getAiExplanationLanguage(language: AppLanguage): string {
  const fallBackLanguage = "English";

  if (language === "auto") {
    const detectedLanguage = i18n.resolvedLanguage?.split("-")[0] ?? i18n.language?.split("-")[0];
    const detected = SUPPORTED_LANGUAGES.find(({ id }) => id === detectedLanguage);
    return detected?.label || fallBackLanguage;
  }

  const supportedLanguage = SUPPORTED_LANGUAGES.find(
    ({ id }) => id === language,
  );
  return supportedLanguage?.label || fallBackLanguage;
}
