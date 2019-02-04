// // Notes
// div[data-school='Lambda']{
//   /* CSS Style rules here */
// }
// const school = document.querySelector('.school');
// const schoolName = school.dataset.school;


//  Your finished project must include all of the following requirements:
// 
//  Look through the HTML code paying particular attention to the Tabs component 
//  and the Cards components. You will notice they share a data attribute. We will 
//  be using this data attribute to determine which cards should show when each tab is selected.

//  Following the instructions in the Tabs.js file, complete the TabLink, and TabCard 
//  class components. It will look and feel very similar to the last project we worked on, but 
//  with a twist. Now, instead of one Item to display, we will need to display a collection of Cards. 
//  Think about ways to iterate over an array and manipulate each item. Note: You will need to 
//  un-comment the code after the lines of instructions. The code is commented out so you can work error-free

//  Once you get your Tab component working properly add a couple more articles yourself and check out how it works.



class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    
    
    // We need to find out if a user clicked 'all' cards or a specific category.  
    // Follow the instructions below to accomplish this task:    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${tabElement.dataset.tab}']`);
    }
    
    // Map over the newly converted NodeList we just created in our if statement above. 
    // Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(element => new TabCard(element));

    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
    this.tabElement.addEventListener('click', () => this.selectTab() );
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach( tab => tab.classList.remove('active-tab') );
    
    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach( card => card.classList.add('display-none') );
    cards.forEach( card => card.classList.remove('display-flex') );

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. 
    // Just un-comment the code and study what is happening here.
    this.cards.forEach( card => card.selectCard() );
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    this.cardElement.classList.remove('display-none');
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.classList.add('display-flex');
  }

}

/* START HERE: 
- Select all classes named ".tab" and assign that value to the tabs variable
- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
*/
let tabs = document.querySelectorAll('.tab');
tabs.forEach( tab => new TabLink(tab) );


