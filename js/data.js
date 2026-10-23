/* ==========================================================================
   LUMIÈRE - Beauty & Personal Care Data Store
   Comprehensive Directory, Guides, Ingredients & Routine Catalog
   ========================================================================== */

const LUMIERE_DATA = {
  // Directory Listings: Salons, Spas, Dermatology Clinics & Clean Beauty Studios
  directory: [
    {
      id: "dir-1",
      name: "Aura Sanctuary & Botanical MedSpa",
      category: "MedSpa & Dermatology",
      rating: 4.96,
      reviewsCount: 284,
      city: "Beverly Hills",
      address: "9405 Wilshire Blvd, Beverly Hills, CA 90212",
      phone: "+1 (310) 555-0182",
      priceTier: "$$$$",
      image: "assets/images/spa.jpg",
      badge: "Verified Pro Clinic",
      featured: true,
      daylightPick: true,
      description: "Premier daylight-infused aesthetic clinic specializing in cellular barrier restoration, gentle laser genesis, and customized non-invasive facial sculpting.",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: Closed",
      specialists: [
        { name: "Dr. Elena Vance, MD", role: "Board-Certified Dermatologist" },
        { name: "Camilla Rivas", role: "Master Aesthetician & Lymphatic Specialist" }
      ],
      amenities: ["Cruelty-Free", "Organic Products", "Private Suites", "Online Booking"],
      services: [
        { name: "Circadian Barrier Repair Facial", duration: "75 min", price: "$280" },
        { name: "Lymphatic Sculpt & Buccal Massage", duration: "60 min", price: "$240" },
        { name: "Aesthetic Laser Genesis Glow", duration: "45 min", price: "$350" },
        { name: "Dermal Biocellulose Infusion", duration: "60 min", price: "$220" }
      ]
    },
    {
      id: "dir-2",
      name: "L'Étoile Holistic Hair & Scalp Lab",
      category: "Hair & Scalp",
      rating: 4.92,
      reviewsCount: 198,
      city: "Manhattan NYC",
      address: "420 West Broadway, SoHo, New York, NY 10012",
      phone: "+1 (212) 555-0144",
      priceTier: "$$$",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      badge: "Clean Hair Certified",
      featured: true,
      daylightPick: true,
      description: "Dedicated scalp wellness sanctuary utilizing micro-camera trichology diagnostics, plant stem-cell rinses, and customized organic glossing therapies.",
      hours: "Tue - Sun: 10:00 AM - 8:00 PM | Mon: Closed",
      specialists: [
        { name: "Julian Thorne", role: "Certified Trichologist" },
        { name: "Mei Lin", role: "Clean Colorist & Scalp Alchemist" }
      ],
      amenities: ["Organic Products", "Online Booking", "Wheelchair Accessible"],
      services: [
        { name: "Trichology Scalp Detox & Exfoliation", duration: "90 min", price: "$230" },
        { name: "Plant-Protein Botanical Keratin Treatment", duration: "120 min", price: "$320" },
        { name: "Sunlight Gloss & Hair Hydrotherapy", duration: "60 min", price: "$175" }
      ]
    },
    {
      id: "dir-3",
      name: "Maison de Lumière Daylight Spa",
      category: "Luxury Day Spa",
      rating: 4.98,
      reviewsCount: 342,
      city: "Le Marais Paris",
      address: "18 Rue des Francs-Bourgeois, 75004 Paris, France",
      phone: "+33 1 42 68 00 23",
      priceTier: "$$$$",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      badge: "European Wellness Award 2026",
      featured: true,
      daylightPick: false,
      description: "Historic Parisian daylight retreat offering artisanal French phyto-aromatic facials, warm rose-quartz stone massage, and mineral thermal baths.",
      hours: "Mon - Sun: 9:30 AM - 8:30 PM",
      specialists: [
        { name: "Amélie Dupont", role: "Naturopathic Aesthetician" },
        { name: "Jean-Paul Moreau", role: "Holistic Hydrotherapist" }
      ],
      amenities: ["Private Suites", "Organic Products", "Thermal Bath Access"],
      services: [
        { name: "Rose-Quartz Regenerative Ritual", duration: "90 min", price: "$295" },
        { name: "Phyto-Aromatic Hydration Cocoon", duration: "75 min", price: "$260" },
        { name: "Full Body Thermal Mineral Soak & Scrub", duration: "60 min", price: "$190" }
      ]
    },
    {
      id: "dir-4",
      name: "Verdant Skin & Herbology Studio",
      category: "Holistic Skincare",
      rating: 4.88,
      reviewsCount: 165,
      city: "Mayfair London",
      address: "24 Mount Street, Mayfair, London W1K 2RR, UK",
      phone: "+44 20 7946 0912",
      priceTier: "$$$",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      badge: "100% Wildcrafted",
      featured: false,
      daylightPick: true,
      description: "Artisanal herbal skincare studio crafting fresh bespoke facial elixirs on-site using biodynamic botanical extracts and cold-pressed seed oils.",
      hours: "Mon - Fri: 10:00 AM - 6:30 PM | Sat: 11:00 AM - 5:00 PM",
      specialists: [
        { name: "Victoria Sterling", role: "Master Herbalist & Esthetician" }
      ],
      amenities: ["Cruelty-Free", "Zero-Waste", "Online Booking"],
      services: [
        { name: "Custom Fresh-Herbal Infusion Facial", duration: "70 min", price: "$210" },
        { name: "Bio-Ferment Barrier Strengthening Treatment", duration: "60 min", price: "$185" },
        { name: "Acupressure Glow & Gua Sha Ritual", duration: "50 min", price: "$150" }
      ]
    },
    {
      id: "dir-5",
      name: "Chroma Nail Atelier & Clean Beauty Lounge",
      category: "Organic Nail Studio",
      rating: 4.86,
      reviewsCount: 215,
      city: "Beverly Hills",
      address: "310 North Canon Drive, Beverly Hills, CA 90210",
      phone: "+1 (310) 555-0922",
      priceTier: "$$",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
      badge: "Non-Toxic & 21-Free",
      featured: false,
      daylightPick: false,
      description: "Clean, fume-free daylight nail haven offering waterless Russian manicures, vegan Japanese gel art, and restorative keratin cuticle elixirs.",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 5:00 PM",
      specialists: [
        { name: "Hana Takahashi", role: "Lead Nail Artist" }
      ],
      amenities: ["Cruelty-Free", "Fume-Free", "Private Booths"],
      services: [
        { name: "Waterless Collagen Manicure", duration: "45 min", price: "$75" },
        { name: "Artisan Japanese Soft Gel & Art", duration: "75 min", price: "$130" },
        { name: "Restorative Botanical Pedicure", duration: "60 min", price: "$95" }
      ]
    },
    {
      id: "dir-6",
      name: "Soma Medical Aesthetics & Longevity",
      category: "MedSpa & Dermatology",
      rating: 4.95,
      reviewsCount: 310,
      city: "Gangnam Seoul",
      address: "521 Teheran-ro, Gangnam-gu, Seoul, South Korea",
      phone: "+82 2 555 4910",
      priceTier: "$$$$",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      badge: "K-Beauty Precision Hub",
      featured: true,
      daylightPick: true,
      description: "Internationally renowned clinical dermatology center pioneering ultrasound skin tightening, exosome micro-infusion, and glass-skin radiance regimens.",
      hours: "Mon - Sat: 10:00 AM - 8:00 PM",
      specialists: [
        { name: "Dr. Min-Jun Park, MD", role: "Chief Dermatologic Surgeon" },
        { name: "Dr. So-Hee Kim", role: "Aesthetic Laser Specialist" }
      ],
      amenities: ["Certified Medical", "Translation Available", "Private Recovery Lounge"],
      services: [
        { name: "Exosome Cellular Skin Booster", duration: "60 min", price: "$420" },
        { name: "Ultrasound Deep SMAS Lifting", duration: "90 min", price: "$750" },
        { name: "Aqua-Peel & Cryo-Calming Treatment", duration: "50 min", price: "$190" }
      ]
    }
  ],

  // Beauty Guides & Clinical Masterclasses
  guides: [
    {
      id: "guide-1",
      title: "The 2026 Skin Barrier Recovery Protocol",
      category: "Skincare Science",
      readTime: "7 min read",
      author: "Dr. Elena Vance, MD",
      authorRole: "Dermatologist & Barrier Biologist",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      featured: true,
      date: "October 2026",
      summary: "Understand the 3:1:1 lipid molar ratio, avoid active overload, and rebuild compromised skin in 14 days with clinical precision.",
      content: `
        <h3>1. The Anatomy of an Over-Exfoliated Barrier</h3>
        <p>Skin barrier compromise manifests not just as visible redness, but as micro-fissuring of the stratum corneum. When the cellular mortar—comprising ceramides, cholesterol, and free fatty acids—is stripped through aggressive chemical peeling or disrupted pH, transepidermal water loss (TEWL) accelerates rapidly.</p>
        
        <h3>2. The Golden 3:1:1 Molar Ratio</h3>
        <p>Decades of dermatological research demonstrate that topical lipids restore the epidermal matrix fastest when formulated in a specific physiological ratio: 3 parts ceramides, 1 part cholesterol, and 1 part essential free fatty acids. Look for formulas listing Ceramide NP, Ceramide AP, and phytosphingosine on the label.</p>
        
        <h3>3. The 14-Day Reset Protocol</h3>
        <p>For the next two weeks, eliminate all alpha/beta hydroxy acids, retinoids, and physical scrubs. Cleanse only with non-foaming cream or oat-based cleansers using lukewarm water. Seal damp skin with ectoine or panthenol serum, followed by a biomimetic barrier cream.</p>
      `,
      takeaways: [
        "Eliminate active acids and retinoids for minimum 14 consecutive days",
        "Target physiological lipid ratio of 3:1:1 (Ceramides, Cholesterol, Fatty Acids)",
        "Never wash face with hot water; keep temperature body-neutral (32°C)",
        "Incorporate 5% Panthenol and Centella Asiatica to suppress inflammatory cytokines"
      ]
    },
    {
      id: "guide-2",
      title: "Circadian Skincare: Synchronizing Actives With Daylight",
      category: "Skincare Science",
      readTime: "5 min read",
      author: "Sarah Jenkins",
      authorRole: "Licensed Master Esthetician",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      featured: true,
      date: "October 2026",
      summary: "Your skin operates on a 24-hour internal clock. Learn why daytime demands antioxidant armor while nighttime calls for DNA repair enzymes.",
      content: `
        <h3>Daylight Defense: Morning Synchronization</h3>
        <p>During daylight hours, the skin's biological priority is defense against ultraviolet radiation, blue light from digital displays, and airborne particulate pollution. Sebum production peaks mid-day to create a natural hydrophobic shield.</p>
        <p>Morning routines should focus on stable antioxidants like L-Ascorbic Acid or Ectoin paired with broad-spectrum SPF 50+. Antioxidants neutralize free radicals before they can cross-link collagen fibers.</p>

        <h3>Nighttime Cellular Regeneration</h3>
        <p>Between 10:00 PM and 2:00 AM, cell mitosis accelerates up to 800% faster than during daytime. Melatonin and human growth hormone release stimulates fibroblasts. This is the optimal window for retinoids, copper peptides, and ceramide-rich occlusives.</p>
      `,
      takeaways: [
        "AM priority: Antioxidant defense (Vitamin C + Ferulic Acid + Zinc Oxide SPF)",
        "Mid-day: Barrier hydration spray to counteract indoor HVAC dryness",
        "PM priority: Mitosis stimulation & barrier lipid reinforcement (Retinaldehyde + Peptides)"
      ]
    },
    {
      id: "guide-3",
      title: "The Scalp Microbiome Revolution: Follicle Vitality",
      category: "Hair & Scalp",
      readTime: "6 min read",
      author: "Julian Thorne",
      authorRole: "Clinical Trichologist",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      featured: false,
      date: "September 2026",
      summary: "Healthy hair is impossible without a balanced scalp microbiome. Discover how pH balance, prebiotics, and gentle circulation boost density.",
      content: `
        <h3>The Hidden Ecosystem of Your Scalp</h3>
        <p>The scalp contains approximately 100,000 hair follicles, each surrounded by sebaceous glands and micro-organisms. Overwashing with harsh sulfates disrupts the natural Malassezia balance, leading to micro-inflammation at the follicular root and premature shedding.</p>
        <p>Integrating weekly salicylic acid or fermented rice water scalp rinses clears dead keratinocytes without stripping vital moisture.</p>
      `,
      takeaways: [
        "Avoid sulfates and synthetic silicones that build up at the follicular ostium",
        "Incorporate a 5-minute daily manual scalp massage to stimulate micro-capillary flow",
        "Use scalp serums infused with rosemary extract, caffeine, and copper peptides"
      ]
    },
    {
      id: "guide-4",
      title: "Retinoids vs. Bakuchiol: Clinical Efficacy Breakdown",
      category: "Ingredient Analysis",
      readTime: "8 min read",
      author: "Dr. Elena Vance, MD",
      authorRole: "Dermatologist & Researcher",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      featured: false,
      date: "August 2026",
      summary: "Can botanical bakuchiol truly rival gold-standard retinaldehyde? Here is what randomized clinical split-face trials reveal.",
      content: `
        <h3>Receptor Activation Mechanisms</h3>
        <p>Retinol and Retinaldehyde bind directly to retinoic acid receptors (RAR) in the cell nucleus, prompting genetic transcription of collagen I and III. Bakuchiol, extracted from Psoralea corylifolia seeds, modulates gene expression through distinct cellular pathways while yielding remarkably similar gene-expression profiles.</p>
      `,
      takeaways: [
        "Retinaldehyde acts 11x faster than Retinol and requires only 1 conversion step",
        "Bakuchiol is non-photosensitizing and safe for daytime use and sensitive skin",
        "Combining 0.5% Bakuchiol with low-dose Retinal reduces irritation by 60%"
      ]
    }
  ],

  // Scientific Ingredient Glossary
  ingredients: [
    {
      id: "ing-1",
      name: "Hyaluronic Acid (Multi-Molecular)",
      function: "Deep Cellular Humectant",
      ewgScore: "1 (Clean)",
      bestFor: "All Skin Types, Dehydration",
      routineTime: "AM & PM",
      avoidWith: "None (Universal)",
      description: "A glycosaminoglycan capable of binding up to 1,000 times its weight in water. Multi-weight formulas penetrate both surface stratum corneum and deeper dermis."
    },
    {
      id: "ing-2",
      name: "Niacinamide (Vitamin B3)",
      function: "Pore Refiner & Barrier Lipid Booster",
      ewgScore: "1 (Clean)",
      bestFor: "Oily, Combination, Hyperpigmentation",
      routineTime: "AM & PM",
      avoidWith: "Direct high-strength Vitamin C (keep 10 min gap if sensitive)",
      description: "Stimulates natural ceramide synthesis, regulates excessive sebum, and suppresses melanosome transfer to visibly fade post-inflammatory marks."
    },
    {
      id: "ing-3",
      name: "Retinaldehyde (Retinal)",
      function: "Collagen Synthesizer & Texture Renewal",
      ewgScore: "1 (Clean)",
      bestFor: "Mature, Fine Lines, Adult Acne",
      routineTime: "PM Only",
      avoidWith: "AHA/BHA Acids, Benzoyl Peroxide on same night",
      description: "Direct precursor to Retinoic Acid. Requires only one enzymatic conversion in skin, making it substantially faster-acting than traditional retinol with less irritation."
    },
    {
      id: "ing-4",
      name: "Centella Asiatica (Cica / Madecassoside)",
      function: "Wound Healing & Cytokine Inhibitor",
      ewgScore: "1 (Clean)",
      bestFor: "Sensitive, Rosacea, Compromised Barrier",
      routineTime: "AM & PM",
      avoidWith: "None",
      description: "Medicinal botanical rich in asiaticoside, madecassoside, and amino acids. Calms acute erythema and accelerates dermal tissue repair."
    },
    {
      id: "ing-5",
      name: "Ceramide NP, AP, EOP",
      function: "Biomimetic Lipid Mortar",
      ewgScore: "1 (Clean)",
      bestFor: "Dry, Peeling, Eczema-Prone",
      routineTime: "AM & PM",
      avoidWith: "None",
      description: "The primary structural lipid in human skin. Replaces stripped intracellular cement to lock in deep hydration and seal out environmental pollutants."
    },
    {
      id: "ing-6",
      name: "Copper Tripeptide-1 (GHK-Cu)",
      function: "Stem Cell & Elastin Regeneration",
      ewgScore: "1 (Clean)",
      bestFor: "Loss of Firmness, Scarring, Anti-Aging",
      routineTime: "AM or PM",
      avoidWith: "Pure L-Ascorbic Acid, Strong Direct Acids",
      description: "A naturally occurring copper complex that signals fibroblasts to produce new collagen and elastin fibers while clearing damaged cross-linked proteins."
    },
    {
      id: "ing-7",
      name: "L-Ascorbic Acid (15% Pure Vitamin C)",
      function: "Photoprotective Free-Radical Scavenger",
      ewgScore: "1 (Clean)",
      bestFor: "Dullness, Sun Spots, Daylight Protection",
      routineTime: "AM",
      avoidWith: "Retinoids, Peptides, Exfoliating Acids",
      description: "The biologically active form of Vitamin C. Boosts the efficacy of your daylight sunscreen and inhibits tyrosinase to even complexion tone."
    },
    {
      id: "ing-8",
      name: "Squalane (Olive/Sugarcane Derived)",
      function: "Non-Comedogenic Biomimetic Emollient",
      ewgScore: "1 (Clean)",
      bestFor: "All Skin Types, Acne-Prone Dryness",
      routineTime: "AM & PM",
      avoidWith: "None",
      description: "A hydrogenated, stable version of skin’s natural squalene. Lightweight, absorbs instantaneously without clogging pores or triggering fungal acne."
    }
  ],

  // Community & Verified Expert Discussions
  communityThreads: [
    {
      id: "th-1",
      author: "Maya Chen",
      avatar: "MC",
      time: "2 hours ago",
      topic: "Skincare Routines",
      title: "Is it safe to use Azelaic Acid 15% with Vitamin C in the morning?",
      body: "I am trying to target stubborn hormonal dark spots and slight rosacea. Can I apply my 15% Azelaic Acid right after my Vitamin C serum before SPF?",
      upvotes: 38,
      commentsCount: 14,
      answeredByExpert: true,
      expertAnswer: {
        expertName: "Dr. Elena Vance, MD",
        expertRole: "Board-Certified Dermatologist",
        avatar: "EV",
        badge: "Verified Medical Pro",
        answer: "Yes, this combination can be exceptionally effective for stubborn erythema and melasma because they inhibit pigment via two complementary biological pathways! However, if you have sensitive skin, apply Vitamin C first, wait 5 minutes for pH stabilization, then apply Azelaic Acid. Always seal with SPF 50+ daylight sunscreen."
      }
    },
    {
      id: "th-2",
      author: "David K.",
      avatar: "DK",
      time: "Yesterday",
      topic: "Hair Restoration",
      title: "Best trichologist-approved frequency for salicylic scalp scrubs?",
      body: "I struggle with occasional oily flakes and tightness around my crown. How often should I clarify without damaging hair shaft health?",
      upvotes: 24,
      commentsCount: 8,
      answeredByExpert: true,
      expertAnswer: {
        expertName: "Julian Thorne",
        expertRole: "Certified Trichologist",
        avatar: "JT",
        badge: "Verified Pro",
        answer: "Limit chemical scalp exfoliants to once every 7 to 10 days. Always apply onto a damp scalp directly onto the part-lines before your regular gentle shampoo, massaging in circular motions for 2-3 minutes."
      }
    },
    {
      id: "th-3",
      author: "Sophie Laurent",
      avatar: "SL",
      time: "3 days ago",
      topic: "Barrier Repair",
      title: "How I healed my ruined skin barrier in 10 days after tretinoin purge",
      body: "Sharing my full routine log: Stopped all actives, switched to gentle oat cleanser, layered 5% Panthenol serum on damp skin, and finished with a 3:1:1 lipid cream. Redness went from an 8/10 to a 1/10!",
      upvotes: 92,
      commentsCount: 31,
      answeredByExpert: false
    }
  ],

  // Routine Matrix
  routinePresets: {
    dry: {
      minimalist: {
        am: [
          { step: 1, name: "Gentle Cream Hydrating Cleanser", ingredient: "Oat Extract & Ceramides", tip: "Splash with lukewarm water or use cream cleanser" },
          { step: 2, name: "Barrier Rich Day Cream", ingredient: "3:1:1 Lipids & Squalane", tip: "Press gently into damp face and neck" },
          { step: 3, name: "Dewy Mineral Sunscreen SPF 50", ingredient: "Zinc Oxide & Hyaluronic Acid", tip: "Apply 2 finger lengths for complete daylight shield" }
        ],
        pm: [
          { step: 1, name: "Nourishing Cleansing Balm", ingredient: "Jojoba & Chamomile", tip: "Melt makeup and environmental pollution without stripping" },
          { step: 2, name: "Deep Overnight Peptide Repair Mask", ingredient: "Ceramide NP & Copper Peptides", tip: "Apply generous layer before sleep" }
        ]
      },
      balanced: {
        am: [
          { step: 1, name: "Hydrating Phyto-Cleanser", ingredient: "Amino Acids & Centella", tip: "Non-stripping foam or milky emulsion" },
          { step: 2, name: "Hydrating Micro-Essence", ingredient: "Polyglutamic Acid & Panthenol", tip: "Pat 2 layers into skin while damp" },
          { step: 3, name: "Antioxidant Illuminating Serum", ingredient: "10% Ethyl Ascorbic Acid + Ectoin", tip: "Combats daylight oxidative stress" },
          { step: 4, name: "Lipid Restorative Cream", ingredient: "Ceramides & Cholesterol", tip: "Locks in cellular humectants" },
          { step: 5, name: "Broad Spectrum Glow SPF 50+", ingredient: "Zinc Oxide & Niacinamide", tip: "Reapply every 2 hours if outdoors" }
        ],
        pm: [
          { step: 1, name: "Oil-to-Milk Cleansing Emulsion", ingredient: "Camellia & Sweet Almond Oil", tip: "Massage for 60 seconds" },
          { step: 2, name: "Gentle Balancing Cleanser", ingredient: "Betaine & Allantoin", tip: "Removes residual hydrophilic impurities" },
          { step: 3, name: "Regenerative Retinal 0.05% Serum", ingredient: "Encapsulated Retinaldehyde", tip: "Promotes cell turnover with zero flaking" },
          { step: 4, name: "Biomimetic Ceramide Night Balm", ingredient: "Phytosterols & Shea Butter", tip: "Overnight protective seal" }
        ]
      }
    },
    oily: {
      balanced: {
        am: [
          { step: 1, name: "Balancing Low-pH Gel Cleanser", ingredient: "Zinc PCA & Green Tea", tip: "Purifies excess sebum while maintaining acid mantle" },
          { step: 2, name: "Clarifying BHA/PHA Tonic", ingredient: "1% Salicylic Acid & Gluconolactone", tip: "Clears pore lining and regulates shine" },
          { step: 3, name: "Niacinamide 5% + Zinc Serum", ingredient: "Niacinamide & Zinc PCA", tip: "Soothes inflammation and minimizes pore diameter" },
          { step: 4, name: "Oil-Free Water Gel Moisturizer", ingredient: "Hyaluronic Acid & Centella", tip: "Weightless burst of hydration" },
          { step: 5, name: "Matte Daylight Sunscreen Fluid SPF 50", ingredient: "Silica & Zinc Oxide", tip: "Non-greasy, invisible daylight finish" }
        ],
        pm: [
          { step: 1, name: "Gentle Micellar Botanical Water", ingredient: "Cucumber & Rosemary", tip: "Dissolves surface pollution" },
          { step: 2, name: "Purifying Gel Cleanser", ingredient: "Zinc & Tea Tree", tip: "Thorough secondary cleanse" },
          { step: 3, name: "Encapsulated Retinal 0.05%", ingredient: "Retinaldehyde & Niacinamide", tip: "Normalizes keratinization inside the pore" },
          { step: 4, name: "Centella Soothing Gel Cream", ingredient: "Madecassoside & Allantoin", tip: "Repairs without heavy occlusives" }
        ]
      }
    }
  },

  // Beauty & Personal Care Packages (Interactive Showcase Component)
  carePackages: [
    {
      id: "pkg-1",
      name: "Radiance Glow & Barrier Restoration",
      badge: "★ Signature Radiance Package",
      subtitle: "Restore cellular lipid balance and awaken luminous, dewy skin",
      borderColor: "#F472B6",
      bgColor: "#FDF2F8",
      avatar: "assets/images/radiance_glow_package.jpg",
      image: "assets/images/radiance_glow_package.jpg",
      perfectFor: [
        "Compromised skin barrier, redness & chronic transepidermal water loss",
        "Pre-event instant glass-skin radiance and lymphatic depuffing",
        "Restoring optimal 3:1:1 physiological ceramide & fatty acid ratio"
      ],
      description: "With <strong style='color: #D946EF;'>Radiance Glow & Barrier Restoration</strong>, clinical estheticians pair deep ultrasonic cleansing, jade stone lymphatic drainage, and biomimetic ceramide micro-infusions. We optimize your daytime antioxidant shield and evening cellular repair for a visibly renewed complexion."
    },
    {
      id: "pkg-2",
      name: "Clinical Clarity & Pore Refining Therapy",
      badge: "★ Clinical Clarifying Protocol",
      subtitle: "Purify congestion, calm inflammation, and restore microbiome balance",
      borderColor: "#86EFAC",
      bgColor: "#F0FDF4",
      avatar: "assets/images/clear_pore_package.jpg",
      image: "assets/images/clear_pore_package.jpg",
      perfectFor: [
        "Persistent adult congestion, hormonal breakouts & enlarged pores",
        "Post-inflammatory erythema (PIE) and uneven skin texture",
        "Regulating sebum flow without stripping essential epidermal lipids"
      ],
      description: "With <strong style='color: #16A34A;'>Clinical Clarity & Pore Refining Therapy</strong>, medical dermatologists use medical-grade salicylic-mandelic peels, blue light bactericidal therapy, and zinc niacinamide infusions. Achieve calm, pristine pores with zero dryness or irritation."
    },
    {
      id: "pkg-3",
      name: "Scalp Microbiome & Hair Density Revival",
      badge: "★ Trichology Excellence Suite",
      subtitle: "Re-energize dormant hair follicles and calm follicular inflammation",
      borderColor: "#D8B4FE",
      bgColor: "#FAF5FF",
      avatar: "assets/images/scalp_hair_package.jpg",
      image: "assets/images/scalp_hair_package.jpg",
      perfectFor: [
        "Thinning hair, excess seasonal shedding, or follicular weakness",
        "Dry, itchy, or micro-inflamed scalp microbiome imbalances",
        "Strengthening hair roots with clinical peptide and rosemary infusions"
      ],
      description: "With <strong style='color: #9333EA;'>Scalp Microbiome & Hair Density Revival</strong>, certified trichologists perform gentle scalp micro-dermabrasion, copper tri-peptide infusion, and 650nm red light photobiomodulation to fortify follicular vitality from root to tip."
    },
    {
      id: "pkg-4",
      name: "Cellular Peptide & Advanced Contour Lift",
      badge: "★ Anti-Aging Sculpture Package",
      subtitle: "Stimulate deep neocollagenesis and redefine natural facial architecture",
      borderColor: "#FDBA74",
      bgColor: "#FFF7ED",
      avatar: "assets/images/anti_aging_package.jpg",
      image: "assets/images/anti_aging_package.jpg",
      perfectFor: [
        "Loss of dermal elasticity, jawline laxity, and nasolabial fatigue",
        "Fine dynamic lines, expression wrinkles & collagen depletion",
        "Non-invasive facial contouring and structural tissue firming"
      ],
      description: "With <strong style='color: #EA580C;'>Cellular Peptide & Advanced Contour Lift</strong>, clinical practitioners combine targeted micro-current lifting with multi-molecular peptide cocktails and ectoin. Rebuild dermal scaffolding for a sculpted, lifted profile with no downtime."
    },
    {
      id: "pkg-5",
      name: "Bridal & Red-Carpet Radiance Couture",
      badge: "★ High-Glamour Event Package",
      subtitle: "Full-body luminescence and camera-ready glass skin preparation",
      borderColor: "#FCA5A5",
      bgColor: "#FEF2F2",
      avatar: "assets/images/bridal_radiance_package.jpg",
      image: "assets/images/bridal_radiance_package.jpg",
      perfectFor: [
        "Brides, gala attendees, and milestone celebration occasions",
        "Immaculate makeup canvas with pore-blurring hydration",
        "Complete neck, décolleté, hands, and full-body silk exfoliation"
      ],
      description: "With <strong style='color: #E11D48;'>Bridal & Red-Carpet Radiance Couture</strong>, experience an exclusive multi-stage glow ritual. Features diamond dermabrasion, 24K gold collagen masks, pressurized oxygen hydration, and botanical silk body wraps for effortless luminescence."
    },
    {
      id: "pkg-6",
      name: "Customised Bespoke Ritual for Your Skin",
      badge: "★ Bespoke Sanctuary Suite",
      subtitle: "Fully customized treatments aligned with your circadian lifestyle",
      borderColor: "#C7D2FE",
      bgColor: "#EEF2FF",
      avatar: "assets/images/bespoke_skincare_package.jpg",
      image: "assets/images/bespoke_skincare_package.jpg",
      perfectFor: [
        "Multi-concern complex skin requiring individualized practitioner oversight",
        "Hybrid combinations of clinic facial visits & home active formulas",
        "Flexible schedules, custom active strengths & seasonal bio-adjustments"
      ],
      description: "With <strong style='color: #4F46E5;'>Customised Bespoke Ritual for Your Skin</strong>, you consult 1-on-1 with a master skincare formulator. Select custom serum compounding, clinic technology modalities, and appointment cadences specifically engineered for your unique lifestyle."
    }
  ]
};
