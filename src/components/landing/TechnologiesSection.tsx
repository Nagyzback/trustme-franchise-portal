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
              <div
                className="p-7 rounded-2xl h-full transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #E8F7F7 100%)",
                  border: "1px solid #D0EEEE",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(70,163,163,0.18)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#46A3A3" }}>
                    <c.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{tr(c.titleKey)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tr(c.tagsKey).split(",").map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: "#F0FAFA", color: "#46A3A3" }}
                    >
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
