
let konzerte = [
    {
        name: "Ko-c",
        ort: "Berlin",
        datum: "20.06.2026",
        preis: 75,
        emoji: "🎤"
    },
    {
        name: "Minks",
        ort: "München",
        datum: "15.07.2026",
        preis: 60,
        emoji: "🎸"
    },
    {
        name: "Lady ponse",
        ort: "Hamburg",
        datum: "10.08.2026",
        preis: 85,
        emoji: "🎵"
    }
];

let warenkorb = [];

function konzerteAnzeigen() {
    let grid = document.getElementById("concertsGrid");
    konzerte.forEach(function(konzert) {
        let karte = document.createElement("div");
        karte.className = "concert-card";
        karte.innerHTML = `
            <h2>${konzert.emoji} ${konzert.name}</h2>
            <p>📍 ${konzert.ort}</p>
            <p>📅 ${konzert.datum}</p>
            <p>💶 ${konzert.preis} €</p>
            <button onclick="kaufen('${konzert.name}', ${konzert.preis})">
                🎟️ Ticket kaufen
            </button>
        `;
        grid.appendChild(karte);
    });
}

function kaufen(name, preis) {
    warenkorb.push({
        name: name,
        preis: preis
    });
    let zähler = document.getElementById("cartCount");
    zähler.innerHTML = warenkorb.length;
    let cartSection = document.getElementById("cartSection");
    cartSection.style.display = "block";
    warenkorbAnzeigen();
}

function warenkorbAnzeigen() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let gesamt = 0;
    warenkorb.forEach(function(ticket) {
        gesamt = gesamt + ticket.preis;
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>🎟️ ${ticket.name}</p>
                <p>${ticket.preis} €</p>
            </div>
        `;
    });
    let cartTotal = document.getElementById("cartTotal");
    cartTotal.innerHTML = gesamt;
}

konzerteAnzeigen();

let orderBtn = document.getElementById("orderBtn");
orderBtn.addEventListener("click", function() {
    let formSection = document.getElementById("formSection");
    formSection.style.display = "block";
});

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function() {
    let vorname = document.getElementById("vorname").value;
    let name = document.getElementById("name").value;
    let adresse = document.getElementById("adresse").value;
    let telefon = document.getElementById("telefon").value;
    let email = document.getElementById("email").value;

    if (vorname === "" || name === "" || adresse === "" ||
        telefon === "" || email === "") {
        alert("⚠️ Bitte alle Felder ausfüllen!");
        return;
    }

    document.getElementById("cartSection").style.display = "none";
    document.getElementById("formSection").style.display = "none";

    document.getElementById("confirmSection").style.display = "block";
    document.getElementById("confirmName").innerHTML = vorname + " " + name;
});

let newOrderBtn = document.getElementById("newOrderBtn");
newOrderBtn.addEventListener("click", function() {
    warenkorb = [];
    document.getElementById("cartCount").innerHTML = 0;
    document.getElementById("confirmSection").style.display = "none";
    document.getElementById("cartSection").style.display = "none";
});
let übersichtBtn = document.getElementById("übersichtBtn");

übersichtBtn.addEventListener("click", function() {
    let übersichtItems = document.getElementById("übersichtItems");
    übersichtItems.innerHTML = "";

    let gesamt = 0;

    if (warenkorb.length === 0) {
        übersichtItems.innerHTML = "<p>Noch keine Tickets gekauft!</p>";
    } else {
        warenkorb.forEach(function(ticket) {
            gesamt = gesamt + ticket.preis;
            übersichtItems.innerHTML += `
                <div class="übersicht-item">
                    <p>🎟️ ${ticket.name}</p>
                    <p>${ticket.preis} €</p>
                </div>
            `;
        });
    }

    document.getElementById("übersichtTotal").innerHTML = gesamt;
    document.getElementById("übersichtSection").style.display = "block";
});

let übersichtSchliessen = document.getElementById("übersichtSchliessen");

übersichtSchliessen.addEventListener("click", function() {
    document.getElementById("übersichtSection").style.display = "none";
});
