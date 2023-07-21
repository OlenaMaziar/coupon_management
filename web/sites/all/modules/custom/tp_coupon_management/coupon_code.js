
(function ($) {
  $(document).ready(function () {
    $("#edit-generate-coupon-code").click( function () {
      let btn = document.getElementById('edit-generate-coupon-code');
      btn.removeAttribute('type');
      btn.setAttribute('type', 'button');
      $('#edit-coupon-code:text').val(makeid(7));
    });
  });
})(jQuery);

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
