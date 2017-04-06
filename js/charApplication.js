function application(){
	var switched = false;
	var button = document.getElementById('button');
	var design3 = document.getElementById('design3');
	var design4 = document.getElementById('design4');
	button.onclick = function(){
		if(switched === false){
			switched = true;
			design3.style.display = 'none';
			design4.style.display = 'inline-block';
		}
		else{
			switched = false;
			design4.style.display = 'none';
			design3.style.display = 'inline-block';
		}
	}
}
application();