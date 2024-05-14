const apiUrl = "https://fakestoreapi.com/products";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const itemComponent = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style = "width: 18rem;";
  card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6><span class="badge badge-secondary">${item.category}</span> <span class="star">&#9733;${item.rating.rate}</span></h6>
          <img class="card-img-top rounded mx-auto d-block" style="width:64px;height:64px;margin:2rem" src='${item.image}' alt="">
          <h4><span class="badge badge-primary">$${item.price}</span></h4>
          <p class="card-text">${item.description}</p>
        </div>
        `;
  const cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(card);
};

async function displayCards() {
  const data = await fetchData(apiUrl);
  if (data) {
    data.forEach(itemComponent);
  }
}

displayCards();
