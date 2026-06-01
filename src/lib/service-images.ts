import roofing from "@/assets/hero-home.jpg";
import roofRepair from "@/assets/service-roof-repair.jpg";
import roofReplacement from "@/assets/service-roof-replacement.jpg";
import emergency from "@/assets/service-emergency.jpg";
import stormDamage from "@/assets/service-storm-damage.jpg";
import leakDetection from "@/assets/service-leak-detection.jpg";
import flatRoof from "@/assets/service-flat-roof.jpg";
import roofInsulation from "@/assets/service-roof-insulation.jpg";
import roofInspection from "@/assets/service-roof-inspection.jpg";
import roofVentilation from "@/assets/service-roof-ventilation.jpg";
import metalRoofing from "@/assets/service-metal-roofing.jpg";
import residential from "@/assets/service-residential-roofing.jpg";
import commercial from "@/assets/service-commercial-roofing.jpg";
import maintenance from "@/assets/service-roof-maintenance.jpg";
import skylight from "@/assets/service-skylight.jpg";
import qualityMaterials from "@/assets/service-quality-materials.jpg";
import siding from "@/assets/service-siding.jpg";
import gutters from "@/assets/service-gutters.jpg";
import windows from "@/assets/service-windows.jpg";

export const serviceImages: Record<string, string> = {
  roofing,
  "roof-repair": roofRepair,
  "roof-replacement": roofReplacement,
  "emergency-roofing": emergency,
  "storm-damage-repair": stormDamage,
  "leak-detection": leakDetection,
  "flat-roof-installation": flatRoof,
  "roof-insulation": roofInsulation,
  "roof-inspection": roofInspection,
  "roof-ventilation": roofVentilation,
  "metal-roofing": metalRoofing,
  "residential-roofing": residential,
  "commercial-roofing": commercial,
  "roof-maintenance": maintenance,
  "skylight-installation": skylight,
  "quality-materials": qualityMaterials,
  "siding-installation": siding,
  "siding-repair": siding,
  gutters,
  "gutter-installation": gutters,
  "gutter-repair": gutters,
  "window-installation": windows,
  "window-replacement": windows,
};

export function getServiceImage(slug: string): string {
  return serviceImages[slug] ?? roofing;
}
