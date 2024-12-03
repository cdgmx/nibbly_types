import { z } from "zod";
import {type Models } from "node-appwrite";
import { AppwriteDocument } from "./Appwrite";

// Food catalog structure
export enum PositiveCatFoodTag {
  KIDNEY_CARE = "kidney-care",
  DIGESTIVE_HEALTH = "digestive-health",
  DENTAL_HEALTH = "dental-health",
  JOINT_SUPPORT = "joint-support",
  SKIN_COAT_HEALTH = "skin-coat-health",
  LOW_ACTIVITY = "low-activity",
  MODERATE_ACTIVITY = "moderate-activity",
  ALLERGY_RELIEF = "allergy-relief",
  IMMUNE_SUPPORT = "immune-support",
  WEIGHT_MANAGEMENT = "weight-management",
  SKINCARE_HEALTH = "skincare-health",
  URINARY_TRACT_HEALTH = "urinary-tract-health",
  DIABETIC_SUPPORT = "diabetic-support",
  LIVER_CARE = "liver-care",
  RECOVERY = "recovery",
  HAIRBALL_CONTROL = "hairball-control",
  STRESS_ANXIETY = "stress-anxiety",
  THYROID_SUPPORT = "thyroid-support",
  GROWTH_SUPPORT = "growth-support",
  NONE = "none",
  DIGESTION_HEALTH = "digestion-health",
  HIGH_ACTIVITY = "high-activity",
  KITTEN = "kitten",
  MUSCLE_DEVELOPMENT = "muscle-development",
  HYDRATION = "hydration",
  TAURINE_SUPPORT = "taurine-support",
  HYDRATION_SUPPORT = "hydration-support",
  HIGH_PROTEIN_CONTENT = "high-protein-content",
}

export enum NegativeCatFoodTag {
  CONTAINS_CHICKEN = "contains-chicken",
  LOW_MOISTURE = "low-moisture",
  CONTAINS_SOY = "contains-soy",
  CONTAINS_BYPRODUCTS = "contains-byproducts",
  CONTAINS_GRAINS = "contains-grains",
  CONTAINS_ARTIFICIAL_COLORS = "contains-artificial-colors",
  LOW_FIBER = "low-fiber",
  LOW_TAURINE = "low-taurine",
  CONTAINS_FILLERS = "contains-fillers",
  HIGH_FAT = "high-fat",
  CONTAINS_DAIRY = "contains-dairy",
  CONTAINS_ARTIFICIAL_FLAVORS = "contains-artificial-flavors",
  HIGH_PHOSPHORUS = "high-phosphorus",
  LOW_PROTEIN = "low-protein",
  CONTAINS_BONES = "contains-bones",
  UNBALANCED_CALCIUM_PHOSPHORUS = "unbalanced-calcium-phosphorus",
  CONTAINS_ARTIFICIAL_PRESERVATIVES = "contains-artificial-preservatives",
  HIGH_SODIUM = "high-sodium",
  TAURINE = "taurine",
}

type LifeStage = "kitten" | "adult" | "senior" | "puppy";

 enum BreedSize {
  ALL = "all",
  LARGE = "large",
}

 enum FoodType {
  DRY = "dry",
  WET = "wet",
}

export const FoodSchema = z.object({
  name: z.string(),
  breed_size: z.nativeEnum(BreedSize),
  food_type: z.nativeEnum(FoodType),
  positive_tags: z.array(z.nativeEnum(PositiveCatFoodTag)),
  negative_tags: z.array(z.nativeEnum(NegativeCatFoodTag)),
}).merge(AppwriteDocument)

export interface Food extends z.infer<typeof FoodSchema> {}

// export interface Food {
//   name: string;
//   life_stage: LifeStage[];
//   breed_size: "all" | "large";
//   food_type: "dry" | "wet";
//   positive_tags: PositiveCatFoodTag[];
//   negative_tags: NegativeCatFoodTag[];
// }

export interface CatFood extends Food {}
