import './styles.css';
import{Container,Navbar, NavbarBrand} from 'reactstrap';
import FitFreakzLogo from './app/assets/img/FitFreakzLogo.jpg';
import Footer from './components/Footer';
import TrainersList from './features/Trainers/TrainersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar sticky = 'top' expand = 'md'>
          <Container>
            <NavbarBrand href = '/'>
              <img src = {FitFreakzLogo} alt = 'Fitfreakz Logo'/>
            </NavbarBrand>
          </Container>
        </Navbar>
      </header>
      <TrainersList/>
      <Footer/>
    </div>
  );
}

export default App;
