import axios from 'axios'
const date = new Date()
const today = date.toISOString().slice(0, 10)

const fetchGdynia = () => {
    return axios.get('https://cors.3cstop.workers.dev/?http://api.zdiz.gdynia.pl/pt/stops')
}
const fetchGdansk = () => {
    return axios.get('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/d3e96eb6-25ad-4d6c-8651-b1eb39155945/download/stopsingdansk.json')
}


export const fetchLists = async () => {
    try {

        return axios.all([fetchGdansk(), fetchGdynia()])
            .then(axios.spread(function (gdn: any, gdy: any) {
                console.log('gdansk', gdn.data.stops);
                console.log('gdynia', gdy.data);
                return gdn.data.stops.concat(gdy.data)
            }));
    }
    catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const stopInTrips = async () => {
    const response = await axios.get('http://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/3115d29d-b763-4af5-93f6-763b835967d6/download/stopsintrips.json')
    const data = response.data[today].stopsInTrip
    let group = data.reduce((r:any, a:any) => {
        // console.log("a", a);
        // console.log('r', r);
        r[a.stopId] = [...r[a.stopId] || [], a];
        return r;
       }, {});
       console.log("group", group);
}