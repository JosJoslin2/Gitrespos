// 1. Konzert Daten
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

// 2. Leerer Warenkorb
let warenkorb = [];

// 3. Konzerte anzeigen
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

// 4. Ticket kaufen
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

// 5. Warenkorb anzeigen
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

// 6. Alles wird hier gestartet
konzerteAnzeigen();
