import React from "react";
import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from "@ionic/react";

const Menu = ({contentId}) => {
  return (
    <>
      <IonMenu side="end" contentId={contentId}>
        <IonHeader>
            <IonToolbar>
                <IonTitle>YOS Menú</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            Contenido del menu
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
