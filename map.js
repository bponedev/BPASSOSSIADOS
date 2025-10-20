document.addEventListener("DOMContentLoaded", function() {
  const offices = [
    {
      name: "Escritório Campos dos Goytacazes - RJ",
      address: "Praça São Salvador, 41 Loja 6 - Rio de Janeiro, RJ",
      lat: -21.756202,
      lng: -41.323076
    },
    {
      name: "Escritório Irajá - RJ",
      address: "R. Menezes Prado, 94 - Irajá, Rio de Janeiro - RJ",
      lat: -22.8253691,
      lng: -43.3314418
    }
  ];

  const map = L.map("map").setView([-22.8253691, -43.3314418], 9);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const listContainer = document.getElementById("offices-list");

  offices.forEach(o => {
    const marker = L.marker([o.lat, o.lng]).addTo(map)
      .bindPopup(`<b>${o.name}</b><br>${o.address}`);
    
    const card = document.createElement("div");
    card.className = "office-card";
    card.innerHTML = `<strong>${o.name}</strong><br>${o.address}`;
    card.addEventListener("click", () => {
      map.setView([o.lat, o.lng], 13);
      marker.openPopup();
    });
    listContainer.appendChild(card);
  });
});
