// Window load event used just in case window height is dependant upon images
$(window).bind("load", function() {

    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");

    positionFooter();

    function positionFooter() {

        footerHeight = $footer.height();
        footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";

        if (($(document.body).height() + footerHeight) < $(window).height()) {
            //
            $footer.css({
                position: "absolute"
            }).animate({
                top: footerTop
            })
        } else {
            $footer.css({
                position: "static"
            })
        }

    }

    $(window)
        .scroll(positionFooter)
        .resize(positionFooter)

});

jQuery(document).ready(function() {

    (function($, window, document, undefined) {
        'use strict';

        // init cubeportfolio
        $('#js-grid-mosaic-flat').cubeportfolio({
            filters: '#js-filters-mosaic-flat',
            loadMore: '#js-loadMore-mosaic-flat',
            loadMoreAction: 'click',
            layoutMode: 'mosaic',
            sortToPreventGaps: true,
            displayType: 'fadeIn',
            mediaQueries: [{
                width: 1500,
                cols: 6
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 800,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOutTop',
            gapHorizontal: 15,
            gapVertical: 15,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayTypeSpeed: 3000,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
        });
    })(jQuery, window, document);

});
