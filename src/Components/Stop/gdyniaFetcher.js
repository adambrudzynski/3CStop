import axios from 'axios'

export const fetchGdyniaStop = async (id) => {
    try {
        const corsProxy = 'https://cors.3cstop.workers.dev/?'
        const url=`${corsProxy}https://zkmgdynia.pl/stopsAPI/getDisplay/${id}`;
        const { data } = await axios.get(url);
        return data.delay
    }
    catch (err) {
        console.log(err);  
    }
}