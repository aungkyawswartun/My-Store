"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import {
    IonHeader,
    IonPage,
    IonContent,
    IonItem,
    IonTitle,
    IonButtons,
    IonButton,
    IonToolbar,
} from "@ionic/react";

export default function ProductPage() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios.get("/product/api").then((res) => {
            console.log("Product Data", res.data);
            setProducts(res.data);
        });
    };

    const handleDelete = async (item: any) => {
        await axios.delete("/product/api/" + item?.id).then((res) => {
            console.log("Delete Response", res.data);
            getProducts();
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Product List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {products.map((item: any, index: number) => (
                    <IonItem key={index}>
                        {item?.Name}
                        <IonButtons slot="end">
                            <IonButton onClick={() => handleDelete(item)}>
                                Delete
                            </IonButton>
                        </IonButtons>
                    </IonItem>
                ))}
            </IonContent>
        </IonPage>
    );
}
