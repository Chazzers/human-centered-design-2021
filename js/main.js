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

Date.prototype.addHours = function(h) {
	this.setTime(this.getTime() + (h*60*60*1000));
	return this;
}



if(naarWerkContainer) {
	// nietVanWerk.addEventListener('click', () => {
	// 	naarWerkContainer.style.display = 'none'
	// 	waarNaarToeContainer.style.display = 'block'
	// })
	let index = 0
	document.addEventListener('keyup', event => {
		event.preventDefault()
		if(event.key === 'ArrowRight') {
			index -= 1
			if(toggleGuitar.checked) {
				aKeyGuitar.currentTime = 0
				aKeyGuitar.play()
			}
		}
		if(event.key === 'ArrowLeft') {
			index += 1
			if(toggleGuitar.checked) {
				dbKeyGuitar.currentTime = 0
				dbKeyGuitar.play()
			}
		}
		if(index < 0) {
			index = workOrHome.length - 1
		}
		if(index > workOrHome.length - 1){
			index = 0;
		}
		if(event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			workOrHome[index].focus()
		}
		if(event.code === 'Space') {
			console.log('hello')
			if(toggleGuitar.checked) {
				dKeyGuitar.currentTime = 0
				dKeyGuitar.play()
			}
			document.activeElement.click()
		}
	})
	
	if(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			const fromValue = fromChoice.value
			const toValue = toChoice.value
			const timeValue = formTime.value
			const dateValue = formDate.value
			const when = new Date(`${dateValue} ${timeValue}`)
		
			console.log(when)
		
			const searchParams = new URLSearchParams({
				vertrek: fromValue,
				aankomst: toValue,
				type: 'vertrek',
				tijd: when
			})
			const url = `https://www.ns.nl/reisplanner/#/?${searchParams}`
		
			window.location.href = url;
		})
		
		const today = new Date()
		const tomorrow = new Date(today)
		
		today.addHours(1)
		tomorrow.setDate(tomorrow.getDate() + 1)
		tomorrow.setHours(10)
		tomorrow.setMinutes(0)
		tomorrow.setMilliseconds(0)
		const tomorrowHref = new Date(tomorrow.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()
		const todayHref = new Date(today.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()

		naarWerkLink.href = `/reis-assistentie/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${tomorrowHref}&toegankelijk=true`
		vanWerkLink.href= `/reis-assistentie/?vertrek=Amsterdam%20Centraal&vertrektype=treinstation&aankomst=Eindhoven%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${todayHref}&toegankelijk=true`
	}
}

if(resultatenContainer) {
	console.log(window.location)
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


console.log(window.location.search)

if(geboekteReizen) {
	console.log(window.location)
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

