import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
