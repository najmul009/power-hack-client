import './App.css';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import BillingPage from './Pages/DashBoard/BillingPage';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home></Home>
          </Layout>
        }></Route>
        <Route path='/billing' element={
          <Layout>
            <BillingPage></BillingPage>
          </Layout>
        }></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
