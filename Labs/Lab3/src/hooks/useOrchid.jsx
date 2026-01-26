import { useState, useEffect } from "react";
import OrchidService from "../service/OrchidService";

export function useOrchid(id) {
    const [orchid, setOrchid] = useState();

    useEffect(() => {
        if (!id) return;

        OrchidService.getById(id)
                     .then(res => setOrchid(res.data));
    }, [id]);

    return orchid;
}