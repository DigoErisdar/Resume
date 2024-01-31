import { fileURLToPath, URL } from 'url'
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

export default (options: ConfigEnv) => {
    const { mode } = options

    const isDev = mode === 'development'

    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
            svgLoader({
                defaultImport: 'component'
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:8]' //  production
            }
        },
        base: '/vue3vite/'
    })
}
