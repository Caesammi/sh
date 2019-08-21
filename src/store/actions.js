import { setLocal } from '../static/tools';

export const setRoles = function ({ commit }, roles) {
  commit('SET_ROLES', roles);
  setLocal('roles', roles);
}
export const setPeacock = function ({ commit }, peacock) {
  commit('SET_PEACOCK', peacock);
  setLocal('peacock', peacock);
}
export const setAccount = function ({ commit } , account) {
  commit('SET_ACCOUNT', account);
  setLocal('account', account);
}
export const setAvatar = function ({ commit }, avatar) {
  commit('SET_AVATAR', avatar);
  setLocal('avatar', avatar);
}
