import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'kr.cleannova.app',
  appName: '쌈빡해유',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#f7fbfd',
    adjustMarginsForEdgeToEdge: 'force'
  }
};

export default config;
