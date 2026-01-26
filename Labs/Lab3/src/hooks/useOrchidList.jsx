import { useEffect, useState } from "react";
import OrchidService from "../service/OrchidService";

export function useOrchidList() {
    const [orchids, setOrchids] = useState([]);

    useEffect(() => {
        OrchidService.getAll()
                     .then(res => setOrchids(res.data));
    }, []);

    return orchids;
}