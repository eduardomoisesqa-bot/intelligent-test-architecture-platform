import { loadEnvironmentVariables } from './environment.loader';
import { Environment, EnvironmentName } from './environment.types';

loadEnvironmentVariables();

function toBoolean(value: string | undefined, defaultValue: boolean): boolean {
  if (value === undefined) {
    return defaultValue;
  }

  return value.toLowerCase() === 'true';
}

function toNumber(value: string | undefined, defaultValue: number): number {
  if (value === undefined) {
    return defaultValue;
  }

  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    return defaultValue;
  }

  return parsedValue;
}

export const environment: Environment = {
  name: (process.env.ENVIRONMENT ?? 'local') as EnvironmentName,

  application: {
    baseUrl: process.env.BASE_URL ?? 'https://front.serverest.dev',
  },

  execution: {
    headless: toBoolean(process.env.HEADLESS, true),
    timeout: toNumber(process.env.TIMEOUT, 30000),
    retries: toNumber(process.env.RETRIES, 0),
  },

  browser: {
    name: process.env.BROWSER ?? 'chromium',
  },
};