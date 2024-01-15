
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FlightDataTable from './components/FlightDataTable';
import AddFlight from './components/AddFlight';

import Footer from './components/Footer';

//import NavBar from './components/Navbar'; // NavBar component


import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from './components/mode-toggle';
import './App.css'; // Your main CSS file
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header modeToggle={<ModeToggle />} /> {/* Using NavBar instead of Header */}
          
          <div className="flex-grow">
            <div className="w-full mx-auto p-5">
              <br />
              <Routes>
                <Route path="/avion/all" element={<FlightDataTable />} />
                <Route path="/avion/add-flight" element={<AddFlight />} />
                <Route path="/avion/update-flight/:fid" element={<AddFlight />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
