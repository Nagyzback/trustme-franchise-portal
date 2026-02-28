import { PenTool, ScanFace, Blocks, Brain, FileText, Plug } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const TechnologiesSection = () => {
  const { tr } = useLanguage();

  const cards = [
    { icon: PenTool, titleKey: "tech.esign_title", tagsKey: "tech.esign_tags" },
    { icon: ScanFace, titleKey: "tech.bio_title", tagsKey: "tech.bio_tags" },
    { icon: Blocks, titleKey: "tech.blockchain_title", tagsKey: "tech.blockchain_tags" },
    { icon: Brain, titleKey: "tech.ai_title", tagsKey: "tech.ai_tags" },
    { icon: FileText, titleKey: "tech.docs_title", tagsKey: "tech.docs_tags" },
    { icon: Plug, titleKey: "tech.integrations_title", tagsKey: "tech.integrations_tags" },
  ];

  return (
    <AnimatedSection className="py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("tech.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <AnimatedSection key={c.titleKey} delay={i * 0.08}>
              <div className="p-7 rounded-2xl border border-border bg-gradient-to-br from-card to-[hsl(180,38%,46%,0.05)] shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center">
                    <c.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{tr(c.titleKey)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tr(c.tagsKey).split(",").map((tag) => (
                    <span key={tag} className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TechnologiesSection;
