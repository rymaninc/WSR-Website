const menuItems = [
    { name: "Home", link: "index.html" },
    { name: "About", link: "about.html" },
    { name: "Products & Services", link: "products-services.html" },
    { name: "Success Stories", link: "success-stories.html" },
    { name: "Contact", link: "contact.html" }
];

// Create menu container
const menu = document.createElement('nav');
menu.style.display = 'flex';
menu.style.gap = '20px';
menu.style.background = '#f8f8f8';
menu.style.padding = '10px';

// Helper to style items
function styleItem(item) {
    item.style.padding = '8px 16px';
    item.style.cursor = 'pointer';
    item.style.borderRadius = '4px';
    item.style.transition = 'background 0.2s';
}

// Build menu items
menuItems.forEach(({ name, link }) => {
    const item = document.createElement('a');
    item.textContent = name;
    item.href = link;
    styleItem(item);

    // Mouse over effect
    item.addEventListener('mouseover', () => {
        item.style.background = '#e0e0e0';
    });
    item.addEventListener('mouseout', () => {
        item.style.background = '';
    });

    // Click effect
    item.addEventListener('mousedown', () => {
        item.style.background = '#bdbdbd';
    });
    item.addEventListener('mouseup', () => {
        item.style.background = '#e0e0e0';
    });

    menu.appendChild(item);
});

// Add menu to document
document.addEventListener('DOMContentLoaded', () => {
    document.body.prepend(menu);
});