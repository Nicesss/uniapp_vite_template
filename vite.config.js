import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        uni(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        },
    },
    server: {
        proxy: {
            '/user': {
                target: 'https://cloud-api-test.tineco.com',
                changeOrigin: true,
            },
        },
    },
    build: {
        //是否禁用最小化混淆，esbuild打包速度最快，terser打包体积最小。
        minify: 'terser',
        terserOptions: {
            compress: {
                // 是否禁用控制台输出
                drop_console: true,
                // 是否禁用调试器输出
                drop_debugger: true,
            },
        },
        // 拆分打包
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
            }
        }
        /** 配置h5打包js,css,img分别在不同文件夹end */
    }
})
