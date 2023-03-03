import { Feature, FeatureType } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { sample } from "lodash";

const createFeatureMock = (params: { projectId: string }): Feature => {
  return {
    id: faker.datatype.uuid(),
    type: sample(Object.values(FeatureType)) as FeatureType,
    name: faker.commerce.department(),
    createdBy: faker.name.fullName(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    projectId: params.projectId,
  };
};

export { createFeatureMock };
