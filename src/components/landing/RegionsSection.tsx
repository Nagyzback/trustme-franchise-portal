import { MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const regions = [
  { name: "Москва и МО", status: "Ограниченные слоты", hot: true },
  { name: "Санкт-Петербург", status: "Открыт набор", hot: false },
  { name: "Казань", status: "Открыт набор", hot: false },
  { name: "Новосибирск", status: "Открыт набор", hot: false },
  { name: "Екатеринбург", status: "Открыт набор", hot: false },
  { name: "Краснодар", status: "Открыт набор", hot: false },
  { name: "Ростов-на-Дону", status: "Скоро", hot: false },
  { name: "Самара", status: "Скоро", hot: false },
];

const RegionsSection = () => (
  <AnimatedSection className="py-24 px-6 bg-secondary/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Преимущества по регионам</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Франшиза доступна в ключевых регионах России
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
