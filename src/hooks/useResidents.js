import { useEffect, useState, useCallback } from "react"
import { fetchAllResidents, fetchGetLocation, fetchGetResident } from "../helpers/fetchAllResidents";

export const useResidents = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [ location, setLocation] = useState({})
    const [resident, setResident] = useState([]);

    useEffect(() => {
        // Load Residents
        fetchAllResidents()
            .then(res => {
                setIsLoading(false);
                setLocation(res)
            });
    },[])

    const getLocation = (id) => {
        fetchGetLocation(id)
            .then(res => {
                setIsLoading(false);
                setLocation(res);
            })
    }
    const getResident = useCallback( (url) => {
        let isTrue = true;
        if(isTrue)
            fetchGetResident(url)
            .then(res => { 
                setIsLoading(false);
                setResident(res)
            })
        
        return { isTrue : false}
    }, [])

    return {
        isLoading,
        location,
        getLocation,
        getResident,
        resident
    }

}