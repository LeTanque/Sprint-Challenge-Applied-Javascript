// Your stretch challenge is to write the functionality of a Carousel component. 
// You have the HTML and CSS already in place, simply un-comment the HTML in the index.html file. 

//  If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.
//  Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.
//  If you have finished the above, play around with the styling on all the components, and understand how each is built.


class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log(this.carousel);
        
        
        // console.log(images);
        const carouselArr = Array.from(this.carousel).forEach( carouselItem => console.log(carouselItem) )
        // .map(element => new TabCard(element));
        // const images = this.carousel.forEach( image => console.log(image) );
        console.log(carouselArr);
        // this.images = carousel.querySelectorAll('img');
        
        



    }
}
let carousels = document.querySelectorAll('.carousel');
carousels.forEach( carousel => new Carousel(carousel) );




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/