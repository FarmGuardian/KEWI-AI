// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// Helper function to make all environment variables optional with defaults
const optionalString = (defaultValue = '') => z.string().default(defaultValue)

export const serverEnv = createEnv({
  server: {
    // Make all environment variables optional with default empty strings
    XAI_API_KEY: optionalString(''),
    OPENAI_API_KEY: optionalString(''),
    ANTHROPIC_API_KEY: optionalString(''),
    GROQ_API_KEY: optionalString(''),
    GOOGLE_GENERATIVE_AI_API_KEY: optionalString(''),
    DAYTONA_API_KEY: optionalString(''),
    ELEVENLABS_API_KEY: optionalString(''),
    TAVILY_API_KEY: optionalString(''),
    EXA_API_KEY: optionalString(''),
    TMDB_API_KEY: optionalString(''),
    YT_ENDPOINT: optionalString(''),
    FIRECRAWL_API_KEY: optionalString(''),
    OPENWEATHER_API_KEY: optionalString(''),
    SANDBOX_TEMPLATE_ID: optionalString(''),
    GOOGLE_MAPS_API_KEY: optionalString(''),
    MAPBOX_ACCESS_TOKEN: optionalString(''),
    TRIPADVISOR_API_KEY: optionalString(''),
    AVIATION_STACK_API_KEY: optionalString(''),
    CRON_SECRET: optionalString('insecure-secret-change-me'),
    BLOB_READ_WRITE_TOKEN: optionalString(''),
    MEM0_API_KEY: optionalString(''),
    MEM0_ORG_ID: optionalString(''),
    MEM0_PROJECT_ID: optionalString(''),
    SMITHERY_API_KEY: optionalString(''),
  },
  experimental__runtimeEnv: process.env,
  // Skip validation in all environments
  skipValidation: true,
})
