const rawPixelId = import.meta.env.PUBLIC_META_PIXEL_ID ?? '';
const rawVerification = import.meta.env.PUBLIC_META_DOMAIN_VERIFICATION ?? '';

const pixelId = rawPixelId.trim();
const domainVerification = rawVerification.trim();

/**
 * Meta Pixel is opt-in. Nothing loads and no cookie is written until a
 * numeric pixel ID is present at build time.
 */
export const meta = {
  pixelId,
  domainVerification,
  enabled: /^\d{10,20}$/.test(pixelId),
} as const;
