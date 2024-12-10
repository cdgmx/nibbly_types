import { z } from "zod";
import { type Models } from "node-appwrite";
import { PetEvaluationDocumentSchema } from "./PetEvaluation";

export enum HealthConditionEnum {
  KIDNEY_DISEASE = "Kidney Disease",
  URINARY_TRACT_ISSUES = "Urinary Tract Issues",
  DIABETES_MELLITUS = "Diabetes Mellitus",
}

export interface HealthCondition {
  condition: HealthConditionEnum;
  description: string;
}

export enum WeightStatus {
  UNDERWEIGHT = "underweight",
  IDEAL = "ideal",
  OVERWEIGHT = "overweight",
}

export enum ActivityLevel {
  LOW = "low",
  MODERATE = "moderate",
  HIGH = "high",
}

export enum CatLifeStage {
  KITTEN = "kitten",
  ADULT = "adult",
  SENIOR = "senior",
}

export enum DogLifeStage {
  PUPPY = "puppy",
  ADULT = "adult",
  SENIOR = "senior",
}

export const PetProfileSchema = z.object({
  user_id: z.string().min(1, "User ID is required"),
  name: z
    .string()
    .min(1, "Pet name is required")
    .max(50, "Pet name cannot exceed 50 characters")
    .regex(/^[a-zA-Z0-9\s]+$/, "Only alphanumeric characters allowed"),
  life_stage: z.nativeEnum(CatLifeStage).or(z.nativeEnum(DogLifeStage)),
  weight_status: z.nativeEnum(WeightStatus),
  activity_level: z.nativeEnum(ActivityLevel),
  health_conditions: z.array(z.nativeEnum(HealthConditionEnum)),
  pet_evaluation:
    PetEvaluationDocumentSchema.optional().or(z.string().optional()),
});

export const PetCatProfileSchema = PetProfileSchema.extend({
  life_stage: z.nativeEnum(CatLifeStage),
});



export interface PetProfile extends z.infer<typeof PetProfileSchema> {}

export interface PetProfileDocument extends PetProfile, Models.Document {}

export interface CatPetProfile extends z.infer<typeof PetCatProfileSchema> {}

export interface DogPetProfile extends PetProfile {
  life_stage: DogLifeStage;
}
