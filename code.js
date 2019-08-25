const COIN_INFO_ENDPOINT = 'https://min-api.cryptocompare.com/data/top/totalvol?limit=30&tsym=USD';
const COIN_PRICE_ENDPOINT = 'https://min-api.cryptocompare.com/data/pricemulti?tsyms=USD&api_key=5927a4aaf8b7d4f68a9eabc906e925276874447b1ff795e6e86685143d20bacb&fsyms=';

class CryptoApp {
  constructor(){
    this.coinData = {};
  }

  makeApiCall(endPoint, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200){
        callback (JSON.parse(this.response));
      }
    }
    xhttp.open("GET", endPoint, true);
    xhttp.send();
  }

  start (){
    this.makeApiCall(COIN_INFO_ENDPOINT, coinData => {
      console.log(coinData);
    });
  }
}

const crypto = new CryptoApp();
crypto.start();