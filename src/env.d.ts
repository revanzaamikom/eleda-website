/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_META_DOMAIN_VERIFICATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
