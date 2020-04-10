export const fetchGdanskStop = (id) => {
    const corsProxy = 'https://cors.3cstop.workers.dev/?'
    const url = `${corsProxy}https://ztm.gda.pl/rozklady/pobierz_SIP.php?n[0]=${id}`
    return fetch(url)
        .then(response => {
            const contenttype = response.headers.get("content-type");
            const charset = contenttype.substring(contenttype.indexOf("charset=") + 8);
            return response.arrayBuffer()
                .then(ab => {
                    const dataView = new DataView(ab);
                    const decoder = new TextDecoder(charset);
                    const decoded = decoder.decode(dataView);

                    if (decoded.includes('</table>')) {
                        const toDelete = decoded.slice(decoded.indexOf('</table>'))
                        const table = decoded.replace(`<!-- p --><div style="background: #fff; margin-top: 1em; margin-bottom: 1em;"><table class="sip">`, '').trim().replace(`<tr><th class="naglowek">Linia</th><th class="naglowek" style="min-width:200px;">Kierunek</th><th class="naglowek">Odjazd</th></tr>`, '').trim().replace(toDelete, '').split('<tr>')
                        if (table[0].length < 5) table.shift()
                        const result = table.map(row => {
                            const elements = row.replace('</td>', '').replace('</td>', '').replace('</td></tr>', '').split('<td>')
                            if (elements[0].length < 5) elements.shift()
                            return {
                                shortName: elements[0].replace('<span class="juz">', '').replace('</span>', ''),
                                headSign: elements[1].replace('<span class="juz">', '').replace('</span>', ''),
                                delayDesc: elements[2].includes('&nbsp') ? '>>>' : elements[2]
                            }
                        })
                        console.log('HTML', decoded)
                        console.log('result', result);

                        return result
                    }
                    return {message:'Brak odjazdów z wybranego przystanku'}
                })
        })
}

// <!-- p --><div style="background: #fff; margin-top: 1em; margin-bottom: 1em;"><table class="sip">
// <tr><th class="naglowek">Linia</th><th class="naglowek" style="min-width:200px;">Kierunek</th><th class="naglowek">Odjazd</th></tr>
// <tr><td>171</td><td>Oliwa Pętla Tramwajowa</td><td>17:47</td></tr>
// <tr><td>171</td><td>Oliwa Pętla Tramwajowa</td><td>18:15</td></tr>
// </table><p style="font-size: 8pt; font-style:italic;margin-top: 0;text-align:center;">ďż˝rďż˝dďż˝o danych: narzďż˝dzie oprogramowania SIP opracowane przez <a href="http://www.gmv.com">GMV</a></p>