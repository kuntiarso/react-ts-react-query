import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import viteSvgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

// ref --> https://vitejs.dev/config
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  return {
    plugins: [react(), eslintPlugin(), viteSvgr(), tsConfigPaths()],
    server: {
      host: process.env.SERVER_HOST,
      port: parseInt(process.env.SERVER_PORT)
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
})
