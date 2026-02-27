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

// ISO 3166-1 numeric codes for highlighted countries
const highlightedCountries = new Set([
  "398", // Kazakhstan
  "643", // Russia
  "860", // Uzbekistan
  "840", // USA
  "792", // Turkey
  "784", // UAE
  "682", // Saudi Arabia
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
    <AnimatedSection className="py-14 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {tr("scaling.title")}
          </h2>
          <p className="text-muted-foreground text-base">{tr("scaling.line1")}</p>
          <p className="text-muted-foreground text-base">{tr("scaling.line2")}</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <ComposableMap
            projectionConfig={{ scale: 140, center: [50, 35] }}
            className="w-full h-auto"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = highlightedCountries.has(geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "#46A3A3" : "#E5E7EB"}
                      stroke="#FFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: isHighlighted ? "#3D8F8F" : "#D1D5DB" },
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
