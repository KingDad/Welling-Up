function application(){
	var switched = false;
	var button = document.getElementById('button');
	var design1 = document.getElementById('design1');
	var design2 = document.getElementById('design2');
	button.onclick = function(){
		if(switched === false){
			switched = true;
			design1.style.display = 'none';
			design2.style.display = 'inline-block';
		}
		else{
			switched = false;
			design2.style.display = 'none';
			design1.style.display = 'inline-block';
		}
	}
}
application();