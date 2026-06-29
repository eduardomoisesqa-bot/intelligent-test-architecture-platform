export type EnvironmentName = 'local' | 'dev' | 'qa' | 'hml' | 'stage' | 'prod' | 'ci';

export interface Environment {
  name: EnvironmentName;

  application: {
    baseUrl: string;
  };

  execution: {
    headless: boolean;
    timeout: number;
    retries: number;
  };

  browser: {
    name: string;
  };
}