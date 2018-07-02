var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
//var checkbox = document.getElementById("doneCheck1");
var checkbox2 = document.querySelector("#shoppingul input[type=checkbox]");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var checkbox2 = document.createElement("input");
	checkbox2.type = "checkbox";
	li.appendChild(checkbox2);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


checkbox2.addEventListener( 'change', function() {
    if(this.checked) {
    	this.parentNode.classList.add("done");
        console.log("check test");
    } else {
    	this.parentNode.classList.remove("done");
        console.log("uncheck test");
    }
});

