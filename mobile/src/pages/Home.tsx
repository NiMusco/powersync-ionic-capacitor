import React, { useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonAvatar,
  IonText,
} from '@ionic/react';
import './Home.css';
import { useQuery, useStatus } from '@powersync/react';

const Home: React.FC = () => {
  const { hasSynced } = useStatus();
  console.log(hasSynced);
  const query = useQuery('SELECT * FROM organizations');
  console.log(query.data);

  useEffect(() => {}, [hasSynced, query?.data]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Home Page</h1>
        {hasSynced ? (
          <IonText>
            Query result: {query?.data.map((item) => item?.name)}
          </IonText>
        ) : (
          <IonText>Syncing...</IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
