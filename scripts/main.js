const myImage = document.getElementById("special-liveries")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/b777-ba-great-festival-of-creativity_livery.jpg") {
        myImage.setAttribute("src", "images/b777-latam-star-wars-livery.jpg")
    } else {
        myImage.setAttribute("src", "images/b777-ba-great-festival-of-creativity_livery.jpg")
    }
};

