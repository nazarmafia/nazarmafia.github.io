
$(function(){
  $('#my-contact-form-modal').submit(function(e){
	e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
	var formdata='name='+$('#nameM1').val()+'&tel='+$('#telM1').val()+'&message='+$('#messageM1').val()+'&user-city='+$('#user-city').val()+'&term='+$('#term').val();
	
	//запишем все данные формы в переменную data
	$.ajax({
	  url: 'php/sm.php',
	  data: formdata,
	  type: 'post',
	  cache: false,
	  success: function(respond){		
		$('#note').html(respond);
		$("#my-contact-form-modal").hide();
			setTimeout(function(){      			
				$("#my-contact-form-modal").show();			 
				jQuery("#my-contact-form-modal").trigger("reset");
				$('#note').html('');
			}, 5000); // 1000 - одна секунда
	  },			  
	  error: function(){
		alert('Произошла ошибка. Повторите попытку позже.');
	  }
	});
  });
});



$(function(){
  $('#my-contact-form').submit(function(e){
	e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
	var formdata='name='+$('#name').val()+'&tel='+$('#tel').val()+'&message='+$('#message').val()+'&user-city='+$('#user-city').val()+'&term='+$('#term').val();
	
	//запишем все данные формы в переменную data
	$.ajax({
	  url: 'php/sm.php',
	  data: formdata,
	  type: 'post',
	  success: function(respond){
		//$(window).load(function() {yaCounter44826031.reachGoal('sale15')});
		alert(respond);
	  },
	  error: function(){
		alert('Произошла ошибка. Повторите попытку позже.');
	  }
	});
  });
});

$(function(){
  $('#my-contact-form-2').submit(function(e){
	e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
	var formdata='name='+$('#name2').val()+'&tel='+$('#tel2').val()+'&message='+$('#message2').val()+'&year='+$('#year2').val()+'&summa='+$('#summa2').val()+'&mail='+$('#mail2').val()+'&user-city='+$('#user-city').val()+'&term='+$('#term').val();
	
	//запишем все данные формы в переменную data
	$.ajax({
	  url: 'php/sm2.php',
	  data: formdata,
	  type: 'post',
	  success: function(respond){
		alert(respond);
	  },
	  error: function(){
		alert('Произошла ошибка. Повторите попытку позже.');
	  }
	});
  });
});

$(function(){
  $('#my-contact-form-3').submit(function(e){
	e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
	var formdata='name='+$('#name3').val()+'&tel='+$('#tel3').val()+'&message='+$('#message3').val()+'&user-city='+$('#user-city').val()+'&term='+$('#term').val();
	
	//запишем все данные формы в переменную data
	$.ajax({
	  url: 'php/sm.php',
	  data: formdata,
	  type: 'post',
	  success: function(respond){
		alert(respond);
	  },
	  error: function(){
		alert('Произошла ошибка. Повторите попытку позже.');
	  }
	});
  });
});


$(function(){
  $('#my-contact-form-4').submit(function(e){
	e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
	var formdata='name='+$('#name4').val()+'&tel='+$('#tel4').val()+'&user-city='+$('#user-city').val()+'&term='+$('#term').val();
	
	//запишем все данные формы в переменную data
	$.ajax({
	  url: 'php/sm4.php',
	  data: formdata,
	  type: 'post',
	  success: function(respond){
		alert(respond);
	  },
	  error: function(){
		alert('Произошла ошибка. Повторите попытку позже.');
	  }
	});
  });
});

