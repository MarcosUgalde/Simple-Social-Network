export const useUsername = () => {
  const url = window.location.href;
  const name = url.substring(url.lastIndexOf("=") + 1);
  return name;
};
