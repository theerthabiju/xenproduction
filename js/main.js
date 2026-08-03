/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Offcanvas Menu Js
04. Search Overlay Js
05. Sticky header Js
06. Custom Cursor Js
07. Service Card Carrousel Js
08. Pricing toggle Js
09. Marquee Scroll Js
10. Image Gallery Marquee Scroll Js
11. Generation Feature Section Animation
12. Testimonial Carousel Js
13. FAQ Toggle Js
14. About Us Home 2 Js 
15. Video Popup Home 2 Js 
16. Feature List Falling Animation JS 
17. Home 2 Blog and News JS 
18. Form Message Js
19. Home 3 Hero Slider Js
****************************************************/


(function ($) {
    "use strict";
    //////////////////////////////////////////////////////
    // 01. Preloader Js
    $(window).on('load', function () {
        const $preloader = $('#preloader');
        $preloader.addClass('hidden');
        setTimeout(function () {
            $preloader.css('display', 'none');
        }, 500);
    });


    ////////////////////////////////////////////////////
    // 02. Mobile menu Js
    var stMenuWrap = $('.mobile-menu-active > ul').clone();
    var stSideMenu = $('.offcanvas-menu nav');
    stSideMenu.append(stMenuWrap);
    if ($(stSideMenu).find('.submenu, .mega-menu').length != 0) {
        $(stSideMenu).find('.submenu, .mega-menu').parent().append(
            '<button class="menu-close" aria-label="Close menu"><i class="ri-arrow-right-circle-line"></i></i></button>'
        );
    }
    var sideMenuList = $('.offcanvas-menu nav > ul > li button.menu-close, .offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.submenu, .mega-menu').slideDown();
        } else {
            $(this).siblings('.submenu, .mega-menu').slideUp();
            $(this).parent().removeClass('active');
        }
    });

    ////////////////////////////////////////////////////
    // 03. Offcanvas Menu Js
    $(".header-offcanvas-menu").on("click", function () {
        $(".offcanvas-area").addClass("opened");
        $(".offcanvas-overlay").addClass("opened");
    });
    $(".offcanvas-close-btn").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".offcanvas-overlay").removeClass("opened");
    });
    $(".offcanvas-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".offcanvas-overlay").removeClass("opened");
    });

    ////////////////////////////////////////////////////
    // 04. Search Overlay Js
    function initializeSearchOverlay() {
        const searchIcon = $(".search-icon");
        const searchOverlay = $(".search-overlay");
        const closeSearch = $(".close-search");

        // Show overlay
        searchIcon.on("click", function (e) {
            e.preventDefault();
            searchOverlay.css("display", "flex");
        });

        // Close on click of X
        closeSearch.on("click", function (e) {
            e.preventDefault();
            searchOverlay.css("display", "none");
        });

        // Optional: Click outside the form to close
        $(window).on("click", function (event) {
            if ($(event.target).is(searchOverlay)) {
                searchOverlay.css("display", "none");
            }
        });
    }
    initializeSearchOverlay();

    //////////////////////////////////////////////////////
    // 05. Sticky header Js
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var header = $('.header-main');

        if (scroll > 200) {
            header.addClass('sticky-header');
        } else {
            header.removeClass('sticky-header');
        }
    });

    //////////////////////////////////////////////////////
    // 06. Custom Cursor Js
    document.onmousemove = function (e) {
        document.body.style.setProperty("--x", e.clientX + "px");
        document.body.style.setProperty("--y", e.clientY + "px");
    };

    const generateElements = document.querySelectorAll(".hero-banner");
    generateElements.forEach(elm => {
        elm.addEventListener("mouseover", function () {
            document.body.classList.add("button-hovered");
        });
        elm.addEventListener("mouseleave", function () {
            document.body.classList.remove("button-hovered");
        });
    });

    //////////////////////////////////////////////////////
    // 07. Service Card Carrousel Js
    const multiplier = {
        translate: .1,
        rotate: .005
    }
    new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 42,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        duration: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    })
    function calculateWheel() {
        const slides = document.querySelectorAll('.single')
        slides.forEach((slide, i) => {
            const rect = slide.getBoundingClientRect()
            const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
            let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

            if (ty < 0) {
                ty = 0
            }
            const transformOrigin = r < 0 ? 'left top' : 'right top'
            slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
            slide.style.transformOrigin = transformOrigin
            slide.style.zIndex = 100 - Math.abs(i - slides.length / 2)
        })
    }
    function raf() {
        requestAnimationFrame(raf)
        calculateWheel()
    }
    raf();

    ////////////////////////////////////////////////////
    // 08. Pricing toggle Js
    const toggle = $("#billing-toggle")[0];
    if (toggle) {
        toggle.addEventListener('change', function () {
            const monthlyContainer = $(".monthly-container")[0];
            const yearlyContainer = $(".yearly-container")[0];

            if (this.checked) {
                $(monthlyContainer).hide();
                $(yearlyContainer).show();
            } else {
                $(monthlyContainer).show();
                $(yearlyContainer).hide();
            }
        });
    }
    if (toggle) {
        const event = new Event('change');
        toggle.dispatchEvent(event);
    }

    ////////////////////////////////////////////////////
    // 09. Marquee Scroll Js
    var elements = $('ul.marquee-item-list li').length;
    for (var i = 0; i < elements; i++) {
        $(".marquee-item-list").clone().prependTo(".marquee-block");
    };

    ////////////////////////////////////////////////////
    // 10. Image Gallery Marquee Scroll Js
    const $container = $(".gallery-marquee-inner");

    // Apply random rotation + height
    function applyRandomStyles($items) {
        $items.each(function () {
            const angle = (Math.random() * 12) - 6; // –6 to +6 deg
            const randomHeight = Math.floor(Math.random() * (600 - 460 + 1)) + 460;

            $(this).css({
                transform: `rotate(${angle}deg)`,
                width: "360px",
                height: randomHeight + "px",
                zIndex: 200
            }).attr("data-angle", angle);
        });
    }

    const $originalItems = $container.find(".ratio");
    applyRandomStyles($originalItems);

    // Clone marquee items
    const $clones = $container.clone(true);
    $container.append($clones);

    const $clonedItems = $clones.find(".ratio");
    applyRandomStyles($clonedItems);

    // Marquee scroll
    let scrollAmount = 0;
    let isPaused = false;

    function marqueeScroll() {
        if (!$container.length) return;
        if (!isPaused) {
            scrollAmount += 1;
            $container.css("transform", `translateX(-${scrollAmount}px)`);

            if (scrollAmount >= $container[0].scrollWidth / 2) {
                scrollAmount = 0;
            }
        }
        requestAnimationFrame(marqueeScroll);
    }
    marqueeScroll();

    // Hover straighten + restore
    $originalItems.add($clonedItems).on({
        mouseenter: function () {
            $(this).css({
                transform: "rotate(0deg)",
                zIndex: 200
            });
        },
        mouseleave: function () {
            $(this).css({
                transform: `rotate(${$(this).data("angle")}deg)`,
                zIndex: 100
            });
        }
    });

    // Pause marquee on hover
    $(".gallery-marquee-wrapper").on({
        mouseenter: function () {
            isPaused = true;
        },
        mouseleave: function () {
            isPaused = false;
        }
    });

    ////////////////////////////////////////////////////
    // 11. Generation Feature Section Animation
    gsap.registerPlugin(MotionPathPlugin);

    const follower = document.querySelector(".follower");
    if (follower) {
        gsap.to(".follower", {
            duration: 6,
            repeat: -1,
            ease: "none",
            motionPath: {
                path: "#motionPath",
                align: "#motionPath",
                offsetY: 0,
                offsetX: 0,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: 0,
                end: 1
            }
        });
    }
    const follower1 = document.querySelector(".follower1");
    if (follower1) {
        gsap.to(".follower1", {
            duration: 5,
            repeat: -1,
            ease: "none",
            motionPath: {
                path: "#motionPath1",
                align: "#motionPath1",
                offsetY: 0,
                offsetX: 0,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: 0,
                end: 1
            }
        });
    }
    const follower2 = document.querySelector(".follower2");
    if (follower2) {
        gsap.to(".follower2", {
            duration: 5,
            repeat: -1,
            ease: "none",
            motionPath: {
                path: "#motionPath2",
                align: "#motionPath2",
                offsetY: 0,
                offsetX: 0,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: 0,
                end: 1
            }
        });
    }

    const follower3 = document.querySelector(".follower3");
    if (follower3) {
        gsap.to(".follower3", {
            duration: 6,
            repeat: -1,
            ease: "none",
            motionPath: {
                path: "#motionPath3",
                align: "#motionPath3",
                offsetY: 0,
                offsetX: 0,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: 0,
                end: 1
            }
        });
    }

    //////////////////////////////////////////////////////
    // 12. Testimonial Carousel Js
    const testimonialCarousel = new Swiper('.testimonial-carrousel', {
        loop: true,
        spaceBetween: 150,
        slidesPerView: 1,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        pagination: {
            el: '.testimonial-swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        on: {
            init: function () {
                updateSlideCounter(this);
            },
            slideChange: function () {
                updateSlideCounter(this);
            }
        }
    });

    function updateSlideCounter(swiper) {
        const currentSlide = swiper.realIndex + 1;
        // Use slides.filter to get only original slides (not duplicates)
        const totalSlides = swiper.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate')).length;

        // Format numbers with leading zeros
        const currentFormatted = String(currentSlide).padStart(2, '0');
        const totalFormatted = String(totalSlides).padStart(2, '0');

        // Update prev button
        $('.prev-btn').html(`<i class="ri-arrow-left-s-line"></i> <span>${currentFormatted}</span>`);

        // Update next button
        $('.next-btn').html(`<span>${totalFormatted}</span> <i class="ri-arrow-right-s-line"></i>`);
    }

    ////////////////////////////////////////////////////
    // 13. FAQ Toggle Js 
    $('.single-qa-item .question').on('click', function () {
        const $clickedItem = $(this).closest('.single-qa-item');
        const $allItems = $('.single-qa-item');

        if ($clickedItem.hasClass('single-qa-item-active')) {
            $clickedItem.removeClass('single-qa-item-active');
            $clickedItem.find('.question').removeClass('question-active');
            $clickedItem.find('.answer-active').removeClass('answer-active').addClass('answer').slideUp(300);
            return;
        }

        $allItems.each(function () {
            $(this).removeClass('single-qa-item-active');
            $(this).find('.question').removeClass('question-active');
            $(this).find('.answer-active').removeClass('answer-active').addClass('answer').slideUp(300);
        });

        $clickedItem.addClass('single-qa-item-active');
        $clickedItem.find('.question').addClass('question-active');
        $clickedItem.find('.answer').removeClass('answer').addClass('answer-active').slideDown(300);
    });

    ////////////////////////////////////////////////////
    // 14. About Us Home 2 Js 
    $(".about-us-area h2").addClass("revealed");

    // About Us Counter Js
    const counters = document.querySelectorAll(".counter-wrapper");
    const easeOutQuad = (t) => t * (2 - t);
    function animateCounter(el, target) {
        let start = 0;
        let duration = 4000;
        let startTime = null;

        function update(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = Math.min((timestamp - startTime) / duration, 1);
            let eased = easeOutQuad(progress);

            el.innerText = Math.floor(eased * target);

            if (progress < 1) requestAnimationFrame(update);
            else el.innerText = target;
        }

        requestAnimationFrame(update);
    }
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const wrapper = entry.target;
                    const numberEl = wrapper.querySelector(".counter-number");
                    const targetValue = parseInt(wrapper.dataset.target);

                    animateCounter(numberEl, targetValue);

                    observer.unobserve(wrapper);
                }
            });
        },
        { threshold: 0.4 }
    );
    counters.forEach(counter => observer.observe(counter));

    ////////////////////////////////////////////////////
    // 15. Video Popup Home 2 Js 
    let baseVideoURL = '';

    $('.video-trigger').on('click', function (e) {
        e.preventDefault();

        baseVideoURL = $(this).data('video');
        $('#video').attr('src', baseVideoURL + "?autoplay=1");
        $('#lightbox').fadeIn(300);
    });

    $('#close-btn').on('click', function () {
        $('#lightbox').fadeOut(300);
        $('#video').attr('src', '');
    });
    $(document).on('keydown', function (e) {
        if (e.key === "Escape") {
            $('#lightbox').fadeOut(300);
            $('#video').attr('src', '');
        }
    });


    ////////////////////////////////////////////////////
    // 16. Generation Feature Home 2 Js 
    const steps = document.querySelectorAll('.step');
    const sections = document.querySelectorAll('.sticky-content');
    const main = document.getElementById('sticky-section-main');

    // Update active state on scroll
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelector('.step.active')?.classList.remove('active');
                document.querySelector(`.step[data-section="${id.slice(1)}"]`).classList.add('active');

                // Add active class for animations
                sections.forEach(s => s.classList.remove('active'));
                entry.target.classList.add('active');
            }
        });
    };

    const stickyObserver = new IntersectionObserver(callback, {
        threshold: 0.5
    });

    sections.forEach(section => stickyObserver.observe(section));

    // Click on number to scroll
    steps.forEach(step => {
        step.addEventListener('click', () => {
            const sectionId = step.getAttribute('data-section');
            document.getElementById(`s${sectionId}`).scrollIntoView({ behavior: 'smooth' });
        });
    });


    //////////////////////////////////////////////////////
    // 17. Working Process Carousel Js
    const wpCarousel = new Swiper('.wp-carrousel', {
        loop: false,
        spaceBetween: 24,
        slidesPerView: 1,
        speed: 800,
        navigation: {
            nextEl: '.wp-card-next-btn',
            prevEl: '.wp-card-prev-btn',
        },
        pagination: {
            el: '.wp-card-pagination',
            clickable: true,
            type: 'bullets',
        },
        on: {
            init: function (swiper) {
                const totalSlides = swiper.slides.length;
                const bulletWidth = `calc(100% / ${totalSlides})`;
                const workingProcessArea = document.querySelector('.working-process-area');
                if (workingProcessArea) {
                    workingProcessArea.style.setProperty('--bullet-width', bulletWidth);
                }
                updateBulletState(swiper);
            },
            slideChange: function (swiper) {
                updateBulletState(swiper);
            }
        }
    });

    function updateBulletState(swiper) {
        const bullets = document.querySelectorAll('.wp-card-pagination .swiper-pagination-bullet');
        const activeIndex = swiper.realIndex;
        const pagination = document.querySelector('.wp-card-pagination');

        const totalBullets = bullets.length;
        const fillPercentage = ((activeIndex + 1) / totalBullets) * 100;

        if (pagination) {
            pagination.style.setProperty('--fill-percentage', `${fillPercentage}%`);
        }

        bullets.forEach((bullet, index) => {
            if (index === activeIndex) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });
    }

    //////////////////////////////////////////////////////
    // 18. Testimonial Home 2 Carousel Js
    const testimonial2Slider = new Swiper('.testimonial-2-carrousel', {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 3,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        },
    });

    ////////////////////////////////////////////////////
    // 16. Feature List Falling Animation JS 
    const observerItem = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const $items = $(entry.target).find('.feature-list');

                $items.each(function (index) {
                    const item = this;
                    setTimeout(() => {
                        $(item).addClass('animate-in');
                    }, index * 300);
                });

                observerItem.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    const $wrapper = $('.feature-list-wrapper');
    if ($wrapper.length) {
        observerItem.observe($wrapper[0]);
    }

    ////////////////////////////////////////////////////
    // 17. Home 2 Blog and News JS 
    const $items = $('.blog-card-item');
    // Hover on item
    $items.on('mouseenter', function () {
        $items.removeClass('active');
        $(this).addClass('active');
    });

    // Mouse leave wrapper → activate first item
    $('.blog-card-wrapper').on('mouseleave', function () {
        $items.removeClass('active');
        $items.first().addClass('active');
    });

    ////////////////////////////////////////////////////
    // 18. Form Message Js
    $('#contactForm').submit(function (e) {
        e.preventDefault();

        const formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: formData,
            success: function (response) {
                $('#formMessage').removeClass('error').addClass('success').html(response);
                $('#contactForm')[0].reset();
            },
            error: function () {
                $('#formMessage').removeClass('success').addClass('error').html('Something went wrong. Please try again.');
            }
        });
    });

    ////////////////////////////////////////////////////
    // 19. Home 3 Hero Slider Js
    let $sliderItems = $('.single-slider');
    let $thumbItems = $('.single-thumb');
    let countItem = $sliderItems.length;
    let itemActive = 0;
    let refreshInterval;

    function showSlider() {
        $('.single-slider.active').removeClass('active');
        $('.single-thumb.active').removeClass('active');

        $sliderItems.eq(itemActive).addClass('active');
        $thumbItems.eq(itemActive).addClass('active');

        const bgImage = $sliderItems.eq(itemActive).data('background');
        if (bgImage) {
            $sliderItems.eq(itemActive).css('background-image', `url(${bgImage})`);
        }

        setPositionThumbnail();

        clearInterval(refreshInterval);
        refreshInterval = setInterval(function () {
            nextSlide();
        }, 5000);
    }

    function nextSlide() {
        itemActive = itemActive + 1;
        if (itemActive >= countItem) {
            itemActive = 0;
        }
        showSlider();
    }

    function prevSlide() {
        itemActive = itemActive - 1;
        if (itemActive < 0) {
            itemActive = countItem - 1;
        }
        showSlider();
    }

    function setPositionThumbnail() {
        let $thumbnailActive = $('.single-thumb.active');
        if ($thumbnailActive.length) {
            let thumbRect = $thumbnailActive[0].getBoundingClientRect();
            let $container = $('.hero-thumb-slider');
            let containerRect = $container[0].getBoundingClientRect();

            if (thumbRect.left < containerRect.left || thumbRect.right > containerRect.right) {
                $thumbnailActive[0].scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
    }

    $thumbItems.on('click', function () {
        itemActive = $(this).index();
        showSlider();
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    $('.hero-area').on('mouseenter', function () {
        clearInterval(refreshInterval);
    }).on('mouseleave', function () {
        refreshInterval = setInterval(function () {
            nextSlide();
        }, 5000);
    });

    showSlider();

    ////////////////////////////////////////////////////
    // 20. Home 3 Counter
    const statsCounters = document.querySelectorAll('.stats-section-counter');
    const easeOutQuad1 = (t) => t * (2 - t);
    function animateStat(el, target) {
        let startValue = 0;
        let startTime = null;
        const duration = 2000;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = easeOutQuad1(progress);
            el.textContent = Math.floor(startValue + eased * (target - startValue));
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(step);
    }

    if (statsCounters.length) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target, 10) || 0;
                    animateStat(el, target);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.4 });

        statsCounters.forEach((counter) => statsObserver.observe(counter));
    }

})(jQuery);

