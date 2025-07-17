$(document).ready(function () {
  var $card = $(".js-fancy-min a");
  var $cardBig = $(".js-fancy-big");

  var $cardJson = [];

  $card.each(function (i, value) {
    $cardJson[i] = {
      src: value.dataset.big,
      opts: {
        thumb: value.dataset.big,
      },
    };
  });

  $cardBig.on("click", function (evt) {
    $.fancybox.open($cardJson, {
      loop: true,
      imageScale: true,
      index: $(this).attr("data-index") + "",
      thumbs: {
        autoStart: true,
      },
      buttons: ["slideShow", "fullScreen", "thumbs", "close"],
    });
  });
});
