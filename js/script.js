

const routes = {
  '/':'/pages/home.html',
  '/universe':'/pages/universe.html',
  '/explore':'/pages/explore.html',
  404: '/pages/404.html',

  
}

function route(event) {
  event = event || window.event
  event.preventDefault()
  
  window.history.pushState({}, '', event.target.href)
  
  handle()

  
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]
  
  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })
}

handle()

window.onpopstate = () => handle()
window.route = () => route()

const home = document.querySelector('.home')
const universe = document.querySelector('.universe')
const explore = document.querySelector('.explore')


home.addEventListener('click', () => { 
  home.classList.add('home')
  universe.classList.remove('Bold')
  explore.classList.remove('Bold')
})

universe.addEventListener('click', () => { 
  universe.classList.add('Bold')
  home.classList.remove('home')
  explore.classList.remove('Bold')
})

explore.addEventListener('click', () => { 
  explore.classList.add('Bold')
  home.classList.remove('home')
  universe.classList.remove('Bold')
})


if (window.location.pathname !== '/') {
  window.location = '/'
}


  