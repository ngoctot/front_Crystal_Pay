jQuery(document).ready(function($){
	$('.question').click(function(){
		event.preventDefault();
		$('.sub_menu').toggleClass('show_sub');
	});
	$('.icon_acount').click(function(){
		$('.button_acount ').toggleClass('show_login');
	});
	$(document).on('click','.thuphong',function(){
		$(this).parent('.gt_course').find('.content').toggleClass('toggle');
		$(this).parent('.teacher_information').find('.described').toggleClass('toggle');
		$(this).parent('.list_course').find('.item_course').toggleClass('list_course_toggle');



		$(this).parent('.gt_course').find('.phong').toggleClass('hide');
		$(this).parent('.teacher_information').find('.phong').toggleClass('hide');
		$(this).parent('.list_course').find('.phong').toggleClass('hide');

		$(this).parent('.gt_course').find('.thu').toggleClass('show');
		$(this).parent('.teacher_information').find('.thu').toggleClass('show');
		$(this).parent('.list_course').find('.thu').toggleClass('show');
	});
	$(document).on('click','.list_course .item_course .title_course',function(){
		$(this).parent('.item_course').find('ul.list').toggleClass('show');
	});
	$(document).on('click','.click_show_menu',function(){
		$('.single_course_link').toggleClass('show_list_menu');
	});
	$(document).on('click','.single_course_link.show_list_menu .row_Cristal_pay .menu_drop ul li i',function(){
		$(this).parent('li').find('.sub_menu').toggleClass('show');
	});
	var swiper = new Swiper('.slide_course .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiper_couser1 = new Swiper('.list_course1 .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next.next_list_course1',
        prevEl: '.swiper-button-prev.prev_list_course1',
      },
    });
    var swiper_couser2 = new Swiper('.list_course2 .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next.next_list_course2',
        prevEl: '.swiper-button-prev.prev_list_course2',
      },
    });
    var swiper_couser = new Swiper('.list_comment .swiper-container', {
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-next-list-comment',
        prevEl: '.swiper-button-prev.swiper-button-prev-list-comment',
      },
    });
     var swiper_couser = new Swiper('.list_teacher .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-next-list_teacher',
        prevEl: '.swiper-button-prev.swiper-button-prev-list_teacher',
      },
    });

     $(document).on('click','.content_page_profile .toolbar .list .item',function(){
          $('.active').removeClass('active');
          $(this).addClass('active');
          var rel= $(this).attr('rel');
           $('.content_page_profile .tab_toolbar .show_tab').removeClass('show_tab');
          $('.content_page_profile .tab_toolbar #'+rel).addClass('show_tab');
     });
});