import { getAllManagers } from "../api/manager.api";
import { useEffect, useState } from "react";
import { Manager } from "../models/manager.model";
import NutritionCoacheDard from "./nutritionCoacheCard";

export default function NutritionCoaches() {
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        getAllManagers().then((res) => {
            setManagers(res)
        })
    }, []);

    return (
        <div style={{ display: 'flex', marginTop: 100 }}>
            {managers && managers.map((m) => <NutritionCoacheDard {...m as Manager} />)}
        </div>
    );
};





