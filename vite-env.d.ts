/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DB_URL: string
    readonly VITE_DB_USER: string
    readonly VITE_DB_PASSWORD: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }