jQuery(window).scroll(count);
function count() {
  var top = jQuery('.counter-items .item').offset().top,
  outerHeight = jQuery('.counter-items .item').outerHeight(),
  height = jQuery(window).height();
  if (jQuery(window).scrollTop() > top+outerHeight-height) {
    jQuery(window).off("scroll", count);
    jQuery('.counter-items .item h3').each(function () {
      var $this = jQuery(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        },
        complete: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
  }
}