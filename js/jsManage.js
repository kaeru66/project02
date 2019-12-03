// Menu
$(function() {
$('.menu').hover(function () {
    if ($('.menu-button').is(':visible')) {
        $(this).find('.menu-list').stop().fadeToggle();
        $('.language').appendTo('.menu_list');
    }
    else {
        $('.language').prependTo('.menu');
    }
  });
});


$('.fas.fa-bars').click(function(){
    $('.fas.fa-bars').hide();
    $('.fas.fa-times').show();
    $('.menu_all').slideDown(400);
});
$('.fas.fa-times').click(function(){
    $('.fas.fa-times').hide();
    $('.fas.fa-bars').show();
    $('.menu_all').slideUp(400);
});

$('.online_chat').click(function(){
    $('.online_chat_all').show();
    $('.chat_box-bg').show();
});
$('.chat_box_close').click(function(){
    $('.online_chat_all').hide();
    $('.chat_box-bg').hide();

});

// Edit
$(function() {
    $('.edit-box table').wrap('<div class="table_scroll"></div>');
});

// Go Top
$(function() {
    $(window).scroll(function (event) {

        var threshold = $(document).height() - $(window).height() - $('footer').height();

        if ($(window).scrollTop() > 0) {
            $('div.gotopBox').fadeIn(400);

            if ( $(window).scrollTop() >= threshold ) {
                $('.pagetopbtn').css({
                    top: "-65px",
                    right: "20px",
                    bottom: "auto",
                    position: "absolute"
                });
            } else {
                $('.pagetopbtn').css({
                    top: "auto",
                    right: "20px",
                    bottom: "20px",
                    position: "fixed"
                });
            }
        } else {
            $('div.gotopBox').fadeOut(400);
        }

    });

    $('div.pagetopbtn').click(function () {
        $("html, body").animate({scrollTop:0}, 500, 'swing');
    });
});

//  Index Banner
$(function(){
    $('.owl-idxbanner').owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        nav:false,
        navText:['',''],
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450
    });
});

$(function(){
    $('.owl-about').owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        nav:false,
        navText:['',''],
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        responsive:{
            0:{
                items:1
            },
            570:{
                items:3
            },
            1024:{
                items:5
            }
        }
    });
});

// Index Product
$(function(){
    $('.owl-idxpro').owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        nav:true,
        navigation: true,
        // navText:['',''],
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        responsive:{
            0:{
                items:1
            },
            570:{
                items:3
                
            },
            1024:{
                items:4
            }
        }
    });
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

// products Img
$(function() {

    $('.owlpro').owlCarousel({
        loop:true,
        margin: 10,
        dots:false,
        nav:true,
        navText:['',''],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
                
            },
            1000:{
                items:4
            }
        }
    });

    var detailLeft = $('.products-detail-list .left');
    var $frame =detailLeft, $showImage = $frame.find('.showimg');

    $frame.find('.owlpro .item').click(function(){
        var $this = $(this),
            _src = $this.find('img').attr('src');
        if($showImage.attr('src') != _src){
            $showImage.hide().attr('src', _src).stop(false, true).fadeTo(100, 1);
        }
    });

});

$(function() {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// FAQ
$(function() {

    $('.jsFaq').each(function() {
        
        var qabtn = $('<span class="qaIcon"></span>');
        $('.qa_title').append(qabtn);
        
        $('.qa_title').click(function(event) {

            var $qa_title = $('.qa_title');
            var $qa_answer = $(this).next('div.qa_answer');

            if(!$qa_answer.is(':visible')){
                $qa_title.removeClass('qa_title_no');
                $('.qa_answer:visible').slideUp();
            }

            $(this).toggleClass('qa_title_no');
            $qa_answer.slideToggle();

        }).siblings('.qa_answer').hide();

    });

});


// FAQ Number
$(function() {

    $('.faqNumber').each(function() {
        var qaList = $('<div class="qaList"></div>');
        qaList.prependTo('.qa_title');

        $('.qa_title').each(function() {
            var nub = $(this).data('number');
            $(this).find('.qaList').text(nub);
        });

    });

});


window.onload = (event) => {
    const badge = document.getElementById('badge'),
    bottom = document.getElementById('bottom');
    window.onscroll = () => {
        listenAnimationClass(badge);
        // listenAnimationClass(bottom); 
    }
    function listenAnimationClass(elem){
        if (isInSign(elem)) {
            if (!elem.className.includes('move')) {
                elem.className = elem.className + ' move';
            }
        }
    }
}
function isInSign(elem) {
    const elemRect = elem.getBoundingClientRect(),
        windowHeight = window.innerHeight || document.body.clientHeight;
    if (elemRect.top < windowHeight) {
        return true;
    }
    return false;
}
