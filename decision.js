$(function() {
  $('#fruit').clone().appendTo($('#form2'));
  $('#fruit').clone().appendTo($('#form3'));
});

function calc() {
  var price1 = parseInt($('#form1 #fruit option:selected').val());
  var price2 = parseInt($('#form2 #fruit option:selected').val());
  var price3 = parseInt($('#form3 #fruit option:selected').val());
  var price = price1 + price2 + price3;

  if (price < 150) {
    $('p').text("商品を選んで下さい");
  } else {
    $('p').text(price + "円です");
  }
};

//jqueryの書式 
//$():カッコ内を要求
//'#aaaaa':htmlのidを選択できる
//clone():$で要求した文字列を返す
//val():value値の文字列を返す カッコ内で指定可能

//parseIntで数値に変更