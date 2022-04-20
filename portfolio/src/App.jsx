import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Investments from './components/investments/Investments';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="sections">
        <Intro></Intro>
        <Investments></Investments>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
