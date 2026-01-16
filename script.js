// script.js

// 1. Paste your 100 quotes here
const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
{ text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
{ text: "Happiness depends upon ourselves.", author: "Aristotle" },
{ text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
{ text: "Dream big and dare to fail.", author: "Norman Vaughan" },
{ text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
{ text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
{ text: "Everything you can imagine is real.", author: "Pablo Picasso" },
{ text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
{ text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },

{ text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
{ text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
{ text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
{ text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
{ text: "Try not to become a person of success, but a person of value.", author: "Albert Einstein" },
{ text: "Turn your dreams into plans.", author: "Unknown" },
{ text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
{ text: "Act as if what you do makes a difference. It does.", author: "William James" },
{ text: "Where there is love there is life.", author: "Mahatma Gandhi" },
{ text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },

{ text: "What we think, we become.", author: "Buddha" },
{ text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
{ text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
{ text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
{ text: "Life is either a daring adventure or nothing.", author: "Helen Keller" },
{ text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
{ text: "To live is the rarest thing in the world.", author: "Oscar Wilde" },
{ text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
{ text: "The best way out is always through.", author: "Robert Frost" },
{ text: "Peace begins with a smile.", author: "Mother Teresa" },

{ text: "An unexamined life is not worth living.", author: "Socrates" },
{ text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
{ text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
{ text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
{ text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
{ text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
{ text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
{ text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
{ text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
{ text: "Do what you love and the money will follow.", author: "Marsha Sinetar" },

{ text: "Time is the most valuable thing a man can spend.", author: "Theophrastus" },
{ text: "Courage is resistance to fear, mastery of fear.", author: "Mark Twain" },
{ text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
{ text: "Do not pray for an easy life; pray for the strength to endure a difficult one.", author: "Bruce Lee" },
{ text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
{ text: "If you tell the truth, you don’t have to remember anything.", author: "Mark Twain" },
{ text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
{ text: "Kindness is a language which the deaf can hear and the blind can see.", author: "Mark Twain" },
{ text: "Limit your ‘always’ and your ‘nevers’.", author: "Amy Poehler" },
{ text: "Light tomorrow with today.", author: "Elizabeth Barrett Browning" },

{ text: "Small deeds done are better than great deeds planned.", author: "Peter Marshall" },
{ text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
{ text: "We become what we think about.", author: "Earl Nightingale" },
{ text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
{ text: "If you can dream it, you can do it.", author: "Walt Disney" },
{ text: "Nothing is impossible, the word itself says ‘I’m possible’.", author: "Audrey Hepburn" },
{ text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
{ text: "A room without books is like a body without a soul.", author: "Cicero" },
{ text: "Knowledge is power.", author: "Francis Bacon" },
{ text: "Well done is better than well said.", author: "Benjamin Franklin" },

{ text: "Lost time is never found again.", author: "Benjamin Franklin" },
{ text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
{ text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
{ text: "He that can have patience can have what he will.", author: "Benjamin Franklin" },
{ text: "Early to bed and early to rise makes a man healthy, wealthy, and wise.", author: "Benjamin Franklin" },

{ text: "The best revenge is massive success.", author: "Frank Sinatra" },
{ text: "Life is short, and it’s up to you to make it sweet.", author: "Sarah Louise Delany" },
{ text: "A mind is like a parachute. It doesn’t work if it isn’t open.", author: "Frank Zappa" },
{ text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
{ text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },

{ text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
{ text: "Even if you’re on the right track, you’ll get run over if you just sit there.", author: "Will Rogers" },
{ text: "The harder the conflict, the greater the triumph.", author: "George Washington" },
{ text: "Associate with men of good quality if you esteem your own reputation.", author: "George Washington" },
{ text: "Liberty, when it begins to take root, is a plant of rapid growth.", author: "George Washington" },

{ text: "You cannot shake hands with a clenched fist.", author: "Indira Gandhi" },
{ text: "A person who has never known pain has never truly lived.", author: "Indira Gandhi" },
{ text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
{ text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
{ text: "Silence becomes cowardice when occasion demands speaking.", author: "Mahatma Gandhi" },

{ text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
{ text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
{ text: "Laughter is timeless, imagination has no age, dreams are forever.", author: "Walt Disney" },
{ text: "First, think. Second, believe. Third, dream. And finally, dare.", author: "Walt Disney" },
{ text: "If you can’t say something nice, don’t say nothing at all.", author: "Thumper (Bambi)" },

{ text: "The world is a book, and those who do not travel read only one page.", author: "Saint Augustine" },
{ text: "Hope is a waking dream.", author: "Aristotle" },
{ text: "Patience is bitter, but its fruit is sweet.", author: "Aristotle" },
{ text: "Pleasure in the job puts perfection in the work.", author: "Aristotle" },
{ text: "Educating the mind without educating the heart is no education at all.", author: "Aristotle" },

{ text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
{ text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
{ text: "Make the most of yourself, for that is all there is of you.", author: "Ralph Waldo Emerson" },
{ text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
{ text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },

{ text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
{ text: "Impossible is for the unwilling.", author: "John Keats" },
{ text: "Shine like the whole universe is yours.", author: "Rumi" },
{ text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi" },
{ text: "Let yourself be silently drawn by the strange pull of what you really love.", author: "Rumi" }
// ... add the rest of your 100 quotes here
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
    // Generate a random index based on the length of the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Select the quote object
    const selectedQuote = quotes[randomIndex];

    // Update the UI
    quoteText.innerText = `"${selectedQuote.text}"`;
    quoteAuthor.innerText = `- ${selectedQuote.author}`;
}

// Event listener for button
newQuoteBtn.addEventListener('click', getRandomQuote);

// Generate one immediately when the app opens
getRandomQuote();