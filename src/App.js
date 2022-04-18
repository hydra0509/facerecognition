import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'


const app = new Clarifai.App({
  apiKey: '8cc09db68974487792750332603c09dc'
});


const ParticlesOptions = {
   particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
   }
 }

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }
 displayFaceBox = (box) => {
   this.setState({box: box});
 }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
}
onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
 app.models
  .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
}
render() {
  return (
    <div className="App">
    <Particles className="particles" 
    params={ParticlesOptions}
    />
     <Navigation />
     <Logo />
     <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit} />
     <Rank />
     <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
    </div>
     );
    };
  };

export default App;
