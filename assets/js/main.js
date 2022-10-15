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
$(".bg-op").on('click', function(e) {
    $(this).toggleClass('active');
});
$(".reply-comment-actions").on('click', function(e) {
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
$(".img-product").mousemove(function(event) {
    $('.hover-block').css("display", "block");
    $('.hover-block').css("left", event.clientX + 15 + "px");
    $('.hover-block').css("top", event.clientY - 100 + "px");
});

$(".img-product").mouseout(function(event) {
    $('.hover-block').css("display", "none");
});
// 
var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');


if (upperSlider || null && lowerSlider || null) {
    upperVal = parseInt(upperSlider.value);
    lowerVal = parseInt(lowerSlider.value);

    upperSlider.oninput = function() {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;

            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
    };


    lowerSlider.oninput = function() {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;

            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }

        }
    };
}


// 
$(window).scroll(function() {
    if (this.scrollY > 85) {

        $(".header_mobile").addClass('active');
        $(".content").addClass('active');

    } else {
        $(".header_mobile").removeClass('active');
        $(".content").removeClass('active');
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

$('.related-products-slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
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
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        }
    ],
});
$('.viewed-products-slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
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
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
});

$('.small-items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 3500,
    dots: false,
    responsive: [{
            breakpoint: 1366,
            settings: {
                slidesToShow: 4,
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
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
});


var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
if (tabEl || null) {

    tabEl.addEventListener('hidden.bs.tab', function(event) {
        $('.viewed-products-slide').slick('refresh');
        event.target;
        event.relatedTarget;
    });
}