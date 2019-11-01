/* ---------------------------------------------- /*
         * Transparent navbar brand
         /* ---------------------------------------------- */

         function navbarAnimation(navbar, homeSection, navHeight) {
            var topScroll = $(window).scrollTop();
            if (navbar.length > 0 && homeSection.length > 0) {
                if(topScroll >= navHeight) {
                    navbar-custom.removeClass('brand-color');
                    navbar-brand.removeClass('brand-color');
                } else {
                    navbar-custom.addClass('brand-color');
                    navbar-brand.addClass('brand-color');
                }
            }
        }