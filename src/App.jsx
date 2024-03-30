import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './components/Login';
import SingUp from './pages/SingUp';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ShoppingList from './pages/ShoppingList';

setupIonicReact();

const App = () => (
  <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/singup">
          <SingUp />
        </Route>
        <Route path="/lista">
          <ShoppingList />
        </Route>
      </Switch>
    </Router>
);

export default App;
