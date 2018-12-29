// RANDOM QUOTE GENERATOR - STEPHEN PARKER 
// Study Guide: https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view 
// Checklist: http://treehouse-techdegree.s3.amazonaws.com/Student-Project-Submission-Checklist.pdf

/* 
Langages Used:
1. HTML
2. CSS
3. JavaScript

Additional Process Thoughts:
- If I were to expand more on this project my idea would be to use a *Python* script to scrape the date from the quotes URL listed below. 
- Then convert that information into a JSON file that would then be populated into the 'quotes' array
- I believe this idea is sound, and an even better way to scrape through data & gather 100 quotes from the URL 
- That would eliminate a lot of typing, because adding 100 quotes manually would be grueling! 
- Unfortunately, that augmented progress is a bit out of the scope of my current knowledge, or at least it would take me much, much, much longer to complete. 

*/

// QUOTES
// These quotes were taken from the following website: https://pakwired.com/100-best-quotes-time/

var quotes = [{
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi",
    citation: 'Unknown',
    year: 1960,
    tags: 'Humanity'
  },
  {
    quote: "That which does not kill us makes us stronger.",
    source: "Friedrich Nietzsche",
    citation: 'Unknown',
    year: 1800,
    tags: 'Philosophy'
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    source: "Theodore Roosevelt",
    citation: 'Unknown',
    year: 1985,
    tags: 'Personal'
  },
  {
    quote: "The difference between ordinary and extraordinary is that little extra.",
    source: "Jimmy Johnson",
  },
  {
    quote: "Imagination is everything. It is the preview of life’s coming attractions.",
    source: "Albert Einstein",
    tags: 'Personal'
  },
  {
    quote: "Too many of us are not living our dreams because we are living our fears.",
    source: "Les Brown",
    year: 1900
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    source: "Wayne Gretzky",
    tags: 'Sports'
  },
];


/* 

RANDOM QUOTE FUNCTION

Explanation:
- This function generates a random number, which allows a random quote to be grabbed from the 'quotes' array, and objects.  
- The number than accesses the elements (which are objects) of the quote array
- The final act in this function returns the array with an index of the 'randomNumber' value, which was a random number
- Originally, I had this formatted the random function as Math.floor(Math.random() * 5) due to the fact that I had 5 elements in the array
- But then I realized that if I were add more elements (which I tested by adding 2 more quotes), then I'd have to change the '5' to '7'. 
- In order to keep everything smooth and functional I changed this element to Math.floor(Math.random() * (array.length)) which allowed the program to run beautifully
- This change will help in the future so that I can make sure if we had 100+ elements, everything would still run like it's supposed to

*/

function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * (array.length));
  return array[randomNumber];

}

/* 

PRINTING QUOTE

Explanation:
- The printQuote function allow grabs the information from the getRandomQuote function and populates that information into a variable. 
- That variable is then used to add information to a string, which is initiated as an empty string, then later populated with this info
- I added a few conditional statements that check to see if citation, year, and tags are 'true' and if they are, it prings additional info to the webpage. 
- If it is NOT true, then the program will only print the original item 
- I made sure and close the <p> tag by adding that information (string += '</p>') to the function BEFORE adding that information to the DOM element

*/

function printQuote() {
  var quote = getRandomQuote(quotes);
  var string = '';
  string += '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source;
  if (quote.citation) {
    string += '<span class="citation">' + quote.citation + ' </span>';
  }

  if (quote.year) {
    string += '<span class="year">' + quote.year + '</span>';
  }

  if (quote.tags) {
    string += '<span class="tag"> | Category: ' + quote.tags + '</span>';
  }

  string += '</p>';
  document.getElementById('quote-box').innerHTML = string;


}

/*

CHANGE BACKGROUND COLOR ON-CLICK

Explanation:

Part 1:
- Created a backgroundRandom function that will generate the numbers for the 'rgb()' syntax that allows the CSS style property to be altered. 
- These values were generated by using the following method: Math.floor(Math.random() * 256)
- These are then stored to three different variables r, g, and b. 
- Those three values are then concatenated into a string, that's within a variable called 'finalColor', which was 'returned' at the end of the function

Part 2: 
- The second function (changeBackground) is relatively straightforward
- It runs the backgroundRandom() function and that result is stored to the newColor variable
- Finally, in this function, there's CSS modifier that changes the background color to the newColor value 

*/

function backgroundRandom() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var finalColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  return finalColor;
}

function changeBackground() {
  var newColor = backgroundRandom();
  document.body.style.background = newColor;
}

/*

QUOTE ONCLICK FUNCTIONS

Explanation
- These two document. functions exist to have onClick methods for the "Show Another Quote" button on the DOM 
- I added an additional document.getElementById function to the bottom that allowed the background to be changed by clicking the 'Show another quote' buttons
- 

*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeBackground, false);