
import React, { useState } from 'react';
import { IonContent, IonButton, IonPage, IonLabel } from '@ionic/react';

const FormasDePagoPage = () => {
  const [formaDePago, setFormaDePago] = useState('');


  const handleSeleccionarFormaDePago = (forma) => {
    setFormaDePago(forma);
  };

  const handleSeleccionar = () => {

    console.log('Forma de pago seleccionada:', formaDePago);
  };

  const handleCancelar = () => {
    setFormaDePago('');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonLabel>Selecciona una forma de pago:</IonLabel>
        <IonButton
          onClick={() => handleSeleccionarFormaDePago('Cuenta Bancaria')}
          color={formaDePago === 'Cuenta Bancaria' ? 'primary' : 'medium'}
        >
          Cuenta Bancaria
        </IonButton>
        <IonButton
          onClick={() => handleSeleccionarFormaDePago('PSE')}
          color={formaDePago === 'PSE' ? 'primary' : 'medium'}
        >
          PSE
        </IonButton>
        <IonButton
          onClick={() => handleSeleccionarFormaDePago('Nequi')}
          color={formaDePago === 'Nequi' ? 'primary' : 'medium'}
        >
          Nequi
        </IonButton>
        <IonButton onClick={handleSeleccionar} disabled={!formaDePago}>Seleccionar</IonButton>
        <IonButton onClick={handleCancelar}>Cancelar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FormasDePagoPage;
