function application(){
	var switched = false;
	var button = document.getElementById('button');
	var design5 = document.getElementById('design5');
	var design6 = document.getElementById('design6');
	button.onclick = function(){
		if(switched === false){
			switched = true;
			design5.style.display = 'none';
			design6.style.display = 'inline-block';
		}
		else{
			switched = false;
			design6.style.display = 'none';
			design5.style.display = 'inline-block';
		}
	}
}
application();