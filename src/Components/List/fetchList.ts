import axios from 'axios'

const fetchGdynia = () => {
    return axios.get('https://cors-anywhere.herokuapp.com/http://api.zdiz.gdynia.pl/pt/stops')
}
const fetchGdansk = () => {
    return axios.get('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/d3e96eb6-25ad-4d6c-8651-b1eb39155945/download/stopsingdansk.json')
}


export const fetchLists = async () => {
  
  return  axios.all([fetchGdansk(), fetchGdynia()])
        .then(axios.spread(function (gdn:any, gdy:any) {
           console.log('gdansk', gdn.data.stops);
           console.log('gdynia', gdy.data);
           return gdn.data.stops.concat(gdy.data)
        }));

}