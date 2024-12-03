import type { NegativeCatFoodTag, PositiveCatFoodTag } from "./Product";
import type {
  CatLifeStage,
  WeightStatus,
  ActivityLevel,
  HealthConditionEnum,
} from "./PetProfile";

export type Recommendation = {
  ids: string[];
};

interface Tags {
  reason: string;
}

interface RecommendedCatFoodTags extends Tags {
  positive_tags: PositiveCatFoodTag[];
}

interface HighRiskCatFoodTags extends Tags {
  negative_tags: NegativeCatFoodTag[];
}

export interface Rule {
  recommended: RecommendedCatFoodTags;
  high_risk: HighRiskCatFoodTags;
}

export interface CatBusinessRules {
  life_stage: Record<CatLifeStage, Rule>;
  weight_status: Record<WeightStatus, Rule>;
  activity_level: Record<ActivityLevel, Rule>;
  health_conditions: Record<HealthConditionEnum, Rule>;
}
