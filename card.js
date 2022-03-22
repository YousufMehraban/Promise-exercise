

// Question 3

const cardUrl = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1'


let deck_id = null
async function deckID(){
  let data = await axios.get(cardUrl)
  deck_id = data.data.deck_id
}
deckID()

function drawCard(){
  return new Promise( (resolve, reject) => {
    let data = axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw`)
    resolve(data)
  })
}

document.querySelector('#button').addEventListener('click', function(){
  drawCard()
  .then(res => {
    let div = document.querySelector('#cards')
    let img = document.createElement('img')
    img.src = res.data.cards[0].image
    div.append(img)
  })
  .catch(err => console.log(err))
})

