// var eye = function(selector){
//     var eyes=document.querySelector(selector),
//     whiteEyes=eyes.querySelector('.eyespase'),
//     eyeSpace=eyes.getBoundingClientRect();
//     var eyeAction=function(mouseX,mouseY){
//         var radin=Math.atan2(mouseY-(eyeSpace.y+eyeSpace.height*0.5),mouseX-(eyeSpace.x+eyeSpace.width*0.5));
//         whiteEyes.style.transform='rotate('+(180*radin/Math.PI-90)+'deg)';
//     };
//     return{eyeAction:eyeAction};};
//     var whiteSlimeEye = eye('.w_eyes');
//     // var 오른눈 =eye('.눈-2');
//     window.addEventListener('mousemove',function(e){
//         whiteSlimeEye.eyeAction(e.pageX,e.pageY);
//         // 오른눈.eyeAction(e.pageX,e.pageY);
//     });
  
    
    