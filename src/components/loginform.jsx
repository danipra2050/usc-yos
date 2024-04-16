import React from 'react';
import { IonContent, IonInput, IonButton, IonIcon, IonCheckbox, IonLabel, IonItem, IonPage, IonText } from '@ionic/react';
import { cartOutline, personOutline, lockClosedOutline } from 'ionicons/icons';
import './loginform.css';

const LoginForm = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="wrapper">
          <form>
            <IonIcon icon={cartOutline} />
            <h1>YOUR OWN SHOP</h1>
            <IonItem className="input-box">
              <IonInput type="text" placeholder="Email" required />
              <IonIcon icon={personOutline} slot="start" />
            </IonItem>
            <IonItem className="input-box">
              <IonInput type="password" placeholder="Password" required />
              <IonIcon icon={lockClosedOutline} slot="start" />
            </IonItem>

            <div className="remember-forgot">
              <IonCheckbox />
              <IonLabel>Recordar contraseña</IonLabel>
              <IonText>
                <a href="#">olvido la contraseña?</a>
              </IonText>
            </div>

            <IonButton expand="block" type="submit">Ingresar</IonButton>

            <div className="register-link">
              <p>No tienes Cuenta? <a href="#">Crear Cuenta</a></p>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginForm;
