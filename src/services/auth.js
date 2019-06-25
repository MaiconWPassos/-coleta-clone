import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@MWPS:token";

export const setUserToken = async token => await AsyncStorage.setItem(TOKEN_KEY, token);
export const getUserToken = async () => await AsyncStorage.getItem(TOKEN_KEY);

export const setNomeUser = async nome => await AsyncStorage.setItem(TOKEN_KEY+'nome', nome)
export const getNomeUser = async () => await AsyncStorage.getItem(TOKEN_KEY+'nome');


export const logout = async () => { 
  await AsyncStorage.removeItem(TOKEN_KEY); await  AsyncStorage.removeItem(TOKEN_KEY+'nome');
};
/**
 * Responsavel por validar o usuário
 */
export const autentica = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  if(token) return true 
  else return false;
};