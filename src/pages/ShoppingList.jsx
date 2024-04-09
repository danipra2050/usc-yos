import React from "react";
import {
  IonButton,
  IonButtons,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
  IonContent,
  IonList,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import "./Pages.css";

const ShoppingList = () => {

  return (
    <IonPage>
      <IonHeader className="icon-header">
        <IonToolbar className="ion-toolbar">
          <IonButtons slot="start">
            <IonButton
              className="icon-button"
              routerLink="/"
              routerDirection="back"
              color="light"
            >
              <IonIcon icon={chevronBack} />
              <span className="title-screen">Lista de Compras</span>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="content">
        <IonList>

        </IonList>
      </IonContent>
      <IonFooter className="ion-footer">&nbsp;</IonFooter>
    </IonPage>
  );
};

export default ShoppingList;