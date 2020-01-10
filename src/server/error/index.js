export default () => {
  setTimeout(() => {
    throw new Error("Test sourcemap");
  }, 2000);
  return "<h1>Welcome to Error page</h1>";
};
