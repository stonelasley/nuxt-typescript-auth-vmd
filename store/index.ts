import UserModule from '~/store/modules/UserModule';
import { initialiseStores } from '~/utils/store-accessor';

const state = () => ({
  localeCode: 'en_US'
});

export const modules = {
  UserModule
};

export const store = {
  state,
  modules,
  plugins: [initialiseStores],
  strict: true
};

export default store;
export * from '~/utils/store-accessor';
