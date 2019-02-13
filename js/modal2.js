/*
 * Object [EN CONSTRUCTION]
 */
const ID = [
	{ modal:"Modal_card-location", btn:"btnModal_card-location", close:"close-c-l" },{ modal:"Modal_card-location2", btn:"btnModal_card-location", close:"close-c-l" }
];

/* Array content id [EN CONSTRUCTION] */
const id_modal = [];
const id_btn = [];
const id_close = [];

for(const contando in ID){
	id_modal.push(ID[contando].modal);
    id_btn.push(ID[contando].btn);
    id_close.push(ID[contando].close);
}
// [EN CONSTRUCTION]
/*****************************************/





// methods done !! ...

function modal(id){
	var ids = id;
	let modal = ids.substr(3,ids.lenght);
	document.getElementById(modal).style.display = "block";
	// document.body.style.overflow = "hidden";
	localStorage.setItem("modal", modal);
	console.log(modal);
}

function modal_close(id){
	document.getElementsByClassName(id)[0];
	document.body.style.overflow = "scroll";
	document.getElementById(localStorage.getItem("modal")).style.display = "none";

}

window.onclick = function(event) {
    if (event.target == document.getElementById(localStorage.getItem("modal"))) {
        document.getElementById(localStorage.getItem("modal")).style.display = "none"; document.body.style.overflow = "scroll";
    }
}
