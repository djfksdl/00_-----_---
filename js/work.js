$(function () {
	// card 눌렀을때 big카드 나오게
	var tabAnchor = $('.card'), 
		tabPanel = $('.big-card');
		let cardIndex = 0
		tabAnchor.on('click',function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			console.log($(this).siblings())
			// tabAnchor.find('a').removeClass('active');
			$(this).siblings().removeClass('active');
			// $(this).find('a').addClass('active');
			
			// 메뉴 클릭했을때 클릭히얼 사라짐
			cardIndex = $(this).index();
			tabPanel.hide();
			if($(this).hasClass('active')){
				tabPanel.eq(cardIndex).show();
				$('.bounce_txt').fadeOut();
				$('.btn-wrap').hide();
			}else{
				tabPanel.eq(cardIndex).hide();
				$('.bounce_txt').fadeIn();
			}	
			
			// tabPanel.eq(cardIndex).hide();

			// $('.bounce_txt').fadeToggle();
			// $('.bounce_txt').fadeOut();
			
	});
	// tabAnchor.eq(0).trigger('click');	
	tabPanel.hide();
	tabAnchor.removeClass('active');

	// process 버튼 눌렀을때 화면 줄이고 나타내기
	var prcButton = $('.prc');
	prcButton.click(function(){
		$('.wrap').toggleClass('on')
		$(".header-wrap").toggleClass("on")
		tabPanel.fadeOut();
		
		// pop-up
		// let i=$('.big-card').index(); 이건 안되는거임. 인덱스가 안잡히는 구조
		// let i=$(this).index();
		// console.log(i)
		$('.window').fadeIn();
		$('.window-content').slideDown();
		$('.window-content img').attr('src',work_img_content[cardIndex])
		$('html, body').css('overflow','hidden')
		if($('.wrap').hasClass('on')){
			// tabAnchor.off('active')
			$('.btn-wrap').show();
		}else{
			// tabAnchor.on('active')
			$('.btn-wrap').hide();
		}
		tabAnchor.css('pointer-events','none')
		// tabAnchor.find('a').css('pointer-events','auto')
	})
	const work_img_content = [
		"images/process_logo.jpg",
		"images/process_package.jpg",
		"images/process_lush.png",        
		"images/process_crocs.jpg",
		"images/process_apma.png",
		"images/process_app.jpg",
		"https://via.placeholder.com/1200x3000/f49",
	]	


$(".window, .window-content i").click(function(){	
	console.log(cardIndex)
	$(".window").fadeOut()
	$(".window-content").slideUp()
	$(".wrap").toggleClass('on')
	$(".header-wrap").toggleClass("on")
	tabPanel.eq(cardIndex).show();
	tabAnchor.css('pointer-events','auto')
	$(".window-content").scrollTop(0)
	
})
let close = parseInt($('.window-content i').css('top'))
// console.log(close)
$('.window-content').scroll(function(){
	$('.window-content i').css('top', close+$('.window-content').scrollTop()+"px")
})
});

