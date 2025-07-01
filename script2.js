const form = document.getElementById("driverForm");
const response = document.getElementById("responseMsg");
const toggleBtn = document.getElementById("toggleLanguage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const entries = Object.fromEntries(data.entries());

  console.table(entries); // for developer debugging

  response.textContent = "✅ Registration successful! We’ll contact you soon.";

  setTimeout(() => {
    alert("✅ Registration successful! We’ll contact you soon.");
  }, 100);

  form.reset();
});

toggleBtn.addEventListener("click", function () {
  const labels = document.querySelectorAll(".input-group label");
  const h2 = document.querySelector("h2");

  if (toggleBtn.textContent.includes("हिंदी में देखिए")) {
    h2.textContent = "🚖 ड्राइवर के रूप में पंजीकरण करें | बसएनटैक्सी";
    toggleBtn.textContent = "🌐 Translate to English";
    labels[0].textContent = "पूरा नाम";
    labels[1].textContent = "फ़ोन नंबर";
    labels[2].textContent = "ईमेल पता";
    labels[3].textContent = "ड्राइविंग लाइसेंस नंबर";
    labels[4].textContent = "वाहन का प्रकार";
    labels[5].textContent = "शहर";
  } else {
    h2.textContent = "🚖 Register as a Driver | BusnTaxi";
    toggleBtn.textContent = "🌐 Translate to Hindi";
    labels[0].textContent = "Full Name";
    labels[1].textContent = "Phone Number";
    labels[2].textContent = "Email Address";
    labels[3].textContent = "Driving License No.";
    labels[4].textContent = "Vehicle Type (e.g. Sedan, Bus)";
    labels[5].textContent = "City of Operation";
  }
});