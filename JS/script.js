function binaryToDecimal() {
	var binary = document.getElementById("binary").value;
	
	if(binary == ""){
		alert("Please fill up the required field!");
	}else{
		if(/^[01]+$/.test(binary)){
			var decimal = parseInt(binary, 2);
			document.getElementById("result").innerHTML = "<center><label style='font-size:18px;'>The decimal number is</label></center><center><h3 class='text-primary'>"+decimal+"</h3></center>";
		}else{
			alert("Please enter binary numbers");
		}
	}
}

function reset(){
	document.getElementById("decimal").value = "";
	document.getElementById("result").innerHTML = "";
}