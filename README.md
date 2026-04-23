# Voltive Electrical Services Website

A fully responsive, modern electrical services website built with HTML5, CSS3, and vanilla JavaScript. The site serves as a platform for users to discover electrical services, request quotes, and calculate project costs.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [HTML Files](#html-files)
4. [CSS Styling System](#css-styling-system)
5. [JavaScript Functionality](#javascript-functionality)
6. [Features](#features)
7. [How to Use](#how-to-use)
8. [Customization Guide](#customization-guide)
9. [Browser Compatibility](#browser-compatibility)
10. [Color Scheme](#color-scheme)

---

## Project Overview

**Voltive Electrical Services** is a modern, professional website for an electrical services company. It showcases services (installation, design, maintenance, repair), provides an interactive cost calculator, and enables users to request services through a contact form.

### Key Characteristics

- **Fully Responsive**: Mobile-first design that works on all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between light and dark themes with localStorage persistence
- **No Backend Required**: All functionality works entirely in the browser
- **Semantic HTML5**: Proper structure using modern HTML5 elements
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **Vanilla JavaScript**: No dependencies, pure JavaScript for interactivity

---

## File Structure

```
b:\Mr willard project\
├── index.html          # Home page with hero, services overview, testimonials
├── services.html       # Dedicated services page with cost calculator
├── about.html          # About company page
├── styles.css          # All styling (shared across all pages)
├── script.js           # All JavaScript functionality (shared across all pages)
└── README.md           # This file
```

### File Relationships

- All three HTML files (`index.html`, `services.html`, `about.html`) share the same `styles.css` and `script.js`
- Navigation between pages is seamless with consistent header/footer
- Data is stored in browser's `localStorage` for form persistence

---

## HTML Files

### 1. **index.html** - Home Page

The landing page that introduces the company and directs users to services.

#### Sections:

**Header (Sticky Navigation)**
```html
<header class="site-header" id="home">
```
- Fixed navigation bar that stays visible when scrolling
- Branding with "Voltive" logo link
- Dark/Light mode toggle button (🌙/☀️)
- Mobile hamburger menu for responsive navigation
- Links: Home, Services, About, Contact

**Hero Section**
```html
<section class="hero section">
```
- **Headline**: "Reliable Electrical Services at Your Fingertips"
- **Subheading**: Company value proposition (safety, efficiency, convenience)
- **Call-to-Action Buttons**:
  - "Request a Service" (Primary button, links to contact form)
  - "View Services" (Secondary button, links to services.html)
- **Visual Element**: Hero card with lightning bolt icon and tagline

**Quick Services Overview**
```html
<section class="section quick-services">
```
- 2x2 grid of service cards showing:
  - 🔌 Electrical Installation
  - 🧭 System Design
  - 🛠️ Maintenance
  - 🚨 Repair Services
- Each card has icon, title, and one-line description
- Cards have hover effects (lift on mouse over)

**Why Choose Us Section**
```html
<section class="section why-choose">
```
- 2x2 grid of trust-building feature cards:
  - Reliable Service
  - Safety First
  - Fast Response
  - Innovative Solutions
- Alternate card styling (second row has different background color)
- Builds credibility immediately

**How It Works Section**
```html
<section class="section how-it-works">
```
- 4-step process shown in numbered cards:
  1. Request a service online
  2. Get a quick response
  3. Technician is assigned
  4. Service completed safely
- Each step has a numbered badge (1-4)
- Clear visual flow for user understanding

**Spotlight Section**
```html
<section class="section spotlight">
```
- Eye-catching banner on brand color background
- Highlights urgent repair services
- CTA button: "Get an instant cost estimate"
- Links directly to cost calculator on services page

**Testimonials Section**
```html
<section class="section testimonials">
```
- 2-column grid of customer quotes
- Shows social proof and builds trust
- Each testimonial includes quote and customer name
- Currently has 2 sample testimonials (easily expandable)

**Final CTA Banner**
```html
<section class="section cta-banner">
```
- Last push before footer to drive conversions
- Heading: "Ready to get started?"
- Subheading: "Request your electrical service today!"
- Button: "Book Now" (links to contact form)

**Contact Section**
```html
<section class="section contact" id="contact">
```
- Two-column layout:
  - Left: Contact info and company details
  - Right: Service request form
- **Form Fields**:
  - Name (required, text input)
  - Email (required, email validation)
  - Phone (optional, tel input)
  - Service Type (required, dropdown with 4 options)
  - Message (required, textarea)
- **Form Features**:
  - Client-side validation
  - Success/error feedback messages
  - Data saved to localStorage
  - Live validation feedback

**Footer**
```html
<footer class="site-footer">
```
- Company info and description
- Social media links (LinkedIn, Facebook, Instagram)
- Contact details
- Copyright notice
- Responsive 3-column grid layout

---

### 2. **services.html** - Services Page

Dedicated page showcasing all electrical services with an interactive cost calculator.

#### Sections:

**Header** - Identical to index.html for navigation consistency

**Services Grid**
```html
<section class="section services">
```
- 2x2 grid of detailed service cards with:
  - 🔧 Electrical Installation (Starting from ZMW 1,200)
  - ⚡ System Design (Starting from ZMW 900)
  - 🛠️ Maintenance (Starting from ZMW 700)
  - 🚨 Repair Services (Starting from ZMW 800)
- Each card includes:
  - Service icon
  - Title
  - Bulleted list of service details (3 items each)
  - Starting price
  - "Request Service" button

**Cost Estimate Calculator**
```html
<div class="estimate-panel" id="estimate">
```
- **Interactive Form with Dropdowns**:
  1. **Service Type**: Selection of 4 electrical services
  2. **Project Size**: Small, Medium, Large
  3. **Urgency**: Normal, Urgent
  4. **Materials Checkbox**: Option to include materials cost
- **Calculate Button**: Triggers cost calculation
- **Result Display**:
  - Shows "Estimated Cost: ZMW [amount]"
  - Updated dynamically as user changes inputs
- **Disclaimer**: "This is an estimated cost. Final pricing may vary after inspection."

**Calculator Logic**:
- Base prices per service (installation: 1200, design: 900, maintenance: 700, repair: 800)
- Size multipliers (small: 1.0x, medium: 1.35x, large: 1.75x)
- Urgency multipliers (normal: 1.0x, urgent: 1.3x)
- Materials fee: Fixed 250 ZMW if selected
- Formula: `basePrice × sizeMultiplier × urgencyMultiplier + (materials ? 250 : 0)`

**Footer** - Identical to index.html

---

### 3. **about.html** - About Page

Company information and values page.

#### Sections:

**Header** - Identical to index.html for navigation consistency

**About Section**
```html
<section class="section about">
```
- Two-column layout:
  - **Left**: Company story and values
    - Headline: "Experienced, Safe, and Future-Focused"
    - Mission statement
    - Three core values with descriptions:
      - **Reliability**: Consistent workmanship
      - **Safety**: Strict safety standards
      - **Innovation**: Modern solutions
  - **Right**: Feature cards
    - "24/7 Support" badge
    - "Certified Team" badge
    - Supporting descriptions

**Footer** - Identical to index.html

---

## CSS Styling System

### CSS Variables (Root)

Located in `:root` selector, two theme variations (light and dark):

**Light Theme (Default)**
```css
--bg: #f4f8ff;              /* Page background */
--surface: #ffffff;         /* Card backgrounds */
--text: #0f172a;            /* Main text color */
--text-secondary: #475569;  /* Secondary text (metadata) */
--brand: #1663c7;           /* Primary brand color (blue) */
--brand-dark: #0f4f9d;      /* Darker brand variation */
--border: #dbe6f5;          /* Border/separator color */
--shadow: rgba(15, 23, 42, 0.08);  /* Light shadow */
--accent: #0284c7;          /* Accent color */
--danger: #dc2626;          /* Error/danger red */
--success: #16a34a;         /* Success green */
```

**Dark Theme (`[data-theme="dark"]`)**
- Inverted colors for dark backgrounds
- Reduced opacity shadows for contrast
- Light text on dark surfaces

### Global Styles

**Reset & Defaults**
- `* { box-sizing: border-box; }` - Consistent box model
- `html { scroll-behavior: smooth; }` - Smooth scroll animations
- Body: System font stack, flex layout ready
- Links: Inherit color, no underline by default

**Typography**
- Font Family: `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Line-height: 1.6 for readability
- Heading sizes scale with viewport using `clamp()`

**Container**
```css
.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}
```
- Maximum width: 1120px
- Responsive padding: 2rem on sides
- Centered with auto margins

### Layout Classes

**Section**
```css
.section {
  padding: 4rem 0;
}
```
- Consistent vertical spacing between sections

**Grid Systems**

1. **Hero Grid** (1.4fr 1fr)
   - Left: Text content (60% width)
   - Right: Visual element (40% width)
   - Gap: 2rem

2. **Service Grid** (2 columns)
   - 2x2 layout for service cards
   - Gap: 1.5rem

3. **Choose Grid** (2 columns)
   - Why Choose Us section
   - Auto-responsive

4. **Steps Grid** (2 columns)
   - How It Works section with numbered steps

5. **Testimonial Grid** (2 columns)
   - Customer testimonials

6. **About Grid** (1.1fr 0.9fr)
   - Asymmetric layout for about section

### Component Styles

**Header**
```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(14px);
}
```
- Sticky positioning (stays at top when scrolling)
- Semi-transparent background with blur for modern look
- Z-index ensures it stays above content

**Navigation**
```css
.site-nav {
  display: flex;
  gap: 1.5rem;
}
```
- Horizontal flex layout
- Links change color on hover/focus

**Buttons**
```css
.button {
  display: inline-flex;
  border-radius: 999px;  /* Fully rounded */
  padding: 0.95rem 1.7rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```
- Two variants:
  - `.button.primary`: Solid brand color with shadow
  - `.button.secondary`: Light background, brand text

**Service Cards**
```css
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
```
- Flex column layout for consistent heights
- Hover effect: Lift 6px up with increased shadow
- Icons: 3rem square with rounded corners and light background

**Form Elements**
```css
input, select, textarea {
  border: 1px solid var(--border);
  border-radius: 0.9rem;
  padding: 0.95rem 1rem;
  background: var(--bg);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
```
- Consistent styling across form inputs
- Focus state: Brand border color + subtle shadow
- Different background from surface (subtle depth)

**Modal Styles** (Removed)
- Modal styles have been removed from the project

### Responsive Breakpoints

**Mobile & Tablet** (`max-width: 900px`)
- Grid columns collapse to 1
- About/Contact grid becomes single column
- Service grid becomes single column

**Small Mobile** (`max-width: 780px`)
- Navigation menu becomes mobile hamburger
- Menu items displayed vertically
- Smooth animation for menu toggle

**Extra Small** (`max-width: 520px`)
- Larger font sizes use smaller range
- Footer grid single column
- Optimized spacing for small screens

### Animations

**Fade-in on Scroll**
```css
.service-card, .feature-card, .hero-card, etc. {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
```
- Elements fade in and slide up as user scrolls
- Uses Intersection Observer API
- Applied to: service cards, feature cards, hero elements

**Hover Effects**
- Service cards: Lift up 6px with shadow increase
- Buttons: Lift 1px on hover
- Links: Color transition
- All with 0.2-0.25s ease timing

---

## JavaScript Functionality

### DOM Element Selection

```javascript
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const siteNav = document.getElementById('siteNav');
const themeToggle = document.getElementById('themeToggle');
const serviceForm = document.getElementById('serviceForm');
const formFeedback = document.getElementById('formFeedback');
// ... and more
```

All major interactive elements are selected at page load and stored in constants.

### 1. Theme System

**Function: `setTheme(theme)`**
```javascript
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('preferredTheme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
};
```
- Sets `data-theme` attribute on `<html>` element
- CSS uses this to switch color variables
- Saves preference to localStorage
- Updates toggle button icon

**Function: `loadTheme()`**
- Retrieves saved theme preference from localStorage
- Applies it on page load
- Falls back to light theme if not saved

**Event Listener: Theme Toggle Button**
- Listens for click on theme button
- Toggles between light and dark
- Calls `setTheme()`

---

### 2. Mobile Menu

**Function: `toggleMobileMenu()`**
```javascript
const toggleMobileMenu = () => {
  const isOpen = siteNav.classList.toggle('open');
  mobileMenuToggle.setAttribute('aria-expanded', isOpen);
};
```
- Toggles `.open` class on navigation
- Updates `aria-expanded` for accessibility
- CSS shows/hides menu based on class

**Event Listeners**:
- Click on hamburger menu: Opens/closes nav
- Click on nav link: Closes menu after selection
- Closes on mobile after navigation

---

### 3. Form Validation & Submission

**Function: `validateField(field)`**
```javascript
const validateField = (field) => {
  if (!field.value.trim()) {
    field.classList.add('invalid');
    return false;
  }
  field.classList.remove('invalid');
  return true;
};
```
- Checks if field has non-whitespace content
- Adds/removes `.invalid` class for styling
- Returns boolean for validation flow

**Function: `showFeedback(message, type)`**
```javascript
const showFeedback = (message, type = 'success') => {
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback ${type}`;
};
```
- Displays success or error messages
- Dynamically updates CSS classes
- Uses `aria-live="polite"` for screen readers

**Form Submission Validation**
```javascript
if (serviceForm) {
  serviceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validate all required fields
    const nameValid = validateField(serviceForm.name);
    const emailValid = validateField(serviceForm.email);
    const serviceValid = validateField(serviceForm.service);
    const messageValid = validateField(serviceForm.message);
    
    // Check email format
    if (!serviceForm.email.value.includes('@')) {
      showFeedback('Enter a valid email address.', 'error');
      return;
    }
    
    // Save and show success
    saveFormData();
    showFeedback('Your request has been submitted successfully!', 'success');
  });
}
```

**Process**:
1. Prevent default form submission
2. Validate each required field
3. Check email contains '@'
4. Save data if valid
5. Show success message
6. Stop if any validation fails

---

### 4. Data Persistence

**Function: `saveFormData()`**
```javascript
const saveFormData = () => {
  if (!serviceForm) return;

  const formData = {
    name: serviceForm.name.value.trim(),
    email: serviceForm.email.value.trim(),
    phone: serviceForm.phone.value.trim(),
    service: serviceForm.service.value,
    message: serviceForm.message.value.trim(),
  };
  localStorage.setItem('voltiveForm', JSON.stringify(formData));
};
```
- Converts form data to JSON object
- Saves to `localStorage` with key `voltiveForm`
- Data persists across page reloads/sessions

**Function: `restoreFormData()`**
```javascript
const restoreFormData = () => {
  if (!serviceForm) return;

  const stored = localStorage.getItem('voltiveForm');
  if (!stored) return;
  try {
    const formData = JSON.parse(stored);
    serviceForm.name.value = formData.name || '';
    serviceForm.email.value = formData.email || '';
    // ... populate all fields
  } catch (error) {
    console.warn('Unable to restore saved form data', error);
  }
};
```
- Retrieves saved form data from localStorage
- Parses JSON and repopulates form fields
- Error handling for corrupted data

**Service Selection Persistence**
```javascript
const restoreSelectedService = () => {
  if (!serviceForm) return;
  const selectedService = localStorage.getItem('voltiveTargetService');
  if (selectedService) {
    serviceForm.service.value = selectedService;
    localStorage.removeItem('voltiveTargetService');
  }
};
```
- When user clicks "Request Service" on services page
- Service type is saved to localStorage
- On redirect to contact form, service is auto-selected
- Then localStorage item is cleared

---

### 5. Cost Calculator

**Price Configuration**
```javascript
const servicePrices = {
  installation: 1200,   // ZMW
  design: 900,
  maintenance: 700,
  repair: 800,
};

const sizeMultipliers = {
  small: 1.0,
  medium: 1.35,
  large: 1.75,
};

const urgencyMultipliers = {
  normal: 1.0,
  urgent: 1.3,
};

const materialFee = 250;  // Fixed ZMW
```

**Function: `calculateEstimate()`**
```javascript
const calculateEstimate = () => {
  if (!estimateService || !projectSize || !urgencyLevel || 
      !includeMaterialsCheckbox || !estimateValue) {
    return;
  }

  const selectedService = estimateService.value;
  const selectedSize = projectSize.value;
  const selectedUrgency = urgencyLevel.value;
  const includeMaterials = includeMaterialsCheckbox.checked;

  if (!selectedService || !selectedSize || !selectedUrgency) {
    estimateValue.textContent = 'ZMW 0';
    return;
  }

  const basePrice = servicePrices[selectedService] || 0;
  const sizeFactor = sizeMultipliers[selectedSize] || 1;
  const urgencyFactor = urgencyMultipliers[selectedUrgency] || 1;
  const materialsCost = includeMaterials ? materialFee : 0;

  const estimateTotal = Math.round(
    basePrice * sizeFactor * urgencyFactor + materialsCost
  );
  estimateValue.textContent = formatCost(estimateTotal);
};
```

**Calculation Example**:
- Service: Installation (1200)
- Size: Medium (1.35x multiplier)
- Urgency: Urgent (1.3x multiplier)
- Materials: Yes (+250)
- Total: `1200 × 1.35 × 1.3 + 250 = 2,361 + 250 = 2,611 ZMW`

**Function: `formatCost(amount)`**
```javascript
const formatCost = (amount) => 
  `ZMW ${amount.toLocaleString('en-ZM', { maximumFractionDigits: 0 })}`;
```
- Formats number with ZM locale (adds commas)
- Removes decimal places
- Example: `2611` becomes `ZMW 2,611`

---

### 6. Service Request Button Navigation

```javascript
serviceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const serviceValue = button.dataset.service;
    if (serviceValue) {
      localStorage.setItem('voltiveTargetService', serviceValue);
    }
    window.location.href = 'index.html#contact';
  });
});
```

**Flow**:
1. User clicks "Request Service" on services page
2. Service type stored to localStorage
3. Page redirects to index.html#contact
4. Contact form loads
5. Form submission listener restores selected service
6. Service dropdown pre-filled with user's choice

---

### 7. Scroll Animation (Intersection Observer)

```javascript
const animatedElements = document.querySelectorAll(
  '.service-card, .feature-card, .hero-card, .about-copy, .contact-copy'
);

const observerOptions = {
  threshold: 0.15,  // Trigger when 15% visible
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);  // Only animate once
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);
animatedElements.forEach((element) => observer.observe(element));
```

**How It Works**:
1. Select all elements to animate
2. Create Intersection Observer with 15% visibility threshold
3. When element becomes visible, add `.visible` class
4. CSS transition animates from opacity 0 to 1
5. Unobserve so animation only happens once

---

### 8. Page Load Initialization

```javascript
window.addEventListener('load', () => {
  loadTheme();           // Restore theme preference
  restoreFormData();     // Repopulate form from localStorage
  restoreSelectedService();  // Pre-select service if coming from services page
});
```

Runs when entire page is loaded (images, stylesheets, scripts all ready).

---

## Features

### 1. Fully Responsive Design
- Mobile-first approach
- Breakpoints: 900px, 780px, 520px
- Flexible grid layouts
- Touch-friendly interactive elements

### 2. Dark/Light Mode
- Toggle button in header
- Persistent preference stored in localStorage
- Complete color theme switch
- Works across all pages

### 3. Service Request Form
- Real-time validation
- Required field checking
- Email format validation
- Success/error feedback messages
- Auto-restore from localStorage
- Service pre-selection from services page

### 4. Interactive Cost Calculator
- 4 input dropdowns
- Materials checkbox option
- Real-time calculation
- Dynamic result display
- Clear pricing breakdown

### 5. Mobile Navigation
- Hamburger menu on small screens
- Smooth open/close animation
- Auto-closes on link click
- Accessible with ARIA attributes

### 6. Scroll Animations
- Fade-in effects on elements
- Triggered when elements enter viewport
- Smooth transitions
- Doesn't block user interaction

### 7. Navigation System
- Three separate pages (home, services, about)
- Consistent header/footer
- Cross-page service selection
- Anchor links for smooth scrolling

### 8. Data Persistence
- localStorage for theme preference
- localStorage for form data
- localStorage for service selection
- No backend required

---

## How to Use

### Installation

1. Download/clone all files to a directory
2. Ensure all files are in the same folder:
   - index.html
   - services.html
   - about.html
   - styles.css
   - script.js

### Opening the Website

**Option 1: Direct File Open**
- Right-click on `index.html`
- Select "Open with" → Browser

**Option 2: Local Server (Recommended)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then navigate to `http://localhost:8000` in browser.

### Navigation Flow

**Home Page (index.html)**
- Landing page with hero section
- Services overview
- Company information
- Contact form
- Links to services.html and about.html

**Services Page (services.html)**
- Full service catalog
- Detailed descriptions
- Starting prices
- Interactive cost calculator
- Request service buttons redirect to home contact form

**About Page (about.html)**
- Company mission and values
- Certification and support info
- Professional information

### User Interactions

**Theme Toggle**
- Click 🌙/☀️ button in header
- Preference saves automatically
- Persists across page visits

**Mobile Menu**
- Click hamburger icon (≡) on mobile
- Menu slides in
- Click any link to navigate
- Menu auto-closes

**Service Request**
- On services page: Click "Request Service" button
- Service type auto-selects on form
- Fill remaining fields
- Submit to see success message

**Cost Calculator**
- Select service type
- Choose project size
- Set urgency level
- Toggle materials option
- Click "Calculate"
- View estimated cost

**Contact Form**
- Fill name, email, service type, message
- Phone is optional
- Required fields show error if empty
- Submission saves data and shows success message

---

## Customization Guide

### Changing Colors

Edit CSS variables in `styles.css` `:root`:

```css
:root {
  --brand: #1663c7;        /* Change brand blue */
  --bg: #f4f8ff;           /* Change background */
  --text: #0f172a;         /* Change text color */
  /* ... edit all colors */
}
```

### Updating Service Prices

In `script.js`:

```javascript
const servicePrices = {
  installation: 1200,      // Change to new price
  design: 900,
  maintenance: 700,
  repair: 800,
};
```

### Adding New Services

1. **Add to HTML** (services.html):
```html
<article class="service-card">
  <div class="service-icon">💡</div>
  <h3>New Service</h3>
  <ul>
    <li>Detail 1</li>
    <li>Detail 2</li>
    <li>Detail 3</li>
  </ul>
  <p class="service-price">Starting from ZMW XXX</p>
  <button class="button secondary service-action" type="button" data-service="newservice">Request Service</button>
</article>
```

2. **Update Calculator** (script.js):
```javascript
const servicePrices = {
  installation: 1200,
  // ... existing
  newservice: 1000,  // Add new service
};
```

3. **Update Form Select** (index.html and services.html):
```html
<select id="service" name="service" required>
  <option value="">Select a service</option>
  <!-- existing options -->
  <option value="newservice">New Service</option>
</select>

<select id="estimateService" required>
  <option value="">Select a service</option>
  <!-- existing options -->
  <option value="newservice">New Service</option>
</select>
```

### Updating Contact Information

Edit footer in all HTML files:

```html
<p>info@voltive.com</p>
<p>(555) 123-4567</p>
```

And contact section in index.html:

```html
<div class="contact-info-panel">
  <p><strong>Email:</strong> your-email@company.com</p>
  <p><strong>Phone:</strong> (YYY) XXX-XXXX</p>
  <p><strong>Address:</strong> Your Address Here</p>
</div>
```

### Modifying Calculator Multipliers

In `script.js`:

```javascript
const sizeMultipliers = {
  small: 1.0,      // Multiply by this for small projects
  medium: 1.35,    // Change 1.35 to different value
  large: 1.75,
};

const urgencyMultipliers = {
  normal: 1.0,
  urgent: 1.3,     // Change 1.3 for different urgency premium
};

const materialFee = 250;  // Change base material fee
```

### Changing Testimonials

In index.html testimonials section:

```html
<article class="testimonial-card">
  <p>"Your quote here"</p>
  <span>– Customer Name</span>
</article>
```

### Updating Hero Text

In index.html hero section:

```html
<h1 id="hero-title">Your New Headline Here</h1>
<p>Your new subheading here</p>
```

---

## Browser Compatibility

### Supported Browsers

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Opera | Latest | ✅ Full |
| Safari iOS | Latest | ✅ Full |
| Chrome Mobile | Latest | ✅ Full |

### Required Features

- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- ES6 JavaScript (const, arrow functions, template literals)
- Intersection Observer API (for scroll animations)
- localStorage API

### Known Limitations

- Internet Explorer: Not supported (uses ES6 features)
- Very old browsers: CSS features not available
- Browsers with JavaScript disabled: Forms won't validate, calculators won't work

---

## Color Scheme

### Light Theme (Default)

| Element | Color | Hex |
|---------|-------|-----|
| Background | Light Blue | #f4f8ff |
| Surface (Cards) | White | #ffffff |
| Primary Text | Dark Blue-Gray | #0f172a |
| Secondary Text | Medium Gray | #475569 |
| Brand Primary | Bright Blue | #1663c7 |
| Brand Dark | Navy | #0f4f9d |
| Borders | Light Blue | #dbe6f5 |
| Success | Green | #16a34a |
| Danger/Error | Red | #dc2626 |

### Dark Theme

| Element | Color | Hex |
|---------|-------|-----|
| Background | Very Dark Blue | #061426 |
| Surface (Cards) | Dark Blue | #0f172a |
| Primary Text | Light Gray | #e2e8f0 |
| Secondary Text | Medium Gray | #94a3b8 |
| Brand Primary | Light Blue | #60a5fa |
| Brand Dark | Dark Blue | #1e40af |
| Borders | Semi-transparent | rgba(148, 163, 184, 0.2) |
| Success | Green | (same) |
| Danger/Error | Red | (same) |

### Design System

**Typography Scale**:
- Hero: 2.4rem - 3.8rem (responsive)
- Section Title: 2rem - 2.8rem (responsive)
- Card Title: 1.25rem
- Body: 1rem
- Small: 0.95rem

**Spacing Scale**:
- 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 1.75rem, 2rem, 2.5rem, 3rem, 4rem

**Border Radius**:
- Small: 0.9rem (forms)
- Medium: 1.2rem (icons)
- Large: 1.5rem (cards)
- Full: 999px (buttons)

**Shadows**:
- Light: `0 18px 40px rgba(15, 23, 42, 0.06)` (subtle)
- Medium: `0 24px 60px rgba(15, 23, 42, 0.08)` (standard)
- Heavy: `0 24px 80px rgba(15, 23, 42, 0.2)` (prominent)

---

## Project Statistics

- **HTML Lines**: ~400
- **CSS Lines**: ~700
- **JavaScript Lines**: ~300
- **Total Selectors**: 80+
- **Color Variables**: 11
- **Responsive Breakpoints**: 3
- **Interactive Elements**: 15+
- **Animated Elements**: 10+

---

## Credits & Notes

- Built with vanilla HTML5, CSS3, and JavaScript
- No external dependencies required
- All functionality works offline after initial load
- Data stored locally in browser (no server needed)
- Professional design with modern best practices
- Fully accessible with semantic HTML and ARIA attributes

---

## License

This project is provided as-is for use by Voltive Electrical Services. Customization and modification are permitted for business purposes.

---

**Last Updated**: April 20, 2026

For questions or customization requests, refer to the customization section above.
