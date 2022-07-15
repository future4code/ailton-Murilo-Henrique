import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';


const useRequestData = (url, method, token, approval) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        if (method === 'getTrips') {
            axios.get(url)
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                console.log(err.message)
            })
        } else if (method === 'getTripDetails') {
            axios.get(url, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setData(res)
            })
            .catch((err) =>{
                console.log(err.message)
            })
        }
    },[url, method, token, approval])
    return data
}

export default useRequestData;