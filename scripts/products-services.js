// products-services.js

// Create dropdown HTML
const dropdownHTML = `
<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-btn {
        background: #2d6cdf;
        color: #fff;
        padding: 12px 20px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        border-radius: 4px;
        transition: background 0.2s;
    }
    .dropdown-btn:hover {
        background: #1a4fa3;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background: #fff;
        min-width: 200px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        border-radius: 4px;
        overflow: hidden;
        z-index: 1;
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s, transform 0.3s;
    }
    .dropdown-content.show {
        display: block;
        opacity: 1;
        transform: translateY(0);
    }
    .dropdown-content a {
        color: #2d6cdf;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        transition: background 0.2s;
    }
    .dropdown-content a:hover {
        background: #f1f1f1;
    }
</style>
<div class="dropdown">
    <button class="dropdown-btn">Products & Services ▼</button>
    <div class="dropdown-content">
        <a href="#">Welfare</a>
        <a href="#">Self-Reliance</a>
        <a href="#">Education</a>
        <a href="#">Employment</a>
        <a href="#">Family Services</a>
        <a href="#">Humanitarian</a>
    </div>
</div>
`;

// Insert dropdown into the page (customize selector as needed)
document.addEventListener('DOMContentLoaded', () => {
    // Append to body or a specific container
    document.body.insertAdjacentHTML('afterbegin', dropdownHTML);

    const btn = document.querySelector('.dropdown-btn');
    const content = document.querySelector('.dropdown-content');

    btn.addEventListener('click', () => {
        content.classList.toggle('show');
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !content.contains(e.target)) {
            content.classList.remove('show');
        }
    });
});