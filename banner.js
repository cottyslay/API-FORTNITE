document.addEventListener("DOMContentLoaded", function () {
    var apiURL = "https://fortnite-api.com/v1/banners";
    var bannersElement = document.getElementById("bannerImage");
    var randomButton = document.getElementById("randomButton");

    var banners = [];

    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiURL, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            banners = data.data;

            randomButton.addEventListener("click", function () {
                var randomIndex = Math.floor(Math.random() * banners.length);
                displayBanner(randomIndex);
            });
        } else {
            bannersElement.innerHTML = "Error al obtener los datos. CÃ³digo de estado: " + xhr.status;
        }
    };

    xhr.send();

    function displayBanner(index) {
        bannersElement.src = banners[index].images.icon;
    }
});
