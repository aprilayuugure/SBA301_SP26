import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'; 
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className = "d-flex flex-column min-vh-100">
        <Header />

        <main
          className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid text-center" 
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
            <Route path = "/contact" element = {<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
