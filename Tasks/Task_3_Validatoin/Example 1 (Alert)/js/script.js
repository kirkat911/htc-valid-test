function valid(form){
	var fail = false;
	var username = form.username.value;
	var password = form.password.value;
	var reg_mail = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z{2,5}]/i;
	var reg_pass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;


	if (reg_mail.test(username) == false)
		fail = "Вы ввели email не верно";
	else if (reg_pass.test(password) == false)
		fail = "Вы ввели пароль не верно";
	
	if (fail){
		alert(fail);
	}
	
}
