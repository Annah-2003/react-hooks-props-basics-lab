import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() { const user = {
  name: 'Irene Annah',
  email: 'ireane@gmail.com',
  // Other user data
};

const bio = 'I am a passionate developer.';
const github = 'https://github.com/ireneannah';
const linkedin = 'https://www.linkedin.com/in/ireneannah';
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
