import React, { useState } from 'react';
import {
  IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonText,
} from '@ionic/react';
import { Redirect } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <IonContent>
        <div className="form-container">
          <IonItem className="form-item">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" required></IonInput>
          </IonItem>
          <IonItem className="form-item">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" required></IonInput>
          </IonItem>
          <IonItem className="form-item">
            <IonButton expand="block" routerLink="/forgot-password">
              Olvidó la contraseña?
            </IonButton>
          </IonItem>
          <IonItem className="form-item">
            <IonButton expand="block" routerLink="/signup">
              No tienes cuenta? Crear una cuenta
            </IonButton>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;