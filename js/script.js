/*availability*/
function sortByAvailability(){
	let unavailable = document.getElementById('unavailable');
	unavailable.classList.add("none");
	let unavailable1 = document.getElementById('unavailable1');
	unavailable1.classList.add("none");

}
function seeAll () {
	let unavailable = document.getElementById('unavailable');
	unavailable.classList.remove("none");
	let unavailable1 = document.getElementById('unavailable1');
	unavailable1.classList.remove("none");
}
function cannotAdd(){
	alert("This item is out of stock");
}



/*shoping cart*/
let counter = 1;
function increase () {
	let textBox = document.getElementById('out');
		textBox.value = counter;
		counter++;
//		console.log(textBox.value);
	 	
	    document.getElementById('shoping-cart').innerHTML = "";
	
		let span = document.createElement("span");
		span.innerHTML = textBox.value;
		document.getElementById('shoping-cart').appendChild(span);
		alert("Item successfuly added")

	}	

/*availability*/
function sortByAvailability(){
	let unavailable = document.getElementById('unavailable');
	unavailable.classList.add("none");
	let unavailable1 = document.getElementById('unavailable1');
	unavailable1.classList.add("none");

}
function seeAll () {
	let unavailable = document.getElementById('unavailable');
	unavailable.classList.remove("none");
	let unavailable1 = document.getElementById('unavailable1');
	unavailable1.classList.remove("none");
}
function cannotAdd(){
	alert("This item is out of stock");
}

		// const key = "ammount: ";
		// const value = textBox.value;
		
		// console.log(key);
		// console.log(value);
		
		// if(key && value) {
		// localStorage.setItem(key, value);
        // location.reload();


// for (let i = 0; i < localStorage.length; i++){
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
    

// }

// function cleanStorage(){
//     let question = confirm("are you sure?");
//     if(question){
//     localStorage.clear();
//     location.reload();
//     }else{
//         alert("ok")
//     }
