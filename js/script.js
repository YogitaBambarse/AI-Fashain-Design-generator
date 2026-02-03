function generateDesign() {
  const prompt = document.getElementById("prompt").value.trim();
  if (!prompt) {
    alert("Please enter a fashion description");
    return;
  }

  document.getElementById("designImage").src =
    "https://via.placeholder.com/400x500?text=AI+Generated+Design";

  const products = [
    "Floral Dress – ₹799",
    "Cotton Kurti – ₹699",
    "Casual Top – ₹499"
  ];

  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    list.appendChild(li);
  });
}
