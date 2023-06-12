const header = document.querySelector(".header");
const cardContainer = document.querySelector(".card-container");
const sliderContainer = document.querySelector(".card-container");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const title = document.querySelector(".title");
const fragment = document.createDocumentFragment();
const templatePremieres = document.querySelector("#template-premieres").content;

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const actualDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let formatDate = year + "-" + month + "-" + day;
    return formatDate;
  };

  const getPremieres = async () => {
    const apiKey = "YourAPIKEY";
    const fechaActual = actualDate();
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=${fechaActual}&sort_by=primary_release_date.asc?&language=es`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const premieres = data.results;

      printData(premieres);

      let scrollAmount = 0;
      const cardWidth = document.querySelector(".card").offsetWidth;
      const scrollStep = cardWidth + 12; // Ajusta el espacio entre las cards según sea necesario

      prevButton.addEventListener("click", () => {
        scrollAmount -= scrollStep;
        sliderContainer.scroll(scrollAmount, 0);
      });

      nextButton.addEventListener("click", () => {
        scrollAmount += scrollStep;
        sliderContainer.scroll(scrollAmount, 0);
      });

      sliderContainer.addEventListener("scroll", () => {
        if (sliderContainer.scrollLeft > 0) {
          title.classList.add("fixed-title");
        } else {
          title.classList.remove("fixed-title");
        }
      });


    } catch (error) {
      console.log(error);
    }
  };

  const printData = (data) => {
    data.forEach((movie) => {
      if (movie.poster_path !== null) {
        templatePremieres.querySelector(
          "figcaption"
        ).textContent = `Estreno: ${movie.release_date}`;
        templatePremieres
          .querySelector("img")
          .setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          );
        templatePremieres
          .querySelector("img")
          .setAttribute("alt", `${movie.title}`);

        const clone = templatePremieres.cloneNode(true);
        fragment.appendChild(clone);
      }
    });

    cardContainer.appendChild(fragment);
  };

  getPremieres();

});
