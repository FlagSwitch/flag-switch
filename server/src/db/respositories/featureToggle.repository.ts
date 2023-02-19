import prisma from "../prisma";
import { TCreateFeatureToggle } from "../../types/featureToggle.types";
import { FeatureToggle } from "@prisma/client";

const FeatureToggleDAO = prisma.featureToggle;

const create = async (
  createFeatureToggleFields: TCreateFeatureToggle
): Promise<FeatureToggle> => {
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
