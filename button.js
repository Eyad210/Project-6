var button = document.getElementById('periodButton');
var circle = document.getElementById('circle');
var enable = false
var basicPrice = document.getElementById('basic');
var proPrice = document.getElementById('pro');
var masterPrice = document.getElementById('master');
function click(){
    if(enable == false){
        basicPrice.innerText = '199.99';
        proPrice.innerText = '249.99';
        masterPrice.innerText = '399.99';
        // circle.style.transition = '0.3s';
        circle.style.marginLeft = '-20%';
        enable = true;
    }
    else{
        basicPrice.innerText = '19.99';
        proPrice.innerText = '24.99';
        masterPrice.innerText = '39.99';
        circle.style.marginLeft = '120%';
        enable = false;
    }
    
};
button.onclick = click;

    
// if(enable == false){
//     button.onclick = click;
//     enable = true;
// }
// else if(enable == true){
//     button.onclick = click2;
//     enable = false;
// }
// button.onclick = click;
// button.ondblclick = click2;