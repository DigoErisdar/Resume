import {fileURLToPath} from 'url'
import {URL} from 'url'
import checker from 'vite-plugin-checker'
import {ConfigEnv, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

export default (options : ConfigEnv) => {
    const {  mode } = options

    const isDev = mode === 'development'

    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
            svgLoader({
                defaultImport: 'component'
            }),
            checker({
                vueTsc: true,
                eslint: {
                    lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"'
                }
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
                generateScopedName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:8]'//  production
            }
        },
        base: '/vue3vite/'
    })

}
