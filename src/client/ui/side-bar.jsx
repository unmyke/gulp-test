import React from 'react';

const SideBar = ({ host, port }) => (
  <aside>
    <h2>{`Webserver serves at ${host}:${port}`}</h2>
    <p>Sidebar:</p>
    <ul>
      <li>list</li>
      <li>of</li>
      <li>sidebar</li>
      <li>items</li>
    </ul>
  </aside>
);

export default SideBar;
