import React, { useState } from "react";

import config from "@config";
import { Main, SideBar } from "@ui";
import Template from "./template";
import { getData } from "./api";

const Page = () => {
  const [api, setApi] = useState({ test: "", res: "" });
  getData({
    host: config.web.host,
    port: config.web.port,
    uri: config.api.uri
  }).then(api => setApi(api));

  return (
    <Template
      SideBar={<SideBar host={config.web.host} port={config.web.port} />}
      Main={<Main test={api.test} res={api.res} />}
    />
  );
};

export default Page;
