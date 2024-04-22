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
    const [isValid, setIsValid] = useState(false);
    const [userInitiated, setUserInitiated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const initialData = await getData("/api/goods.json");
            setData(initialData);
            setIsValid(true);
        };
        fetchData();
    }, []);

    const value = {
        data,
        selected,
        setSelected,
        subSelected,
        setSubSelected,
        isValid,
        userInitiated,
        setUserInitiated
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