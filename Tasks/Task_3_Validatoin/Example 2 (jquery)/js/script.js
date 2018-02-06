$(document).ready(function() {

//==========  настрйока валидации  ====================================================================================
	$("#register_form").validate({
		ignore: ".ignore, :hidden",
		focusInvalid: true,
		hideErrElem : "#validate_error",
		errorPlacement: function(error,element) {
//==========  Назначаем обработчик на ошибки  =========================================================================
			changeTip(element);
			return true;
		},

		rules: {
			'users_login'		: {
				required : true,
				login: true
			},
			'users_password'		: {
				required : true,
				pass: true,
				minlength: 6
			}
		}
	});

	$("#subm_id").click(function() {
		var valid = $("#register_form").valid();
		if(valid)
		{
			document.forms["form_reg"].submit()
	    }
	});

//=====================================================================================================================
		// Регулярное выражение для Email
//=====================================================================================================================
	jQuery.validator.addMethod('login', function(value, element, param)
	{
		if((/^[0-9a-zA-Z]+@[0-9a-z_-]+\.[a-zA-Z{2,5}]/i.test(value)))
		{
			return true;
		}

		return false;
	});
//=====================================================================================================================
		// Регулярное выражение для Email
//=====================================================================================================================
	jQuery.validator.addMethod("pass", function(value, element)
	{
		if((/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)))
		{
			return true;
		}

		return false;
	});

//=====================================================================================================================
		//для того чтобы выводить ошибки при валидации обернем все подсказки в объект, чтобы было удобнее ими управлять
//=====================================================================================================================
	fields_tip = {
//==========  основные параметры для подсказок  =======================================================================
		tip_w : 300,
		tip_r : 3,
		tip_color : 'light',
		tip_show : 'mouseover focus',
		tip_show_ready : false,
		tip_hide : 'mouseout click blur',
		tip_border_w : 0,
		tip_screen : false,
		tip_hide_delay : 0,

//=====================================================================================================================
		//Настройка внешнего вида подсказок qtip
//=====================================================================================================================

//==========  Поле логин  =============================================================================================
		users_login : function() {
			$('*[name="users_login"]').qtip({
				content: {
					text: 'Для поля "Email" допускаются буквы латинского алфавита, а также чисела от 0 до 9 ',
					title: {
						text: 'Введите Email'
					}
				},
				position: {
					corner: {
						target: 'rightMiddle',
						tooltip: 'leftMiddle'
					},
					adjust: {
						screen: this.tip_screen
					}
				},
				show: {
					when: this.tip_show,
					solo: false,
					ready : this.tip_show_ready
				},
				hide: {
					when: {
						event: this.tip_hide
					},
					delay: this.tip_hide_delay
				},
				style: {
					tip: true,
					border: {
						width: this.tip_border_w,
						radius: this.tip_r
					},
					name: this.tip_color,
					width: this.tip_w
				}
			});
		},
		users_login_destruct : function() {
			$('*[name="users_login"]').qtip('destroy');
		},
//==========  Поле пароль  =============================================================================================
		users_password : function() {
			$('*[name="users_password"]').qtip({
				content: {
					text: 'Минимальная длинна для поля "Пароль" 6 символов. Допускаются буквы латинского алфавита, а также чисела от 0 до 9 и символы "-!./\$,?:&*;@%()+=№#_[]"',
					title: {
						text: 'Введите Пароль'
					}
				},
				position: {
					corner: {
						target: 'rightMiddle',
						tooltip: 'leftMiddle'
					},
					adjust: {
						screen: this.tip_screen
					}
				},
				show: {
					when: this.tip_show,
					solo: false,
					ready : this.tip_show_ready
				},
				hide: {
					when: {
						event: this.tip_hide
					},
					delay: this.tip_hide_delay
				},
				style: {
					tip: true,
					border: {
						width: this.tip_border_w,
						radius: this.tip_r
					},
					name: this.tip_color,
					width: this.tip_w
				}
			});
		},
		users_password_destruct : function() {
			$('*[name="users_password"]').qtip('destroy');
		},
//==========  Инициализация подсказок  ================================================================================
		init : function() {
			this.users_login();
			$('*[name="users_login"]').mouseover();
			this.users_password();
			$('*[name="users_password"]').mouseover();
		},

		destructor : function() {
			this.users_login_destruct();
			this.users_password_destruct();
		}

	};

	fields_tip.init();
});

function changeTip(element)
{

	if(!($(element).hasClass('error')))
	{
//=====================================================================================================================		
//  Если класса ошибки у элемента нет, то делаем ему нормальную подсказку / удаляем ту, что есть
//=====================================================================================================================
		$(element).qtip('destroy');
//==========  Cоздаем обычную  ========================================================================================
		fields_tip.tip_r = 3;
		fields_tip.tip_border_w = 3;
		fields_tip.tip_show_ready = false;
		fields_tip.tip_color = 'light';
		fields_tip.tip_show = 'mouseover focus';
		fields_tip.tip_hide = 'mouseout click blur';
		fields_tip[$(element)[0].name].call(fields_tip);
		$('*[name="' + $(element)[0].name + '"]').mouseover();
	}
	else
	{
//==========  Удаляем ту, что есть  ===================================================================================
		$(element).qtip('destroy');

		fields_tip.tip_color = 'red';
		fields_tip.tip_show_ready = true;
		fields_tip.tip_show = 'mouseover focus';
		fields_tip.tip_hide = 'click mouseout blur';

//==========  Создаем ошибку  =========================================================================================
		fields_tip[$(element)[0].name].call(fields_tip);
		$('*[name="' + $(element)[0].name + '"]').mouseover();
//==========  Cкрытие подсказки, можно сделать любой эффект ===========================================================
		setTimeout('$(\'*[name="' + $(element)[0].name + '"]\').qtip("hide");', 3000);
	}
}