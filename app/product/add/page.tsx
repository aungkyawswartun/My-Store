"use client";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import axios from "axios";
import React, { useRef } from "react";
import NoSSR from "../components/NoSSR";

export default function page() {
    const nameRef = useRef<HTMLIonInputElement>(null);
    const buyPriceRef = useRef<HTMLIonInputElement>(null);
    const sellPriceRef = useRef<HTMLIonInputElement>(null);

    const handleSave = async () => {
        const formData = new FormData();
        formData.append("name", nameRef.current!.value?.toString() || "");
        formData.append(
            "buyPrice",
            buyPriceRef.current!.value?.toString() || ""
        );
        formData.append(
            "sellPrice",
            sellPriceRef.current!.value?.toString() || ""
        );

        await axios.post("/product/api", formData).then((res) => {
            console.log("Add Reponse", res.data);
            if (res.data.status != "error") {
                window.location.href = "/product";
            } else {
                alert(res.data.error);
            }
        });
    };
    return (
        <div>
            <NoSSR>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonToolbar>
                                <IonTitle>Add Product</IonTitle>
                                <IonButtons slot="end">
                                    <IonButton onClick={handleSave}>
                                        Save
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonItem>
                            <IonInput
                                type="text"
                                label="Name"
                                labelPlacement="stacked"
                                placeholder="Name"
                                ref={nameRef}
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                type="number"
                                label="Buy Price"
                                labelPlacement="stacked"
                                placeholder="Buy Price"
                                ref={buyPriceRef}
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                type="number"
                                label="Sell Price"
                                labelPlacement="stacked"
                                placeholder="Sell Price"
                                ref={sellPriceRef}
                            />
                        </IonItem>
                    </IonContent>
                </IonPage>
            </NoSSR>
        </div>
    );
}
