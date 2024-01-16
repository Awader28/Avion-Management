import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Import your Login component
import Signup from './components/Signup'; // Import your Signup component
import FlightDataTable from './components/FlightDataTable';
import AddFlight from './components/AddFlight';
import Footer from './components/Footer';
// import NavBar from './components/Navbar'; // If you have a NavBar component
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import './App.css';
import Header from './components/Header';
import Preloader from './components/Preloader';


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      
      <BrowserRouter>
    
        <Header modeToggle={<ModeToggle />} />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="w-full mx-auto p-5">
              <br />
              <Routes>
                <Route path="/" element={<Preloader />} />
                <Route path="/login/authenticate" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
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

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './components/Login'; // Import your Login component
// import Signup from './components/Signup'; // Import your Signup component
// import FlightDataTable from './components/FlightDataTable';
// import AddFlight from './components/AddFlight';
// import Footer from './components/Footer';
// import { ThemeProvider } from '@/components/theme-provider';
// import { ModeToggle } from './components/mode-toggle';
// import './App.css';
// import Header from './components/Header';
// import Preloader from './components/Preloader.tsx'; // Make sure to import the Preloader component

// function App() {
//   return (
//     <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
//       <BrowserRouter>
//         <Header modeToggle={<ModeToggle />} />

//         <Preloader /> {/* Add the Preloader component here */}
//         <div className="flex-grow">
//           <div className="w-full mx-auto p-5">
//             <br />
//             <Routes>
//               <Route path="/login/authenticate" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/avion/all" element={<FlightDataTable />} />
//               <Route path="/avion/add-flight" element={<AddFlight />} />
//               <Route path="/avion/update-flight/:fid" element={<AddFlight />} />
//             </Routes>
//           </div>
//         </div>
//         <Footer />

//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

//export default App;