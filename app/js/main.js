$(document).ready(function () {

  $('#mob_btn').click(function (e) {
    e.preventDefault();
    $('.nav_mobile').toggleClass('active');
    $('.header').css({opacity: '1', position: 'relative'});
  });

  $('#exit_btn').click(function (e) {
    e.preventDefault();
    $('.nav_mobile').removeClass('active');
    $('.header').css({opacity: '0.8', position: 'sticky'});
  });


  $('.menu_list .menu_elem').click(function () {
      $(this).parent().find('.menu_elem.active').removeClass('active');
      $(this).addClass('active');
  });

  $(function(){
    $('nav .menu_list .menu_elem a').filter(function(){return this.href===location.href}).parent().addClass('active').siblings().removeClass('active');
    $('.nav_mobile .menu_mob_list .menu_elem a').filter(function(){return this.href===location.href}).parent().addClass('active').siblings().removeClass('active');
    $('nav .menu_list .menu_elem a').click(function(){
      $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('.nav_mobile .menu_mob_list .menu_elem a').click(function(){
      $(this).parent().addClass('active').siblings().removeClass('active');
    })
  });

  $('.toggle').click(function(e) {
    e.preventDefault();

    let $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(650);
    } else {
      $this.parent().parent().find('div .inner').removeClass('show');
      $this.parent().parent().find('div .inner').slideUp(650);
      $this.next().toggleClass('show');
      $this.next().slideToggle(650);
    }
  });

  $('.gallery_image').click(function (e) {
    e.preventDefault();
    let image_id = $(this).attr('data-image');

    $('.fullSize_image').removeClass('active');
    $('#'+image_id).addClass('active');
    $('.active_gallery_block').addClass('active');
    $('body').css('overflow', 'hidden');
  });

  $('.miniGallery_block').click(function (e) {
    e.preventDefault();
    let img_id = $(this).attr('data-img');
    $('.fullSize_image').removeClass('active');
    $('#'+img_id).addClass('active');
    $('.active_gallery_block').addClass('active');
    $('body').css('overflow', 'hidden');
  });

$('.active_gallery_block').click(function () {
  $('.fullSize_image').removeClass('active');
  $('.active_gallery_block').removeClass('active');
  $('body').css('overflow-y', 'scroll');
});

$('.order_room').click(function () {
  $('.modal_room_order').fadeIn(200);
  $('body').css('overflow', 'hidden');
});

$('.close, .modal_bg').click(function () {
  $('.modal_room_order').fadeOut(500);
  $('body').css('overflow-y', 'scroll');
});


});