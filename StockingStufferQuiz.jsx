"use client";

import React, { useState } from "react";
import { Gift, Sparkles, Heart, Share2, Mail, Lock } from "lucide-react";

const StockingStufferQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const questions = [
  {
    id: 1,
    question: "How does she typically spend her free time?",
    options: [
      { text: "Reading a book with tea or coffee", type: "bookLover" },
      { text: "At the gym or out for a run", type: "athletic" },
      { text: "Taking a long bath or doing skincare", type: "spaLover" },
      { text: "In cozy PJs watching her favorite shows", type: "cozy" },
      { text: "Trying a new recipe or restaurant", type: "foodie" },
      { text: "Working on a creative project or craft", type: "creative" },
      { text: "Shopping or updating her wardrobe", type: "fashionista" }
    ]
  },
  {
    id: 2,
    question: "What’s her ideal weekend morning?",
    options: [
      { text: "Yoga class followed by a smoothie", type: "athletic" },
      { text: "Sleeping in with coffee in bed", type: "cozy" },
      { text: "Brunch at a trendy new spot", type: "foodie" },
      { text: "Face mask and a long shower routine", type: "spaLover" },
      { text: "Browsing the bookstore for hours", type: "bookLover" },
      { text: "Visiting a craft fair or art gallery", type: "creative" },
      { text: "Shopping for a new outfit or accessories", type: "fashionista" }
    ]
  },
  {
    id: 3,
    question: "What does she always have with her?",
    options: [
      { text: "A book or Kindle", type: "bookLover" },
      { text: "Water bottle and wireless earbuds", type: "athletic" },
      { text: "Lip balm and hand cream", type: "spaLover" },
      { text: "A cozy cardigan or oversized scarf", type: "cozy" },
      { text: "Snacks or gum (she’s always prepared)", type: "foodie" },
      { text: "A notebook or sketchpad", type: "creative" },
      { text: "Her favorite statement accessories", type: "fashionista" }
    ]
  },
  {
    id: 4,
    question: "What kind of gifts does she get most excited about?",
    options: [
      { text: "Latest bestsellers or book subscriptions", type: "bookLover" },
      { text: "Workout gear or fitness gadgets", type: "athletic" },
      { text: "Luxury skincare or spa products", type: "spaLover" },
      { text: "Soft blankets and scented candles", type: "cozy" },
      { text: "Gourmet treats or unique cooking tools", type: "foodie" },
      { text: "Art supplies or DIY craft kits", type: "creative" },
      { text: "Jewelry or designer accessories", type: "fashionista" }
    ]
  },
  {
    id: 5,
    question: "What’s her Instagram or Pinterest feed mostly filled with?",
    options: [
      { text: "Book recommendations and literary quotes", type: "bookLover" },
      { text: "Workout routines and fitness inspiration", type: "athletic" },
      { text: "Skincare routines and self-care tips", type: "spaLover" },
      { text: "Home decor and cozy living spaces", type: "cozy" },
      { text: "Food photography and recipe ideas", type: "foodie" },
      { text: "Art, crafts, and DIY project tutorials", type: "creative" },
      { text: "Fashion trends and outfit inspiration", type: "fashionista" }
    ]
  },
  {
    id: 6,
    question: "When she’s stressed, what helps her relax?",
    options: [
      { text: "Getting lost in a good story", type: "bookLover" },
      { text: "Going for a run or hitting the gym", type: "athletic" },
      { text: "A hot bath with candles and music", type: "spaLover" },
      { text: "Curling up under a blanket with comfort TV", type: "cozy" },
      { text: "Cooking or baking something delicious", type: "foodie" },
      { text: "Creating something with her hands", type: "creative" },
      { text: "A little retail therapy", type: "fashionista" }
    ]
  },
  {
    id: 7,
    question: "What section of Target does she head to first?",
    options: [
      { text: "Books and magazines", type: "bookLover" },
      { text: "Athletic wear and fitness section", type: "athletic" },
      { text: "Beauty and skincare", type: "spaLover" },
      { text: "Home goods and candles", type: "cozy" },
      { text: "Snacks and specialty food items", type: "foodie" },
      { text: "Craft supplies and seasonal decor", type: "creative" },
      { text: "Clothing and accessories", type: "fashionista" }
    ]
  },
  {
    id: 8,
    question: "What’s her perfect birthday celebration?",
    options: [
      { text: "Quiet day with a new book and no interruptions", type: "bookLover" },
      { text: "Active day—hiking, biking, or a fitness class", type: "athletic" },
      { text: "Spa day with massages and treatments", type: "spaLover" },
      { text: "Cozy night in with family and comfort food", type: "cozy" },
      { text: "Fancy dinner at a restaurant she’s been wanting to try", type: "foodie" },
      { text: "Workshop or class to learn something new", type: "creative" },
      { text: "Shopping trip or makeover experience", type: "fashionista" }
    ]
  },
  {
    id: 9,
    question: "What subscription would she actually use?",
    options: [
      { text: "Book of the Month or Kindle Unlimited", type: "bookLover" },
      { text: "Fitness app or gym membership", type: "athletic" },
      { text: "Beauty box or skincare subscription", type: "spaLover" },
      { text: "Streaming service for binge-watching", type: "cozy" },
      { text: "Meal kit or gourmet snack box", type: "foodie" },
      { text: "Craft kit or art supply subscription", type: "creative" },
      { text: "Fashion rental or accessories service", type: "fashionista" }
    ]
  },
  {
    id: 10,
    question: "If she had an unexpected free afternoon, she’d:",
    options: [
      { text: "Finally finish that book she’s been reading", type: "bookLover" },
      { text: "Try that new workout class or trail", type: "athletic" },
      { text: "Do a full skincare routine and deep conditioning", type: "spaLover" },
      { text: "Take a nap or have a movie marathon", type: "cozy" },
      { text: "Experiment with a new recipe", type: "foodie" },
      { text: "Start that project she’s been thinking about", type: "creative" },
      { text: "Browse her favorite stores online or in person", type: "fashionista" }
    ]
  }
];

  // -------------------------
  // Personality Profiles
  // -------------------------
  const profileTypes = {
    bookLover: {
      title: "The Book-Loving Wife",
      tagline: "More books, more happiness.",
      icon: "📚",
      description:
        "She loves cozy reading time, bookstores, and stories that take her somewhere new.",
      stuffers: [
        "Leather bookmark",
        "Mini candles",
        "Book sleeve",
        "Reading journal",
        "Tea sampler"
      ],
      budget: {
        under10: ["Bookmarks", "Mini candle"],
        under25: ["Journal", "Bookstore gift card"],
        under50: ["Kindle cover", "Book embosser"]
      }
    },

    athletic: {
      title: "The Athletic Wife",
      tagline: "Stronger every day.",
      icon: "💪",
      description:
        "She feels most herself when she's moving—running, lifting, yoga, or sports.",
      stuffers: ["Headbands", "Electrolytes", "Resistance bands"],
      budget: {
        under10: ["Headbands"],
        under25: ["Resistance bands"],
        under50: ["Tracker accessories"]
      }
    },

    spaLover: {
      title: "The Spa-Loving Wife",
      tagline: "Self-care is essential.",
      icon: "🧖‍♀️",
      description:
        "She appreciates skincare, long baths, and products that help her slow down.",
      stuffers: ["Sheet masks", "Luxury hand cream", "Bath bombs"],
      budget: {
        under10: ["Sheet masks"],
        under25: ["Gua sha"],
        under50: ["Spa set"]
      }
    },

    cozy: {
      title: "The Cozy Wife",
      tagline: "Comfort is a lifestyle.",
      icon: "☕",
      description:
        "Blankets, warm drinks, soft textures, and staying home are her love language.",
      stuffers: ["Fuzzy socks", "Hot chocolate", "Mini candles"],
      budget: {
        under10: ["Fuzzy socks"],
        under25: ["Throw blanket"],
        under50: ["Heated eye mask"]
      }
    },

    foodie: {
      title: "The Foodie Wife",
      tagline: "Life’s too short for bad food.",
      icon: "🍴",
      description:
        "She loves trying new flavors, restaurants, and unique gourmet finds.",
      stuffers: ["Spice blends", "Artisan chocolate", "Olive oil sampler"],
      budget: {
        under10: ["Spice blend"],
        under25: ["Olive oil sampler"],
        under50: ["Gourmet kit"]
      }
    },

    creative: {
      title: "The Creative Wife",
      tagline: "Create something beautiful.",
      icon: "🎨",
      description:
        "She’s happiest when she’s making something—painting, crafting, writing, or DIYing.",
      stuffers: ["Brush pens", "Stickers", "Sketchbook"],
      budget: {
        under10: ["Washi tape"],
        under25: ["Watercolor set"],
        under50: ["Art organizer"]
      }
    },

    fashionista: {
      title: "The Fashionista Wife",
      tagline: "Style is self-expression.",
      icon: "👗",
      description:
        "She loves putting outfits together and adding beautiful accessories.",
      stuffers: ["Hair clips", "Jewelry", "Perfume samples"],
      budget: {
        under10: ["Hair clips"],
        under25: ["Perfume samples"],
        under50: ["Statement jewelry"]
      }
    }
  };

  // -------------------------
  // Handlers
  // -------------------------

  const handleAnswer = (option) => {
    const updated = { ...answers, [currentQuestion]: option.type };
    setAnswers(updated);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(updated);
    }
  };

  const calculateResult = (finalAnswers) => {
    const counts = {};
    Object.values(finalAnswers).forEach((type) => {
      counts[type] = (counts[type] || 0) + 1;
    });

    const winner = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    setResult(profileTypes[winner]);
    setShowEmailCapture(true);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailError("");

    if (!email) return setEmailError("Please enter your email address");
    if (!validateEmail(email))
      return setEmailError("Please enter a valid email address");

    setEmailSubmitted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowEmailCapture(false);
    setEmail("");
    setEmailSubmitted(false);
    setEmailError("");
  };

  // -------------------------
  // Email Capture Screen
  // -------------------------
  if (showEmailCapture && !emailSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-8">
        <div className="max-w-xl w-full bg-white border rounded-xl p-10 shadow-lg">
          <div className="text-center mb-6">
            <Gift className="w-14 h-14 text-black mx-auto mb-3" />
            <h1 className="text-3xl font-bold mb-2">Your Results Are Ready</h1>
            <p className="text-gray-600">
              Enter your email to see the full personalized stocking guide.
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                className="w-full border p-3 rounded-md"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md font-semibold">
              Show My Results
            </button>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------
  // Results Screen
  // -------------------------
  // -------------------------
// Results Screen
// -------------------------
if (result && emailSubmitted) {
  return (
    <div className="min-h-screen p-10 bg-white">
      <div className="max-w-3xl mx-auto bg-white border rounded-xl shadow p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">{result.icon}</div>
          <h1 className="text-4xl font-bold">{result.title}</h1>
          <p className="italic text-gray-600 mt-2">"{result.tagline}"</p>
        </div>

        {/* Email confirmation */}
        <p className="text-gray-700 mb-6 text-center">
          We’ve emailed your personalized stocking profile to{" "}
          <strong>{email}</strong>.
        </p>

        {/* Recommendations */}
        <h2 className="text-2xl font-semibold mb-4">Top Recommendations</h2>
        <ul className="space-y-2 mb-8">
          {result.stuffers.map((item, i) => (
            <li key={i} className="border p-3 rounded-md">
              {item}
            </li>
          ))}
        </ul>

        {/* Product CTAs */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-center">
            Next Step: Choose Your Game Plan
          </h3>
          <p className="text-gray-600 text-sm mb-6 text-center">
            You can keep guessing every year… or you can use a proven shortcut.
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            {/* Product A – Guide */}
            <button
  type="button"
  onClick={() =>
    (window.location.href =
      "https://carnallcharissa.gumroad.com/l/stockings")
  }
  className="flex-1 bg-black text-white py-4 px-4 rounded-md font-semibold text-center hover:bg-gray-900 transition"
>
  Get the Stocking Guide (DIY)
  <div className="text-xs font-normal text-gray-300 mt-1">
    Step-by-step stocking ideas by her personality type
  </div>
</button>

            {/* Product B – Done For You */}
            <button
              type="button"
              onClick={() =>
  (window.location.href =
    "https://carnallcharissa.gumroad.com/l/doneforyou")
}
              className="flex-1 border border-gray-300 text-gray-900 py-4 px-4 rounded-md font-semibold text-center hover:border-gray-500 hover:bg-gray-50 transition"
            >
              I’ll Build Her Stocking For You
              <div className="text-xs font-normal text-gray-600 mt-1">
                Send her quiz result + budget, get a custom shopping list
              </div>
            </button>
          </div>
        </div>

        {/* Take quiz again */}
        <button
          onClick={resetQuiz}
          className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}

  // -------------------------
  // Quiz Screen
  // -------------------------
  return (
    <div className="min-h-screen p-10 bg-white">
      <div className="max-w-3xl mx-auto bg-white border rounded-xl shadow p-10">
        <div className="text-center mb-10">
          <Heart className="w-16 h-16 text-black mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">
            Wife’s Stocking Stuffer Quiz
          </h1>
          <p className="text-gray-600">
            Answer a few questions to discover her gift personality.
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-3">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full border p-4 rounded-md text-left hover:bg-gray-50"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockingStufferQuiz;