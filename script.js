const cards = document.querySelectorAll('.cartes-pokemon > div')
console.log(cards)

const filters = document.querySelectorAll('input[type="checkbox"]');
console.dir(filters);

filters.forEach(filter => {
  filter.addEventListener('change', (e) => {
    // console.log(e.target.name);
    // console.log(e.target.checked);
    const selected = e.target.name;

    if (e.target.checked == false) {
      cards.forEach(card => {
        card.style.display = 'block'
      })
      return
    }

    cards.forEach(card => {
      card.style.display = 'none'
      const tipus = Array.from(card.querySelectorAll('p > span'))
      if (tipus.some(classePokemon => classePokemon.classList.contains(selected))) {
        card.style.display = 'block'
      }
    })
  })
})

const search = document.querySelector('input[type="search"]')
const cardsArray = Array.from(cards);

search.addEventListener('input', (e) => {
  // console.log(e.target.value)
  const search = e.target.value.toLocaleLowerCase();
  const results = cardsArray.filter(card => {
    const name = card.querySelector('h2').textContent.toLocaleLowerCase()
    return name.includes(search)
  })
  cards.forEach(card => card.style.display = 'none')
  results.forEach(card => card.style.display = 'block')
})


const click = document.querySelector('#click')
const panel = document.querySelector('.hidden-pannel')

const togglePanel = () => {
  panel.classList.toggle('show')
}

click.addEventListener('click', togglePanel)

