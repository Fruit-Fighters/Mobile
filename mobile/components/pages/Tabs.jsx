import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list, bookmarks } from 'ionicons/icons';

import Home from './Home';
import Battle from './Battle';
import ListDetail from './ListDetail';
import Settings from './Settings';
import Scorer from './Scorer';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" render={() => <Home />} exact={true} />
        <Route path="/tabs/battle" render={() => <Battle />} exact={true} />
        <Route path="/tabs/scorer" render={() => <Scorer />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/Home">
          <IonIcon icon={flash} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/battle">
          <IonIcon icon={list} />
          <IonLabel>Battle</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/scorer">
          <IonIcon icon={bookmarks} />
          <IonLabel>Scorer</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
