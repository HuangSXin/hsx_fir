console.log(11);
var xhr = new XMLHttpRequest();
xhr.open('get','http://127.0.0.1:8080/api');
xhr.send(null);
xhr.onreadystatechange=()=>{
	if(xhr.readyState==4&&xhr.status==200){
		console.log(xhr.responseText);
	}
}
