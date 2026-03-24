const products = [
    {name: "Laptop", price: 55000, img: "https://picsum.photos/300/200?1"},
    {name: "Phone", price: 25000, img: "https://picsum.photos/300/200?2"},
    {name: "Headphones", price: 3000, img: "https://picsum.photos/300/200?3"}
];

let total = localStorage.getItem("cartTotal") || 0;

function addToCart(price) {
    total = parseInt(total) + price;
    localStorage.setItem("cartTotal", total);
    alert("Added to cart!");
}

const container = document.getElementById("products");

products.forEach(p => {
    container.innerHTML += `
        <div class="card">
            <img src="${p.img}" width="100%">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.price})">Add to Cart</button>
        </div>
    `;
});
