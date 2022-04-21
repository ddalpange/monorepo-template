import {captureException, init, setUser} from '@sentry/nextjs';

import {SENTRY_DSN, SENTRY_RELEASE, TARGET_ENV} from '@src/config';

export {setUser as setUserToSentry};

export const initSentry = () =>
  init({
    dsn: SENTRY_DSN,
    release: SENTRY_RELEASE,
    debug: TARGET_ENV === 'development' || TARGET_ENV === 'preview',
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    enabled: false,
    // enabled: TARGET_ENV !== 'local',
    environment: TARGET_ENV,
  });

const requestCallback =
  typeof window !== 'undefined' && typeof window.requestIdleCallback !== 'undefined' ? requestIdleCallback : setTimeout;

export const logToSentry = (...params: Parameters<typeof captureException>) => {
  requestCallback(() => {
    captureException(...params);
  });
};

export const reportError = (error: Error) => {
  logToSentry(error);
};
