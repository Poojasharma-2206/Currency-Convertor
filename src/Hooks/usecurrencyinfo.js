// import { FineTuningJobEventsPage } from "openai/resources/fine-tuning/index.mjs";
import { useEffect, useState } from "react";



function useCurrencyInfo(currency){
    const [data,setdata] = useState({})
    useEffect(()=>{
        fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=> res.json()) 
        .then((res)=> setdata(res[currency]))
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;













//.json shows converted in json format