import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (url) =>{
    const [data,setdata]=useState(null)
    useEffect(() =>{
        axios.get(url)
        .then(res =>{setdata(res.data)})

        .catch(err => console.log(err))
    }, [url]);

    return {data};
}
export default useFetch;