import { MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const regions = [
  { name: "Астана", status: "Ограниченные слоты", hot: true },
  { name: "Алматы", status: "Ограниченные слоты", hot: true },
  { name: "Шымкент", status: "Открыт набор", hot: false },
  { name: "Қарағанды", status: "Открыт набор", hot: false },
  { name: "Атырау", status: "Открыт набор", hot: false },
  { name: "Актобе", status: "Открыт набор", hot: false },
  { name: "Павлодар", status: "Скоро", hot: false },
  { name: "Усть-Каменогорск", status: "Скоро", hot: false },
];

const RegionsSection = () => (
  <AnimatedSection className="py-14 px-6 bg-secondary/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Преимущества по регионам</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Франшиза доступна в ключевых городах Казахстана
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {regions.map((r, i) => (
          <AnimatedSection key={r.name} delay={i * 0.05}>
            <div className="flex items-center gap-3 p-5 rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <MapPin size={18} className="text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
                <p className={`text-xs mt-0.5 ${r.hot ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  {r.status}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default RegionsSection;
