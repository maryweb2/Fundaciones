$('.galeria__img').click(function(e){
  var img = e.target.src;
  var modal1 = '<div class="modaljs" id="modaljs"><img src="'+ img +  '" class="modal__imgjs"><div class="modal__botonjs" id="modal__botonjs">X</div></div>';
  $('body').append(modal1);
  $('#modal__botonjs').click(function(){
    $('#modaljs').remove();
  })
});


$(document).keyup(function(e){
  if (e.which==27) {
    $('#modaljs').remove();
  }
})
