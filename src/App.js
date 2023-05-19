import './styles.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import TrainersDirectoryPage from './pages/TrainersDirectoryPage';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
          </NavbarBrand>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<TrainersDirectoryPage />} />
        <Route path='about' element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
