import React, { useState } from "react";
import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import "./SingUpComp.css";

let initialValues = {
  correo: "",
  nombreCompleto: "",
  tipoDocumento: "",
  documento: "",
  password: "",
  terminos: "",
};

const SingUpComp = () => {
  const [data, setData] = useState();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    defaultValues: { ...initialValues },
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <IonItem className="form-item">
          <IonInput
            placeholder="Correo"
            type="email"
            {...register("correo", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "formato de correo invalido",
              },
            })}
          />
        </IonItem>
        {showError("correo")}
        <IonItem className="form-item">
          <IonInput
            placeholder="Nombre Completo"
            {...register("nombreCompleto", { required: true })}
          />
        </IonItem>
        {showError("nombreCompleto")}
        <IonList className="form-list">
          <IonItem className="form-item">
            <IonSelect
              placeholder="Tipo Documento"
              {...register("tipoDocumento", { required: true })}
            >
              <IonSelectOption value="CC">Cedula Ciudadanía</IonSelectOption>
              <IonSelectOption value="CE">Cedula Extranjería</IonSelectOption>
              <IonSelectOption value="PS">Pasaporte</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <IonItem className="form-item">
          <IonInput
            placeholder="Documento"
            {...register("documento", { required: true })}
          />
        </IonItem>
        {showError("documento")}
        <IonItem className="form-item">
          <IonInput
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          ></IonInput>
        </IonItem>
        {showError("password")}
        <IonItem className="form-item">
          <IonInput
            placeholder="Repite Password"
            type="password"
            {...register("secondPassword", { required: true })}
          />
        </IonItem>
        {showError("secondPassword")}
        <IonItem className="form-item-checkbox">
          <IonCheckbox
            labelPlacement="end"
            {...register("terminos", { required: true })}
          >
            Acepta terminos y condiciones.
          </IonCheckbox>
        </IonItem>
        {showError("terminos")}
      </div>
      <IonButton type="submit" expand="block" className="ion-button">
        Registrarse
      </IonButton>
    </form>
  );
};

export default SingUpComp;
