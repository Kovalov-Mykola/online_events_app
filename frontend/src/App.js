import './App.css';
import {lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(()=> import('./pages/LoginPage/LoginPage'));


function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='registration' element={<RegistrationPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
        </Route>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
