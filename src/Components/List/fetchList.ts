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

const fetcher = async (url: string, date: string) => {
    const response = await axios.get(url)
    const data = response.data[date]
    return data
}

const grouper = (arr: any, groupBy: string) => {
    return arr.reduce((r: any, a: any) => {
        r[a[groupBy]] = [...r[a[groupBy]] || [], a];
        return r;
    }, {});
}

const unique = (array: any, propertyName: string) => {
    return array.filter((e: any, i: number) => array.findIndex((a: any) => a[propertyName] === e[propertyName]) === i);
}

export const stopInTrips = async () => {
    const response = await fetcher('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/3115d29d-b763-4af5-93f6-763b835967d6/download/stopsintrips.json', today)
    const data = response.stopsInTrip
    let group = grouper(data, 'stopId')
    let groupArr = Object.entries(group)

    let result = groupArr.map((elem: any) => {
        const uniqueElems = unique(elem[1], 'routeId').reduce((r: any, a: any) => {
            r = [...r || [], a.routeId];
            return r;
        }, []);
        return [[elem[0]], uniqueElems]
    })

    let object = Object.fromEntries(result)
    // console.log("Obje", object);
    // console.log("group", result);
    return object
}

const trips = async () => {
    const response = await fetcher('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/b15bb11c-7e06-4685-964e-3db7775f912f/download/trips.json', today)
    const data = response.trips
    return data
}

const routes = async () => {
    const response = await fetcher('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/22313c56-5acf-41c7-a5fd-dc5dc72b3851/download/routes.json', today)
    const data = response.routes
    return data
}

export const lines = async () => {
    const stopTrip = await stopInTrips()
    const trip = await trips()
    const route = await routes()

    const array = Object.entries(stopTrip).slice(0, 10)
    const result = array.map((stop: any) => {
        const modifiedStop = stop[1].map((oneTrip: any) => {

            let filteredRoutes = route.filter((oneRoute: any) => {
                return oneRoute.routeId === oneTrip
            })
            return filteredRoutes
        })
        return { [stop[0]]: modifiedStop }
    })
    console.log(result);


}