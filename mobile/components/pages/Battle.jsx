import Store from '../../store';
import * as selectors from '../../store/selectors';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';

const ListEntry = ({ list, ...props }) => (
  <IonItem routerLink={`/tabs/lists/${list.id}`} className="list-entry">
    <IonLabel>{list.name}</IonLabel>
  </IonItem>
);

const Battle = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Battle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Battle</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Upcoming</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Past</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Battle;
