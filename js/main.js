jQuery(document).ready(function(){
  jQuery('#slider').slippry({
      'auto': false,
      'controls': false,
      'slideWrapper': '<div class="sy-slides-wrap" />'
  })

    $("#nav-mobile").html($(".nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    $('#tab-container').easytabs();

    jQuery('#thumbs .product-thumb').on('click', function (){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    jQuery('#thumbs img').on('click', function () {
        var imageUrl = $(this).attr('src');
        $('#mainImage').attr('src', imageUrl);
    });

});
