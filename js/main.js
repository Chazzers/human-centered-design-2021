const naarWerkContainer = document.querySelector('.naar-werk-container')
const vanWerkContainer = document.querySelector('.van-werk-container')
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

Date.prototype.addHours = function(h) {
	this.setTime(this.getTime() + (h*60*60*1000));
	return this;
}

nietVanWerk.addEventListener('click', () => {
	naarWerkContainer.style.display = 'none'
	waarNaarToeContainer.style.display = 'block'
})

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
tomorrow.setHours(8)
tomorrow.setMinutes(0)
tomorrow.setMilliseconds(0)
const tomorrowHref = new Date(tomorrow.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()
const todayHref = new Date(today.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()

// naarWerkLink.href = `https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${tomorrowHref}&toegankelijk=true`
// vanWerkLink.href= `https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${todayHref}&toegankelijk=true`

