


// JavaScript code goes here

// Sample characters data (you can replace this with actual character data)
const characters = [
    {
        name: "Naruto Uzumaki",
        quote: "Hard work is worthless for those that don’t believe in themselves."
        // Add more character details here
    },
    {    
        name:"Uchiha Madara",
        quote:"Balance is what keeps the world going."
    },
    {    
        name:"Uchiha Itachi",
        quote:"It is foolish to fear what we have yet to see and know."
    },
    {    
        name:"Uchiha Sasuke",
        quote:"This is the path I walk. Not you or anyone can change that."
    },
    {    
        name:"Jiraya",
        quote:"A tale is only good as it's final turn of events. A plot twist. And mistakes are important part of a plot, too."
    },
    {    
        name:"Minato Namikaze",
        quote:"If a man hasn’t discovered something that he will die for, he isn’t fit to live."
    },
    {    
        name:"Uchiha Obito",
        quote:"The moment people come to know love, they run the risk of carrying hate."
    },
    {    
        name:"Orochimaru",
        quote:"It's Human nature not to realize something,unless they lose it."
    },
    {    
        name:"Onoki",
        quote:"Never give up without even trying. Do what you can, no matter how small the effect it may have!"
    },
    {    
        name:"Sakura Haruna",
        quote:"Every one of us must do what’s in their power! If we’re going to die anyway, then it’s better to die fighting than to do nothing!</q>– Haruna Sakura"
    },
    {    
        name:"Nagato",
        quote:"If you don’t share someone’s pain, you can never understand them."
    },
]
    

// Function to change wallpaper and display character quote
function changeWallpaper(characterId) {
    const character = characters[characterId - 1];
    const quoteSection = document.getElementById("quote-section");
    const centerDiv = document.querySelector(".center");
    if (character) {
        quoteSection.style.backgroundImage = `url(Photos/${character.name.toLowerCase().split(' ').join('')}.jpeg)`;
        centerDiv.innerHTML = `<p><q>${character.quote}</q> – ${character.name}</p>`;
    } else {
        // Handle error if character data is not available
        centerDiv.innerHTML = "<p>Character data not found.</p>";
    }
}

// Add event listeners for navigation links to change wallpapers
const navLinks = document.querySelectorAll("nav ul li");
navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        changeWallpaper(index + 1);
    });
});
