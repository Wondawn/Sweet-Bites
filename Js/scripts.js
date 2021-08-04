const responsive = {
    320:{
        items: 1
    },
    560:{
        items: 2
    },
    760:{
        items: 3
    },
    960:{
        items: 4
    }
}

$(document).ready(function() {

    $nav = $('nav');
    $toggleCollapse = $('.toggle-collapse');


    /** Click event on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


// owl-carousel for blog
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
});

});