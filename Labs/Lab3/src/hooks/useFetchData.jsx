import { useState, useEffect } from "react";
import OrchidService from "../service/OrchidService";

function OrchidAPI(id = null) {
    const [orchids, setOrchids] = useState(id ? null : []);

    useEffect(() => {
        const fetchAction = id ? OrchidService.getById(id) : OrchidService.getAll();
        
        fetchAction.then(res => setOrchids(res.data))
                   .catch(err => console.error(err));
    }, [id]);

    return orchids;
}

export default OrchidAPI;