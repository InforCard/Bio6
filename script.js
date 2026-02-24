
const primaryBtn = document.querySelector(".primary-btn");



primaryBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".contact").offsetTop,
    behavior: "smooth"
  });
});

function copyPhone() {
  const phone = "0986290964";

  navigator.clipboard.writeText(phone)
    .then(() => {
      alert("Đã sao chép số điện thoại!");
    })
    .catch(() => {
      alert("Không sao chép được!");
    });
}