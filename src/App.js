import './App.css';
import LoginHome from './Make_Login/LoginHome';
import LoginNav from './Make_Login/LoginNav';
import Login from './Make_Login/Login';
import SubwayAir from './Make_Login/SubwayAir';


import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>

      <div className='w-full mx-auto h-screen max-w-screen-lg
                      flex flex-col justify-start items-center'>
        <header className='w-full h-1/7 p-2 bg-emerald-600
                           flex justify-start items-center
                           text-slate-100 text-xl font-bold'>
          <LoginNav />
        </header>
        <main className='w-full h-full
                         flex justify-center items-center'>
                                    <SubwayAir />
          <Routes>
            <Route path="/" element={<LoginHome/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SubwayAir" element={<SubwayAir />} />
          </Routes>
        </main>
      </div>
    </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
