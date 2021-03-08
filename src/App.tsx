import { IonApp } from '@ionic/react';
import Menu from './components/Menu';

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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { auth } from './firebase';

const App: React.FC = () => {
  const [logged, setIsLogged] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged(user => setIsLogged(!!user))
  }, [])

  const privateRoute = (Component: React.FC) => logged ? <Component /> : <Redirect to="/home" />
  const publicRoute = (Component: React.FC) => !logged ? <Component /> : <Redirect to="/administracion/" />

  return (
    <IonApp>
      <Router>
        {logged ? <Redirect to="/administracion/" /> : <Redirect to="/home" />}
        <Switch>
          <Route path="/home" render={() => <Home />} />
          <Route path="/signin" render={() => publicRoute(SignIn)} />
          <Route path="/signup" render={() => publicRoute(SignUp)} />
          <Route path="/administracion" render={() => privateRoute(Menu)} />
        </Switch>
      </Router>
    </IonApp>
  );
};

export default App;
