import './App.css'
import Projects from './pages/Projects';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Experiments from './pages/Experiments';
import Counter from './pages/experiments/Counter';
import ThemeToggle from './pages/experiments/ThemeToggle';
import Todo from './pages/experiments/Todo';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  

  return (
   
    <Routes>
      <Route path="/" element={<MainLayout />}>

      <Route index element={<Home />}/>

      <Route path="about" element={<About />}/>
      
      <Route path="contact" element={<Contact />}/>

      <Route path="projects" element={<Projects />}/>

      <Route path="experiments" element={<Experiments />}/>

      <Route path="experiments/counter" element={<Counter />}/>

      <Route path="experiments/theme" element={<ThemeToggle />}/>

      <Route path="experiments/todo" element={<Todo />}/>

      </Route>
    </Routes>
  );
}

export default App;
