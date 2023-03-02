import { Account, DashboardUser, Prisma, Application, EnvFeature, Feature, Environment } from '@prisma/client';

declare const createAccountMock: () => Account;

declare const account_createAccountMock: typeof createAccountMock;
declare namespace account {
  export {
    account_createAccountMock as createAccountMock,
  };
}

declare const projectWithUsers: {
    include: {
        dashboardUsers: true;
    };
};
type ProjectWithPosts = Prisma.ProjectGetPayload<typeof projectWithUsers>;
declare const createProjectMock: (params: {
    accountId: string;
    dashboardUsers?: DashboardUser[];
}) => ProjectWithPosts;

declare const project_createProjectMock: typeof createProjectMock;
declare namespace project {
  export {
    project_createProjectMock as createProjectMock,
  };
}

declare const createApplicationMock: (params: {
    accountId: string;
}) => Application;

declare const application_createApplicationMock: typeof createApplicationMock;
declare namespace application {
  export {
    application_createApplicationMock as createApplicationMock,
  };
}

declare const createDashboardUserMock: (params: {
    accountId: string;
}) => DashboardUser;

declare const dashboardUser_createDashboardUserMock: typeof createDashboardUserMock;
declare namespace dashboardUser {
  export {
    dashboardUser_createDashboardUserMock as createDashboardUserMock,
  };
}

declare const createEnvFeatureMock: (params: {
    environmentId: string;
    featureToggleId: string;
}) => EnvFeature;

declare const envFeature_createEnvFeatureMock: typeof createEnvFeatureMock;
declare namespace envFeature {
  export {
    envFeature_createEnvFeatureMock as createEnvFeatureMock,
  };
}

declare const createFeatureMock: (params: {
    projectId: string;
}) => Feature;

declare const feature_createFeatureMock: typeof createFeatureMock;
declare namespace feature {
  export {
    feature_createFeatureMock as createFeatureMock,
  };
}

declare const createEnvironmentMock: (params: {
    accountId: string;
}) => Environment;

declare const environment_createEnvironmentMock: typeof createEnvironmentMock;
declare namespace environment {
  export {
    environment_createEnvironmentMock as createEnvironmentMock,
  };
}

declare namespace index {
  export {
    account as AccountMocks,
    project as ProjectMocks,
    application as ApplicationMocks,
    dashboardUser as DashboardUserMocks,
    envFeature as EnvFeatureMocks,
    feature as FeatureMocks,
    environment as EnvironmentMocks,
  };
}

export { index as data };
