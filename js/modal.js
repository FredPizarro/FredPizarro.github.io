
// Get the modal
var modal = document.getElementById('Modal_01');
var modal2 = document.getElementById('Modal_02');
var modal3 = document.getElementById('Modal_03');
var modal_Modal_web_dev = document.getElementById('Modal_web-dev'); /* desktop */
var modal_Modal_tecnicopc = document.getElementById('Modal_tecnicopc'); /* desktop */


// Get the button that opens the modal
var btn = document.getElementById("btnModal_01");
var btn2 = document.getElementById("btnModal_02");
var btn3 = document.getElementById("btnModal_03");
var btn_web_dev = document.getElementById("btnModal_web-dev"); /* desktop */
var btn_tecnicopc = document.getElementById("btnModal_tecnicoPC"); /* desktop */


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var spanwd = document.getElementsByClassName("close-w-d")[0]; /* desktop */
var spantpc = document.getElementsByClassName("close-tec-pc")[0]; /* desktop */


 // When the user clicks on the button, open the modal  / scroll oculto ( del body)
btn.onclick = function() { modal.style.display = "block"; document.body.style.overflow = "hidden"; }
btn2.onclick = function() { modal2.style.display = "block"; document.body.style.overflow = "hidden";   }
btn3.onclick = function() { modal3.style.display = "block"; document.body.style.overflow = "hidden";   }
btn_web_dev.onclick = function() { modal_Modal_web_dev.style.display = "block"; document.body.style.overflow = "hidden"; }
btn_tecnicopc.onclick = function() { modal_Modal_tecnicopc.style.display = "block"; document.body.style.overflow = "hidden"; }


// When the user clicks on <span> (x), close the modal / scroll visible  ( del body)
span.onclick = function() { modal.style.display = "none"; document.body.style.overflow = "scroll"; }
span2.onclick = function() { modal2.style.display = "none"; document.body.style.overflow = "scroll"; }
span3.onclick = function() { modal3.style.display = "none"; document.body.style.overflow = "scroll"; }
spanwd.onclick = function() { modal_Modal_web_dev.style.display = "none"; document.body.style.overflow = "scroll";  } 
spantpc.onclick = function() { modal_Modal_tecnicopc.style.display = "none"; document.body.style.overflow = "scroll";  } 


// When the user clicks anywhere outside of the modal, close it / scroll visible  ( del body)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal2) {
        modal2.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal3) {
        modal3.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_Modal_web_dev) {
        modal_Modal_web_dev.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_Modal_tecnicopc) {
        modal_Modal_tecnicopc.style.display = "none"; document.body.style.overflow = "scroll";
    }
}
