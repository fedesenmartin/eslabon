import Header from './components/Header';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Clientes from './components/Clientes';
import Proveedores from './components/Proveedores';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Clientes />
        <Proveedores />
      </main>
      <Footer />
    </div>
  );
}

export default App;