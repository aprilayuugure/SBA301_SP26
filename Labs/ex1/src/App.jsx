import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className = "d-flex flex-column min-vh-100">
      <Header />
      
      <main className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid text-center" style = {{ marginTop: '80px' }}>
        <h3>Welcome to React</h3>
        <p>This is a simple React application.</p>
      </main>

      <Footer />
    </div>
  )
}

export default App;