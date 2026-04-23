const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const siteNav = document.getElementById('siteNav');
const themeToggle = document.getElementById('themeToggle');
const serviceForm = document.getElementById('serviceForm');
const formFeedback = document.getElementById('formFeedback');

const estimateForm = document.getElementById('estimateForm');
const estimateService = document.getElementById('estimateService');
const projectSize = document.getElementById('projectSize');
const urgencyLevel = document.getElementById('urgencyLevel');
const includeMaterialsCheckbox = document.getElementById('includeMaterials');
const calculateEstimateBtn = document.getElementById('calculateEstimate');
const estimateResult = document.getElementById('estimateResult');
const estimateValue = estimateResult ? estimateResult.querySelector('.result-value') : null;
const serviceButtons = document.querySelectorAll('.service-action');

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('preferredTheme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('preferredTheme');
  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
};

const toggleMobileMenu = () => {
  const isOpen = siteNav.classList.toggle('open');
  mobileMenuToggle.setAttribute('aria-expanded', isOpen);
};

const validateField = (field) => {
  if (!field.value.trim()) {
    field.classList.add('invalid');
    return false;
  }
  field.classList.remove('invalid');
  return true;
};

const showFeedback = (message, type = 'success') => {
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback ${type}`;
};

const servicePrices = {
  installation: 1200,
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

const materialFee = 250;

const formatCost = (amount) => `ZMW ${amount.toLocaleString('en-ZM', { maximumFractionDigits: 0 })}`;

const calculateEstimate = () => {
  if (!estimateService || !projectSize || !urgencyLevel || !includeMaterialsCheckbox || !estimateValue) {
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

  const estimateTotal = Math.round(basePrice * sizeFactor * urgencyFactor + materialsCost);
  estimateValue.textContent = formatCost(estimateTotal);
};

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

const restoreFormData = () => {
  if (!serviceForm) return;

  const stored = localStorage.getItem('voltiveForm');
  if (!stored) return;
  try {
    const formData = JSON.parse(stored);
    serviceForm.name.value = formData.name || '';
    serviceForm.email.value = formData.email || '';
    serviceForm.phone.value = formData.phone || '';
    serviceForm.service.value = formData.service || '';
    serviceForm.message.value = formData.message || '';
  } catch (error) {
    console.warn('Unable to restore saved form data', error);
  }
};

const restoreSelectedService = () => {
  if (!serviceForm) return;
  const selectedService = localStorage.getItem('voltiveTargetService');
  if (selectedService) {
    serviceForm.service.value = selectedService;
    localStorage.removeItem('voltiveTargetService');
  }
};

if (serviceForm) {
  serviceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameValid = validateField(serviceForm.name);
    const emailValid = validateField(serviceForm.email);
    const serviceValid = validateField(serviceForm.service);
    const messageValid = validateField(serviceForm.message);

    if (!nameValid || !emailValid || !serviceValid || !messageValid) {
      showFeedback('Please complete all required fields before submitting.', 'error');
      return;
    }

    if (!serviceForm.email.value.includes('@')) {
      showFeedback('Enter a valid email address.', 'error');
      serviceForm.email.classList.add('invalid');
      return;
    }

    saveFormData();
    showFeedback('Your request has been submitted successfully!', 'success');
  });
}

if (calculateEstimateBtn) {
  calculateEstimateBtn.addEventListener('click', calculateEstimate);
}

serviceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const serviceValue = button.dataset.service;
    if (serviceValue) {
      localStorage.setItem('voltiveTargetService', serviceValue);
    }
    window.location.href = 'index.html#contact';
  });
});

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(currentTheme);
});

mobileMenuToggle.addEventListener('click', toggleMobileMenu);
siteNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    siteNav.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('load', () => {
  loadTheme();
  restoreFormData();
  restoreSelectedService();
});

const animatedElements = document.querySelectorAll('.service-card, .feature-card, .hero-card, .about-copy, .contact-copy');
const observerOptions = {
  threshold: 0.15,
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);
animatedElements.forEach((element) => observer.observe(element));
