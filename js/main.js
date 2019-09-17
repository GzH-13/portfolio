$(window).load(function(){
    $('#holder' ).fadeOut();
    setTimeout(function(){
      $("#flipPreloader").fadeOut(300)
        .promise()
        .done(function() {
          $('#Photo_Background h2').addClass('anim');
      });
    });
});
