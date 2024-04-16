import axios from 'axios';
import React, { useState, useEffect, createContext, useContext } from 'react';

const DataContext = createContext();

const getData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(0);
    const [subSelected, setSubSelected] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const initialData = await getData("/api/goods.json");
            setData(initialData);
        };
        fetchData();
    }, []);

    const value = {
        data,
        selected,
        setSelected,
        subSelected,
        setSubSelected,
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
}