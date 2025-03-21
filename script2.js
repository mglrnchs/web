const cart = [];

function addToCart(name, priceHot, priceIced) {
    let price = priceHot;
    if (priceIced !== undefined && confirm("Would you like it iced?")) {
        price = priceIced;
    }

    cart.push({ name: name, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₱${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function showCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'block' ? 'none' : 'block';
    updateCart();
}

function checkout() {
    alert("Checkout functionality not implemented. This is a simulation.");
}

function goToAccount() {
    alert("Account functionality not implemented.");
}

// Populate menu sections (if needed)
const menuSections = document.querySelector('.menu-sections');
if (menuSections) {
    menuSections.innerHTML = `
        <div class="menu-section">
            <h2>NON COFFEE</h2>
            <div class="menu-item" onclick="addToCart('HORCHATA', 130, 140)">
                <div class="menu-item-name">HORCHATA <br> <small>Oat and Grain Milk blended with cinnamon and vanilla</small></div>
                <div class="menu-item-prices"><span>₱130</span><span>₱140</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('SIGNATURE HOT CHOCOLATE', 140)">
                <div class="menu-item-name">SIGNATURE HOT CHOCOLATE <br> <small>Comforting hot chocolate that warms the heart.</small></div>
                <div class="menu-item-prices"><span>₱140</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('MILKY CHOCOLATE', 140)">
                <div class="menu-item-name">MILKY CHOCOLATE <br> <small>Classic Chocolate for the kids and kids at heart</small></div>
                <div class="menu-item-prices"><span>₱140</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('MILKY STRAWBERRY', 140)">
                <div class="menu-item-name">MILKY STRAWBERRY <br> <small>Creamy, chunky, beautiful and yummy strawberry drink.</small></div>
                <div class="menu-item-prices"><span>₱140</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('SPARKLY STRAWBERRY', 140)">
                <div class="menu-item-name">SPARKLY STRAWBERRY <br> <small>Our version of a Strawberry Refresher</small></div>
                <div class="menu-item-prices"><span>₱140</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('BERRY BLISS', 150)">
                <div class="menu-item-name">BERRY BLISS <br> <small>Creamy and refreshing drink made with blueberries and strawberries</small></div>
                <div class="menu-item-prices"><span>₱150</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('MANGO ICED TEA', 140)">
                <div class="menu-item-name">MANGO ICED TEA <br> <small>Mango twist to a classic favorite.</small></div>
                <div class="menu-item-prices"><span>₱140</span></div>
            </div>
            <h2>MATCHA SERIES</h2>
            <p>Made with our signature matcha, with the right balance of sweetness and natural flavors of matcha.</p>
            <div class="menu-item" onclick="addToCart('MATCHA LATTE', 170, 180)">
                <div class="menu-item-name">MATCHA LATTE</div>
                <div class="menu-item-prices"><span>₱170</span><span>₱180</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('KETO MATCHA', 175, 185)">
                <div class="menu-item-name">KETO MATCHA</div>
                <div class="menu-item-prices"><span>₱175</span><span>₱185</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('DIRTY MATCHA LATTE', 185, 195)">
                <div class="menu-item-name">DIRTY MATCHA LATTE <br> <small>Perfect mix of matcha and espresso & milk</small></div>
                <div class="menu-item-prices"><span>₱185</span><span>₱195</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('DIRTY KETO MATCHA', 190, 200)">
                <div class="menu-item-name">DIRTY KETO MATCHA <br> <small>Perfect mix of matcha and espresso over soy milk</small></div>
                <div class="menu-item-prices"><span>₱190</span><span>₱200</span></div>
            </div>
        </div>
        <div class="menu-section">
            <h2>ALTITUD SPECIALS</h2>
            <p>Carefully and creatively crafted by our baristas.</p>
            <div class="menu-item" onclick="addToCart('SUMMER HAZE', 170)">
                <div class="menu-item-name">SUMMER HAZE <br> <small>A drink that will remind you of bright summer days: espresso, orange, and strawberry.</small></div>
                <div class="menu-item-prices"><span>₱170</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('APPLE CINNAMON SHAKERATO', 140)">
                <div class="menu-item-name">APPLE CINNAMON SHAKERATO <br> <small>Best described as: if an apple pie was a drink.</small></div>
                <div class="menu-item-prices"><span>₱140</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('AVO-GATO', 135)">
                <div class="menu-item-name">AVO-GATO <br> <small>Our version of affogato - espresso over avocado ice cream</small></div>
                <div class="menu-item-prices"><span>₱135</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('SHAKERATO', 110)">
                <div class="menu-item-name">SHAKERATO <br> <small>Shaken, not stirred. Iced shaken espresso with a pinoy flair.</small></div>
                <div class="menu-item-prices"><span>₱110</span></div>
            </div>
            <div class="menu-item" onclick="addToCart('PASSION FRUIT AMERICANO', 1