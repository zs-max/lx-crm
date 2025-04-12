import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path, {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({resolvers:[ElementPlusResolver()]}),
    Components({resolvers:[ElementPlusResolver()]})
  ],
  resolve:{
    alias: {
      "@":resolve(__dirname,'src'),
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000/',
        changeOrigin:true,
        rewrite:path => path.replace(/^\/api/,'')
      }
    }
  }
})
