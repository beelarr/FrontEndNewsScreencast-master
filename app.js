//______________________________________________________

//                  DOCUMENT READY

//______________________________________________________

$(doecument).ready(function) {
  $('.js-like').on('click', function(event) {
    event.preventDefault();

    $(this).text('Liked!')
    .closest('.news-item')
    .addClass('is-liked');
  });

  $('.js-add-link').on('click', function(event) {
    event.preventDefault();

    $('.js-form').toggleClass('is-visible');

  });

/______________________________________________________

//                  MODAL

//______________________________________________________

$('.js-show-modal').on('click', function(event) {
  event.preventDefault();

  $('.js-modal').addClass('is-visible');
  $('.js-modal-overlay').addClass('is-visible');

  });
  
$('.js-modal-overlay').on('click', function(event) {
  event.preventDefault()
  $('.js-modal').removeClass('is-visible');
  $('.js-modal-overlay').removeClass('is-visible');
  });
});
