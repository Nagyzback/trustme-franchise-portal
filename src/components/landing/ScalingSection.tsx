import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = new Set([
  "398", "643", "860", "840", "792", "784", "682",
]);

interface MarkerData {
  name: string;
  coordinates: [number, number];
  flag: string;
}

const markers: MarkerData[] = [
  { name: "Kazakhstan", coordinates: [66.9, 48.0], flag: "🇰🇿" },
  { name: "Russia", coordinates: [105.3, 61.5], flag: "🇷🇺" },
  { name: "Uzbekistan", coordinates: [64.6, 41.4], flag: "🇺🇿" },
  { name: "USA", coordinates: [-95.7, 37.1], flag: "🇺🇸" },
  { name: "Turkey", coordinates: [35.2, 39.9], flag: "🇹🇷" },
  { name: "UAE", coordinates: [53.8, 23.4], flag: "🇦🇪" },
  { name: "Saudi Arabia", coordinates: [45.1, 23.9], flag: "🇸🇦" },
];

const ScalingSection = memo(() => {
  const { tr } = useLanguage();

  return (
    <AnimatedSection className="px-6 pb-0 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1">
            {tr("scaling.title")}
          </h2>
          <p className="text-muted-foreground text-base">{tr("scaling.line1")}</p>
          <p className="text-muted-foreground text-base">{tr("scaling.line2")}</p>
        </div>
        <div
          className="max-w-5xl mx-auto mt-2 rounded-2xl overflow-hidden shadow-card"
          style={{ backgroundColor: "#F5F5F5", height: 400, marginTop: 0, paddingTop: 0, lineHeight: 0 }}
        >
          <ComposableMap
            projectionConfig={{ scale: 145, center: [50, 20] }}
            width={800}
            height={400}
            style={{ width: "100%", height: "100%", margin: 0, padding: 0, display: "block" }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = highlightedCountries.has(geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "#46A3A3" : "#E0E0E0"}
                      stroke="#FFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: isHighlighted ? "#46A3A3" : "#E0E0E0" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {markers.map((m) => (
              <Marker key={m.name} coordinates={m.coordinates}>
                <circle r={10} fill="white" stroke="#46A3A3" strokeWidth={1.5} />
                <text textAnchor="middle" y={5} fontSize={14} className="select-none">
                  {m.flag}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </AnimatedSection>
  );
});

ScalingSection.displayName = "ScalingSection";

export default ScalingSection;
