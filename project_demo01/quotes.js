
  const motivational_quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Success is walking from failure to failure with no loss of enthusiasm. — Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Dream big and dare to fail. — Norman Vaughan",
    "The secret of getting ahead is getting started. — Mark Twain",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Hustle until your haters ask if you’re hiring.",
    "The best way to predict the future is to create it. — Peter Drucker",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
    "Push yourself, because no one else is going to do it for you.",
    "The difference between ordinary and extraordinary is that little extra. — Jimmy Johnson",
    "Your potential is endless. Go get what you deserve.",
    "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    "Success doesn’t come from what you do occasionally; it comes from what you do consistently.",
    "The only way to achieve the impossible is to believe it is possible. — Charles Kingsleigh",
    "Every accomplishment starts with the decision to try. — John F. Kennedy"
]

function generat(){
const ele=document.getElementById("root");
const idx= Math.floor(Math.random()*motivational_quotes.length);
 ele.textContent=motivational_quotes[idx];
}

setInterval(generat,3000);