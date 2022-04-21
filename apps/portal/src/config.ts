type Environment = 'production' | 'staging' | 'development' | 'preview' | 'local';

export const TARGET_ENV = process.env.TARGET_ENV as Environment;
export const SENTRY_DSN = process.env.SENTRY_DSN;
export const SENTRY_RELEASE = process.env.SENTRY_RELEASE;

export const MONOREPO_API_HOST = {
  production: '',
  staging: '',
  development: '',
  preview: '',
  local: '',
}[TARGET_ENV];

export const GTM_ENV = {
  gtmId: '',
  ...{
    production: {
      preview: '',
      auth: '',
    },
    staging: {
      preview: '',
      auth: '',
    },
    development: {
      preview: '',
      auth: '',
    },
    preview: {
      preview: '',
      auth: '',
    },
    local: {
      preview: '',
      auth: '',
    },
  }[TARGET_ENV],
};

export const logBuildInformation = () => {
  console.log('BuildInfo', {
    version: process.env.APP_VERSION,
    time: new Date(process.env.BUILD_TIMESTAMP as string).toLocaleString(),
    apiHost: MONOREPO_API_HOST,
  });
};
