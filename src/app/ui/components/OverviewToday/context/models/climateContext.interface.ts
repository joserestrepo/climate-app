import { Climate } from "@/app/lib/entities/Climate";

export interface ClimateContextType {
    climateMap: Map<string, Climate>;
    setClimateMap: any;
  }