import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonFooter,
  IonInput,
  IonButton,
  IonText,
  IonIcon,
  IonImg,
  IonLabel,
} from "@ionic/react";
import { personOutline, lockClosedOutline } from "ionicons/icons";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import "./Login.css";

const Login = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    defaultValues: { email: "", pass: "" },
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onLogin = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.pass,
      };

      const loginInfo = await authService.login(loginData);
      setIsLoggedIn(true);
      if (loginInfo) history.push("/list");
    } catch (error) {
      console.log(error);
    }
  };

  const showError = (fieldName) => {
    let error = errors[fieldName];
    return error ? (
      <div style={{ color: "red", fontWeight: "bold" }}>
        {error.message || "El campo es obligatorio."}
      </div>
    ) : null;
  };

  return (
    <IonPage>
      <IonContent className="image-back" />
      <form className="login-form" onSubmit={handleSubmit(onLogin)}>
        <IonItem className="form-item">
          <IonInput
            type="email"
            placeholder="tumail@gmail.com"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Ingrese un correo valido",
              },
            })}
          />
          <IonIcon icon={personOutline} slot="start" />
        </IonItem>
        {showError("email")}
        <IonItem className="form-item">
          <IonInput
            type="password"
            {...register("pass", {
              required: true,
              pattern: {
                minLength: {
                  value: 8,
                  message: "Debe tener una longitud minima de 8 caracteres.",
                },
              },
            })}
          />
          <IonIcon icon={lockClosedOutline} slot="start" />
        </IonItem>

        <IonLabel className="forgot-pass">
          <a href="#">olvido la contraseña?</a>
        </IonLabel>

        <IonButton expand="block" type="submit" className="ion-button">
          Ingresar
        </IonButton>

        <div className="register-link">
          <p>
            No tienes Cuenta? <a href="/singup">Crear Cuenta</a>
          </p>
        </div>
      </form>
    </IonPage>
  );
};

export default Login;
