$(document).ready(function () {
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 50000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  $.ajax({
    type: "GET",
    url: "https://api.covid19api.com/summary",
    header: { "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864" },
    data: "data",
    dataType: "JSON",
    success: function (response) {
      let global = response.Global;
      console.log(global);
      $("#total").text(global.TotalConfirmed).addClass("count");
      $("#deaths").text(global.TotalDeaths).addClass("count");
      $("#recovered").text(global.TotalRecovered).addClass("count");
    },
  });
});
