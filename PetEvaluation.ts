import { z } from "zod";
import { AppwriteDocument } from "./Appwrite";

export const PetEvaluationSchema = z.object({
  high_risk_product_ids: z.array(z.string()),
  recommended_product_ids: z.array(z.string()),
  recommended_reason: z.string(),
  high_risk_reason: z.string(),
});

export const PetEvaluationDocumentSchema =
  PetEvaluationSchema.merge(AppwriteDocument);

export interface PetEvaluation extends z.infer<typeof PetEvaluationSchema> {}

export interface PetEvaluationDocument
  extends z.infer<typeof PetEvaluationDocumentSchema> {}
