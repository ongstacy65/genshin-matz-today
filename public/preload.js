const images = ["https://vignette.wikia.nocookie.net/gensin-impact/images/4/46/Item_Philosophies_of_%22Ballad%22.png/revision/latest?cb=20200715011445", "https://vignette.wikia.nocookie.net/gensin-impact/images/d/d5/Item_Philosophies_of_%22Diligence%22.png/revision/latest?cb=20200715011548", "https://vignette.wikia.nocookie.net/gensin-impact/images/4/47/Item_Philosophies_of_%22Freedom%22.png/revision/latest?cb=20200715011355", "https://vignette.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Philosophies_of_%22Gold%22.png/revision/latest?cb=20200715011655", "https://vignette.wikia.nocookie.net/gensin-impact/images/9/98/Item_Philosophies_of_%22Prosperity%22.png/revision/latest?cb=20200715011515", "https://vignette.wikia.nocookie.net/gensin-impact/images/1/14/Item_Philosophies_of_%22Resistance%22.png/revision/latest?cb=20200715011426"]

const preloadImage = href => {
    const preloadLink = document.createElement("link");
    preloadLink.href = href
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    document.head.appendChild(preloadLink);
}

images.forEach(image => preloadImage(image))