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
const reisplannerContainer = document.querySelector('.reisplanner')
const van = document.getElementById('van')
const naar = document.getElementById('naar')
const vertrekInput = document.getElementById('vertrek')
const aankomstInput = document.getElementById('aankomst')
const dateInput = document.getElementById('date')
const timeInput = document.getElementById('time')
const nowInput = document.getElementById('now')

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
		}
		if(event.key === 'ArrowLeft') {
			index += 1
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


const allTravelOptions = document.querySelectorAll('.ov-optie')	
if(allTravelOptions.length) {
	let index = 0
	allTravelOptions[0].focus()
	document.addEventListener('keyup', event => {
		event.preventDefault()
		if(event.key === 'ArrowUp') {
			index -= 1
		}
		if(event.key === 'ArrowDown') {
			index += 1
		}
		if(index < 0) {
			index = allTravelOptions.length - 1
		}
		if(index > allTravelOptions.length - 1){
			index = 0;
		}
		if(event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
			allTravelOptions[index].focus()
		}
		if(event.key === 'ArrowRight') {
			reisAssistentieAanvraagButton.focus()
		}
		if(event.code === 'Space') {
			console.log('hello')
			document.activeElement.click()
		}
	})
}

if(reisplannerContainer) {
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

	const { vertrek, vertrektype, aankomst, aankomsttype, type, toegankelijk, tijd } = queryObject

	van.value = vertrek
	naar.value = aankomst
	if(type === 'vertrek') vertrekInput.checked = true
	if(type === 'aankomst') aankomstInput.checked = true
	const time = new Date(tijd)
	const newTime = time.toISOString()
	const newTimeArray = newTime.split('T')[1].split('.')[0].split(':')
	const newTimeString = `${newTimeArray[0]}:${newTimeArray[1]}`
	dateInput.value = newTime.split('T')[0]
	timeInput.value = newTimeString

	nowInput.addEventListener('click', () => {
		const time = new Date()
		const currentHours = time.getHours()
		const currentMinutes = time.getMinutes()
		const currentTime = `${currentHours}:${currentMinutes}`
		timeInput.value = currentTime
	})
	
}