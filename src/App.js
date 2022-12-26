
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/projects' element={<Project/>}/>
    </Routes>
  );
}

export default App;
