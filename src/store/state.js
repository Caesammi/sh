import { getLocal } from '../tools/storageTool';
const state = {
  roles: getLocal('roles'),
  peacock: getLocal('peacock'),
  account: getLocal('account'),
  avatar: Number(getLocal('avatar'))
};

export default state;
