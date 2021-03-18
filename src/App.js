import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css'


function App() {
  return (
    <div className="App">
      <Particles className="particles"
        params={{
            particles: {
                shape: {
                    type: 'images',
                    image: [
                        {src: 'path/to/first/image.svg', height: 20, width: 20},
                        {src: 'path/to/second/image.jpg', height: 20, width: 20},
                    ]
                }
            }
        }} 
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

    </div>
  );
}

export default App;
