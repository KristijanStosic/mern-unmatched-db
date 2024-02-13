import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Characters from './pages/Characters.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from './components/ui/toaster.jsx';

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className='flex-grow bg-slate-100'>
          <Routes>
            <Route index={true} path='/' element={<Characters />} />
            <Route path='/search/:keyword' element={<Characters />} />
            <Route path='/page/:page' element={<Characters />} />
            <Route path='/search/:keyword/page/:page' element={<Characters />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}