export default function initFetchBitcoin () {
  const url =  'https://blockchain.info/ticker'
  
  axios.get(url)
  .then(response =>  {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerHTML = (1000 / response.data.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(erro)
  })
}

