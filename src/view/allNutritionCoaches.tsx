import AppBar from '../components/AppBar';
import { getAllManagers } from "../api/manager.api";
import { useEffect, useState } from "react";
import { Manager } from "../models/manager.model";
import NutritionCoacheDard from "../components/nutritionCoacheCard";

export default function NutritionCoaches() {
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        getAllManagers().then((res) => {
            setManagers(res)
        })
    }, []);

    return (
        <div>
            <AppBar />
            <div style={{ display: 'flex', marginTop: 100 }}>
                {managers && managers.map((m) => <NutritionCoacheDard {...m as Manager} />)}
            </div>
        </div>
    );
};





