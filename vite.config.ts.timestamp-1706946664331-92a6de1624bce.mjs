// vite.config.ts
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///D:/Projects/Resume/node_modules/.pnpm/vite@5.0.12_@types+node@18.19.11_sass@1.70.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Projects/Resume/node_modules/.pnpm/@vitejs+plugin-vue@5.0.3_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Projects/Resume/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import svgLoader from "file:///D:/Projects/Resume/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/Projects/Resume/vite.config.ts";
var vite_config_default = (options) => {
  const { mode } = options;
  const isDev = mode === "development";
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      svgLoader({
        defaultImport: "component"
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: isDev ? "[local]__[hash:base64:5]" : "[hash:base64:8]"
        //  production,
      },
      preprocessorOptions: {
        sass: {
          additionalData: `
    @import '@/app/styles/variables/mixins';
`
        }
      }
    },
    base: "/Resume/"
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxSZXN1bWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXFJlc3VtZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvUmVzdW1lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgQ29uZmlnRW52LCBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnM6IENvbmZpZ0VudikgPT4ge1xuICAgIGNvbnN0IHsgbW9kZSB9ID0gb3B0aW9uc1xuXG4gICAgY29uc3QgaXNEZXYgPSBtb2RlID09PSAnZGV2ZWxvcG1lbnQnXG5cbiAgICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgdnVlKCksXG4gICAgICAgICAgICB2dWVKc3goKSxcbiAgICAgICAgICAgIHN2Z0xvYWRlcih7XG4gICAgICAgICAgICAgICAgZGVmYXVsdEltcG9ydDogJ2NvbXBvbmVudCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVTY29wZWROYW1lOiBpc0RldiA/ICdbbG9jYWxdX19baGFzaDpiYXNlNjQ6NV0nIDogJ1toYXNoOmJhc2U2NDo4XScgLy8gIHByb2R1Y3Rpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBcbiAgICBAaW1wb3J0ICdAL2FwcC9zdHlsZXMvdmFyaWFibGVzL21peGlucyc7XFxuYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmFzZTogJy9SZXN1bWUvJ1xuICAgIH0pXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThPLFNBQVMsZUFBZSxXQUFXO0FBQ2pSLFNBQW9CLG9CQUFvQjtBQUN4QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUoySCxJQUFNLDJDQUEyQztBQU1sTSxJQUFPLHNCQUFRLENBQUMsWUFBdUI7QUFDbkMsUUFBTSxFQUFFLEtBQUssSUFBSTtBQUVqQixRQUFNLFFBQVEsU0FBUztBQUV2QixTQUFPLGFBQWE7QUFBQSxJQUNoQixTQUFTO0FBQUEsTUFDTCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsUUFDTixlQUFlO0FBQUEsTUFDbkIsQ0FBQztBQUFBLElBQ0w7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNILEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDeEQ7QUFBQSxJQUNKO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDRCxTQUFTO0FBQUEsUUFDTCxrQkFBa0I7QUFBQSxRQUNsQixvQkFBb0IsUUFBUSw2QkFBNkI7QUFBQTtBQUFBLE1BQzdEO0FBQUEsTUFDQSxxQkFBcUI7QUFBQSxRQUNqQixNQUFNO0FBQUEsVUFDRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsUUFFcEI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0EsTUFBTTtBQUFBLEVBQ1YsQ0FBQztBQUNMOyIsCiAgIm5hbWVzIjogW10KfQo=
