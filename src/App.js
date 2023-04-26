import './styles.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import FitFreakzLogo from './app/assets/img/FitFreakzLogo.jpg';
import Footer from './components/Footer';
import TrainersDirectoryPage from './pages/TrainersDirectoryPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar sticky='top' expand='md'>
          <Container>
            <NavbarBrand href='/'>
              <img src={FitFreakzLogo} alt='Fitfreakz Logo' />
            </NavbarBrand>
          </Container>
        </Navbar>
      </header>
      <TrainersDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
