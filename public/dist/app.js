
$(document).ready(function() {

}) // end jquery

function presentNerd(){
  dir = "https://api.walmartlabs.com/v1/search?apiKey=gv8xkgn4qxw6yyb5hh87q7mh&query=balloon"

  $.ajax({
    url: dir,
    onError: function(err) {
      alert(err);
    }

}).done(function(data) {
  console.log(data);
    arrayData = data.items;
    arrayData.forEach(function(element) {
      let img = element.thumbnailImage;
      let title = element.name;
      let itemPrice = element.salePrice;
      let itemDiv = $("<div class='card '>");
      let h = $("<div class='card-header'>").text(title);
      let itemImage = $("<img class='card-text '>").attr("src", img)
      let price = $("<div class='card-footer text-center'>").text("$" + itemPrice);
      console.log(price);
      let productUrl = element.largeImage;
      let buyButton = $(`<li><a href='/ver' role='button' class='buy-button btn btn-primary'>Representante mais próximo</a></li>`)
        itemDiv.append(h, itemImage, price, buyButton);
        $("main").prepend(itemDiv);
    })
  });
}

function renderIndex() {
 return `
 <div>

 </div>`
}

function compreJa(data) {
  return `
    <div id ='box'>
  </div>`
}
