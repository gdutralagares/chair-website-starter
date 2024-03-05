import React from "react";
import Header from "./componentes/header/header"
import Hero from "./componentes/hero/hero"
import Companies from "./componentes/companies/companies"
import Chair from "./componentes/chair/chair"
import About  from "./componentes/about/about"
import Contact  from "./componentes/contact/contact"
import "./index.css";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Chair/>
      <About/>
      <Contact/>
    </div>
  );
};

export default App;
