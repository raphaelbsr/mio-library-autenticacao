const jwtDecode = require("jwt-decode");

/**
 * process.env.REACT_APP_MIO_ATUH_TOKEN
 * ID da token de autenticação
 * Recomendo seguir o padrão persist:@mio-template:token
 * alterando a palavra template para o nome da aplicação
 */
export const TOKEN_KEY = process.env.REACT_APP_MIO_AUTH_TOKEN;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token === null) return false;
  try {
    const { exp } = jwtDecode(token);
    const expDate = new Date(exp * 1000).getTime();
    const nowDate = new Date().getTime();
    return nowDate < expDate;
  } catch (err) {
    return false;
  }
};

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getData = () => {
  const token = getToken();
  if (token) {
    const { data } = jwtDecode(token);
    return data;
  }
  return null;
};
