"use strict";$(document).ready(function(){$(".left-image-carousel").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,prevArrow:$(".leftRs"),nextArrow:$(".rightRs")}),$(".right-image-carousel").slick({slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,prevArrow:$(".right-image-arrow-left"),nextArrow:$(".right-image-arrow-right")}),$(".slick-work-carousel-wrap").slick({slidesToShow:3,slidesToScroll:3,autoplay:!1,autoplaySpeed:2e3,prevArrow:$(".work-arrow-left"),nextArrow:$(".work-arrow-right"),dots:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:765,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slick-services-carousel-wrap").slick({slidesToShow:4,slidesToScroll:2,autoplay:!0,autoplaySpeed:2e3,prevArrow:$(".services-arrow-left"),nextArrow:$(".services-arrow-right"),dots:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:765,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slick-services-carousel-two-wrap").slick({centerMode:!0,centerPadding:"60px",slidesToShow:3,autoplay:!0,autoplaySpeed:2e3,prevArrow:$(".services-two-arrow-left"),nextArrow:$(".services-two-arrow-right"),dots:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,infinite:!0,dots:!1}},{breakpoint:765,settings:{slidesToShow:1}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".slick-testimonial-carousel-wrap").slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,prevArrow:$(".testimonial-arrow-left"),nextArrow:$(".testimonial-arrow-right"),dots:!1,responsive:[{breakpoint:998,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:765,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})});