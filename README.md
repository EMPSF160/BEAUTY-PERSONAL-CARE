# LUMIÈRE — Beauty & Personal Care Guide & Directory Portal
*The Daylight Sanctuary for Modern Skin, Hair, & Circadian Self-Care*

---

## 🌟 Overview & Concept
**LUMIÈRE** is a state-of-the-art beauty and personal care web portal built around a radiant **Daylight Theme**. It synchronizes evidence-based cosmetic science and clinical dermatology with daily circadian daylight rhythms.

The portal provides a comprehensive experience across **5 core pages + a feature-packed Daylight Dashboard**:

1. **Home (`index.html`)**:
   - Editorial daylight hero with real generated beauty photography
   - Fast Search Bar (Specialty category + Destination city)
   - Live Daylight UV & Skincare Forecast widget (UV index, recommended SPF & humidity)
   - Curated Sanctuaries & Clinical Masterclass highlights
   - Interactive 60-Second Skin & Routine Assessment Quiz
   - Verified client reviews and Daylight Club newsletter with instant rewards

2. **Directory Portal (`directory.html`)**:
   - Curated directory of verified MedSpas, dermatology clinics, holistic hair labs, luxury day spas, and clean nail studios
   - Multi-parameter live filtering: Real-time search, category pills, city selector, price tier, and sorting
   - Dual view switcher: Grid Cards vs Interactive Simulated Daylight Map with clickable clinic pins
   - Comprehensive Clinic Details Modal with services, staff bios, and pricing
   - Interactive Instant Appointment Booking flow with direct calendar confirmation

3. **Beauty Guides & Ingredient Glossary (`guides.html`)**:
   - Clinical masterclasses (e.g. *The 2026 Skin Barrier Recovery Protocol*, *Circadian Skincare*, *Scalp Microbiome*)
   - Interactive Reader Mode Modal with key clinical takeaways
   - Searchable A-Z Cosmetic Actives Glossary with EWG safety scores, daylight AM/PM compatibility, and conflict warnings

4. **Interactive Routine Builder (`routine-builder.html`)**:
   - Dynamic skincare protocol configurator (Skin profile, goals, and routine depth)
   - Computes AM Daylight Shield and PM Cellular Recovery protocols with application order, key actives, and wait times
   - One-click "Save to Dashboard" and "Print / Export Blueprint"

5. **Community & Specialist Q&A (`community.html`)**:
   - Direct exchange with board-certified dermatologists and licensed master estheticians
   - Interactive upvoting system saved to localStorage
   - "Ask a Specialist" submission modal with live expert simulated replies

6. **Daylight Sanctuary Dashboard (`dashboard.html`)**:
   - Personalized daylight greeting dynamically adjusting to morning, afternoon, or evening
   - Circadian streak counter (7-Day active glow streak)
   - Interactive AM Morning Shield & PM Night Recovery checklists with strike-through completion
   - Daily 8-cup cellular hydration tracker with milliliter metrics
   - Saved Sanctuaries bookmarks manager
   - Booked consultations manager (reschedule, directions, cancel)
   - **Practitioner & Clinic Portal Mode**: Allows aesthetic clinics and salon owners to view profile impressions, client booking inquiries, and publish new sanctuary listings

---

## ☀️ Daylight Theme System
LUMIÈRE features three dynamic daylight presets available on every page via the top bar:
- **☀️ Morning Sun**: Soft rose-gold morning radiance, gentle warm ivory
- **🌤️ High Noon**: High-clarity luminous daylight, crisp cool-neutral contrast
- **🌅 Golden Hour**: Honey-amber warmth, golden sunbeam gradients

The chosen daylight mode is persisted in `localStorage` across page transitions.

---

## 📂 File Architecture
```
Beauty Personal Care Guide & Directory Portal/
│
├── index.html               # Page 1: Home & Hero Portal
├── directory.html           # Page 2: Certified Clinic Directory & Map
├── guides.html              # Page 3: Clinical Guides & Ingredient Glossary
├── routine-builder.html     # Page 4: Interactive Circadian Routine Configurator
├── community.html           # Page 5: Verified Specialist Q&A & Community
├── dashboard.html           # Page 6: Daylight Sanctuary & Practitioner Dashboard
│
├── css/
│   └── style.css            # Master design system (Daylight palette, typography, glassmorphism)
│
├── js/
│   ├── data.js              # Comprehensive data store (Clinics, guides, actives, threads)
│   └── app.js               # Universal controller (Theme switcher, bookmarks, booking, modals)
│
└── assets/
    └── images/
        ├── hero.jpg         # Editorial daylight skincare hero image
        ├── spa.jpg          # Sunlit Mediterranean wellness spa interior
        └── products.jpg     # Luxury botanical cosmetic bottles on travertine
```

---

## 🚀 How to Run Locally
Open any HTML file directly in your browser, or launch a local web server:

```powershell
# Using Node / npx
npx -y serve . -l 3000

# Or open directly in browser:
Start-Process "http://localhost:3000"
```
