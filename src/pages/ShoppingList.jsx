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
import { chevronBack, logOutOutline } from "ionicons/icons";
import authService from "../appwrite/auth";
import { Redirect, useHistory } from "react-router-dom";
import "./Pages.css";
import ShoppingListComp from "../components/ShoppingListComp";

const ShoppingList = ({isLoggedIn, setIsLoggedIn}) => {
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  const history = useHistory();

  const handleLogout = async() => {
    await authService.logout();
    setIsLoggedIn(false);
    history.push("/");
  }

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
        <ShoppingListComp />
      </IonContent>
      <IonFooter className="ion-footer">
        <IonButton
          shape="round"
          expand="block"
          color="danger"
          onClick={handleLogout}
        >
          Logout <IonIcon icon={logOutOutline} />
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default ShoppingList;
