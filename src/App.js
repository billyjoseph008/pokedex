import {
  Route,
  Switch
} from "react-router-dom";
import PokemonList from "./components/PokemonList"
import Details from './components/Details'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/pokemon/:id">
          <Details />
        </Route>
        <Route path="/" exact>
          <PokemonList />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
