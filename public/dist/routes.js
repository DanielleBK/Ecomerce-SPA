page('/', index);
page('/harry', geek);
page('/ver', compre);
page();


function index() {
  $("main").html(renderIndex());
  $("main").append(`<p>A loja de balões on-line </br> que o representante </br> vai até você</p>`)
}


function geek( ) {
  $("main").html(presentNerd());
}

function compre(arrayData) {
  $("main").html(compreJa());
  $("main").append('<h6>Vendedor</h6>').append('<img class="vendedor"src="dist/giphy.gif" width="80%" height="300px">')
  .append(`<p class="vendedorDados"> Entrarei em contato com você e vamos flutuar </p>`)

}
