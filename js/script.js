function generateDesign() {
  const prompt = document.getElementById("prompt").value.trim().toLowerCase();
  const image = document.getElementById("designImage");
  const list = document.getElementById("productList");

  if (!prompt) {
    alert("Please enter a fashion description");
    return;
  }

  // Loading effect
  image.src = "https://i.imgur.com/ZKZHM7R.gif";
  list.innerHTML = "<li>Loading suggestions...</li>";

  setTimeout(() => {
    image.src = "https://via.placeholder.com/400x500?text=AI+Fashion+Design";

    let products = [];

    if (prompt.includes("kurti")) {
      products = [
        "Printed Cotton Kurti – ₹699",
        "Ethnic Kurti – ₹799",
        "Daily Wear Kurti – ₹599"
      ];
    } 
    else if (prompt.includes("dress")) {
      products = [
        "Floral Summer Dress – ₹899",
        "Casual Dress – ₹799",
        "Party Wear Dress – ₹999"
      ];
    } 
    else {
      products = [
        "Casual Top – ₹499",
        "Stylish Outfit – ₹699",
        "Trending Wear – ₹899"
      ];
    }

    list.innerHTML = "";
    products.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

  }, 1000);
}
