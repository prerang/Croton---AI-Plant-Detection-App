import { IonApp, setupIonicReact } from '@ionic/react';

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
import { Auth } from './pages/Routes';
import './App.css';
import Forgetpass from './pages/Forget Pass/Forgetpass';
import Verifyemail from './pages/Forget Pass/Verifypass';
import Newpass from './pages/Forget Pass/Newpass';
import './Quiz.css';
import MainQuiz from './components/Quiz/MainQuix';
import Profile from './pages/Profile page/Profile';
import Score from './components/Quiz/Score';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* <Auth/> */}
    {/* <Forgetpass/> */}
    {/* <Verifyemail/> */}
    {/* <Newpass/> */}
    {/* <MainQuiz/> */}
    {/* <Profile/> */}
    <Score/>
  </IonApp>
);

export default App;
