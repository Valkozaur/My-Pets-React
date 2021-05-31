import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import OtherPetDetails from './components/Pet/OtherPetDetails';

import './App.css';

function App() {
  return (
    <div className="container">
       <Header />
        <Switch>
            <Route path="/" exact component={Categories}/>
            <Route path="/categories/:category" component={Categories}/>
            <Route path="/pets/:petId" component={OtherPetDetails}/>
        </Switch>
       <Footer />
    </div>
  );
}

export default App;
