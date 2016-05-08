$(function()  {

	$('.carousel__items_list').carousel();

	var html = $('#test').html();
	var cv = [
	{
	  name: 'Соловей Наталья',
	  photo: 'img/photo.jpg',
	  position: 'Разработчик',
	  purpose1:'Это очень интересно',
	  phoneNumber:'+380963334387',
	  socialLink: 'http/www.vk.com/natali.solo',
	  socialNetwork:'vk.com/natali.solo',
	  feedback: 'Все будет отлично',
	}
	];
	var content = tmpl(html, {
	  data:cv
	});
	$('body').append(content);

});
