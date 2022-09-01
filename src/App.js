import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Header from './components/Header';
// import FetchBug from './components/FetchBug';
import AddProject from './components/projects/AddProject';
import ProjectsView from './components/projects/ProjectsView';
import EditProject from './components/projects/EditProject';
import ProjectDetails from './components/projects/ProjectDetails';
import FetchBug from './components/bugs/FetchBug';
import BugsView from './components/bugs/BugsView';
import AddBug from './components/bugs/AddBug';
import BugDetails from './components/bugs/BugDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<ProjectsView />} />
            <Route path='/addProject' element={<AddProject />} />
            <Route path='/editProject/:id' element={<EditProject />} />
            <Route path='/projects/:id' element={<ProjectDetails />} />

            <Route path='/bugs' element={<BugsView />} />
            <Route path='/bugs/:id' element={<BugDetails />} />
            <Route path='/addBug' element={<AddBug />} />
          </Routes>
        </div>
        {/* <Header title="Twin Spider"/> */}
        {/* <FetchBug/>
        <ProjectView/> */}
      </div>
    </Router>

  );
}

export default App;
