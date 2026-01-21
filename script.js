// WhatsApp Configuration
const WHATSAPP_NUMBER = '923008562371'; // Pakistan WhatsApp number - Update with your actual number

// Product Data - Easy to add or edit products
const products = [
    {
        id: 1,
        name: 'Asmani Herbal Oil 100ml',
        price: 'PKR 500',
        priceValue: 500,
        image: 'herbal oil.jpeg',
        category: 'Oil'
    },
    {
        id: 2,
        name: 'Asmani Herbal Oil 200ml',
        price: 'PKR 700',
        priceValue: 700,
        image: 'herbal oil.jpeg',
        category: 'Oil'
    },
    {
        id: 3,
        name: 'Asmani Formula Beauty Cream',
        price: 'PKR 350',
        priceValue: 350,
        image: 'formula beauty cream.jpeg',
        category: 'Cream'
    },
    {
        id: 4,
        name: 'Asmani Acne Facewash',
        price: 'PKR 350',
        priceValue: 350,
        image: 'anti acne facewash.jpeg',
        category: 'Facewash'
    },
    {
        id: 5,
        name: 'Asmani Beauty Facewash',
        price: 'PKR 200',
        priceValue: 200,
        image: 'face wash.jpeg',
        category: 'Facewash'
    },
    {
        id: 6,
        name: 'Asmani Whitening Serum',
        price: 'PKR 450',
        priceValue: 450,
        image: 'urgent whitening serum.jpeg',
        category: 'Serum'
    }
];

// New Arrivals
const newArrivals = [
    {
        id: 7,
        name: 'Asmani Rice Facewash',
        price: 'PKR 350',
        priceValue: 350,
        image: 'rice facewash.jpeg',
        category: 'Facewash'
    },
    {
        id: 8,
        name: 'Asmani Beauty Soap',
        price: 'PKR 100',
        priceValue: 100,
        image: 'beauty soap.jpeg',
        category: 'Soap'
    },
    {
        id: 9,
        name: 'Asmani Acne Soap',
        price: 'PKR 150',
        priceValue: 150,
        image: 'anti acne soap.jpeg',
        category: 'Soap'
    },
    {
        id: 10,
        name: 'Asmani Neem Soap',
        price: 'PKR 200',
        priceValue: 200,
        image: 'neem soap.jpeg',
        category: 'Soap'
    },
    {
        id: 11,
        name: 'Asmani Black Shine Shampoo',
        price: 'PKR 300',
        priceValue: 300,
        image: 'black shine shampoo.jpeg',
        category: 'Shampoo'
    },
    {
        id: 12,
        name: 'Asmani Anti Dandruff Shampoo',
        price: 'PKR 300',
        priceValue: 300,
        image: 'anti dandruff shampoo.jpeg',
        category: 'Shampoo'
    },
    {
        id: 13,
        name: 'Asmani Rice Shampoo',
        price: 'PKR 350',
        priceValue: 350,
        image: 'rice shampoo.jpeg',
        category: 'Shampoo'
    },
    {
        id: 14,
        name: 'Asmani Piyaz Shampoo',
        price: 'PKR 320',
        priceValue: 320,
        image: 'piyaz shampoo.jpeg',
        category: 'Shampoo'
    },
    {
        id: 15,
        name: 'Asmani Baraf Shampoo',
        price: 'PKR 280',
        priceValue: 280,
        image: 'baraf shampoo.jpeg',
        category: 'Shampoo'
    },
    {
        id: 16,
        name: 'Asmani Aloe Vera Shampoo',
        price: 'PKR 330',
        priceValue: 330,
        image: 'aloevera shampoo.jpeg',
        category: 'Shampoo'
    },
    {
        id: 17,
        name: 'Asmani Herbal Baraf Spray',
        price: 'PKR 280',
        priceValue: 280,
        image: 'herbal baraf spray.jpeg',
        category: 'Spray'
    },
    {
        id: 18,
        name: 'Asmani Rice Skin Polish',
        price: 'PKR 350',
        priceValue: 350,
        image: 'rice skin polish.jpeg',
        category: 'Polish'
    },
    {
        id: 19,
        name: 'Asmani Hair Removal Cream Rose',
        price: 'PKR 400',
        priceValue: 400,
        image: 'hair removal cream rose.jpeg',
        category: 'Cream'
    },
    {
        id: 20,
        name: 'Asmani Hair Removal Cream Lemon',
        price: 'PKR 400',
        priceValue: 400,
        image: 'hair removal cream lemon.jpeg',
        category: 'Cream'
    },
    {
        id: 21,
        name: 'Asmani Moisturising Cold Cream',
        price: 'PKR 320',
        priceValue: 320,
        image: 'moisturising cold cream.jpeg',
        category: 'Cream'
    },
    {
        id: 22,
        name: 'Asmani Herbal Toothpaste',
        price: 'PKR 120',
        priceValue: 120,
        image: 'herbal toothpaste.jpeg',
        category: 'Toothpaste'
    },
    {
        id: 23,
        name: 'Asmani Herbal Tooth Powder',
        price: 'PKR 100',
        priceValue: 100,
        image: 'herbal tooth powder.jpeg',
        category: 'Tooth Powder'
    }
];

/**
 * Initialize the website when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Only run features that exist on the current page
    setupHamburgerMenu();

    if (document.getElementById('productsGrid')) {
        renderProducts();
    }
    if (document.getElementById('arrivalsGrid')) {
        renderNewArrivals();
    }
    if (document.getElementById('slidingCards')) {
        setupSlidingCards();
    }
    if (document.querySelector('.current-status')) {
        updateBroadcastStatus();
        setInterval(updateBroadcastStatus, 60000);
    }

    initReviewsPagination();
    initBackToTop();
    initNavbarProductSearch();
    initCheckoutPage();
});

function getAllProducts() {
    try {
        return [...(products || []), ...(newArrivals || [])];
    } catch (e) {
        return [];
    }
}

function normalizeName(value) {
    return String(value || '').trim().toLowerCase();
}

function readCart() {
    try {
        return JSON.parse(localStorage.getItem('asmaniCart')) || [];
    } catch (e) {
        return [];
    }
}

function writeCart(cart) {
    localStorage.setItem('asmaniCart', JSON.stringify(cart));
}

const INVOICE_CURRENT_KEY = 'asmaniInvoiceCurrent';

function getTodayStamp() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}${m}${day}`;
}

function createNewInvoice() {
    const stamp = getTodayStamp();
    const counterKey = `asmaniInvoiceCounter:${stamp}`;
    const next = (Number(localStorage.getItem(counterKey)) || 0) + 1;
    localStorage.setItem(counterKey, String(next));

    const invoiceNo = `AS-${stamp}-${String(next).padStart(4, '0')}`;
    const createdAt = new Date().toISOString();
    const invoice = { invoiceNo, createdAt, stamp, counter: next };
    localStorage.setItem(INVOICE_CURRENT_KEY, JSON.stringify(invoice));
    return invoice;
}

function getOrCreateInvoice() {
    const cart = readCart();
    if (!cart.length) {
        localStorage.removeItem(INVOICE_CURRENT_KEY);
        return null;
    }

    try {
        const existing = JSON.parse(localStorage.getItem(INVOICE_CURRENT_KEY));
        if (existing && existing.invoiceNo) return existing;
    } catch (e) {}

    return createNewInvoice();
}

function addToCartFromBuyNow(productName, quantity) {
    const qty = Math.max(1, Number(quantity) || 1);
    const all = getAllProducts();
    const targetName = normalizeName(productName);
    const product = all.find(p => normalizeName(p.name) === targetName);

    // If product not found in our data, fall back to WhatsApp directly.
    if (!product) {
        const message = encodeURIComponent(
            `Hi Asmani Cosmetics,\n\nI want to buy this product:\n\nProduct: ${productName}\n\nPlease confirm availability and share details. Thank you.`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        return;
    }

    const cart = readCart();
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.priceValue,
            priceDisplay: product.price,
            quantity: qty
        });
    }
    writeCart(cart);
    // Ensure this cart session has a bill number
    getOrCreateInvoice();
}

/**
 * Navbar product search (site-wide)
 * Filters visible product cards on the current page by product name/category.
 */
function initNavbarProductSearch() {
    const form = document.querySelector('.nav-search');
    const input = document.getElementById('navProductSearch');
    if (!form || !input) return;

    const applyFilter = (rawQuery) => {
        const query = (rawQuery || '').trim().toLowerCase();

        const cards = Array.from(document.querySelectorAll('.product-card'));
        if (cards.length === 0) return { total: 0, shown: 0 };

        let shown = 0;
        for (const card of cards) {
            const nameEl = card.querySelector('.product-name');
            const categoryEl = card.querySelector('.product-category');
            const name = (nameEl?.textContent || '').toLowerCase();
            const category = (categoryEl?.textContent || '').toLowerCase();

            const matches = !query || name.includes(query) || category.includes(query);
            card.style.display = matches ? '' : 'none';
            if (matches) shown += 1;
        }

        return { total: cards.length, shown };
    };

    const scrollToFirstMatch = () => {
        const first = document.querySelector('.product-card:not([style*="display: none"])');
        if (!first) return;
        first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const run = () => {
        const { total, shown } = applyFilter(input.value);
        if (total > 0 && shown > 0) scrollToFirstMatch();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const query = (input.value || '').trim();
        if (!query) {
            applyFilter('');
            return;
        }

        // If this page has no product grid/cards (e.g., checkout), redirect to Products page.
        if (document.querySelectorAll('.product-card').length === 0) {
            window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
            return;
        }

        // If products are rendered slightly later (shop page), retry briefly.
        run();
        if (document.querySelectorAll('.product-card').length === 0) {
            setTimeout(run, 250);
            setTimeout(run, 600);
        }
    });

    input.addEventListener('input', () => {
        applyFilter(input.value);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            input.value = '';
            applyFilter('');
            input.blur();
        }
    });

    // Support linking to a pre-filled search: page.html?q=cream
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
        input.value = q;
        // Try now and after paint (in case cards are created after DOMContentLoaded)
        applyFilter(q);
        setTimeout(() => applyFilter(q), 300);
    }
}

/**
 * Checkout / Bill page
 */
function initCheckoutPage() {
    const itemsTbody = document.getElementById('checkout-items');
    const summary = document.getElementById('checkout-summary');
    const empty = document.getElementById('checkout-empty');
    const tableWrap = document.getElementById('checkout-table-wrap');
    const meta = document.getElementById('checkout-meta');
    const addSelect = document.getElementById('checkout-add-product');
    const addQty = document.getElementById('checkout-add-qty');
    const addBtn = document.getElementById('checkout-add-btn');
    const waBtn = document.getElementById('checkout-whatsapp');
    const clearBtn = document.getElementById('checkout-clear');

    if (!itemsTbody || !summary || !empty || !tableWrap) return;

    const invoice = getOrCreateInvoice();
    const invoiceNo = invoice?.invoiceNo || createNewInvoice().invoiceNo;
    const dateStr = invoice?.createdAt ? new Date(invoice.createdAt).toLocaleString() : new Date().toLocaleString();
    if (meta) {
        meta.innerHTML = `<div><strong>Invoice:</strong> ${invoiceNo}</div><div><strong>Date:</strong> ${dateStr}</div>`;
    }

    const allProducts = getAllProducts();
    const formatMoney = (n) => `PKR ${Number(n || 0)}`;

    const rerender = () => {
        const cart = readCart();
        if (!cart.length) {
            localStorage.removeItem(INVOICE_CURRENT_KEY);
            empty.style.display = '';
            tableWrap.style.display = 'none';
            summary.style.display = 'none';
            if (waBtn) waBtn.disabled = true;
            return;
        }

        // Keep a stable invoice for this cart session
        getOrCreateInvoice();

        empty.style.display = 'none';
        tableWrap.style.display = '';
        summary.style.display = '';
        if (waBtn) waBtn.disabled = false;

        let subtotal = 0;
        let totalItems = 0;

        itemsTbody.innerHTML = cart.map(item => {
            const line = Number(item.price || 0) * Number(item.quantity || 0);
            subtotal += line;
            totalItems += Number(item.quantity || 0);

            return `
                <tr>
                    <td>${item.name}</td>
                    <td class="num">${item.priceDisplay || formatMoney(item.price)}</td>
                    <td class="num">
                        <div class="checkout-qty-controls">
                            <button class="checkout-qty-btn" type="button" data-action="dec" data-id="${item.id}" aria-label="Decrease">-</button>
                            <input class="checkout-qty-input" type="number" min="1" max="100" value="${item.quantity}" data-action="qty" data-id="${item.id}" aria-label="Quantity" />
                            <button class="checkout-qty-btn" type="button" data-action="inc" data-id="${item.id}" aria-label="Increase">+</button>
                        </div>
                    </td>
                    <td class="num">${formatMoney(line)}</td>
                    <td class="num">
                        <button class="checkout-remove" type="button" data-action="remove" data-id="${item.id}" aria-label="Remove">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        summary.innerHTML = `
            <div class="checkout-summary-row"><span>Items</span><span>${totalItems}</span></div>
            <div class="checkout-summary-row"><span>Subtotal</span><span>${formatMoney(subtotal)}</span></div>
            <div class="checkout-summary-row"><strong>Total</strong><strong>${formatMoney(subtotal)}</strong></div>
        `;
    };

    const updateQty = (id, newQty) => {
        const cart = readCart();
        const item = cart.find(i => String(i.id) === String(id));
        if (!item) return;
        const qty = Math.max(1, Math.min(100, Number(newQty) || 1));
        item.quantity = qty;
        writeCart(cart);
        rerender();
    };

    const removeItem = (id) => {
        const cart = readCart().filter(i => String(i.id) !== String(id));
        writeCart(cart);
        rerender();
    };

    tableWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;
        const action = btn.dataset.action;
        const id = btn.dataset.id;

        const cart = readCart();
        const item = cart.find(i => String(i.id) === String(id));
        if (!item) return;

        if (action === 'dec') updateQty(id, Number(item.quantity) - 1);
        if (action === 'inc') updateQty(id, Number(item.quantity) + 1);
        if (action === 'remove') removeItem(id);
    });

    tableWrap.addEventListener('change', (e) => {
        const input = e.target.closest('input[data-action="qty"]');
        if (!input) return;
        updateQty(input.dataset.id, input.value);
    });

    if (addSelect) {
        addSelect.innerHTML = allProducts
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(p => `<option value="${p.id}">${p.name} — ${p.price}</option>`)
            .join('');
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const id = Number(addSelect?.value);
            const qty = Math.max(1, Math.min(100, Number(addQty?.value) || 1));
            const product = allProducts.find(p => Number(p.id) === id);
            if (!product) return;

            const cart = readCart();
            const existingItem = cart.find(i => Number(i.id) === id);
            if (existingItem) existingItem.quantity += qty;
            else cart.push({ id: product.id, name: product.name, price: product.priceValue, priceDisplay: product.price, quantity: qty });

            writeCart(cart);
            if (addQty) addQty.value = '1';
            rerender();
        });
    }

    if (waBtn) {
        waBtn.addEventListener('click', () => {
            const cart = readCart();
            if (!cart.length) return;

            let message = 'Asmani Cosmetics - Bill / Order\n\n';
            message += `Invoice: ${invoiceNo}\n`;
            message += `Date: ${dateStr}\n\n`;
            message += 'Items:\n';

            let total = 0;
            for (const item of cart) {
                const line = Number(item.price || 0) * Number(item.quantity || 0);
                total += line;
                message += `- ${item.name} (x${item.quantity}) = PKR ${line}\n`;
            }

            message += `\nTotal: PKR ${total}\n`;
            message += '\nPlease confirm availability and delivery details. Thank you.';

            const encoded = encodeURIComponent(message);
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (!confirm('Clear all items from the bill?')) return;
            writeCart([]);
            localStorage.removeItem(INVOICE_CURRENT_KEY);
            rerender();
        });
    }

    rerender();
}

/**
 * Render top products to the products grid
 */
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

/**
 * Render new arrivals to the arrivals grid
 */
function renderNewArrivals() {
    const arrivalsGrid = document.getElementById('arrivalsGrid');
    if (!arrivalsGrid) return;
    arrivalsGrid.innerHTML = '';

    newArrivals.forEach(product => {
        const productCard = createProductCard(product);
        arrivalsGrid.appendChild(productCard);
    });
    
    // Reinitialize AOS for newly added elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/**
 * Create a product card element
 * @param {Object} product - Product object with id, name, price, image
 * @returns {HTMLElement} Product card element
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-offset', '100');
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button class="buy-button" onclick="handleBuyNow('${product.name}', '${product.price}')">Buy Now</button>
        </div>
    `;
    
    return card;
}

/**
 * Get product description based on product name
 * @param {string} productName - Name of the product
 * @returns {string} Product description
 */
function getProductDescription(productName) {
    const descriptions = {
        'Asmani Herbal Oil 100ml': 'Pure herbal oil enriched with natural ingredients. Perfect for daily skincare and hair nourishment. 100ml size for personal use.',
        'Asmani Herbal Oil 200ml': 'Larger 200ml bottle of premium herbal oil. Ideal for regular users and families. Contains natural herbs and botanical extracts.',
        'Asmani Formula Beauty Cream': 'Advanced formula cream that hydrates and nourishes skin. Suitable for all skin types. Gives a smooth and glowing complexion.',
        'Asmani Acne Cream': 'Specially formulated cream to treat acne and blemishes. Contains anti-bacterial ingredients. Reduces inflammation and redness.',
        'Asmani Beauty Facewash': 'Gentle daily facewash for all skin types. Removes dirt and impurities. Leaves skin fresh and rejuvenated.',
        'Asmani Acne Facewash': 'Targeted facewash for acne-prone skin. Helps control excess oil and bacteria. Prevents breakouts and promotes clear skin.',
        'Asmani Rice Facewash': 'Rice-enriched facewash with natural exfoliating properties. Removes dead skin cells gently. Brightens and evens skin tone.',
        'Asmani Beauty Soap': 'Natural beauty soap for daily bathing. Mild and moisturizing. Suitable for sensitive skin.',
        'Asmani Acne Soap': 'Medicated soap for acne-prone skin. Contains neem and tea tree oil. Antibacterial and anti-inflammatory.',
        'Asmani Neem Soap': 'Pure neem soap with natural antibacterial properties. Great for skin infections and itching. Healing and soothing.',
        'Asmani Black Shine Shampoo': 'Hair darkening shampoo that adds natural shine. Strengthens hair roots and reduces hair fall.',
        'Asmani Anti Dandruff Shampoo': 'Specially formulated to treat dandruff and scalp issues. Provides relief from itching and flaking. Keeps hair clean.',
        'Asmani Baraf Shampoo': 'Cooling shampoo with menthol extract. Refreshes scalp and provides relief from heat. Great for summer use.',
        'Asmani Piyaz Shampoo': 'Onion-enriched shampoo for hair growth and strength. Prevents hair loss and promotes thickness.',
        'Asmani Aloevera Shampoo': 'Aloe vera infused shampoo for gentle cleansing. Soothes scalp and adds moisture. Reduces frizz and breakage.',
        'Asmani Crack Cream': 'Specially formulated cream for cracked and dry heels. Moisturizing and healing formula. Repairs damaged skin.',
        'Asmani Hair Remover Tube Lemon': 'Hair removal cream with lemon extract. Safe and effective. Removes unwanted hair smoothly.',
        'Asmani Hair Remover Tube Rose': 'Hair removal cream with rose extract. Gentle on skin with pleasant fragrance. Easy to use tube format.',
        'Asmani Sun Block': 'SPF protection sun block cream. Protects skin from harmful UV rays. Prevents tanning and skin damage.',
        'Asmani Baraf Spray': 'Cooling spray for instant relief. Perfect for summers. Refreshing and long-lasting effect.',
        'Asmani Tooth Paste': 'Advanced tooth paste for daily oral care. Protects against cavities and tartar. Fresh minty flavor.',
        'Asmani Tooth Powder': 'Natural tooth powder for whitening. Contains herbal ingredients. Freshens breath naturally.',
        'Asmani Bleach': 'Gentle bleaching powder for facial bleaching. Safe and effective. Lightens facial hair and dark spots.'
    };
    
    return descriptions[productName] || 'Premium Asmani product for beauty and personal care. Enriched with natural ingredients.';
}

/**
 * Close product modal
 */
function closeProductModal() {
    const modals = document.querySelectorAll('.product-modal.show');
    modals.forEach(modal => modal.classList.remove('show'));
}

/**
 * Handle Buy Now button click - Redirect to WhatsApp
 * @param {string} productName - Name of the product
 * @param {string} productPrice - Price of the product
 */
function handleBuyNow(productName, productPrice) {
    // Add to cart and go to bill page
    addToCartFromBuyNow(productName, 1);
    window.location.href = 'checkout.html';
}

/**
 * Check if radio is currently broadcasting and show/hide indicator
 */
function updateBroadcastStatus() {
    // Get current time in Pakistan Time Zone (UTC+5)
    const now = new Date();
    const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: false };
    const pktTime = new Date(now.toLocaleString('en-US', options));
    const currentHour = pktTime.getHours();
    
    // Check if current time is between 7 PM (19:00) and 8 PM (20:00)
    const isBroadcastTime = currentHour >= 19 && currentHour < 20;
    
    const broadcastStatus = document.querySelector('.current-status');
    
    if (broadcastStatus) {
        if (isBroadcastTime) {
            broadcastStatus.style.display = 'block';
        } else {
            broadcastStatus.style.display = 'none';
        }
    }
}

/**
 * Setup sliding cards animation with hover reset
 */
function setupSlidingCards() {
    const slidingSection = document.querySelector('.sliding-section');
    const slidingCards = document.getElementById('slidingCards');
    
    if (!slidingSection || !slidingCards) return;
    
    let animationTimeout;
    
    slidingSection.addEventListener('mouseenter', function() {
        // Reset animation when hovering
        slidingCards.style.animation = 'none';
        slidingCards.style.transform = 'translateX(0)';
        
        // Clear any pending animation restart
        clearTimeout(animationTimeout);
    });
    
    slidingSection.addEventListener('mouseleave', function() {
        // Restart animation when hover ends
        animationTimeout = setTimeout(() => {
            slidingCards.style.animation = 'slide 30s linear infinite';
        }, 100);
    });
}

/**
 * Setup hamburger menu for mobile navigation
 */
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (!hamburger || !navMenu) return;

    // Prevent binding twice (some pages have extra inline scripts)
    if (hamburger.dataset.menuBound === '1') return;
    hamburger.dataset.menuBound = '1';

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

/**
 * Add new product to the products list
 * Usage: addProduct({name: 'Product Name', price: 'AED XXX', emoji: '🎀'})
 */
function addProduct(productData) {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    const newProduct = {
        id: newId,
        name: productData.name,
        price: productData.price,
        priceValue: parseInt(productData.price.match(/\d+/)[0]),
        emoji: productData.emoji,
        category: productData.category || 'other'
    };
    
    products.push(newProduct);
    renderProducts();
    console.log('Product added:', newProduct);
}

/**
 * Remove product from the products list by ID
 * Usage: removeProduct(1)
 */
function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        const removedProduct = products.splice(index, 1);
        renderProducts();
        console.log('Product removed:', removedProduct);
    }
}

/**
 * Update product details
 * Usage: updateProduct(1, {name: 'New Name', price: 'AED 100'})
 */
function updateProduct(productId, updatedData) {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex > -1) {
        products[productIndex] = { ...products[productIndex], ...updatedData };
        renderProducts();
        console.log('Product updated:', products[productIndex]);
    }
}

/**
 * Search products by name
 * Usage: searchProducts('Rose')
 */
function searchProducts(searchTerm) {
    const results = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Search results for "' + searchTerm + '":', results);
    return results;
}

/**
 * Filter products by category
 * Usage: filterByCategory('skincare')
 */
function filterByCategory(category) {
    const filtered = products.filter(p => p.category === category);
    console.log('Products in ' + category + ':', filtered);
    return filtered;
}

/**
 * Get highest and lowest priced products
 */
function getPricedProducts() {
    const sorted = [...products].sort((a, b) => a.priceValue - b.priceValue);
    return {
        cheapest: sorted[0],
        mostExpensive: sorted[sorted.length - 1]
    };
}

// Add smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/**
 * Back-to-top button (site-wide)
 */
function initBackToTop() {
    if (document.getElementById('backToTopBtn')) return;

    const btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.className = 'back-to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(btn);

    const toggle = () => {
        if (window.scrollY > 400) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    };

    toggle();
    window.addEventListener('scroll', toggle, { passive: true });
}

/**
 * Initialize reviews pagination
 */
function initReviewsPagination() {
    const reviewCards = document.querySelectorAll('.review-card');
    const paginationButtons = document.querySelectorAll('.pagination-btn');

    if (reviewCards.length === 0 || paginationButtons.length === 0) return;

    // Initially hide all reviews except first 5
    reviewCards.forEach((card, index) => {
        if (index >= 5) {
            card.style.display = 'none';
        }
    });

    // Set first button as active
    paginationButtons[0].classList.add('active');
}

/**
 * Change reviews page
 * @param {number} pageNumber - Page number to display (1-7)
 */
function changePage(pageNumber) {
    const reviewCards = document.querySelectorAll('.review-card');
    const paginationButtons = document.querySelectorAll('.pagination-btn');

    // Remove active class from all buttons
    paginationButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    const activeButton = document.querySelector(`.pagination-btn:nth-child(${pageNumber})`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Calculate start and end indices for this page
    const startIndex = (pageNumber - 1) * 5;
    const endIndex = startIndex + 5;

    // Show/hide reviews based on page
    reviewCards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add console info for developers
console.log('%c✨ Welcome to Asmani Cosmetics ✨', 'font-size: 20px; color: #E8B4C8; font-weight: bold;');
console.log('%cYou can manage products using these functions:', 'color: #D4AF37; font-weight: bold;');
console.log('addProduct({name: "...", price: "AED ...", emoji: "🎀"})');
console.log('removeProduct(productId)');
console.log('updateProduct(productId, {name: "...", price: "..."})');
console.log('searchProducts("term")');
console.log('filterByCategory("skincare")');
console.log('getPricedProducts()');
