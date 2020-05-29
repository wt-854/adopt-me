import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      id: 1,
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      id: 2,
      name: "Pepper",
      animal: "Bord",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      id: 3,
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
