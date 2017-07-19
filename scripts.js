$( document ).ready(function() {

    var $inputField = $( 'input' ).attr('name', 'new-items');
    var $mainList = $( '#main-list' );
    var $listItems = $mainList.children();
    var $listItemTemplate = $('<li class="incomplete"><i class="material-icons delete">highlight_off</i><i class="material-icons check-boxes">check_box_outline_blank</i></li>');

    // makeshift onEnter listener
    $inputField.on('keyup', function (e) {
      if (e.keyCode == 13) {
        $mainList.prepend($listItemTemplate.append( $(this).val() ) );
        $inputField.val('');
      }
    });

    // click to cross off each item
    // $( '#main-list' ).on("click", 'li', function(){
    //   $(this).toggleClass('complete');
    // });

    // replace toggle with functionality to include icons
    $( '#main-list' ).on("click", '.incomplete', function(){
      var $unchecked = $(this).children('i').last().html('check_box_outline_blank');
      $unchecked.html('check_box');
      $(this).addClass('complete').removeClass('incomplete');
    });

    $( '#main-list' ).on("click", '.complete', function(){
      var $checked = $(this).children('i').last().html('check_box');
      $checked.html('check_box_outline_blank');
      $(this).addClass('incomplete').removeClass('complete');
    });

    // add 'delete' icon functionality
    $( '#main-list' ).on("click", '.delete', function(){
      confirm("Are you sure you want to delete this item?");
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