const urlParams = new URLSearchParams(window.location.search);
const selectedDealer = urlParams.get("dealer");
const cityFilter = document.getElementById("cityFilter");
const brandFilter = document.getElementById("brandFilter");
const priceFilter = document.getElementById("priceFilter");
const carCards = document.querySelectorAll(".car-card");

function filterCars() {
  carCards.forEach(card => {
    const city = card.getAttribute("data-city");
    const brand = card.getAttribute("data-brand");
    const price = parseInt(card.getAttribute("data-price"));
    const dealer = card.getAttribute("data-dealer");


    let cityMatch = cityFilter.value === "all" || city === cityFilter.value;
    let brandMatch = brandFilter.value === "all" || brand === brandFilter.value;
    let priceMatch = true;
    let dealerMatch = !selectedDealer || dealer === selectedDealer;


    if (priceFilter.value === "below15000") {
      priceMatch = price < 15000;
    } else if (priceFilter.value === "15000to20000") {
      priceMatch = price >= 15000 && price <= 20000;
    } else if (priceFilter.value === "above20000") {
      priceMatch = price > 20000;
    }

   if (cityMatch && brandMatch && priceMatch && dealerMatch) {

      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

cityFilter.addEventListener("change", filterCars);
brandFilter.addEventListener("change", filterCars);
priceFilter.addEventListener("change", filterCars);
filterCars();

