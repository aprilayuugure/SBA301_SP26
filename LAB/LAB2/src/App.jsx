import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'; 
import Orchid from './components/Orchid';
import Contact from './components/Contact';
import ListOfOrchids from './components/ListOfOrchids';

function App() {
  const orchids = [
    {
      id: 1,
      name: "Caesar Orchid",
      image: "/images/orchid_1.png",
      description: "The versatile species produces blooms that last indoors or outdoors. These hardy plants are localised and adapted to thrive in Singapore weather. These are live plants.",
      category: "Dendrobium",
      isSpecial: true
    },

    {
      id: 2,
      name: "Gnome Orchid",
      image: "/images/orchid_2.jpg",
      description: "A genus of two species of flowering plants in the orchid family Orchidaceae. They are terrestrial, perennial, deciduous, sympodial herbs.",
      category: "Adenochilus",
      isSpecial: true
    },

    {
      id: 3,
      name: "Constantia Orchid",
      image: "/images/orchid_3.jpg",
      description: "A genus of flowering plants.",
      category: "Orchidaceae",
      isSpecial: true
    },
    
    {
      id: 4,
      name: "Dirius Orchid",
      image: "/images/orchid_4.jpg",
      description: "The species is endemic to Australia, apart from one species endemic to Timor. Many have mainly yellow flowers with darker markings and are thought to mimic nectar-producing flowers which open at the same time.",
      category: "Diurideae",
      isSpecial: false
    },

    {
      id: 5,
      name: "Dracula Orchid",
      image: "/images/orchid_5.jpg",
      description: "The specie is known for its blood-red color and its strange long spurs of the sepals.",
      category: "Epidendreae",
      isSpecial: true
    },

    {
      id: 6,
      name: "Eria Orchid",
      image: "/images/orchid_6.jpg",
      description: "A genus of orchids with more than 50 species distributed in China, the Himalayas, the Indian subcontinent, Southeast Asia, New Guinea, Polynesia, Melanesia and Micronesia.",
      category: "Podochileae",
      isSpecial: false
    },
    
    {
      id: 7,
      name: "Ipsea Orchid",
      image: "/images/orchid_7.jpg",
      description: "This endangered species with a very narrow distribution range grows on steep mountain slopes in moist rocky and sunny areas.",
      category: "Collabieae",
      isSpecial: true
    },

    {
      id: 8,
      name: "Pogonia Orchid",
      image: "/images/orchid_8.jpg",
      description: "This species have a slender rootstock and usually bear one leaf about halfway up the stem and several at the base.",
      category: "Pogoniinae",
      isSpecial: true
    },

  ];

  return (
    <BrowserRouter>
      <div className = "d-flex flex-column min-vh-100">
        <Header />

        <main
          className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid py-5" 
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
            <Route path = "/orchid" element = {<ListOfOrchids orchids = {orchids} />} />
            <Route path = "/contact" element = {<Contact />} />
          </Routes>
        </main>

        <Footer avatar="./avatar.jpg" name="Ngo Le Minh Quan" email="minhquaningenious@gmail.com" />
      </div>
    </BrowserRouter>
  );
}

export default App;
