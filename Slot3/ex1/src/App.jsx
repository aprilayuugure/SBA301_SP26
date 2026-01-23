import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'; 
import Orchid from './components/Orchid';
import Contact from './components/Contact';

function App() {
  const orchid = {
    name: "Caesar Orchid",
    image: "/images/orchid_1.png",
    description: "The versatile specie produces blooms that last indoors or outdoors. These hardy plants are localised and adapted to thrive in Singapore weather. These are live plants.",
    category: "Dendrobium",
    isSpecial: false
  };

  return (
    <BrowserRouter>
      <div className = "d-flex flex-column min-vh-100">
        <Header />

        <main
          className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid text-center py-5" 
          style = {{ marginTop: '80px' }}
        >
          <Routes>
            <Route path = "/"
              element = {
                <>
                  <h3>Welcome to React</h3>
                  <p>This is a simple React application.</p>
                </>
              }
            />
            <Route path = "/about" element = {<About />} />
            <Route path = "/orchid" element = {<Orchid name = {orchid.name} image = {orchid.image} description = {orchid.description} category = {orchid.category} isSpecial = {orchid.isSpecial} />} />
            <Route path = "/contact" element = {<Contact />} />
          </Routes>
        </main>

        <Footer avatar="./avatar.jpg" name="Ngo Le Minh Quan" email="minhquaningenious@gmail.com" />
      </div>
    </BrowserRouter>
  );
}

export default App;
