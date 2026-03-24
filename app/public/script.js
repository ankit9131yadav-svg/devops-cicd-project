const products = [
    {name: "Laptop", price: 55000, img: "https://picsum.photos/300/200?1"},
    {name: "Phone", price: 25000, img: "https://picsum.photos/300/200?2"},
    {name: "Headphones", price: 3000, img: "https://picsum.photos/300/200?3"},
    {name: "Camera", price: 40000, img: "https://picsum.photos/300/200?4"}
];

let total = localStorage.getItem("cartTotal") || 0;

function addToCart(price) {
    total = parseInt(total) + price;
    localStorage.setItem("cartTotal", total);
    updateCart();
}

function updateCart() {
    const count = document.getElementById("cart-count");
    if (count) count.innerText = total;
}

const container = document.getElementById("products");

if (container) {
    products.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <div class="card-body">
                <h3>${p.name}</h3>
                <p class="price">₹${p.price}</p>
                <button onclick="addToCart(${p.price})">Add to Cart</button>
            </div>
        </div>
        `;
    });
}

updateCart();
