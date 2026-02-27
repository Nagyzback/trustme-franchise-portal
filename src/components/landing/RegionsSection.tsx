import { MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const regions = [
  { name: "Астана", statusKey: "regions.limited", hot: true },
  { name: "Алматы", statusKey: "regions.limited", hot: true },
  { name: "Шымкент", statusKey: "regions.open", hot: false },
  { name: "Қарағанды", statusKey: "regions.open", hot: false },
  { name: "Атырау", statusKey: "regions.open", hot: false },
  { name: "Актобе", statusKey: "regions.open", hot: false },
  { name: "Павлодар", statusKey: "regions.soon", hot: false },
  { name: "Усть-Каменогорск", statusKey: "regions.soon", hot: false },
];

const RegionsSection = () => {
  const { tr } = useLanguage();

  return (
    <AnimatedSection className="py-14 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("regions.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{tr("regions.subtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((r, i) => (
            <AnimatedSection key={r.name} delay={i * 0.05}>
              <div className="flex items-center gap-3 p-5 rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className={`text-xs mt-0.5 ${r.hot ? "text-primary font-medium" : "text-muted-foreground"}`}>
                    {tr(r.statusKey)}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default RegionsSection;
