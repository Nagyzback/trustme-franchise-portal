import { Building2, Plane, Home, GraduationCap, Car, Wrench, Factory, HeartPulse } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const DocumentsSection = () => {
  const { tr } = useLanguage();

  const categories = [
    { icon: Building2, titleKey: "docs.cat1_title", itemsKey: "docs.cat1_items", color: "bg-blue-100 text-blue-600" },
    { icon: Plane, titleKey: "docs.cat2_title", itemsKey: "docs.cat2_items", color: "bg-amber-100 text-amber-600" },
    { icon: Home, titleKey: "docs.cat3_title", itemsKey: "docs.cat3_items", color: "bg-purple-100 text-purple-600" },
    { icon: GraduationCap, titleKey: "docs.cat4_title", itemsKey: "docs.cat4_items", color: "bg-pink-100 text-pink-600" },
    { icon: Car, titleKey: "docs.cat5_title", itemsKey: "docs.cat5_items", color: "bg-indigo-100 text-indigo-600" },
    { icon: Wrench, titleKey: "docs.cat6_title", itemsKey: "docs.cat6_items", color: "bg-orange-100 text-orange-600" },
    { icon: Factory, titleKey: "docs.cat7_title", itemsKey: "docs.cat7_items", color: "bg-red-100 text-red-600" },
    { icon: HeartPulse, titleKey: "docs.cat8_title", itemsKey: "docs.cat8_items", color: "bg-emerald-100 text-emerald-600" },
  ];

  return (
    <AnimatedSection className="py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("docs.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.titleKey} delay={i * 0.06}>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${cat.color}`}>
                  <cat.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">{tr(cat.titleKey)}</h3>
                <ul className="space-y-2 flex-1 mb-4">
                  {tr(cat.itemsKey).split(",").map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{item.trim()}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-xs font-medium text-foreground border border-border rounded-lg px-4 py-2 hover:bg-secondary transition-colors w-fit">
                  {tr("docs.learn_more")}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DocumentsSection;
