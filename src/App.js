import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

import { animals } from './data';

function App() {
  return (
    <div className="App">
      <Header name='Abriel'/>
      <Main animals={animals}/>
      <Footer email='abrielcleaver@gmail.com' />
    </div>
  );
}

export default App;

// pass an email to the footer and a greeting to the header