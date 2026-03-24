const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>Ankit Store</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: #333;
        }

        /* Navbar */
        .navbar {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            padding: 15px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
        }

        .logo {
            font-size: 22px;
            font-weight: bold;
        }

        .search {
            padding: 8px 12px;
            border-radius: 20px;
            border: none;
            width: 250px;
        }

        .cart {
            font-weight: bold;
        }

        /* Container */
        .container {
            padding: 40px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }

        /* Card */
        .card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-10px) scale(1.03);
        }

        .card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        .card-body {
            padding: 15px;
        }

        .title {
            font-size: 18px;
            font-weight: bold;
        }

        .price {
            color: #28a745;
            margin: 8px 0;
            font-size: 18px;
        }

        .rating {
            color: gold;
        }

        button {
            margin-top: 10px;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 8px;
            background: #667eea;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background: #5a67d8;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 20px;
            color: white;
            margin-top: 20px;
        }

    </style>
</head>

<body>

    <div class="navbar">
        <div class="logo">🚀 Ankit Store</div>
        <input class="search" placeholder="Search products...">
        <div class="cart">Cart: ₹<span id="total">0</span></div>
    </div>

    <div class="container" id="products"></div>

    <footer>
        Built with ❤️ using AWS | Jenkins | Docker | Kubernetes
    </footer>

<script>
    const products = [
        {name: "Laptop", price: 55000, img: "https://picsum.photos/400/300?1"},
        {name: "Smartphone", price: 25000, img: "https://picsum.photos/400/300?2"},
        {name: "Headphones", price: 3000, img: "https://picsum.photos/400/300?3"},
        {name: "Smart Watch", price: 7000, img: "https://picsum.photos/400/300?4"},
        {name: "Camera", price: 40000, img: "https://picsum.photos/400/300?5"},
        {name: "Gaming Mouse", price: 1500, img: "https://picsum.photos/400/300?6"}
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
                <div class="card-body">
                    <div class="title">\${p.name}</div>
                    <div class="price">₹\${p.price}</div>
                    <div class="rating">⭐⭐⭐⭐☆</div>
                    <button onclick="addToCart(\${p.price})">Add to Cart</button>
                </div>
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
