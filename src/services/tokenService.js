export const saveToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const deleteToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    localStorage.removeItem("accessToken");
  }
};

export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  return token;
};
