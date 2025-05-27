// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// Helper function to make all environment variables optional with defaults
const optionalString = (defaultValue = '') => z.string().default(defaultValue)

export const clientEnv = createEnv({
  client: {
    // All client-side environment variables are optional with default empty strings
    NEXT_PUBLIC_MAPBOX_TOKEN: optionalString(''),
    NEXT_PUBLIC_POSTHOG_KEY: optionalString(''),
    NEXT_PUBLIC_POSTHOG_HOST: optionalString('https://placeholder.com'),
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: optionalString(''),
  },
  runtimeEnv: {
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '',
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://placeholder.com',
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  },
  // Skip validation in all environments
  skipValidation: true,
})
