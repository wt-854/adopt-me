import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     id: 1,
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     id: 2,
  //     name: "Pepper",
  //     animal: "Bord",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     id: 3,
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"/>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
      <Pet name="Doink" animal="Cat" breed="Mixed"/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
