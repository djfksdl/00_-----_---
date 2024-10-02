$(document).ready(function(){
    function skill(id,percent){
        let bar = new ProgressBar.Circle(id,{
            // Line을 Circle,SemiCircle로 바꿔도됨
            strokeWidth: 15,
            trailWidth: 1,
            // 기본 회색 바 높이
            color:"#fbc226",
            duration: 2400,
            easing: "easeInOut",
            step: function(state, line){
                line.setText(Math.round(line.value() * 100)+"%")
            }
        })
        bar.animate(percent)
    }
    skill("#html",0.9);
    skill("#css",0.85);
    skill("#js",0.75);
    skill("#ps",0.8);
    skill("#ai",0.8);

    // 보라색 박스 타이핑효과
    new Typed('#typed1', {
        stringsElement: '#typed',
        typeSpeed:60,
      });

    // 컨택트 눌렀을때 슬라이드 효과0306
    // $(".rotate").on('click',function(){
    //     $(".cardRotate").addClass("backRotate").removeClass("cardRotate");
    //   $(this).addClass("cardRotate").removeClass("backRotate");
    // });

    // 클릭시 카드 회전
//     var card = document.querySelector('.rotate');
//     card.addEventListener('click', function (e) {
//    var target =  e.target.parentNode
//     target.classList.toggle('active')
// })
    $('.rotatelink').on('click',function(){
        $('.rotate ,.rotatelink').toggleClass("active");
    });
})