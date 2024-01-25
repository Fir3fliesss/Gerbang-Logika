let AND, OR, X, Y;

function gerbangLogika() {
	X = (document.getElementById("n1").value);
	Y = (document.getElementById("n2").value);

	if (!cekInput(X, Y)){
		return;
	}

	AND = X || Y;
	OR = X && Y;

	document.getElementById('AND').value = AND;
	document.getElementById('OR').value = OR;
}

function cekInput(X,Y) {
	if ((X === "1" || X === "0") && (Y === "1" || Y === "0")) {
	  	console.log("Input sesuai");
		return true;
	} else {
		alert("Salah! anda hanya dapat menginput angka 1 atau 0. Silahkan lakukan input ulang!");
		return false;
	}
  }
