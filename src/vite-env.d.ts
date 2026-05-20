/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FEATURED_LECTURE_YOUTUBE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
