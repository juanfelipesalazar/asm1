
let contacts = [];

document.getElementById("show-form").addEventListener("click",function(){
document.getElementById("popup").classList.add("active");
});

document.querySelector(".form-popup .close-form").addEventListener("click",
function()
{
document.querySelector(".form-popup").classList.remove("active");
});

const addContact = (prop)=>{
    prop.preventDefault(); //to stop the form submitting

    let contact = {
        firstName: document.getElementById('nombre').value,
        lastName: document.getElementById('apellido').value,
        phoneNumber: document.getElementById('num').value,
        city: document.getElementById('ciudad').value
    }

    contacts.push(contact);
    document.forms[0].reset(); //to clear the form for the next entries

    //for display purposes only
    console.warn('added', {contacts});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(contacts, '\t', 2);

    //saving to localstorage
}

var lastAudio;

function reproducir(i) {
    var audio = document.getElementById('audio' + i);

    if(lastAudio == undefined) {
        lastAudio = audio;
        audio.play();
    } else {
        lastAudio.pause();
        audio.play();
        lastAudio = audio;
    }
}

