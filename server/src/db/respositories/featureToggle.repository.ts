import prisma from "../prisma";
import { TCreateFeatureToggle } from "../../types/featureToggle.types";
import { Feature } from "@prisma/client";

const FeatureToggleDAO = prisma.feature;

const create = async (
  createFeatureToggleFields: TCreateFeatureToggle
): Promise<Feature> => {
  const { id, name, type, createdBy, projectId } = createFeatureToggleFields;
  const featureToggle = await FeatureToggleDAO.create({
    data: {
      id,
      name,
      type,
      createdBy,
      projectId,
    },
  });
  return featureToggle;
};
export { create };
