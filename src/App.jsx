import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import { GlobalContextProvider } from './context/GlobalContextProvider';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}
        <div className="bg-primary w-full overflow-hidden">
          <Home />
        </div>
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
