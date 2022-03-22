// Part One: Number Facts

// Question 1

const url = 'http://numbersapi.com/'

// let response = new Promise((resolve, reject) =>{
//   let data = axios.get(url)
//   resolve(data)
// })

// response.then( res => console.log(res))
// response.catch( err => console.log(err))

function LuckyNum(num){
  return new Promise( (resolve, reject)=> {
    let data = axios.get(`${url}${num}`)
    resolve(data)
  })
}


LuckyNum(99)
.then(res => console.log('------->', res))
.catch(err => console.log(err))


// Question 2


function makeList(data){
  
  for (let fact of data){
    let list = document.querySelector('#fact-list1')
    let li = document.createElement('li')
    li.innerText = fact
    list.append(li)
  }
}

function multiNum(){
  return new Promise((resolve, reject) =>{
    let data = axios.get(`${url}6..8,10`)
    resolve(data)
  })
}

multiNum()
.then(res => {
  console.log(res.data)
  makeList(Object.values(res.data))
})
.catch(err => console.log(err))



// Question 3


function AddtoList(value){
  let list = document.querySelector('#fact-list2')
  let li = document.createElement('li')
  li.innerText = value
  list.append(li)
}

function multiSameNum(favNum){
  return new Promise( (resolve, reject) =>{
    let data = axios.get(`${url}${favNum}`)
    resolve(data)
  })
}

multiSameNum(99)
.then(res => {
  AddtoList(res.data)
  return multiSameNum(99)
})
.then( res => {
  AddtoList(res.data)
  return multiSameNum(99)  
})
.then( res => {
  AddtoList(res.data)
  return multiSameNum(99)  
})
.then( res => {
  AddtoList(res.data)
  return multiSameNum(99)  
})
.catch(err => console.log(err))


// Part 2: Deck of Cards

// Question 1

const cardUrl = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1'

let response2 = new Promise( (resolve, reject) => {
  let data = axios.get(cardUrl)
  resolve(data)
})

response2.then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`))
response2.catch(err => console.log(err))

// Question 2

function newShuffleDeck(){
  return new Promise( (resolve, reject) => {
    let data = axios.get(cardUrl)
    resolve(data)
  })
}

newShuffleDeck()
.then(res => {
  console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
  return axios.get(cardUrl)
})
.then(res => {
  console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
})
.catch(err => console.log(err))


// Question 3
// 



// let deck_id = null
// async function deckID(){
//   let data = await axios.get(cardUrl)
//   deck_id = data.data.deck_id
// }
// deckID()

// function drawCard(){
//   return new Promise( (resolve, reject) => {
//     let data = axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw`)
//     resolve(data)
//   })
// }

// document.querySelector('#button').addEventListener('click', function(){
//   drawCard()
//   .then(res => {
//     let div = document.querySelector('#cards')
//     let img = document.createElement('img')
//     img.src = res.data.cards[0].image
//     div.append(img)
//   })
//   .catch(err => console.log(err))
// })

