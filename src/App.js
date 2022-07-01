import './App.css';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import BillingPage from './Pages/DashBoard/BillingPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/billing' element={<BillingPage></BillingPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
