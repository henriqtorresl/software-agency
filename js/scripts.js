// dessa forma eu espero todo o documento ser carregado para executar o script..
$(document).ready(() => {

    // Progress bar (lib de js)
    let containerA = document.getElementById('circleA');

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#65DAF9',
        strokeWidth: 8,     // largura do circulo
        duration: 1400,     // duração da animação  
        from: { color: '#AAA' }, // cor inicial do circulo
        to: { color: '#65DAF9' },   // cor final

        step: (state, circle) => {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60); // O numero 60 é o numero final que sera mostrado

            circle.setText(value);
        }
    });

    let containerB = document.getElementById('circleB');

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: (state, circle) => {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById('circleC');

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: (state, circle) => {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById('circleD');

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: (state, circle) => {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value);
        }
    });

    // logica para iniciar o loader quando o usuário chega no elemento:
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll((e) => {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {

            // disparando as animações:
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;  // para que a animação aconteça apenas uma vez
        }
    });

    // Parallax (lib do js)
    setTimeout(() => {

        $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });

        $('#apply-area').parallax({ imageSrc: 'img/pattern.png' });

    }, 250);

    // Filtro portfólio  -> JQuery
    $('.filter-btn').on('click', function () {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'dsg-btn') {
            eachBoxes('dsg', boxes);
        } else if (type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if (type == 'seo-btn') {
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {

        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }


    // scroll para seções
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let serviceSection = $('#services-area');
    let teamSection = $('#team-area');
    let portifolioSection = $('#portifolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        if (btnId == 'home-menu') {
            scrollTo = bannerSection;
        } else if (btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if (btnId == 'services-menu') {
            scrollTo = serviceSection;
        } else if (btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if (btnId == 'portfolio-menu') {
            scrollTo = portifolioSection;
        } else if (btnId == 'contact-menu') {
            scrollTo = contactSection;
        } 

        // animação do scroll
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });

});