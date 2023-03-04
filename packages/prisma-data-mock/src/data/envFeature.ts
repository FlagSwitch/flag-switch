import { EnvFeature } from "@prisma/client";
import { faker } from "@faker-js/faker";

const createEnvFeatureMock = (params: {
  environmentId: string;
  featureToggleId: string;
}): EnvFeature => {
  return {
    state: faker.datatype.boolean(),
    updatingUser: faker.name.fullName(),
    queriedAt: faker.datatype.datetime(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    environmentId: params.environmentId,
    featureToggleId: params.featureToggleId,
    version: 0,
  };
};

export { createEnvFeatureMock };
