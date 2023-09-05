import { config as dotEnvConfig } from "dotenv";
import { z } from "zod";

if (process.env.NODE_ENV === "test") {
  dotEnvConfig({ path: ".env.test" });
} else {
  dotEnvConfig();
}

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "prod"]).default("dev"),

  NEXTAUTH_SECRET: z.string(),
  PORT: z.coerce.number().default(3000),
  NEXTAUTH_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  DATABASE_URL: z.string(),
  OPENAI_API_KEY: z.string(),
  REDIS_URL: z.string(),
  REDIS_SECRET: z.string(),
});


const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(env.error.format(), null, 4),
  );
  process.exit(1);
}

export const config = env.data;