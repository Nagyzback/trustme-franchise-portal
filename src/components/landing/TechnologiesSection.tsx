import { useLanguage } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";

import techEsign from "@/assets/tech-esign.png";
import techBiometry from "@/assets/tech-biometry.png";
import techBlockchain from "@/assets/tech-blockchain.png";
import techAi from "@/assets/tech-ai.png";
import techDocs from "@/assets/tech-docs.png";
import techIntegrations from "@/assets/tech-integrations.png";

const TechnologiesSection = () => {
  const { tr } = useLanguage();

  const cards = [
    { image: techEsign, titleKey: "tech.esign_title", tagsKey: "tech.esign_tags" },
    { image: techBiometry, titleKey: "tech.bio_title", tagsKey: "tech.bio_tags" },
    { image: techBlockchain, titleKey: "tech.blockchain_title", tagsKey: "tech.blockchain_tags" },
    { image: techAi, titleKey: "tech.ai_title", tagsKey: "tech.ai_tags" },
    { image: techDocs, titleKey: "tech.docs_title", tagsKey: "tech.docs_tags" },
    { image: techIntegrations, titleKey: "tech.integrations_title", tagsKey: "tech.integrations_tags" },
  ];

  return (
    <AnimatedSection className="py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("tech.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <AnimatedSection key={c.titleKey} delay={i * 0.08}>
              <div
                className="relative rounded-2xl h-full transition-all duration-300 overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E8E8",
                  minHeight: 180,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-stretch">
                  <div className="flex-1 p-7 pr-2">
                    <h3 className="text-xl font-bold text-foreground mb-4">{tr(c.titleKey)}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tr(c.tagsKey).split(",").map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{ backgroundColor: "#F5F5F5", color: "#666" }}
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-[35%] flex-shrink-0 flex items-end justify-end p-4">
                    <img
                      src={c.image}
                      alt={tr(c.titleKey)}
                      className="max-h-[140px] object-contain"
                      loading="lazy"
                    />
                  </div>
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
