$( document ).ready(function() {
    console.log( "ready!" );

    var $inputField = $( 'input' ).attr('name', 'new-items');
    var $mainList = $( '#main-list' );
    var $listItems = $mainList.children();



    $inputField.on('keyup', function (e) {
      if (e.keyCode == 13) {
        $mainList.append('<li>'+$(this).val()+' <i class="material-icons">highlight_off</i></li>');
        $inputField.val('');
      }
    });

    // click to cross off each item
    $( '#main-list' ).on("click", 'li', function(){
      $(this).toggleClass('complete');
    });

    // add 'delete' icon functionality
    $( '#main-list' ).on("click", '.material-icons', function(){
      $(this).parent().remove();
    });

    // mark all as complete
    $( '#mark-complete' ).on('click', function(){
      console.log("holla");
      $( '#main-list li' ).removeClass('complete').addClass('complete');
    });

    // remove all from list
    $( '#remove-all' ).on('click', function(){
      $( '#main-list li' ).remove();
    });


});