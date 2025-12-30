// ============================================
// PRELOVED BY RISHA - MAIN JAVASCRIPT
// ============================================

// Sample product data - EDIT DI SINI UNTUK TAMBAH/UBAH PRODUK
const products = [
    { 
        id: 1, 
        name: "Kalung Mutiara Elegant", 
        price: "Rp 250.000", 
        category: "accessories", 
        image: "images/accessories-1.jpg" 
    },
    { 
        id: 2, 
        name: "Tas Gucci Vintage", 
        price: "Rp 3.500.000", 
        category: "luxury-bag", 
        image: "images/luxury-1.jpg" 
    },
    { 
        id: 3, 
        name: "Sepatu Boots Kulit", 
        price: "Rp 850.000", 
        category: "shoes", 
        image: "images/shoes-1.jpg" 
    },
    { 
        id: 4, 
        name: "Jeans Denim Wash", 
        price: "Rp 350.000", 
        category: "denim", 
        image: "images/denim-1.jpg" 
    },
    { 
        id: 5, 
        name: "Blazer Classic Navy", 
        price: "Rp 550.000", 
        category: "outterwear", 
        image: "images/outterwear-1.jpg" 
    },
    { 
        id: 6, 
        name: "Gelang Emas 18K", 
        price: "Rp 1.200.000", 
        category: "accessories", 
        image: "images/accessories-2.jpg" 
    },
    { 
        id: 7, 
        name: "Tas Louis Vuitton", 
        price: "Rp 5.800.000", 
        category: "luxury-bag", 
        image: "images/luxury-2.jpg" 
    },
    { 
        id: 8, 
        name: "Sneakers Branded", 
        price: "Rp 650.000", 
        category: "shoes", 
        image: "images/shoes-2.jpg" 
    },
    { 
        id: 9, 
        name: "Jaket Denim Vintage", 
        price: "Rp 450.000", 
        category: "denim", 
        image: "images/denim-2.jpg" 
    },
    { 
        id: 10, 
        name: "Cardigan Rajut Premium", 
        price: "Rp 380.000", 
        category: "outterwear", 
        image: "images/outterwear-2.jpg" 
    },
    { 
        id: 11, 
        name: "Anting Mutiara", 
        price: "Rp 180.000", 
        category: "accessories", 
        image: "images/accessories-3.jpg" 
    },
    { 
        id: 12, 
        name: "Tas Chanel Flap", 
        price: "Rp 8.200.000", 
        category: "luxury-bag", 
        image: "images/luxury-3.jpg" 
    }
];

// DOM Elements
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const filterButtons = document.querySelectorAll('.filter-btn');
const productsGrid = document.getElementById('productsGrid');

// ============================================
// HEADER SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ============================================
// RENDER PRODUCTS FUNCTION
// ============================================
function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        // Category label text
        let categoryLabel = '';
        switch(product.category) {
            case 'accessories': categoryLabel = 'Accessories'; break;
            case 'luxury-bag': categoryLabel = 'Luxury Bag'; break;
            case 'shoes': categoryLabel = 'Shoes'; break;
            case 'denim': categoryLabel = 'Denim'; break;
            case 'outterwear': categoryLabel = 'Outterwear'; break;
        }
        
        // Check if image exists, otherwise show placeholder icon
        let imageContent = '';
        let iconClass = '';
        
        switch(product.category) {
            case 'accessories': iconClass = 'fas fa-gem'; break;
            case 'luxury-bag': iconClass = 'fas fa-briefcase'; break;
            case 'shoes': iconClass = 'fas fa-shoe-prints'; break;
            case 'denim': iconClass = 'fas fa-tshirt'; break;
            case 'outterwear': iconClass = 'fas fa-vest'; break;
        }
        
        // If you have images, use this:
        // imageContent = `<img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'250\'><rect width=\'100%\' height=\'100%\' fill=\'%23f5f5f5\'/><text x=\'50%\' y=\'50%\' font-family=\'Arial\' font-size=\'20\' fill=\'%23a2836e\' text-anchor=\'middle\' dominant-baseline=\'middle\'>${product.name}</text></svg>'" />`;
        
        // For placeholder with icon (use this if no images yet):
        imageContent = `<i class="${iconClass}"></i>`;
        
        productCard.innerHTML = `
            <div class="product-img">
                ${imageContent}
                <div class="product-category">${categoryLabel}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// ============================================
// FILTER PRODUCTS BY CATEGORY
// ============================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter products
        const filter = button.getAttribute('data-filter');
        renderProducts(filter);
    });
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INITIALIZE PAGE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// ============================================
// HELPER FUNCTIONS (optional)
// ============================================

// Function to add new product (call this from browser console if needed)
function addNewProduct(name, price, category, image) {
    const newId = products.length + 1;
    products.push({
        id: newId,
        name: name,
        price: price,
        category: category,
        image: image
    });
    renderProducts();
    console.log(`Product "${name}" added successfully!`);
}

// Function to update product price
function updateProductPrice(productId, newPrice) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.price = newPrice;
        renderProducts();
        console.log(`Product ID ${productId} price updated to ${newPrice}`);
    } else {
        console.log(`Product with ID ${productId} not found`);
    }
}