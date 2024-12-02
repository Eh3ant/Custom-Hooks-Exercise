import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v1 as uuid } from "uuid";


const useAxios = (baseUrl) => {
    const [data, setData] = useState([])

    const fetchData = async (endpoint = "") => {
        try {
            const response = await axios.get(`${baseUrl}${endpoint}`);
            setData(data => [...data, { ...response.data, id: uuid() }]);
        } catch (e) {
            console.error("Error fetching data", e)
        }
    }

    return [data, fetchData]
}

export default useAxios