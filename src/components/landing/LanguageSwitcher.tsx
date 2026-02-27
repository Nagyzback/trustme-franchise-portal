import { useLanguage } from "@/i18n/LanguageContext";
import { Lang, langLabels } from "@/i18n/translations";

const langs: Lang[] = ["ru", "en", "kz", "fr", "es", "zh"];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`text-xs px-2 py-1 rounded transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground font-semibold"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {langLabels[l]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
