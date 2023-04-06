import LandingPage from './components/LandingPage';
import PostView from './components/PostView';
import Form from './components/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/all-post" element={<PostView />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
