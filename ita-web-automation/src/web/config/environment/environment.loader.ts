import dotenv from 'dotenv';
import path from 'path';

export function loadEnvironmentVariables(): void {
  const environmentName = process.env.ENVIRONMENT ?? 'local';

  dotenv.config({
    path: path.resolve(process.cwd(), `.env.${environmentName}`),
  });

  dotenv.config({
    path: path.resolve(process.cwd(), '.env'),
  });
}