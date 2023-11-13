import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const deps = require('./package.json').dependencies

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      filename: "container.js",
      remotes: {
        // ! localhost
        doctor: "http://localhost:5000/assets/doctor.js",
        // shared: "http://localhost:5001/assets/shared.js",
        // pharmacy: "http://localhost:5002/assets/pharmacy.js",
        // ! s3
        // doctor: 'https://s3.ap-southeast-1.amazonaws.com/remote-app1.com/doctor/dist/assets/doctor.js',
        shared: 'https://s3.ap-southeast-1.amazonaws.com/remote-app1.com/shared/dist/assets/shared.js',
        pharmacy: 'https://s3.ap-southeast-1.amazonaws.com/remote-app1.com/pharmacy/dist/assets/pharmacy.js',
      },
      // exposes: {
      //     './hooks': './src/hooks/context.ts',
      //     './providers': './src/providers/context.tsx',
      //     './reducers': './src/reducers/global.ts',
      //     './stores': './src/stores/global.ts',
      // },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: "localhost",
    port: 5003,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
