import './App.css';
import { PopupProvider } from './state/PopupContext'; // Importa PopupProvider
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import Approach from './components/Approach/Approach';
import OurWork from './components/OurWork/OurWork';
import HowWe from './components/HowWe/HowWe';
import Solutions from './components/Solutions/Solutions';
import NewProduct from './components/NewProduct/NewProduct';
import ClientsReviews from './components/ClientsReviews/ClientsReviews';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <PopupProvider>
      <BrowserRouter>
        <Navbar />        
        <Header />
        <Approach />
        <OurWork />
        <HowWe />
        <Solutions />
        <NewProduct />
        <ClientsReviews />
        <Faq />
        <About />
        <Footer />
        <Form />
        <ToastContainer />
      </BrowserRouter>
    </PopupProvider>
  );
}

export default App;


// const routes = createBrowserRouter(createRoutesFromElements(
//   <>
//     <Route 
//       path='/'
//       element={<Header />} />
//     <Route     
//       path='/ClientsReviews'
//       element={<ClientsReviews />} />
//     <Route 
//       path='/Faq'
//       element={<Faq />} />
//     <Route 
//       path='/Solutions'
//       element={<Solutions />} />
//     <Route 
//       path='/About'
//       element={<About />} />
//   </>
  
// ))


// function App() {
//   return (
//     <PopupProvider>      
//       <Navbar />
//       <RouterProvider router={routes} />
//       <Header />
//       <Approach />
//       <OurWork />
//       <HowWe />
//       <Solutions />
//       <NewProduct />
//       <ClientsReviews />
//       <Faq />
//       <About />
//       <Footer />     
//       <Form />     
//       <ToastContainer />
//     </PopupProvider>  
//   )
// }

// export default App;

// function App() {
//   return (
//     <Routes>
//       <PopupProvider>
//         <Navbar/>
//         <Route path="/" component={Header}/>
//         <Route path="/Approach" component={Approach}/>
//         <Route path="/OurWork" component={OurWork}/>
//         <Route path="/HowWe" component={HowWe}/>
//         <Route path="/Solutions" component={Solutions}/>
//         <Route path="/NewProduct" component={NewProduct}/>
//         <Route path="/ClientsReviews" component={ClientsReviews}/>
//         <Route path="/Faq" component={Faq}/>
//         <Route path="/About" component={About}/>
//         <Route path="/Footer" component={Footer}/>
//         <Form />
//         <ToastContainer />
//       </PopupProvider>
//     </Routes>
//   )
// }


// export default App;