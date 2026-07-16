import "./SlotsTile.css";
import { useEffect, useState } from "react";
import UserSlotsTile from "./UserSlotsTile/UserSlotsTile.jsx";
import TrainerSlotsTile from "./TrainerSlotsTile/TrainerSlotsTile.jsx";
import { authAPI } from "../../../../../services/api.js";

const SlotsTile = () => {
    const [role, setRole] = useState(null);

    useEffect(() => {
    (async () => {
        const role = await authAPI.getRole();
        console.log(role);
        setRole(role);
    })();
    }, []);




    return (
        <div className="slotsTile d-flex flex-column align-items-center justify-content-between h-100">
            <div className="w-100 h-100">
                {role === "Trainer" && (
                    <TrainerSlotsTile />
                )}

                {role === "User" && (
                    <UserSlotsTile />
                )}
            </div>
        </div>
    );
};

export default SlotsTile;