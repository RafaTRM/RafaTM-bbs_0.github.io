

document.querySelector(".contact-form").addEventListener("submit", submitForm); 


function submitForm(e) {
    e.preventDefault();

    //get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    //let county = document.getElementById("estado").value;
    let message = document.getElementById("message").value;
    let subject = document.getElementById("matter").value;
    let sector = document.getElementById("sector").value;
        //document.querySelector(".contact-form").reset();
        
    sendEmail(name, email, phone, message, subject, sector);
}



function sendEmail(name, email, phone, message, subject, sector) {
    Email.send({
    //Host : "mail.bbsbys.com",
    Host : "smtp.elasticemail.com",
    Username : "integrabmc@gmail.com",
    Password : "C3352ED514EDF3ABA768C822E49F4C6479AD",
    //Username : "comercial@bbsbys.com",
    //Password : "R-Hb0{t2oX",
    To : 'comercial@bbsbys.com',
    From : "integrabmc@gmail.com",
    Subject : "Contacto Página WEB Contacto 2",
    Body: `Name: ${name} <br/> Email: ${email} <br/> phone: ${phone} <br/> Asunto: ${subject} <br/> Empresa - Sector: ${sector} <br/> Message: ${message}`
    
    
}).then ((message) => alert("Su mensaje ha sido enviado. Pronto, un ejecutivo de cuenta se pondrá en contacto. Gracias por escribirnos.")
);
    clearInputFields(name, email, phone, message, subject, sector);
}

function clearInputFields() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    //document.getElementById("estado").value = '';
    document.getElementById("message").value = '';
    document.getElementById("matter").value = '';
    document.getElementById("sector").value = '';
}
