const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>DevOps Store</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background: #f5f7fa;
        }

        /* Navbar */
        .navbar {
            background: #0d6efd;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .navbar input {
            padding: 8px;
            border-radius: 5px;
            border: none;
            width: 250px;
        }

        .cart {
            font-weight: bold;
        }

        /* Product Grid */
        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        .card {
            background: white;
            border-radius: 12px;
            padding: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card img {
            width: 100%;
            height: 180px;
            border-radius: 10px;
            object-fit: cover;
        }

        .title {
            font-weight: bold;
            margin: 10px 0;
        }

        .price {
            color: green;
            font-size: 18px;
        }

        .rating {
            color: orange;
        }

        button {
            width: 100%;
            margin-top: 10px;
            padding: 10px;
            background: #0d6efd;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background: #0b5ed7;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 15px;
            background: #222;
            color: white;
        }
    </style>
</head>

<body>

    <div class="navbar">
        <div>🛒 DevOps Store</div>
        <input type="text" placeholder="Search products...">
        <div class="cart">Cart: ₹<span id="total">0</span></div>
    </div>

    <div class="container" id="products"></div>

    <footer>
        🚀 Powered by DevOps CI/CD Pipeline | AWS + Jenkins + Kubernetes
    </footer>

<script>
    const products = [
        {name: "Laptop", price: 55000, img: "https://picsum.photos/300/200?1"},
        {name: "Smartphone", price: 25000, img: "https://picsum.photos/300/200?2"},
        {name: "Headphones", price: 3000, img: "https://picsum.photos/300/200?3"},
        {name: "Smart Watch", price: 7000, img: "https://picsum.photos/300/200?4"},
        {name: "Camera", price: 40000, img: "https://picsum.photos/300/200?5"},
        {name: "Gaming Mouse", price: 1500, img: "https://picsum.photos/300/200?6"}
    ];

    let total = 0;

    function addToCart(price) {
        total += price;
        document.getElementById("total").innerText = total;
    }

    const container = document.getElementById("products");

    products.forEach(p => {
        container.innerHTML += \`
            <div class="card">
                <img src="\${p.img}">
                <div class="title">\${p.name}</div>
                <div class="price">₹\${p.price}</div>
                <div class="rating">⭐⭐⭐⭐☆</div>
                <button onclick="addToCart(\${p.price})">Add to Cart</button>
            </div>
        \`;
    });
</script>

</body>
</html>
`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
