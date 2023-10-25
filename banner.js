document.addEventListener("DOMContentLoaded", function () {
    var apiURL = "https://fortnite-api.com/v1/banners";
    var bannersElement = document.getElementById("bannerImage");
    var previousButton = document.getElementById("previousButton");
    var nextButton = document.getElementById("nextButton");

    var banners = [];
    var currentIndex = 0;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiURL, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            banners = data.data;
            displayBanner(currentIndex);

            previousButton.addEventListener("click", function () {
                currentIndex = (currentIndex - 1 + banners.length) % banners.length;
                displayBanner(currentIndex);
            });

            nextButton.addEventListener("click", function () {
                currentIndex = (currentIndex + 1) % banners.length;
                displayBanner(currentIndex);
            });
        } else {
            bannersElement.innerHTML = "Error al obtener los datos. Código de estado: " + xhr.status;
        }
    };

    xhr.send();

    function displayBanner(index) {
        bannersElement.src = banners[index].images.icon;
    }
});
