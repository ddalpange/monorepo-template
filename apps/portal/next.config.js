const {withSentryConfig} = require('@sentry/nextjs');

const pkg = require('./package.json');
const appVersion = pkg.version;
const timestamp = Date.now();
const targetEnv =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'prod'
    ? 'production'
    : process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'stg'
    ? 'staging'
    : process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'main'
    ? 'development'
    : typeof process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF !== 'undefined'
    ? 'preview'
    : 'local';
const sentryRelease = `${targetEnv}@${appVersion}_${new Date(timestamp).toISOString()}`;
const sentryWebpackPluginOptions = {
  silent: true,
  release: sentryRelease,
};
const configs = {
  pageExtensions: ['page.tsx', 'page.ts'],
  swcMinify: true,
  experimental: {
    emotion: true,
  },
  env: {
    TARGET_ENV: targetEnv,
    APP_VERSION: appVersion,
    BUILD_TIMESTAMP: timestamp,
    SENTRY_DSN: '',
    SENTRY_RELEASE: sentryRelease,
  },
  images: {
    domains: ['localhost', 'i.imgur.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = withSentryConfig(configs, sentryWebpackPluginOptions);
