import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/Pet/PetDetails';

import './App.css';

function App() {
  return (
    <div className="container">
       <Header />
        <Switch>
            <Route path="/" exact component={Categories}/>
            <Route path="/categories/:category" component={Categories}/>
            <Route path="/pets/:petId" component={PetDetails}/>
        </Switch>
       <Footer />
    </div>
  );
}

export default App;
