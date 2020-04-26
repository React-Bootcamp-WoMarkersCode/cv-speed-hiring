import {useState, useEffect} from 'react';

const useData = (url) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(url);
                const json = await data.json();
                if(json) {
                    setResult(json);
                }                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [url]);
    return result;
}
export default useData;