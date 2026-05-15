# MediCare Plus

A premium, trust-focused medical website built with HTML, CSS, and Vanilla JavaScript. Optimized for local SEO and patient convenience.

## Features 🚀

- **Quick Appointment System**: A seamless, login-free appointment booking form to reduce friction.
- **Symptom Checker**: Interactive JavaScript-based quiz to direct patients to the right specialist.
- **Live OPD Timing Indicator**: Real-time status badge showing whether the clinic is open or closed based on local time.
- **E-Prescription Demo**: An interactive UI mockup showcasing post-consultation digital prescriptions.
- **Modern Aesthetics**: Built with a custom color palette, smooth scroll-reveal animations, and responsive CSS Grid/Flexbox layouts.

## File Structure 📂

```
MediCare-Plus/
├── css/
│   ├── styles.css         # Main stylesheet (Variables, Base, Components)
│   └── animations.css     # Keyframe animations and transitions
├── js/
│   ├── main.js            # Core interactive logic (Nav, OPD, FAQ, Testimonials)
│   ├── animations.js      # Intersection Observers for scroll reveals & counters
│   └── symptom-checker.js # Logic for the interactive symptom quiz
├── index.html             # Homepage
├── doctors.html           # Specialists Directory
├── appointment.html       # Booking Form & Prescription Demo
├── services.html          # Centers of Excellence
├── blog.html              # Health Blog
└── README.md
```

## Deployment 🌐

This project is fully static and ready to be deployed on platforms like **Vercel**, Netlify, or GitHub Pages.

### Deploying to Vercel
1. Push this repository to your GitHub account.
2. Log into [Vercel](https://vercel.com).
3. Click **Add New** > **Project**.
4. Import this GitHub repository.
5. Leave all settings as default (Vercel will automatically detect that it's a static site).
6. Click **Deploy**.

Within seconds, your site will be live!

## Development 💻

Since there is no build step or framework involved, you can run this project locally by simply opening `index.html` in your web browser. For the best experience (to avoid CORS issues with certain local assets), you can use a local live server:

Using Node.js:
```bash
npx serve .
```

Using Python:
```bash
python -m http.server 8000
```
