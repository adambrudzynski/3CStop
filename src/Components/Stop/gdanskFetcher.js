export const fetchGdanskStop = (id) => {
    const toDelete = '<p style="font-size: 8pt; font-style:italic;margin-top: 0;text-align:center;">Źródło danych: narzędzie oprogramowania SIP opracowane przez <a href="http://www.gmv.com">GMV</a></p>'
    const corsProxy = 'https://cors-anywhere.herokuapp.com/'
    const url = `http://ztm.gda.pl/rozklady/pobierz_SIP.php?n[0]=${id}`
    return fetch(url)
        .then(response => {
            const contenttype = response.headers.get("content-type");
            const charset = contenttype.substring(contenttype.indexOf("charset=") + 8);
            return response.arrayBuffer()
                .then(ab => {
                    const dataView = new DataView(ab);
                    const decoder = new TextDecoder(charset);
                    const decoded = decoder.decode(dataView);
                    return decoded.replace(toDelete, '')
                })
        })
}