// Product array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" }
];

// Populate product select field
const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // ID as value
    option.textContent = product.name; // Name as display text
    productSelect.appendChild(option);
});