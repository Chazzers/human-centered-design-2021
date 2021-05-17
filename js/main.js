const naarWerkContainer = document.querySelector('.naar-werk-container')
const vanWerkContainer = document.querySelector('.van-werk-container')
const workOrHome = document.querySelectorAll('.work-or-home')
const naarWerkLink = document.getElementById('naar-werk')
const vanWerkLink = document.getElementById('van-werk')
const nietNaarWerk = document.getElementById('niet-naar-werk')
const nietVanWerk = document.getElementById('niet-van-werk')
const waarNaarToeContainer = document.querySelector('.waar-naar-toe-container')
const form = document.getElementById('form')
const fromChoice = document.getElementById('from-choice')
const toChoice = document.getElementById('to-choice')
const formTime = document.getElementById('time')
const formDate = document.getElementById('date')
const reisAssistentieAanvraagButton = document.querySelector('#option-content header a')
const resultatenContainer = document.querySelector('.resultaten')
const van = document.getElementById('van')
const naar = document.getElementById('naar')
const vertrekInput = document.getElementById('vertrek')
const aankomstInput = document.getElementById('aankomst')
const dateInput = document.getElementById('date')
const timeInput = document.getElementById('time')
const nowInput = document.getElementById('now')
const geboekteReizen = document.querySelector('.geboekte-reizen')
const toggleGuitar = document.getElementById('toggle-music')
const aKeyGuitar = document.getElementById('a')
const dKeyGuitar = document.getElementById('d')
const dbKeyGuitar = document.getElementById('db')
const to =  document.getElementById('to')
const from =  document.getElementById('from')
const buttonFromTo = document.querySelectorAll('.button-from-to')
const buttonNotHome = document.getElementById('not-work-home')
const legenda = document.querySelector('.legenda')
const keyboardLabels = document.querySelector('.van-naar-legenda-label')

Date.prototype.addHours = function(h) {
	this.setTime(this.getTime() + (h*60*60*1000));
	return this;
}

const left = [
	'q',
	'w',
	'e',
	'a',
	's',
	'd',
	'z',
	'x',
	'c'
]

const middle =  [
	'r',
	't',
	'y',
	'f',
	'g',
	'h',
	'v',
	'b',
	'n'
]

const right = [
	'u',
	'i',
	'o',
	'j',
	'k',
	'l',
	'm',
	',',
	'.'
]




if(naarWerkContainer) {
	nietVanWerk.addEventListener('click', () => {
		naarWerkContainer.style.display = 'none'
		waarNaarToeContainer.style.display = 'block'
		keyboardLabels.style.display = 'flex'
		legenda.classList.add('anders')
		if(form) {
			form.addEventListener('submit', (e) => {
				e.preventDefault()
				const fromValue = from.value
				const toValue = to.value
				const today = new Date()
				const when = new Date(today.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()
			
				console.log(when)
			
				const searchParams = new URLSearchParams({
					vertrek: fromValue,
					aankomst: toValue,
					type: 'vertrek',
					tijd: when
				})
				const url = `${window.location.origin}/reis-assistentie/geboekte-reizen.html?${searchParams}`

				window.open(url, '_blank')
			})
		}
	
		const locations = [
			'Amsterdam Centraal',
			'Eindhoven',
			'Akkrum',
			'Alkmaar',
			'Almelo',
			'Almere Buiten',
			'Almere Centrum',
			'Almere Muziekwijk',
			'Alphen aan den Rijn',
			'Amersfoort',
			'Amersfoort Schothorst',
			'Amersfoort Vathorst',
			'Amsterdam Amstel',
			'Amsterdam Bijlmer Arena',
			'Amsterdam Lelylaan',
			'Amsterdam Rai',
			'Amsterdam Science Park',
			'Amsterdam Sloterdijk',
			'Amsterdam Zuid',
			'Anna Paulowna',
			'Apeldoorn',
			'Arnhem',
			'Arnhem Zuid',
			'Assen',
			'Baarn',
			'Barendrecht',
			'Beilen',
			'Bergen op Zoom',
			'Best',
			'Beverwijk',
			'Bilthoven',
			'Bloemendaal',
			'Bodegraven',
			'Bovenkarspel Flora',
			'Boxtel',
			'Breda',
			'Brummen',
			'Capelle Schollevaar',
			'Castricum',
			'Culemborg',
			'Delft',
			'Den Bosch',
			'Den Bosch Oost',
			'Den Haag Centraal',
			'Den Haag Holland Spoor',
			'Den Haag Ypenburg',
			'Den Helder',
			'Den Helder Zuid',
			'Deurne',
			'Deventer',
			'Deventer Colmschate',
			'Diemen',
			'Dieren',
			'Dordrecht',
			'Driebergen-Zeist',
			'Dronten',
			'Duivendrecht',
			'Ede - Wageningen',
			'Enkhuizen',
			'Enschede',
			'Ermelo',
			'Etten - Leur',
			'Geldermalsen',
			'Geldrop',
			'Goes',
			'Gouda',
			'Gouda Goverwelle',
			'Groningen Europapark',
			'Groningen',
			'Grou - Jirnsum',
			'Haarlem',
			'Haarlem Spaarnwoude',
			'Halfweg - Zwanenburg',
			'Harderwijk',
			'Heemstede Aerdenhout',
			'Heerenveen',
			'Heerhugowaard',
			'Heerlen',
			'Heeze',
			'Heiloo',
			'Helmond',
			'Helmond Brouwhuis',
			'Hengelo',
			'Hillegom',
			'Hilversum',
			'Hilversum Sportpark',
			'Hoofddorp',
			'Hoogeveen',
			'Hoorn',
			'Hoorn Kersenboogerd',
			'Holten',
			'Horst - Sevenum',
			'Houten',
			'Kampen Zuid',
			'Kapelle - Biezelinge',
			'Krabbendijke',
			'Kruiningen Yerseke',
			'Lansingerland Zoetermeer',
			'Leeuwarden',
			'Leiden Centraal',
			'Leiden Lammenschans',
			'Lelystad Centrum',
			'Maastricht',
			'Maarheeze',
			'Meppel',
			'Middelburg',
			'Naarden - Bussum',
			'Nieuw Vennep',
			'Nijkerk',
			'Nijmegen',
			'Nijmegen Dukenburg',
			'Nunspeet',
			'Olst',
			'Oss',
			'Oss West',
			'Oudenbosch',
			'Overveen',
			'Putten',
			'Purmerend',
			'Purmerend Overwhere',
			'Ravenstein',
			'Rheden',
			'Rhenen',
			'Rijssen',
			'Rijswijk',
			'Rilland - Bath',
			'Roermond',
			'Roosendaal',
			'Rotterdam Alexander',
			'Rotterdam Centraal',
			'Santpoort Zuid',
			'Schagen',
			'Sassenheim',
			'Schiedam Centrum',
			'Schiphol Airport',
			'Sittard',
			'Soest Zuid',
			'Steenwijk',
			'Tiel',
			'Tilburg',
			'Twello',
			'Uitgeest',
			'Utrecht Centraal Station',
			'Utrecht Maliebaan',
			'Veenendaal Centrum',
			'Veenendaal de Klomp',
			'Veenendaal West',
			'Venlo',
			'Vlissingen',
			'Vlissingen Souburg',
			'Voorhout',
			'Weert',
			'Weesp',
			'Wijchen',
			'Wijhe',
			'Woerden',
			'Wolvega',
			'Wormerveer',
			'Zaandam',
			'Zaandam Kogerveld',
			'Zaandijk',
			'Zaanse Schans',
			'Zandvoort aan Zee',
			'Zevenbergen',
			'Zoetermeer',
			'Zoetermeer Oost',
			'Zutphen',
			'Zwijndrecht',
			'Zwolle',
		]
		locations.forEach(location => {
			const optionFrom = document.createElement('option')
			optionFrom.value = location
			optionFrom.innerHTML = location
			optionFrom.classList.add('btn-from-to')
			from.appendChild(optionFrom)
		})
		locations[0] = 'Eindhoven'
		locations[1] = 'Amsterdam Centraal'
		locations.forEach(location => {
			const optionTo = document.createElement('option')
			optionTo.value = location
			optionTo.innerHTML = location
			optionTo.classList.add('btn-from-to')
			to.appendChild(optionTo)
		})
	})
	let index = 0

			
	const today = new Date()
	const tomorrow = new Date(today)
	
	today.addHours(1)
	tomorrow.setDate(tomorrow.getDate() + 1)
	tomorrow.setHours(10)
	tomorrow.setMinutes(0)
	tomorrow.setMilliseconds(0)
	const tomorrowHref = new Date(tomorrow.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()
	const todayHref = new Date(today.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()
	naarWerkLink.href = `${window.location.origin}/reis-assistentie/geboekte-reizen.html?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${tomorrowHref}&toegankelijk=true`
	vanWerkLink.href= `${window.location.origin}/reis-assistentie/geboekte-reizen.html?vertrek=Amsterdam%20Centraal&vertrektype=treinstation&aankomst=Eindhoven%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${todayHref}&toegankelijk=true`
	
	document.addEventListener('keyup', event => {
		if((left.includes(event.key) || middle.includes(event.key) || right.includes(event.key)) && naarWerkContainer.style.display === 'none') {
			event.preventDefault()
			buttonNotHome.focus()
			document.activeElement.click()
		}
		// first
		if(left.includes(event.key) && naarWerkContainer.style.display !== 'none') {
			window.open(`${window.location.origin}/reis-assistentie/geboekte-reizen.html?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${tomorrowHref}&toegankelijk=true`, '_blank')
			event.preventDefault()
		}
		if(middle.includes(event.key) && naarWerkContainer.style.display !== 'none') {
			event.preventDefault()
			window.open(`${window.location.origin}/reis-assistentie/geboekte-reizen.html?vertrek=Amsterdam%20Centraal&vertrektype=treinstation&aankomst=Eindhoven%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${todayHref}&toegankelijk=true`, '_blank')
		} 
		if(right.includes(event.key) && naarWerkContainer.style.display !== 'none') {
			event.preventDefault()
			nietVanWerk.focus()
			document.activeElement.click()
			event.preventDefault()
		} 

		if(event.key === 'ArrowRight') {
			event.preventDefault()
			index -= 1
			if(toggleGuitar.checked) {
				aKeyGuitar.currentTime = 0
				aKeyGuitar.play()
			}
		}
		if(event.key === 'ArrowLeft') {
			event.preventDefault()
			index += 1
			if(toggleGuitar.checked) {
				dbKeyGuitar.currentTime = 0
				dbKeyGuitar.play()
			}
		}
		if(index < 0) {
			event.preventDefault()
			index = workOrHome.length - 1
		}
		if(index > workOrHome.length - 1) {
			event.preventDefault()
			index = 0;
		}
		if(event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			event.preventDefault()
			workOrHome[index].focus()
		}
		if(event.code === 'Space') {
			event.preventDefault()
			console.log('hello')
			if(toggleGuitar.checked) {
				dKeyGuitar.currentTime = 0
				dKeyGuitar.play()
			}
			document.activeElement.click()
		}
	})
}

if(resultatenContainer) {
	const params = new URLSearchParams(window.location.search);

	// https://attacomsian.com/blog/javascript-convert-query-string-to-object#:~:text=In%20vanilla%20JavaScript%2C%20there%20is,keys%20to%20create%20an%20object.
	const parseParams = (querystring) => {

		// parse query string
		const params = new URLSearchParams(querystring);
	
		const obj = {};
	
		// iterate over all keys
		for (const key of params.keys()) {
			if (params.getAll(key).length > 1) {
				obj[key] = params.getAll(key);
			} else {
				obj[key] = params.get(key);
			}
		}
	
		return obj;
	};

	const queryObject = parseParams(params)

	const { vertrek, aankomst, tijd } = queryObject

	const data = []
	let timeOne = new Date(tijd)

	let timeTwo = new Date(tijd)
	const timeOnePlusTime = timeTwo.addHours(1.25)
	

	for(let i = 0; i < 3; i++) {
		
		const vertrekTijdIso = timeOne.toISOString()
		const vertrekTijdArray = vertrekTijdIso.split('T')[1].split('.')[0].split(':')
		const vertrekTijd = `${vertrekTijdArray[0]}:${vertrekTijdArray[1]}`
		
		
		const aankomstTijdIso = timeOnePlusTime.toISOString()
		const aankomstTijdArray = aankomstTijdIso.split('T')[1].split('.')[0].split(':')
		const aankomstTijd = `${aankomstTijdArray[0]}:${aankomstTijdArray[1]}`
		data.push({
			vertrekTijd: vertrekTijd,
			aankomstTijd: aankomstTijd,
			vertrek: vertrek,
			aankomst: aankomst
		})
		timeOne.addHours(0.5)
		timeOnePlusTime.addHours(0.5)
	}

	render(`${data.map(item => `		
		<li class="slide">
			<a href="/reis-assistentie/geboekte-reizen.html?${params}" target="_blank" class="ov-optie">
				<article>
					<div class="destinations">
						<p>
							<span class="vertrek">${item.vertrek}</span>
							<span class="arrow">
								<!-- Directly copied from: https://www.ns.nl/reisplanner -->
								<svg height="11" viewBox="0 0 11.707 11" width="11.707" xmlns="http://www.w3.org/2000/svg"><polygon fill="#ffc917" points="10.293 5.5 4.793 11 6.207 11 11.707 5.5 6.207 0 4.793 0 10.293 5.5"></polygon><path fill="#ffc917" d="M.5,5h9.728a.5.5,0,0,1,.5.5h0a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,5.5H0A.5.5,0,0,1,.5,5Z"></path></svg>
							</span>
							<span class="aankomst">${item.aankomst}</span>
						</p>
					</div>
					<header>
						<h3>
							<span class="vertrek">${item.vertrekTijd}</span>
							<span class="arrow">
								<!-- Directly copied from: https://www.ns.nl/reisplanner -->
								<svg height="11" viewBox="0 0 11.707 11" width="11.707" xmlns="http://www.w3.org/2000/svg"><polygon fill="#ffc917" points="10.293 5.5 4.793 11 6.207 11 11.707 5.5 6.207 0 4.793 0 10.293 5.5"></polygon><path fill="#ffc917" d="M.5,5h9.728a.5.5,0,0,1,.5.5h0a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,5.5H0A.5.5,0,0,1,.5,5Z"></path></svg>
							</span>
							<span class="aankomst">${item.aankomstTijd}</span>
						</h3>
						<p>
							<span>
								<!-- Directly copied from: https://www.ns.nl/reisplanner -->
								<svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg" fill="#ffc917"><path d="M7,14a7,7,0,1,1,7-7A7.008,7.008,0,0,1,7,14ZM7,.9A6.058,6.058,0,0,0,1,7a6.058,6.058,0,0,0,6,6.1A6.058,6.058,0,0,0,13,7,6.058,6.058,0,0,0,7,.9Z"></path><path d="M7,2H7a.5.5,0,0,0-.5.5v5h1v-5A.5.5,0,0,0,7,2Z"></path><path d="M9.664,9.993,9.7,9.957a.475.475,0,0,0,0-.671L7.207,6.793,6.5,7.5,8.993,9.993A.475.475,0,0,0,9.664,9.993Z"></path></svg>
							</span>
							1:15
							<span>
								<!-- Directly copied from: https://www.ns.nl/reisplanner -->
								<svg fill="#ffc917" height="12" viewBox="0 0 13 12" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M8.586,3.879a2.5,2.5,0,1,0-.707.707L13,9.707V8.293ZM7.561,3.561a1.5,1.5,0,1,1,0-2.121A1.491,1.491,0,0,1,7.561,3.561ZM6.5,7a2.5,2.5,0,0,0-1.379.414L0,2.293V3.707L4.414,8.121A2.5,2.5,0,1,0,6.5,7Zm1.061,3.561A1.5,1.5,0,0,1,5.439,8.44h0a1.5,1.5,0,1,1,2.122,2.121Z"></path></svg>
							</span>
							1x
							<span>
								<svg fill="#ffc917" _ngcontent-qwy-c46="" height="14px" viewBox="0 0 14 14" width="14px" xmlns="http://www.w3.org/2000/svg" class="ng-star-inserted"><path _ngcontent-qwy-c46="" d="M14,14H0V3H3V0H14ZM1,13H13V1H4V4H1Z"></path></svg>
							</span>
							6
						</p>
					</header>
					<section>
						<p><i>IC</i> Intercity</p>
						<div class="reis-assistentie">
							<p>
								NS Reisassistentie
							</p>
						</div>
					</section>
					<p class="submit">Vraag Reisassistentie aan</p>

					
				</article>
			</a>
		</li>
	`).join('')}
	`, '.resultaten-lijst')


}



const allTravelOptions = document.querySelectorAll('.ov-optie')	
if(allTravelOptions.length) {
	let index = 0
	allTravelOptions[0].focus()
	document.addEventListener('keyup', event => {
		event.preventDefault()
		if(event.key === 'ArrowLeft') {
			index -= 1
			if(toggleGuitar.checked) {
							aKeyGuitar.currentTime = 0
							aKeyGuitar.play()
			}
		}
		if(event.key === 'ArrowRight') {
			index += 1
			if(toggleGuitar.checked) {
				dbKeyGuitar.currentTime = 0
				dbKeyGuitar.play()
			}
		}
		if(index < 0) {
			index = allTravelOptions.length - 1
		}
		if(index > allTravelOptions.length - 1){
			index = 0;
		}
		if(event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			allTravelOptions[index].focus()
		}
		if(event.code === 'Space') {
			document.activeElement.click()
			if(toggleGuitar.checked) {
				dKeyGuitar.currentTime = 0
				dKeyGuitar.play()
			}
		}
	})
}

if(geboekteReizen) {
	const params = new URLSearchParams(window.location.search);

	// https://attacomsian.com/blog/javascript-convert-query-string-to-object#:~:text=In%20vanilla%20JavaScript%2C%20there%20is,keys%20to%20create%20an%20object.
	const parseParams = (querystring) => {

		// parse query string
		const params = new URLSearchParams(querystring);
	
		const obj = {};
	
		// iterate over all keys
		for (const key of params.keys()) {
			if (params.getAll(key).length > 1) {
				obj[key] = params.getAll(key);
			} else {
				obj[key] = params.get(key);
			}
		}
	
		return obj;
	};

	const queryObject = parseParams(params)

	const { vertrek, aankomst, tijd } = queryObject

	const timeOne = new Date(tijd)

	let timeTwo = new Date(tijd)
	const timeOnePlusTime = timeTwo.addHours(1.25)

	const vertrekTijdIso = timeOne.toISOString()
	const vertrekTijdArray = vertrekTijdIso.split('T')[1].split('.')[0].split(':')
	const vertrekTijd = `${vertrekTijdArray[0]}:${vertrekTijdArray[1]}`


	const aankomstTijdIso = timeOnePlusTime.toISOString()
	const aankomstTijdArray = aankomstTijdIso.split('T')[1].split('.')[0].split(':')
	const aankomstTijd = `${aankomstTijdArray[0]}:${aankomstTijdArray[1]}`

	render(`
		<li class="slide">
			<article>
				<div class="destinations">
					<p>
						<span class="vertrek">${vertrek}</span>
						<span class="arrow">
							<!-- Directly copied from: https://www.ns.nl/reisplanner -->
							<svg height="11" viewBox="0 0 11.707 11" width="11.707" xmlns="http://www.w3.org/2000/svg"><polygon fill="#ffc917" points="10.293 5.5 4.793 11 6.207 11 11.707 5.5 6.207 0 4.793 0 10.293 5.5"></polygon><path fill="#ffc917" d="M.5,5h9.728a.5.5,0,0,1,.5.5h0a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,5.5H0A.5.5,0,0,1,.5,5Z"></path></svg>
						</span>
						<span class="aankomst">${aankomst}</span>
					</p>
				</div>
				<header>
					<h3>
						<span class="vertrek">${vertrekTijd}</span>
						<span class="arrow">
							<!-- Directly copied from: https://www.ns.nl/reisplanner -->
							<svg height="11" viewBox="0 0 11.707 11" width="11.707" xmlns="http://www.w3.org/2000/svg"><polygon fill="#ffc917" points="10.293 5.5 4.793 11 6.207 11 11.707 5.5 6.207 0 4.793 0 10.293 5.5"></polygon><path fill="#ffc917" d="M.5,5h9.728a.5.5,0,0,1,.5.5h0a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,5.5H0A.5.5,0,0,1,.5,5Z"></path></svg>
						</span>
						<span class="aankomst">${aankomstTijd}</span>
					</h3>
					<p>
						<span>
							<!-- Directly copied from: https://www.ns.nl/reisplanner -->
							<svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg" fill="#ffc917"><path d="M7,14a7,7,0,1,1,7-7A7.008,7.008,0,0,1,7,14ZM7,.9A6.058,6.058,0,0,0,1,7a6.058,6.058,0,0,0,6,6.1A6.058,6.058,0,0,0,13,7,6.058,6.058,0,0,0,7,.9Z"></path><path d="M7,2H7a.5.5,0,0,0-.5.5v5h1v-5A.5.5,0,0,0,7,2Z"></path><path d="M9.664,9.993,9.7,9.957a.475.475,0,0,0,0-.671L7.207,6.793,6.5,7.5,8.993,9.993A.475.475,0,0,0,9.664,9.993Z"></path></svg>
						</span>
						1:15
						<span>
							<!-- Directly copied from: https://www.ns.nl/reisplanner -->
							<svg fill="#ffc917" height="12" viewBox="0 0 13 12" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M8.586,3.879a2.5,2.5,0,1,0-.707.707L13,9.707V8.293ZM7.561,3.561a1.5,1.5,0,1,1,0-2.121A1.491,1.491,0,0,1,7.561,3.561ZM6.5,7a2.5,2.5,0,0,0-1.379.414L0,2.293V3.707L4.414,8.121A2.5,2.5,0,1,0,6.5,7Zm1.061,3.561A1.5,1.5,0,0,1,5.439,8.44h0a1.5,1.5,0,1,1,2.122,2.121Z"></path></svg>
						</span>
						1x
						<span>
							<svg fill="#ffc917" _ngcontent-qwy-c46="" height="14px" viewBox="0 0 14 14" width="14px" xmlns="http://www.w3.org/2000/svg" class="ng-star-inserted"><path _ngcontent-qwy-c46="" d="M14,14H0V3H3V0H14ZM1,13H13V1H4V4H1Z"></path></svg>
						</span>
						6
					</p>
				</header>
				<section>
					<p><i>IC</i> Intercity</p>
					<div class="reis-assistentie">
						<p>
							NS Reisassistentie
						</p>
					</div>
				</section>
			</article>
		</li>
	`, '.geboekte-reizen-lijst')
	
}

// render html function
function render(html, selector) {
	const rootDiv = selector ? document.querySelector(selector) : document.getElementById('root')
	return rootDiv.innerHTML = html
}

