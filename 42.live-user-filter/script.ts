const result = document.getElementById('result')
const filter: HTMLInputElement = document.querySelector('#filter')
const listItems: HTMLDivElement[] = []

getData()
filter.addEventListener("input", filterData)

async function getData() {
	const res = await fetch('https://randomuser.me/api?results=50')

	const { results } = await res.json()

	// Clear result
	result.innerHTML = ''

	results.forEach(user => {
		const div = document.createElement('div')

		listItems.push(div)

		div.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

		result.appendChild(div)
	})
}

function filterData() {
	listItems.forEach(item => {
		let div = item.querySelector("div>h4")
		if (div.innerText.toLowerCase().includes(filter.value.toLowerCase())) {
			div.parentElement.parentElement.className = ""
		} else {
			div.parentElement.parentElement.className = "hide"
		}
	})
}
