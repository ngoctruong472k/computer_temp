// open search header
$(".search-icon").on('click', function(e) {
    e.preventDefault();
    $(".main").toggleClass('active');
});
$(".header-left").on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});
$(".btn-menu-bar").on('click', function(e) {
    e.preventDefault();
    $(".menu-bar").toggleClass('active');
});
$(".list-product-menu li>i").on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});

$(".mega-hotline").on({
    mouseenter: function() {
        $(this).find('.mega-sub').css("display", "block");
        $(".overlay").addClass('active');
    },
    mouseleave: function() {
        $(this).find('.mega-sub').css("display", "none");
        $(".overlay").removeClass('active');
    }
});

// 
$(window).scroll(function() {
    if (this.scrollY > 85) {

        $(".header_mobile").addClass('active');
    } else {
        $(".header_mobile").removeClass('active');
    }
});


// bang khach hang ca nhan
function openTabIndividual(evt, cityName) {
    console.log($(this));
    var i, tabcontent, tablinks;
    tabcontent = $(".individual-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".title-individual");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" hovered", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " hovered";
}
// bangr khach hang doanh nghiep
function openTabEnterprise(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = $(".enterprise-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".title-enterprise");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" hovered", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " hovered";
}
// bang ban hang 
function openTabSell(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = $(".sell");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".title-sell");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" hovered", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " hovered";
}

// slick carousel

$('.slide-top').slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    draggable: true,

});

$('.featured-cate .slide-product-featured').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    draggable: true,
});

$('.products .slide-product').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,

    autoplaySpeed: 4500,
    responsive: [{
            breakpoint: 1366,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ],
});

// $('.vouchers-code').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     dots: false,
//     draggable: true,
//     vertical: true,
//     autoplay: true,
//     verticalSwiping: true,
//     autoplaySpeed: 3500,


// });

// $('.slide-product-detail').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     vertical: true,
//     verticalSwiping: true,
//     infinite: true,
//     dots: true,
//     adaptiveHeight: true,
//     draggable: true,
//     responsive: [{
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             vertical: false,
//             horizontal: true,
//             verticalSwiping: false,
//             adaptiveHeight: false,
//             dots: false,
//         }
//     }],
// });