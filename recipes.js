// 50 recipes — all max 600 kcal and min 30 g protein per serving.
// Categories: syrian (10), chicken (10), meat (10), breakfast (10), fish (5), snack (5)
window.RECIPES = [
  // ───── SYRIAN (10) ─────
  {
    id: "sy1", name: "Shish Tawook", category: "syrian", cuisine: "Syrian",
    emoji: "🍢", time: 35, servings: 4, calories: 450, protein: 42,
    ingredients: [
      "600 g chicken breast, cubed",
      "3 tbsp Greek yogurt",
      "2 tbsp lemon juice",
      "3 garlic cloves, minced",
      "1 tbsp olive oil",
      "1 tsp paprika, 1 tsp sumac, salt, pepper",
      "Wooden skewers"
    ],
    instructions: [
      "Whisk yogurt, lemon, garlic, oil, and spices.",
      "Marinate chicken at least 1 hour (ideally overnight).",
      "Thread onto skewers; grill 4–5 min per side until charred and cooked through.",
      "Serve with grilled tomato, parsley, and a small flatbread."
    ]
  },
  {
    id: "sy2", name: "Baked Kibbeh bil Saniyeh", category: "syrian", cuisine: "Syrian",
    emoji: "🥧", time: 75, servings: 6, calories: 520, protein: 32,
    ingredients: [
      "500 g lean ground beef",
      "300 g fine bulgur, soaked and drained",
      "1 onion, grated",
      "400 g lean ground beef (filling)",
      "1 onion chopped, 50 g toasted pine nuts",
      "1 tsp seven-spice, salt, pepper, olive oil"
    ],
    instructions: [
      "Blend bulgur, grated onion, and 500 g beef into a smooth dough.",
      "Cook chopped onion with the second batch of beef and spices; stir in pine nuts.",
      "Press half the dough into an oiled tray, spread filling, top with remaining dough.",
      "Score into diamonds, drizzle olive oil, bake at 200 °C for 35 min."
    ]
  },
  {
    id: "sy3", name: "Chicken Shawarma", category: "syrian", cuisine: "Syrian",
    emoji: "🌯", time: 40, servings: 4, calories: 490, protein: 45,
    ingredients: [
      "600 g chicken thigh, sliced",
      "2 tbsp yogurt, 2 tbsp lemon juice, 2 tbsp olive oil",
      "1 tsp each: cumin, coriander, paprika, turmeric, allspice",
      "4 small whole-wheat wraps",
      "Garlic toum, pickles, tomato, parsley"
    ],
    instructions: [
      "Mix marinade, coat chicken, rest 30 min.",
      "Sear in a hot pan 8–10 min until edges crisp.",
      "Warm wraps; spread toum, layer chicken, pickles, tomato, parsley.",
      "Roll tightly and toast seam-side down 1 min."
    ]
  },
  {
    id: "sy4", name: "Fattet Hummus with Chicken", category: "syrian", cuisine: "Syrian",
    emoji: "🥣", time: 30, servings: 4, calories: 580, protein: 38,
    ingredients: [
      "500 g cooked chickpeas",
      "400 g shredded poached chicken breast",
      "300 g Greek yogurt, 3 tbsp tahini, 1 garlic clove",
      "1 small whole-wheat pita, toasted and broken",
      "Olive oil, paprika, pine nuts, parsley"
    ],
    instructions: [
      "Whisk yogurt, tahini, garlic, and a splash of chickpea water.",
      "Layer toasted pita, warm chickpeas, and chicken in a bowl.",
      "Pour yogurt-tahini sauce over.",
      "Top with paprika oil, toasted pine nuts, and parsley."
    ]
  },
  {
    id: "sy5", name: "Makloubeh with Chicken", category: "syrian", cuisine: "Syrian/Levantine",
    emoji: "🍚", time: 70, servings: 5, calories: 560, protein: 34,
    ingredients: [
      "600 g chicken thigh, bone-in",
      "300 g basmati rice",
      "1 small eggplant, sliced and roasted",
      "1 cauliflower, florets roasted",
      "1 tsp seven-spice, 1 tsp turmeric, salt"
    ],
    instructions: [
      "Simmer chicken with spices 25 min; reserve 600 ml broth.",
      "In a pot, layer chicken, eggplant, cauliflower, then rinsed rice.",
      "Pour broth over to just cover; cook covered on low 25 min.",
      "Rest 10 min, invert onto a platter, garnish with toasted nuts."
    ]
  },
  {
    id: "sy6", name: "Yakhnet Bamieh (Okra Stew)", category: "syrian", cuisine: "Syrian",
    emoji: "🥘", time: 60, servings: 4, calories: 530, protein: 33,
    ingredients: [
      "500 g lean lamb or beef, cubed",
      "500 g okra, trimmed",
      "1 onion, 3 garlic cloves, 400 g crushed tomato",
      "1 tbsp pomegranate molasses, 1 tsp seven-spice",
      "200 g cooked basmati rice (per plate, ~½ cup)"
    ],
    instructions: [
      "Brown meat with onion; add garlic and spices.",
      "Add tomato and 400 ml water; simmer 35 min.",
      "Stir in okra and molasses; cook 12 min until tender.",
      "Serve over a small portion of rice."
    ]
  },
  {
    id: "sy7", name: "Kafta bil Saniyeh", category: "syrian", cuisine: "Syrian",
    emoji: "🍖", time: 50, servings: 4, calories: 550, protein: 36,
    ingredients: [
      "600 g lean ground beef",
      "1 onion grated, ½ bunch parsley chopped",
      "1 tsp seven-spice, salt, pepper",
      "3 tomatoes, 2 potatoes (thin slices)",
      "Tomato paste sauce: 2 tbsp paste + 200 ml water"
    ],
    instructions: [
      "Knead beef with onion, parsley, spices.",
      "Press into a tray; top with tomato and potato slices.",
      "Pour tomato sauce over; bake 200 °C for 30 min.",
      "Rest 5 min before slicing."
    ]
  },
  {
    id: "sy8", name: "Mjadara with Grilled Chicken", category: "syrian", cuisine: "Syrian",
    emoji: "🫘", time: 55, servings: 4, calories: 520, protein: 31,
    ingredients: [
      "200 g brown lentils",
      "150 g coarse bulgur",
      "2 onions, thinly sliced",
      "2 tbsp olive oil",
      "400 g grilled chicken breast (to serve)"
    ],
    instructions: [
      "Caramelize onions slowly in olive oil until deep brown.",
      "Cook lentils 15 min, add bulgur and ¾ of the onions, cook 12 min.",
      "Slice grilled chicken and serve alongside.",
      "Top with remaining onions and a wedge of lemon."
    ]
  },
  {
    id: "sy9", name: "Freekeh with Chicken", category: "syrian", cuisine: "Syrian",
    emoji: "🌾", time: 45, servings: 4, calories: 510, protein: 38,
    ingredients: [
      "250 g cracked freekeh, rinsed",
      "500 g chicken breast",
      "1 onion, 1 cinnamon stick, 1 tsp allspice",
      "1 L low-sodium chicken stock",
      "Toasted almonds and parsley"
    ],
    instructions: [
      "Poach chicken with onion and spices 18 min; reserve broth.",
      "Toast freekeh briefly, add 700 ml broth, simmer 25 min.",
      "Shred chicken, fold into freekeh.",
      "Top with almonds and parsley."
    ]
  },
  {
    id: "sy10", name: "Fattoush with Grilled Halloumi", category: "syrian", cuisine: "Syrian",
    emoji: "🥗", time: 20, servings: 2, calories: 470, protein: 30,
    ingredients: [
      "200 g halloumi, sliced and grilled",
      "1 small toasted whole-wheat pita, broken",
      "Romaine, cucumber, tomato, radish, mint, parsley",
      "2 tbsp olive oil, 1 tbsp lemon, 1 tsp sumac",
      "1 tbsp pomegranate molasses"
    ],
    instructions: [
      "Grill halloumi 1 min per side.",
      "Toss vegetables with herbs and pita.",
      "Whisk dressing and toss through.",
      "Top with halloumi and a sprinkle of sumac."
    ]
  },

  // ───── CHICKEN — WORLDWIDE (10) ─────
  {
    id: "ch1", name: "Italian Chicken Piccata", category: "chicken", cuisine: "Italian",
    emoji: "🍋", time: 25, servings: 2, calories: 430, protein: 40,
    ingredients: [
      "2 chicken breasts, butterflied",
      "2 tbsp flour, salt, pepper",
      "1 tbsp olive oil, 1 tbsp butter",
      "150 ml chicken stock, juice of 1 lemon",
      "2 tbsp capers, parsley"
    ],
    instructions: [
      "Dredge chicken in seasoned flour.",
      "Sear in oil/butter 3 min per side; remove.",
      "Deglaze pan with stock, lemon, capers; reduce 2 min.",
      "Return chicken, glaze, finish with parsley."
    ]
  },
  {
    id: "ch2", name: "Japanese Chicken Teriyaki", category: "chicken", cuisine: "Japanese",
    emoji: "🍱", time: 20, servings: 2, calories: 480, protein: 42,
    ingredients: [
      "400 g chicken thigh, skinless",
      "3 tbsp soy sauce, 2 tbsp mirin, 1 tbsp sake, 1 tbsp sugar",
      "1 tsp grated ginger",
      "120 g cooked rice (per plate)",
      "Spring onions, sesame seeds"
    ],
    instructions: [
      "Sear thighs skin-down 5 min, flip 3 min.",
      "Pour in sauce, simmer to glaze 3 min.",
      "Slice and serve over a small portion of rice.",
      "Top with spring onions and sesame."
    ]
  },
  {
    id: "ch3", name: "Indian Tandoori Chicken", category: "chicken", cuisine: "Indian",
    emoji: "🌶️", time: 40, servings: 4, calories: 410, protein: 45,
    ingredients: [
      "700 g chicken thigh, skinless and slashed",
      "200 g Greek yogurt",
      "2 tbsp lemon juice",
      "2 tsp tandoori masala, 1 tsp turmeric, 1 tsp paprika",
      "2 garlic cloves, 1 tsp grated ginger"
    ],
    instructions: [
      "Mix marinade and coat chicken; rest 1 hour.",
      "Roast at 230 °C for 18–22 min, basting once.",
      "Finish under broiler 2 min for char.",
      "Serve with cucumber, onion, and lemon."
    ]
  },
  {
    id: "ch4", name: "Mexican Chicken Fajitas", category: "chicken", cuisine: "Mexican",
    emoji: "🌮", time: 25, servings: 3, calories: 520, protein: 38,
    ingredients: [
      "500 g chicken breast, sliced",
      "2 bell peppers, 1 onion, sliced",
      "1 tbsp olive oil",
      "2 tsp fajita seasoning, juice of 1 lime",
      "3 small whole-wheat tortillas, salsa"
    ],
    instructions: [
      "Toss chicken with seasoning and lime.",
      "Sear hot 4 min, add peppers and onion 4 min more.",
      "Warm tortillas.",
      "Fill, top with salsa, serve."
    ]
  },
  {
    id: "ch5", name: "Thai Pad Krapow Gai", category: "chicken", cuisine: "Thai",
    emoji: "🌿", time: 15, servings: 2, calories: 490, protein: 36,
    ingredients: [
      "400 g chicken mince",
      "3 garlic cloves, 2 chiles, minced",
      "1 tbsp oyster sauce, 1 tbsp soy sauce, 1 tsp fish sauce, 1 tsp sugar",
      "1 cup Thai basil leaves",
      "120 g jasmine rice (per plate)"
    ],
    instructions: [
      "Stir-fry garlic and chiles 30 s.",
      "Add chicken; cook 4 min breaking apart.",
      "Add sauces, then basil; toss 30 s.",
      "Serve over a small mound of rice."
    ]
  },
  {
    id: "ch6", name: "Greek Lemon Chicken", category: "chicken", cuisine: "Greek",
    emoji: "🍗", time: 45, servings: 4, calories: 460, protein: 41,
    ingredients: [
      "700 g chicken thigh",
      "Juice of 2 lemons, 3 tbsp olive oil",
      "4 garlic cloves, 1 tbsp dried oregano",
      "400 g baby potatoes, halved",
      "Salt, pepper"
    ],
    instructions: [
      "Toss chicken and potatoes with marinade.",
      "Spread in a tray; roast 200 °C for 35 min.",
      "Broil 3 min for color.",
      "Rest, drizzle pan juices over."
    ]
  },
  {
    id: "ch7", name: "Moroccan Chicken Tagine", category: "chicken", cuisine: "Moroccan",
    emoji: "🍲", time: 60, servings: 4, calories: 540, protein: 37,
    ingredients: [
      "700 g chicken thigh",
      "1 onion, 3 garlic cloves",
      "1 preserved lemon, chopped; 80 g green olives",
      "1 tsp ginger, 1 tsp turmeric, ½ tsp saffron, ½ tsp cumin",
      "400 ml chicken stock"
    ],
    instructions: [
      "Brown chicken; remove.",
      "Soften onion and garlic with spices 3 min.",
      "Return chicken with stock, simmer 35 min.",
      "Add olives and preserved lemon; cook 5 min."
    ]
  },
  {
    id: "ch8", name: "French Coq au Vin (Light)", category: "chicken", cuisine: "French",
    emoji: "🍷", time: 75, servings: 4, calories: 580, protein: 42,
    ingredients: [
      "800 g chicken thigh",
      "200 g mushrooms, 150 g pearl onions",
      "60 g lean bacon, diced",
      "300 ml dry red wine, 200 ml stock",
      "Thyme, bay leaf, 1 tbsp tomato paste"
    ],
    instructions: [
      "Render bacon; brown chicken in the fat.",
      "Add onions, mushrooms, tomato paste; cook 3 min.",
      "Pour wine and stock with herbs; simmer 45 min.",
      "Reduce sauce 5 min before serving."
    ]
  },
  {
    id: "ch9", name: "Buffalo Chicken Wrap", category: "chicken", cuisine: "American",
    emoji: "🌶️", time: 25, servings: 2, calories: 560, protein: 35,
    ingredients: [
      "300 g grilled chicken breast, sliced",
      "3 tbsp buffalo sauce",
      "2 large whole-wheat tortillas",
      "Romaine, celery, shredded carrot",
      "2 tbsp light blue-cheese dressing"
    ],
    instructions: [
      "Toss chicken with buffalo sauce.",
      "Layer dressing, lettuce, vegetables, chicken on tortillas.",
      "Roll tightly; toast seam-side down 1 min.",
      "Slice in half and serve."
    ]
  },
  {
    id: "ch10", name: "Chinese Kung Pao Chicken", category: "chicken", cuisine: "Chinese",
    emoji: "🥢", time: 20, servings: 3, calories: 510, protein: 34,
    ingredients: [
      "500 g chicken breast, cubed",
      "1 tbsp soy, 1 tbsp Shaoxing, 1 tsp cornstarch",
      "3 dried chiles, 1 tsp Sichuan peppercorn",
      "60 g roasted peanuts, 3 spring onions",
      "Sauce: 2 tbsp soy, 1 tbsp vinegar, 1 tsp sugar, 1 tsp cornstarch, 100 ml water"
    ],
    instructions: [
      "Marinate chicken 10 min.",
      "Stir-fry chiles and peppercorn 20 s; add chicken 4 min.",
      "Add sauce; bubble until glossy.",
      "Toss in peanuts and spring onions."
    ]
  },

  // ───── MEAT — WORLDWIDE (10) ─────
  {
    id: "me1", name: "Argentinian Beef Asado", category: "meat", cuisine: "Argentinian",
    emoji: "🥩", time: 35, servings: 3, calories: 580, protein: 45,
    ingredients: [
      "500 g flank or skirt steak",
      "Coarse salt",
      "Chimichurri: parsley, oregano, garlic, red wine vinegar, olive oil, chile flakes",
      "Grilled vegetables to serve"
    ],
    instructions: [
      "Salt steak 30 min ahead.",
      "Grill over high heat 3–4 min per side for medium-rare.",
      "Rest 8 min; slice against the grain.",
      "Top with chimichurri."
    ]
  },
  {
    id: "me2", name: "Korean Beef Bulgogi", category: "meat", cuisine: "Korean",
    emoji: "🍜", time: 25, servings: 3, calories: 540, protein: 38,
    ingredients: [
      "500 g lean sirloin, thinly sliced",
      "Marinade: 3 tbsp soy, 2 tbsp grated pear, 1 tbsp sesame oil, 2 garlic cloves, 1 tsp ginger, 1 tbsp sugar",
      "1 onion, 1 carrot, 4 spring onions",
      "120 g rice (per plate), sesame seeds"
    ],
    instructions: [
      "Marinate beef 30 min.",
      "Sear hot 3 min, add vegetables, cook 4 min.",
      "Serve over a small mound of rice.",
      "Sprinkle sesame seeds."
    ]
  },
  {
    id: "me3", name: "Italian Bolognese (Whole Wheat)", category: "meat", cuisine: "Italian",
    emoji: "🍝", time: 90, servings: 4, calories: 590, protein: 32,
    ingredients: [
      "400 g lean ground beef",
      "1 onion, 1 carrot, 1 celery rib, finely diced",
      "400 g crushed tomato, 100 ml red wine",
      "1 tbsp tomato paste, bay leaf, oregano",
      "240 g whole-wheat pasta (cooked)"
    ],
    instructions: [
      "Soften vegetables 8 min in 1 tbsp oil.",
      "Brown beef; add wine and reduce.",
      "Stir in tomato, paste, herbs; simmer 60 min.",
      "Toss with cooked pasta and serve."
    ]
  },
  {
    id: "me4", name: "Turkish Adana Kebab", category: "meat", cuisine: "Turkish",
    emoji: "🔥", time: 30, servings: 4, calories: 550, protein: 36,
    ingredients: [
      "600 g lean lamb mince (or beef)",
      "1 small onion, grated and squeezed dry",
      "1 tbsp Aleppo pepper, 1 tsp cumin, salt",
      "Flat skewers",
      "Grilled tomato, parsley, sumac onion"
    ],
    instructions: [
      "Knead mince with onion and spices 5 min until sticky.",
      "Form around flat skewers in long fingers.",
      "Grill over high heat 8 min, turning often.",
      "Serve with sumac onion and grilled tomato."
    ]
  },
  {
    id: "me5", name: "Shepherd's Pie (Light)", category: "meat", cuisine: "British",
    emoji: "🥧", time: 70, servings: 4, calories: 580, protein: 31,
    ingredients: [
      "500 g lean ground lamb",
      "1 onion, 2 carrots, 100 g peas",
      "1 tbsp tomato paste, 1 tbsp Worcestershire, 250 ml stock, thyme",
      "700 g potatoes, mashed with 50 ml milk",
      "30 g grated low-fat cheddar"
    ],
    instructions: [
      "Brown lamb with onion; add carrots, paste, Worcestershire, stock; simmer 15 min.",
      "Stir in peas; transfer to a baking dish.",
      "Top with mash; sprinkle cheese.",
      "Bake 200 °C for 25 min until golden."
    ]
  },
  {
    id: "me6", name: "Greek Beef Souvlaki", category: "meat", cuisine: "Greek",
    emoji: "🍢", time: 30, servings: 4, calories: 470, protein: 40,
    ingredients: [
      "600 g lean beef sirloin, cubed",
      "Marinade: 3 tbsp olive oil, juice of 1 lemon, 2 garlic cloves, 1 tbsp oregano",
      "Skewers",
      "Tzatziki and a small whole-wheat pita to serve"
    ],
    instructions: [
      "Marinate beef 1 hour.",
      "Thread on skewers; grill high heat 3–4 min per side.",
      "Rest 3 min.",
      "Serve with tzatziki and pita."
    ]
  },
  {
    id: "me7", name: "Vietnamese Beef Pho", category: "meat", cuisine: "Vietnamese",
    emoji: "🍲", time: 40, servings: 2, calories: 520, protein: 34,
    ingredients: [
      "1 L low-sodium beef broth",
      "1 cinnamon stick, 2 star anise, 3 cloves, 1 cardamom",
      "1 onion, 2 cm ginger, charred",
      "200 g rice noodles, 250 g raw eye-of-round, very thinly sliced",
      "Bean sprouts, basil, lime, chile"
    ],
    instructions: [
      "Toast spices 30 s; add broth, charred onion, ginger; simmer 25 min, strain.",
      "Cook noodles per pack.",
      "Place noodles in bowls, top with raw beef.",
      "Pour boiling broth over to cook beef; serve with herbs and lime."
    ]
  },
  {
    id: "me8", name: "American Grilled Steak & Veg", category: "meat", cuisine: "American",
    emoji: "🥩", time: 25, servings: 2, calories: 560, protein: 48,
    ingredients: [
      "2 × 200 g sirloin steaks, trimmed",
      "Salt, pepper, 1 tsp olive oil",
      "200 g asparagus, 1 zucchini, 1 bell pepper",
      "1 garlic clove, juice of ½ lemon"
    ],
    instructions: [
      "Season steaks; rest 20 min at room temp.",
      "Grill 4 min per side for medium; rest 5 min.",
      "Char vegetables with garlic and lemon 6 min.",
      "Slice steak and serve with vegetables."
    ]
  },
  {
    id: "me9", name: "Brazilian Picanha", category: "meat", cuisine: "Brazilian",
    emoji: "🇧🇷", time: 30, servings: 3, calories: 560, protein: 44,
    ingredients: [
      "500 g picanha (top sirloin cap), trimmed",
      "Coarse salt",
      "Vinaigrette molho: tomato, onion, parsley, olive oil, vinegar",
      "Grilled rocket"
    ],
    instructions: [
      "Score fat cap, salt generously.",
      "Grill fat-side down 6 min, then 3 min per side.",
      "Rest 8 min; slice against grain.",
      "Spoon molho over slices."
    ]
  },
  {
    id: "me10", name: "German Beef Rouladen", category: "meat", cuisine: "German",
    emoji: "🥓", time: 90, servings: 4, calories: 590, protein: 39,
    ingredients: [
      "4 thin beef sirloin slices (~150 g each)",
      "4 tsp Dijon mustard",
      "4 thin smoked turkey rashers",
      "1 dill pickle and ½ onion, sliced for filling",
      "300 ml stock, 100 ml red wine, 1 tbsp tomato paste"
    ],
    instructions: [
      "Spread mustard on beef; layer turkey, pickle, onion; roll and tie.",
      "Brown rolls in a pot.",
      "Add wine, stock, paste; braise covered 60 min.",
      "Reduce sauce; serve over rolls."
    ]
  },

  // ───── BREAKFAST (10) ─────
  {
    id: "bk1", name: "Greek Yogurt Protein Bowl", category: "breakfast", cuisine: "Mediterranean",
    emoji: "🥣", time: 5, servings: 1, calories: 380, protein: 32,
    ingredients: [
      "300 g 2% Greek yogurt",
      "1 scoop (25 g) vanilla whey protein",
      "80 g mixed berries",
      "20 g granola",
      "1 tsp honey"
    ],
    instructions: [
      "Whisk yogurt with whey until smooth.",
      "Top with berries and granola.",
      "Drizzle with honey.",
      "Serve immediately."
    ]
  },
  {
    id: "bk2", name: "Egg-White Omelette with Turkey", category: "breakfast", cuisine: "American",
    emoji: "🍳", time: 12, servings: 1, calories: 410, protein: 38,
    ingredients: [
      "6 egg whites + 1 whole egg",
      "60 g sliced turkey breast",
      "30 g spinach",
      "20 g feta",
      "1 slice whole-wheat toast"
    ],
    instructions: [
      "Whisk eggs, season.",
      "Soften spinach in a non-stick pan; pour eggs.",
      "Top with turkey and feta; fold and finish.",
      "Serve with toast."
    ]
  },
  {
    id: "bk3", name: "Cottage Cheese Pancakes", category: "breakfast", cuisine: "Eastern European",
    emoji: "🥞", time: 15, servings: 2, calories: 450, protein: 34,
    ingredients: [
      "300 g cottage cheese",
      "3 eggs",
      "60 g oat flour, 1 tsp baking powder, 1 tbsp honey",
      "1 tsp vanilla, pinch of salt",
      "Berries to top"
    ],
    instructions: [
      "Blend all batter ingredients.",
      "Cook small pancakes in a non-stick pan 2 min per side.",
      "Stack and top with berries.",
      "Optional drizzle of honey."
    ]
  },
  {
    id: "bk4", name: "Smoked Salmon Avocado Toast", category: "breakfast", cuisine: "Nordic",
    emoji: "🥑", time: 8, servings: 1, calories: 520, protein: 31,
    ingredients: [
      "2 slices whole-grain rye bread",
      "100 g smoked salmon",
      "½ avocado",
      "30 g cottage cheese",
      "Capers, dill, lemon, pepper"
    ],
    instructions: [
      "Toast bread.",
      "Spread cottage cheese, top with sliced avocado and salmon.",
      "Garnish with capers, dill, lemon, and pepper.",
      "Serve at once."
    ]
  },
  {
    id: "bk5", name: "Protein Oatmeal", category: "breakfast", cuisine: "Global",
    emoji: "🥣", time: 10, servings: 1, calories: 490, protein: 40,
    ingredients: [
      "60 g rolled oats",
      "300 ml low-fat milk",
      "1 scoop (30 g) chocolate whey",
      "1 tbsp peanut butter",
      "½ banana, sliced"
    ],
    instructions: [
      "Simmer oats in milk 5 min.",
      "Off heat, stir in whey.",
      "Top with peanut butter and banana.",
      "Serve warm."
    ]
  },
  {
    id: "bk6", name: "Shakshuka with Feta", category: "breakfast", cuisine: "North African",
    emoji: "🍳", time: 25, servings: 2, calories: 520, protein: 30,
    ingredients: [
      "4 eggs",
      "400 g crushed tomato",
      "1 onion, 2 garlic cloves, 1 bell pepper",
      "1 tsp cumin, 1 tsp paprika, chile flakes",
      "60 g feta, parsley"
    ],
    instructions: [
      "Soften onion, garlic, pepper 6 min.",
      "Add tomato and spices; simmer 8 min.",
      "Make wells, crack in eggs; cover and cook 6 min.",
      "Crumble feta and parsley over."
    ]
  },
  {
    id: "bk7", name: "Turkey-Sausage Breakfast Burrito", category: "breakfast", cuisine: "Tex-Mex",
    emoji: "🌯", time: 15, servings: 1, calories: 580, protein: 36,
    ingredients: [
      "1 large whole-wheat tortilla",
      "100 g lean turkey sausage, crumbled and cooked",
      "2 eggs, scrambled",
      "60 g black beans",
      "30 g salsa, 20 g low-fat cheese"
    ],
    instructions: [
      "Cook sausage; scramble eggs.",
      "Warm tortilla.",
      "Layer beans, sausage, eggs, salsa, cheese.",
      "Roll tightly and toast seam down 1 min."
    ]
  },
  {
    id: "bk8", name: "Ful Medames with Egg", category: "breakfast", cuisine: "Egyptian/Levantine",
    emoji: "🫘", time: 20, servings: 2, calories: 510, protein: 32,
    ingredients: [
      "2 cans (480 g) fava beans, drained",
      "2 eggs",
      "Juice of 1 lemon, 2 tbsp olive oil, 2 garlic cloves, cumin",
      "1 tomato, chopped",
      "1 small whole-wheat pita per serving"
    ],
    instructions: [
      "Warm beans with garlic, cumin, and a splash of water; mash partly.",
      "Stir in lemon, oil, tomato.",
      "Top each plate with a soft-boiled egg.",
      "Serve with pita."
    ]
  },
  {
    id: "bk9", name: "Tuna & Egg Breakfast Salad", category: "breakfast", cuisine: "Mediterranean",
    emoji: "🥗", time: 10, servings: 1, calories: 430, protein: 38,
    ingredients: [
      "1 can (160 g) tuna in spring water, drained",
      "2 hard-boiled eggs",
      "Mixed greens, cherry tomatoes, cucumber",
      "1 tbsp olive oil, 1 tbsp lemon, oregano",
      "20 g olives"
    ],
    instructions: [
      "Toss greens, tomato, cucumber, olives.",
      "Top with tuna and quartered eggs.",
      "Whisk dressing and pour over.",
      "Season and serve."
    ]
  },
  {
    id: "bk10", name: "Chicken-Sausage & Sweet-Potato Hash", category: "breakfast", cuisine: "American",
    emoji: "🥔", time: 25, servings: 2, calories: 560, protein: 35,
    ingredients: [
      "200 g lean chicken sausage",
      "300 g sweet potato, diced",
      "1 bell pepper, ½ onion",
      "2 eggs",
      "Smoked paprika, salt, pepper"
    ],
    instructions: [
      "Roast sweet potato 200 °C for 18 min.",
      "Sauté sausage, pepper, onion 6 min in a non-stick pan; combine.",
      "Crack eggs on top, cover, cook 4 min.",
      "Season with smoked paprika; serve hot."
    ]
  },

  // ───── FISH (5) ─────
  {
    id: "fi1", name: "Grilled Salmon with Quinoa", category: "fish", cuisine: "Mediterranean",
    emoji: "🐟", time: 25, servings: 2, calories: 530, protein: 42,
    ingredients: [
      "2 × 150 g salmon fillets",
      "120 g cooked quinoa",
      "1 tbsp olive oil, lemon, dill",
      "Asparagus, charred",
      "Salt, pepper"
    ],
    instructions: [
      "Season salmon; grill 3–4 min per side.",
      "Char asparagus 4 min.",
      "Plate quinoa, top with salmon and asparagus.",
      "Squeeze lemon and add dill."
    ]
  },
  {
    id: "fi2", name: "Baked Cod with Lemon & Herbs", category: "fish", cuisine: "Mediterranean",
    emoji: "🍋", time: 20, servings: 2, calories: 380, protein: 40,
    ingredients: [
      "2 × 180 g cod fillets",
      "2 tbsp olive oil, 1 lemon",
      "2 garlic cloves, parsley, thyme",
      "200 g cherry tomatoes",
      "Salt, pepper"
    ],
    instructions: [
      "Lay cod on a tray with tomatoes.",
      "Drizzle oil, garlic, herbs; lemon slices on top.",
      "Bake 200 °C for 12–14 min.",
      "Spoon pan juices over to serve."
    ]
  },
  {
    id: "fi3", name: "Tuna Poke Bowl", category: "fish", cuisine: "Hawaiian",
    emoji: "🍣", time: 15, servings: 1, calories: 540, protein: 38,
    ingredients: [
      "150 g sushi-grade tuna, cubed",
      "120 g cooked sushi rice",
      "½ avocado, cucumber, edamame",
      "1 tbsp soy sauce, 1 tsp sesame oil, 1 tsp rice vinegar",
      "Sesame seeds, spring onion"
    ],
    instructions: [
      "Toss tuna with soy, sesame oil, vinegar.",
      "Layer rice, vegetables, tuna in a bowl.",
      "Top with sesame and spring onion.",
      "Serve immediately."
    ]
  },
  {
    id: "fi4", name: "Mediterranean Sea Bass", category: "fish", cuisine: "Mediterranean",
    emoji: "🐠", time: 25, servings: 2, calories: 460, protein: 43,
    ingredients: [
      "2 × 200 g sea bass fillets",
      "1 tbsp olive oil, lemon, oregano",
      "200 g zucchini, 200 g cherry tomato",
      "10 olives, capers",
      "Salt, pepper"
    ],
    instructions: [
      "Roast vegetables with olives and capers 12 min.",
      "Place fillets on top; bake 8 min more.",
      "Finish with lemon and oregano.",
      "Drizzle with extra olive oil."
    ]
  },
  {
    id: "fi5", name: "Sayyadieh (Levantine Fish & Rice)", category: "fish", cuisine: "Levantine",
    emoji: "🍚", time: 60, servings: 4, calories: 580, protein: 35,
    ingredients: [
      "600 g white fish (e.g. hake), cut into pieces",
      "250 g basmati rice",
      "2 onions, deeply caramelized",
      "1 tsp cumin, 1 tsp coriander, ½ tsp cinnamon",
      "Pine nuts, lemon"
    ],
    instructions: [
      "Sear fish briefly with spices; remove.",
      "Cook rice in fish-stock from caramelized onions until absorbed.",
      "Top with fish 5 min before rice is done.",
      "Garnish with pine nuts and lemon."
    ]
  },

  // ───── SNACK (5) ─────
  {
    id: "sn1", name: "Cottage Cheese & Berry Cup", category: "snack", cuisine: "Global",
    emoji: "🍓", time: 3, servings: 1, calories: 260, protein: 30,
    ingredients: [
      "250 g low-fat cottage cheese",
      "80 g mixed berries",
      "1 tsp honey",
      "1 tsp chia seeds"
    ],
    instructions: [
      "Spoon cottage cheese into a cup.",
      "Top with berries and chia.",
      "Drizzle honey.",
      "Serve cold."
    ]
  },
  {
    id: "sn2", name: "Greek Yogurt with Almonds", category: "snack", cuisine: "Mediterranean",
    emoji: "🥜", time: 3, servings: 1, calories: 310, protein: 30,
    ingredients: [
      "250 g 2% Greek yogurt",
      "10 g whey protein (optional booster)",
      "15 g almonds",
      "1 tsp honey"
    ],
    instructions: [
      "Stir whey into yogurt until smooth (if using).",
      "Top with almonds.",
      "Drizzle honey.",
      "Serve."
    ]
  },
  {
    id: "sn3", name: "Protein Energy Balls", category: "snack", cuisine: "Global",
    emoji: "🍪", time: 15, servings: 4, calories: 320, protein: 30,
    ingredients: [
      "120 g rolled oats",
      "60 g whey protein",
      "60 g peanut butter",
      "60 g honey",
      "20 g dark chocolate chips"
    ],
    instructions: [
      "Mix all ingredients into a sticky dough.",
      "Roll into 12 balls.",
      "Chill 30 min.",
      "Serve 3 per snack portion."
    ]
  },
  {
    id: "sn4", name: "Tuna Cucumber Boats", category: "snack", cuisine: "Mediterranean",
    emoji: "🥒", time: 8, servings: 1, calories: 280, protein: 32,
    ingredients: [
      "1 can (160 g) tuna in water, drained",
      "1 cucumber, halved and seeded",
      "1 tbsp Greek yogurt, 1 tsp Dijon",
      "Lemon, dill, capers",
      "Salt, pepper"
    ],
    instructions: [
      "Mix tuna, yogurt, Dijon, lemon, dill, capers.",
      "Spoon into cucumber halves.",
      "Season and serve cold.",
      "Garnish with extra dill."
    ]
  },
  {
    id: "sn5", name: "Chicken Lettuce Wraps", category: "snack", cuisine: "Asian-inspired",
    emoji: "🥬", time: 15, servings: 1, calories: 340, protein: 35,
    ingredients: [
      "150 g grilled chicken breast, diced",
      "4 large lettuce leaves",
      "1 tbsp hoisin, 1 tsp soy sauce, 1 tsp lime",
      "Carrot, cucumber, spring onion",
      "Sesame seeds"
    ],
    instructions: [
      "Toss chicken with hoisin, soy, lime.",
      "Spoon into lettuce leaves with veggies.",
      "Top with sesame.",
      "Eat with hands."
    ]
  }
];
