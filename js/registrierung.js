let registrierBtn = document.getElementById("registrierBtn");

registrierBtn.addEventListener("click", function() {
    let vorname  = document.getElementById("vorname").value;
    let nachname = document.getElementById("nachname").value;
    let email    = document.getElementById("email").value;
    let passwort = document.getElementById("passwort").value;

    if (vorname === "" || nachname === "" ||
        email === "" || passwort === "") {
        alert("⚠️ Bitte alle Felder ausfüllen!");
        return;
    }

    let formData = new FormData();
    formData.append("vorname", vorname);
    formData.append("nachname", nachname);
    formData.append("email", email);
    formData.append("passwort", passwort);

    fetch("php/registrierung.php", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        alert(text);
    })
});
