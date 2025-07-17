jQuery( function() {
  jQuery(document).ready(function () {
    if (jQuery( ".js-slider-range" )) {
      jQuery( ".js-slider-range" ).each(function (i,item) {
        let min = jQuery(item).data("min");
        let max = jQuery(item).data("max");
        let start = jQuery(item).data("start");
        let end = jQuery(item).data("end");
        jQuery(item).slider({
          range: true,
          min: min,
          max: max,
          values: [ start, end ],
          slide: function( event, ui ) {

            jQuery(".js-slider-range .ui-slider-handle").first().children().text(ui.values[ 0 ]);
            jQuery(".js-slider-range .ui-slider-handle").last().children().text(ui.values[ 1 ]);
          }
        });

        jQuery(".js-slider-range .ui-slider-handle").append(jQuery("<span></span>"))
        jQuery(".js-slider-range .ui-slider-handle").first().children().text(jQuery(item).slider( "values", 0 ));
        jQuery(".js-slider-range .ui-slider-handle").last().children().text(jQuery(item).slider( "values", 1 ));
      });
    }
  });
} );
