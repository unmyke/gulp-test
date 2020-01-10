import axios from "axios";

const getData = async ({ host, port, uri }) => {
  const res = await axios(`http://${host}:${port}${uri}`);
  console.log(res);

  return res.data;
};

export { getData };
