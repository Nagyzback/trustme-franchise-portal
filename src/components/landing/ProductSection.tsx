import { Check, FileText, Clock, CheckCircle, Eye, Download, MoreHorizontal } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const ProductSection = () => {
  const { tr } = useLanguage();

  const benefitKeys = ["product.b1", "product.b2", "product.b3", "product.b4", "product.b5", "product.b6"];

  return (
    <AnimatedSection className="py-14 px-6 bg-secondary/50">
      <div id="product" className="max-w-7xl mx-auto scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("product.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{tr("product.subtitle")}</p>
            <ul className="space-y-4">
              {benefitKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{tr(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                  <span className="ml-3 text-xs text-muted-foreground font-medium">TrustContract — Dashboard</span>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-3 px-5 py-2.5 border-b border-border">
                  <span className="text-xs font-semibold text-foreground">{tr("product.dash_docs")}</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded">{tr("product.dash_filter")}</div>
                    <div className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded">{tr("product.dash_sort")}</div>
                  </div>
                </div>

                {/* Document list */}
                <div className="p-4 space-y-2.5">
                  {/* Doc row 1 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/70 hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                        <FileText size={14} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{tr("product.dash_doc1")}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{tr("product.dash_doc1_meta")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle size={10} /> {tr("product.signed")}
                      </span>
                      <MoreHorizontal size={14} className="text-muted-foreground" />
                    </div>
                  </div>

                  {/* Doc row 2 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/70">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <FileText size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{tr("product.dash_doc2")}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{tr("product.dash_doc2_meta")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock size={10} /> {tr("product.review")}
                      </span>
                      <MoreHorizontal size={14} className="text-muted-foreground" />
                    </div>
                  </div>

                  {/* Doc row 3 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/70">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center">
                        <FileText size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{tr("product.dash_doc3")}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{tr("product.dash_doc3_meta")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle size={10} /> {tr("product.signed")}
                      </span>
                      <MoreHorizontal size={14} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-t border-border">
                  <button className="text-[10px] font-medium gradient-primary text-primary-foreground px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Download size={10} /> {tr("product.dash_download")}
                  </button>
                  <button className="text-[10px] font-medium border border-border text-foreground px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Eye size={10} /> {tr("product.dash_preview")}
                  </button>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductSection;
