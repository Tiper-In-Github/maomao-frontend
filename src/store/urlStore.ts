import { defineStore } from 'pinia';

export const useUrlStore = defineStore({
  id: 'urlStore',

  state: () => ({
    apiUrl: 'http://localhost:5000',
    // cosUrl: 'https://cos-test.bilirz.com',
    // apiUrl: `${window.location.protocol}//${window.location.host}`,
    // apiUrl: 'https://bilirz.com',
    cosUrl: 'https://cos.bilirz.com',
  })
});