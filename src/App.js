import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import About from './component/about';
import Shop from './component/shop';
import ItemDetail from './component/itemDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
          <Switch>
            <Route path="/about" exact component={About}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/" exact component={Home}/>
            <Route path="/shop/:id" component={ItemDetail}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
 <div>
   <h1>Home Page</h1>
 </div> 
)
export default App;
