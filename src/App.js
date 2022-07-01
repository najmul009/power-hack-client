import './App.css';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import BillingPage from './Pages/DashBoard/BillingPage';
import Layout from './Layout/Layout';

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
    </div>
  );
}

export default App;
