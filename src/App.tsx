import "styles/style.scss";

import {
  About,
  Skills,
  Testimonials,
  Works
} from "pages";
import {
  Footer,
  Header,
  NavBar
} from "layout"

function App () {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
