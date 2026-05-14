/**
 * Business details for the marketing site. Update these for your real channels.
 * Optional: set NEXT_PUBLIC_* vars in .env.local to override without editing code.
 */
function readPublicEnv(key: string): string {
  if (typeof process === 'undefined') return ''
  const v = process.env[key]
  return typeof v === 'string' && v.length > 0 ? v : ''
}

const envEmail = readPublicEnv('NEXT_PUBLIC_CONTACT_EMAIL')
const envPhone = readPublicEnv('NEXT_PUBLIC_CONTACT_PHONE')
const envPhoneTel = readPublicEnv('NEXT_PUBLIC_CONTACT_PHONE_TEL')
const envLinkedIn = readPublicEnv('NEXT_PUBLIC_LINKEDIN_URL')

export const siteConfig = {
  name: 'Nextera Technologies',
  /** Primary sales inbox — override with NEXT_PUBLIC_CONTACT_EMAIL */
  contactEmail: envEmail || 'nexterasotech@gmail.com',
  /** Display format for phone */
  contactPhone: envPhone || '01717-622400',
  /** E.164-style digits for tel: links (BD mobile 01717-622400 → +8801717622400) */
  contactPhoneTel: envPhoneTel || '+8801717622400',
  /** Shown next to contact actions */
  responseTime: 'We typically reply within 1–2 business days.',
  /** Helps clients set expectations (timezone / coverage) */
  location: 'Remote-first · Serving clients in the US and internationally',
  /** Optional — leave empty to hide the button */
  calendlyUrl: readPublicEnv('NEXT_PUBLIC_CALENDLY_URL'),
  /** Public LinkedIn profile or company page */
  linkedInUrl: envLinkedIn || 'https://www.linkedin.com/in/nextera-technologies-a29097374/',
  /** One line for <meta name="description" /> */
  metaDescription:
    'Nextera Technologies builds scalable web apps, APIs, and AI-enabled products with Next.js, Django, and cloud-native practices. Discovery through launch and ongoing support.',
} as const
