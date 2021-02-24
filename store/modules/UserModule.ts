import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators';

const endpoints = {
  index: 'https://cat-fact.herokuapp.com',
  facts: 'facts',
};

@Module({
  name: 'modules/UserModule',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  usernames: string[] = ['larry'];

  get users() {
    return this.usernames;
  }

  // MutationAction decorators seem to be unaffected by @nuxtjs/auth module
  // These work well for hydrating store but not for updates
  // @MutationAction({ mutate: ['usernames'] })
  // async fetchUsers() {
  //   const usernames = await Promise.resolve(['moe', 'curly']);
  //   return { usernames };
  // }

  // @MutationAction({ mutate: ['usernames'] })
  // async addNewuser(name: string) {
  //   const usernames = await Promise.resolve([name]);
  //   return { usernames };
  // }

  // Discrete Action And Mutation does not work with @nuxtjs/auth
  @Mutation
  async updatedUsers(users: string[]) {
    this.usernames = [...this.usernames, ...users];
  }

  @Action({ commit: 'updatedUsers' })
  async fetchUsers() {
    const users = await Promise.resolve(['moe', 'curly']);
    return users;
  }

  @Action({ commit: 'updatedUsers' })
  async addNewuser(name: string) {
    const user = await Promise.resolve([name]);
    return user;
  }
}
