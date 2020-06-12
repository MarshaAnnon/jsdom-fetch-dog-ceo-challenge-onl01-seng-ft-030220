console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", (e) => {
    fetchImages()
})
    
    function fetchImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            renderImages(json)
        })
    }
    function renderImages(images) {
        const messages = images["message"]
        messages.forEach(function(image) {
            postImage(imageHTML(image))
        })
    }

    function imageHTML(image) {
        const newImage = document.createElement("img")
        newImage.src = image
        return document.createElement("li").appendChild(newImage)
    }

    function postImage(image) {
        const imageContainer = document.getElementById("dog-image-container")
        imageContainer.appendChild(image)
    }
