import React from "react";

const Main = ({ test, res }) => (
  <main>
    <h1>Welcome to gulp testing app</h1>
    <section>
      <p>{"Api reponse is"}</p>
      <p>Hot test is OK!!!</p>
      <ul>
        <li>
          <a href="/api">Test link</a>
        </li>
        <li>
          <a href="/error">Error link</a>
        </li>
        <li>
          <p>{`test in respose is ${test}`}</p>
        </li>
        <li>
          <p>{`Result in respose is ${res}`}</p>
        </li>
      </ul>
    </section>
  </main>
);

export default Main;
