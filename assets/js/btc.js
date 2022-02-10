function get_data1(url) {
  var result = "";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.overrideMimeType("application/json");
  xmlhttp.open("GET", url, false);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      result = xmlhttp.responseText;
    }
  };
  xmlhttp.send(null);
  result = JSON.parse(result);
  return result;
}

var url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

var data_json = get_data(url);

// document.write('<h2><b>Simbolo: </b>' + data_json.symbol + '</h2>');
document.write("<h3><b>Precio del BTC: </b>" + data_json.price + "</h3>");
