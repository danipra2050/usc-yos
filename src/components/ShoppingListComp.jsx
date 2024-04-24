import React, { useState } from "react";
import { IonItem, IonButton, IonLabel, IonIcon } from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import { Virtuoso } from "react-virtuoso";
import "./css/shoppingComp.css";

const ShoppingListComp = () => {
  const [products, setProducts] = useState([
    { id: 1, productName: "producto uno", price: 1234567 },
    { id: 2, productName: "producto dos", price: 1234567 },
    { id: 3, productName: "producto tres", price: 1234567 },
    { id: 4, productName: "producto cuatro", price: 1234567 },
    { id: 5, productName: "producto cinco", price: 1234567 },
    { id: 6, productName: "producto seis", price: 1234567 },
  ]);

  const removeProduct = (id) => {
    console.log(`productItem_${id}`)
    document.getElementById(`productItem_${id}`).classList.add("animate__slideOutRight");
    setTimeout(() => {
        const temProducts = [...products];
        const newProducts = temProducts.filter(f => parseInt(f.id) !== parseInt(id));
        setProducts(newProducts);
    }, 200);
  }

  return (
    <>
      <Virtuoso
        data={products}
        totalCount={products.length}
        style={{ height: "75%" }}
        itemContent={(index, item) => {
          return (
            <IonItem
              key={index}
              style={{ height: "100" }}
              className="product-item"
              id={ `productItem_${ item.id }` }
            >
                <IonLabel>{item.productName}</IonLabel>
                <IonLabel>$ {item.price}</IonLabel>
                <IonButton color="danger" onClick={() => removeProduct(item.id)}>
                    <IonIcon icon={trashOutline}></IonIcon>
                </IonButton>
            </IonItem>
          );
        }}
      />
      <IonLabel className="total-value">
        $ 100.000,00
      </IonLabel>
      <IonButton
        className="ion-button"
        style={{ padding: "0 10%", height: "50px" }}
        routerLink="/"
      >
        Finalizar Compra
      </IonButton>
    </>
  );
};

export default ShoppingListComp;
