import { Route, Routes } from 'react-router';
import './App.css';
import AboutMe from './Components/About Me/AboutMe';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header/Header';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import ProjectDetails2 from './Components/ProjectDetails/ProjectDetails2';
import ProjectDetails3 from './Components/ProjectDetails/ProjectDetails3';


function App() {
  return (

    <div >
      <Routes className="bg-gray-900">
        <Route path="/" element={<Header />}></Route>
        <Route path="/home" element={<Header />}></Route>
        <Route path="/details/:id" element={<ProjectDetails />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/details/2" element={<ProjectDetails2 />}></Route>
        <Route path="/details/4" element={<ProjectDetails3 />}></Route>
        {/* <Route path="/details/2" element={<ProjectDetails2 />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
