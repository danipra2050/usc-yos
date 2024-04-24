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
  IonMenu,
  IonTitle
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import "./Pages.css";
import SingUpComp from "../components/SingUpComp";
import Menu from "../components/Menu";

const SingUp = () => {
  return (
    <>
      <Menu contentId="registra-usuario"/>
      <IonPage id="registra-usuario">
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
                <span className="title-screen">Registro Usuario</span>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="content">
          <SingUpComp />
        </IonContent>
        <IonFooter className="ion-footer">&nbsp;</IonFooter>
      </IonPage>
    </>
  );
};

export default SingUp;
