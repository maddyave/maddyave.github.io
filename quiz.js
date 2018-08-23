var playlist="";

$(document).ready(function(){
  //Hide all questions
  $('.questionForm').hide();
  $("#main div,#main h1").hide();


  //Show first question
  $('#intro').show();

$('#intro #submit').click(function(){
  $('.questionForm').hide();
  $('#q1').fadeIn(300);
  return false;
  });

$('#q1 #submit').click(function(){
  $('.questionForm').hide();
  $('#q2').fadeIn(300);
  return false;
  });

$('#q2 #submit').click(function(){
  $('.questionForm').hide();
  $('#q3').fadeIn(300);
  return false;
  });

$('#q3 #submit').click(function(){
  $('.questionForm').hide();
  $('#q4').fadeIn(300);
  return false;
  });

$('#q4 #submit').click(function(){
  $('.questionForm').hide();
  $('#q5 ').fadeIn(300);
  playlist=$('.questionForm').find('input[name="q4"]:checked').val();
  return false;
  });

$('#q5 #submit').click(function(){
  $(".questionForm").hide();
  $("#"+playlist).fadeIn(300);
  $("#main h1").fadeIn(300);
  $("footer").hide();
  return false;
  });


});
