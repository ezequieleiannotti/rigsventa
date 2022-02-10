function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    myFunction(this);
  };
  xhttp.open("GET", "catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("RIG");
  let table =
    "<tr><th>USDT</th><th>MODELO</th><th>ETHER</th><th>RETORNO DE INVERSION</th></tr>";
  for (let i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("USDT")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("MODELO")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("ETHER")[0].childNodes[0].nodeValue +
      "<td>" +
      x[i].getElementsByTagName("ROI")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }

  document.getElementById("USDT").innerHTML = table;
}
