const prefix = 'memoji';
const version = '1';

export const getItem = (key: string) => {
  return localStorage.getItem(`${prefix}-${version}-${key}`);
};
export const setItem = (key: string, token: string) => {
  localStorage.setItem(`${prefix}-${version}-${key}`, token);
};
export const removeItem = (key: string) => {
  localStorage.removeItem(`${prefix}-${version}-${key}`);
};

export default { getItem, setItem, removeItem };
