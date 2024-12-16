const platformItems = document.querySelectorAll(".platform-item");
const platformImages = document.querySelectorAll(".platform-image");

platformItems.forEach((item) => {
  item.addEventListener("click", () => {
    const platform = item.dataset.platform;
    platformImages.forEach((img) => {
      img.classList.remove("active");
      if (img.dataset.platform === platform) {
        img.classList.add("active");
      }
    });
  });
});