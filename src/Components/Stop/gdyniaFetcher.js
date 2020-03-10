import axios from 'axios'

export const fetchGdyniaStop = async (id) => {
    try {
        const url=`https://zkmgdynia.pl/stopsAPI/getDisplay/${id}`;
        const { data } = await axios.get(url);
        return data.delay
    }
    catch (err) {
        console.log(err);  
    }
}