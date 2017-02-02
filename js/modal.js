
// Get the modal
//var modal_card_location = document.getElementById('Modal_card-location'); 
var modal_card_location = $('#Modal_card-location');
var btn_cardlocation = document.getElementById("btnModal_card-location");
var spancl = document.getElementsByClassName("close-c-l")[0];



//var table = document.getElementById('Modal_card-location');
//var cells = 1; 
//
//for (var i = 0; i < cells; i++) { 
//   $('#Modal_card-location div').click(function(){
//       alert("Click");
//   });
//}



var modal3 = document.getElementById('Modal_03');

var modal_icon = document.getElementById('Modal_icon');
var modal_color = document.getElementById('Modal_color');


var modal1 = document.getElementById('Modal_01');
var modal2 = document.getElementById('Modal_02');
var modal_web_cleaners = document.getElementById('Modal_web-cleaners'); /* Web Development */
var modal_web_navbar_basic = document.getElementById('Modal_web_navbar-basic'); /* Web Development */
var modal_web_lan_cabling_solutions = document.getElementById('Modal_web-email-lan-cabling-solutions'); /* Web Development */
var modal_web_location_form = document.getElementById('Modal_web-location-form'); /* Web Development */
var modal_web_card_product_house = document.getElementById('Modal_web-card-product-house');
                                                           /* Web Development */


var modal_w_e_computo = document.getElementById('Modal_web-ecommerce_computo'); /* Web app */


var modal_Modal_java_doc = document.getElementById('Modal_java-doc'); /* desktop */
var modal_Modal_web_dev = document.getElementById('Modal_web-dev'); /* desktop */
var modal_Modal_tecnicopc = document.getElementById('Modal_tecnicopc'); /* desktop */
var modal_system_renameFile = document.getElementById('Modal_system-rename'); /* desktop */
var modal_system_corporation = document.getElementById('Modal_system-corporation'); /* desktop */
var modal_system_control = document.getElementById('Modal_system-control'); /* desktop */


/*********************************************************************************************/

// Get the button that opens the modal
var btn3 = document.getElementById("btnModal_03");

var btn_icon = document.getElementById("btnModal_icon");
var btn_color = document.getElementById("btnModal_color");

var btn1 = document.getElementById("btnModal_01");
var btn2 = document.getElementById("btnModal_02");
var btn_web_cleaners = document.getElementById("btnModal_web-Cleaners");/* Web Development */
var btn_web_navbar_basic = document.getElementById("btnModal_web_navbar-basic");/* Web Development */
var btn_web_lan_cabling_solutions = document.getElementById("btnModal_web-email-lan-cabling-solutions");/* Web Development */
var btn_web_location_form = document.getElementById("btnModal_web-location-form");/* Web Development */
var btn_web_card_product_house = document.getElementById("btnModal_web-card-product-house");/* Web Development */


var btn_w_e_computo = document.getElementById("btnModal_web-ecommerce_computo"); /* Web app */



var btn_java_doc = document.getElementById("btnModal_java-doc"); /* desktop */
var btn_web_dev = document.getElementById("btnModal_web-dev"); /* desktop */
var btn_tecnicopc = document.getElementById("btnModal_tecnicoPC"); /* desktop */
var btn_system_renameFile = document.getElementById("btnModal_system-rename"); /* desktop */
var btn_system_corporation = document.getElementById("btnModal_system-corporation"); /* desktop */
var btn_system_control = document.getElementById("btnModal_system-control"); /* desktop */



/*********************************************************************************************/

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

var spanicon = document.getElementsByClassName("close-icon")[0];
var spancolor = document.getElementsByClassName("close-color")[0];

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span_web_cleaners = document.getElementsByClassName("close-w-cleaners")[0];/* Web Development */
var span_web_navbar_basic = document.getElementsByClassName("close-w-navbar-basic")[0];/* Web Development */
var span_web_lan_cabling_solutions = document.getElementsByClassName("close-w-email-lan-cabling-solutions")[0];/* Web Development */
var span_web_location_form = document.getElementsByClassName("close-w-location-form")[0];/* Web Development */
var span_web_card_product_house = document.getElementsByClassName("close-w-card-product-house")[0];/* Web Development */


var span_w_e_computo = document.getElementsByClassName("close-web-ecommerce_computo")[0]; /* Web app */


var span_java_doc = document.getElementsByClassName("close-java-doc")[0]; /* desktop */
var spanwd = document.getElementsByClassName("close-w-d")[0]; /* desktop */
var spantpc = document.getElementsByClassName("close-tec-pc")[0]; /* desktop */
var spansrf = document.getElementsByClassName("close-s-renamefile")[0]; /* desktop */
var spanscorporation = document.getElementsByClassName("close-s-corporation")[0]; /* desktop */
var span_s_control = document.getElementsByClassName("close-s-control")[0]; /* desktop */




/*********************************************************************************************/



 // When the user clicks on the button, open the modal  / scroll oculto ( del body)
btn_cardlocation.onclick = function() { modal_card_location.css("display", "block"); }

$("#btnModal_card-location, #btnModal_03").click(function(){
    document.body.style.overflow = "hidden";   
});



btn3.onclick = function() { modal3.style.display = "block";}

btn_icon.onclick = function() { modal_icon.style.display = "block"; document.body.style.overflow = "hidden";   }
btn_color.onclick = function() { modal_color.style.display = "block"; document.body.style.overflow = "hidden";   }

btn1.onclick = function() { modal1.style.display = "block"; document.body.style.overflow = "hidden"; }
btn2.onclick = function() { modal2.style.display = "block"; document.body.style.overflow = "hidden";   }
btn_web_cleaners.onclick = function() { modal_web_cleaners.style.display = "block"; document.body.style.overflow = "hidden";   }
btn_web_navbar_basic.onclick = function() { modal_web_navbar_basic.style.display = "block"; document.body.style.overflow = "hidden";   }
btn_web_lan_cabling_solutions.onclick = function() { modal_web_lan_cabling_solutions.style.display = "block"; document.body.style.overflow = "hidden";   }
btn_web_location_form.onclick = function() { modal_web_location_form.style.display = "block"; document.body.style.overflow = "hidden";   }
btn_web_card_product_house.onclick = function() { modal_web_card_product_house.style.display = "block"; document.body.style.overflow = "hidden";   }



btn_w_e_computo.onclick = function() { modal_w_e_computo.style.display = "block"; document.body.style.overflow = "hidden"; }



btn_java_doc.onclick = function() { modal_Modal_java_doc.style.display = "block"; document.body.style.overflow = "hidden"; }
btn_web_dev.onclick = function() { modal_Modal_web_dev.style.display = "block"; document.body.style.overflow = "hidden"; }
btn_tecnicopc.onclick = function() { modal_Modal_tecnicopc.style.display = "block"; document.body.style.overflow = "hidden"; }
btn_system_renameFile.onclick = function() { modal_system_renameFile.style.display = "block"; document.body.style.overflow = "hidden"; }
btn_system_corporation.onclick = function() { modal_system_corporation.style.display = "block"; document.body.style.overflow = "hidden"; }
btn_system_control.onclick = function() { modal_system_control.style.display = "block"; document.body.style.overflow = "hidden"; }

/*********************************************************************************************/

// When the user clicks on <span> (x), close the modal / scroll visible  ( del body)
spancl.onclick = function() {
    modal_card_location.css("display", "none");
    document.body.style.overflow = "scroll"; 
}
span3.onclick = function() { modal3.style.display = "none"; document.body.style.overflow = "scroll"; }

spanicon.onclick = function() { modal_icon.style.display = "none"; document.body.style.overflow = "scroll"; }
spancolor.onclick = function() { modal_color.style.display = "none"; document.body.style.overflow = "scroll"; }

span1.onclick = function() { modal1.style.display = "none"; document.body.style.overflow = "scroll"; }
span2.onclick = function() { modal2.style.display = "none"; document.body.style.overflow = "scroll"; }
span_web_cleaners.onclick = function() { modal_web_cleaners.style.display = "none"; document.body.style.overflow = "scroll"; }
span_web_navbar_basic.onclick = function() { modal_web_navbar_basic.style.display = "none"; document.body.style.overflow = "scroll"; }
span_web_lan_cabling_solutions.onclick = function() { modal_web_lan_cabling_solutions.style.display = "none"; document.body.style.overflow = "scroll"; }
span_web_location_form.onclick = function() { modal_web_location_form.style.display = "none"; document.body.style.overflow = "scroll"; }
span_web_card_product_house.onclick = function() { modal_web_card_product_house.style.display = "none"; document.body.style.overflow = "scroll"; }


span_w_e_computo.onclick = function() { modal_w_e_computo.style.display = "none"; document.body.style.overflow = "scroll";  } 



span_java_doc.onclick = function() { modal_Modal_java_doc.style.display = "none"; document.body.style.overflow = "scroll";  } 
spanwd.onclick = function() { modal_Modal_web_dev.style.display = "none"; document.body.style.overflow = "scroll";  } 
spantpc.onclick = function() { modal_Modal_tecnicopc.style.display = "none"; document.body.style.overflow = "scroll";  } 
spansrf.onclick = function() { modal_system_renameFile.style.display = "none"; document.body.style.overflow = "scroll";  } 
spanscorporation.onclick = function() { modal_system_corporation.style.display = "none"; document.body.style.overflow = "scroll";  } 
span_s_control.onclick = function() { modal_system_control.style.display = "none"; document.body.style.overflow = "scroll";  } 



/*********************************************************************************************/


// When the user clicks anywhere outside of the modal, close it / scroll visible  ( del body)
window.onclick = function(event) {
    if (event.target == modal_card_location) {
        modal_card_location.css("display", "none"); document.body.style.overflow = "scroll"; 
    }if (event.target == modal1) {
        modal1.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal2) {
        modal2.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal3) {
        modal3.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_icon) {
        modal_icon.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_color) {
        modal_icon.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_web_cleaners) {
        modal_web_cleaners.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_web_navbar_basic) {
        modal_web_navbar_basic.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_web_lan_cabling_solutions) {
        modal_web_lan_cabling_solutions.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_web_location_form) {
        modal_web_location_form.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_web_card_product_house) {
        modal_web_card_product_house.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_Modal_web_dev) {
        modal_Modal_web_dev.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_w_e_computo) {
        modal_w_e_computo.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_Modal_java_doc) {
        modal_Modal_java_doc.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_Modal_tecnicopc) {
        modal_Modal_tecnicopc.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_system_renameFile) {
        modal_system_renameFile.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_system_corporation) {
        modal_system_corporation.style.display = "none"; document.body.style.overflow = "scroll";
    }if (event.target == modal_system_control) {
        modal_system_control.style.display = "none"; document.body.style.overflow = "scroll";
    }
}
