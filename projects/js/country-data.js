const countryContainer = document.querySelector('.countries')
const btnCountry = document.querySelector('.btn-country')

const displayCountry = (data) =>{
  console.log(data)
  let countryNode = document.querySelector('#country').content.cloneNode(true)
  countryNode.querySelector('.country__img').src = data.flags.png
  countryNode.querySelector('.country__name').textContent = data.name.common
  countryNode.querySelector('.country__region').textContent = data.region
  let popSpan = countryNode.querySelector(':nth-child(1 of .country__row) span').cloneNode(true)
  let langSpan = countryNode.querySelector(':nth-child(2 of .country__row) span').cloneNode(true)
  let moneySpan = countryNode.querySelector(':nth-child(3 of .country__row) span').cloneNode(true)
  countryNode.querySelectorAll('.country__row').forEach(s => s.textContent = "")
  countryNode.querySelector(':nth-child(1 of .country__row)').appendChild(popSpan)
  countryNode.querySelector(':nth-child(2 of .country__row)').appendChild(langSpan)
  countryNode.querySelector(':nth-child(3 of .country__row)').appendChild(moneySpan)
  countryNode.querySelector(':nth-child(1 of .country__row)').appendChild(document.createTextNode((data.population / 10 ** 6).toFixed(3) + " M"))
  countryNode.querySelector(':nth-child(2 of .country__row)').appendChild(document.createTextNode(Object.values(data.languages)[0]))
  countryNode.querySelector(':nth-child(3 of .country__row)').appendChild(document.createTextNode(Object.values(data.currencies)[0].name))
  //countryContainer.appendChild(countryNode)
  return countryNode
}

const getCountryData = (country) =>{
  countryContainer.style.opacity = 1
  const request = new XMLHttpRequest()
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`)
  request.send()
  request.addEventListener('load', function(e){
    const data = JSON.parse(request.response)[0]
    const countryNode = displayCountry(data)
    countryContainer.appendChild(countryNode)
    if (data.borders.length !== 0) {
      data.borders.forEach(border => {
        getBorderCountry(border)
      })
    }
  })
}

const getBorderCountry = (code, classType = "neighbour") =>{
  const request = new XMLHttpRequest()
  request.open("GET", `https://restcountries.com/v3.1/alpha/${code}`)
  request.send()
  request.addEventListener('load', function (e) {
    const data = JSON.parse(request.response)[0]
    let div = document.createElement('div')
    div.classList.add(classType)
    const countryNode = displayCountry(data)
    div.appendChild(countryNode)
    countryContainer.appendChild(div)
  })
}
const getBorderCountry2 = (code, classType = "neighbour") =>{
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  .then(res =>{
    return res.json()
  }).then(data => {
    data = data[0]
    let div = document.createElement('div')
    div.classList.add(classType)
    const countryNode = displayCountry(data)
    div.appendChild(countryNode)
    countryContainer.appendChild(div)
  })
}
btnCountry.addEventListener('click', (e)=>{
  let target = prompt('which country do you want informations on?')
  if(target !== "") getCountryData(target)
})

const mypromess = async(i)=>{
  return new Promise((resolve, reject) => {
    if(i === 10) resolve("i est égale à 10")
    reject("i n'est pas égale à 10")
  })
}
mypromess(10).then(res=>{console.log(res)}).catch(err=>{ console.log("ERREUR", err)})
let result = (i)=>{
  return mypromess(i).then((res) => {return res}).catch(err =>  err)
}
let ut = ""
const pr = async (i)=>{
  const value = await mypromess(i) || "err"
  console.log(typeof value)
  ut = await value
  console.log("----",value)
}

let res = result(1)
console.log(res)
console.log('test')

let test = [(35.689, 139.69), (52.370, 4.895), (-33.933, 18.474)]

const whereAmI = (lat, lon)=>{
  let url = `https://geocode.xyz/${lat},${lon}?geoit=json&auth=1`
  fetch(url).then(res => res.json())
  .then(data =>{
    console.log(data)
  })
}
whereAmI(52.370, 4.895)
