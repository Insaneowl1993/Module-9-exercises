const { NekosAPI } = require("nekosapi");
 
const nekos = new NekosAPI();
 
// This will return an image with the `catgirl` category. If the `categories`
// argument is not specified, the image will be completely random (no specific
// categories).
nekos.getRandomImage((categories = ["catgirl"])).then((image) => {
    console.log(image.url);
});