'use client';
import React, { useState, useEffect } from 'react'
import data from './currency.json';
import lists from './list.json';
import Search from './Components/Search';
import Lists from './Components/Lists';

const FetchData = () => {
    // https://open.er-api.com/v6/latest/USD

    const [country, setCountry] = useState('Nigeria');
    const [fetchData, setFetchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [err, setErr] = useState(false);

    const url = `http://universities.hipolabs.com/search?country=${country}`
    const dataFetch = async () => {
        try {

            const fetchData = await fetch(url);
            const response = await fetchData.json();
            setFetchDatfa(response);
            console.log(FetchData);
        }
        catch (e) {
            setErrMsg(e.message);
            setErrMsg(true);
        }
    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            dataFetch();
            setLoading(false);
        }, 3000);

    }, [url]);
    if (country === '') {
        setCountry('Nigeria');
    }

    return (
        <div className='w-full overflow-x-hidden'>
            <h1 className='text-center w-full font-bold text-2xl my-5'>List of Universities in {country}</h1>

            <Search country={country} setCountry={setCountry} />

            {err ? <h3>{errMsg}</h3> : loading ? 'Loading Data....' : <Lists lists={lists} fetchData={fetchData} />}

        </div>
    )
}

export default FetchData