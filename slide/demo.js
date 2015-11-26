//課題１
/*
 サムネイルの上にマウスをのっけると、メインの画像が切り替わります。
*/
$(function(){
   var $main = $(".main");
   $("ul.thumbnail img").mouseover(function(){
       $main.attr("src", $(this).attr("src"));
   }); 
});

//課題２
/*
 左右矢印ボタンで、写真がスライドします。
*/
$(function(){




});
