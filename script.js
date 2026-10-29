// Set dynamic current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// List of available pages for the single-page routing engine
const pages = ['home', 'projects', 'skills', 'education', 'certifications', 'contact'];

/**
 * Handles page navigation by showing the active page and hiding others
 * @param {string} pageId - The ID of the page section to show
 */
function navigateTo(pageId) {
    pages.forEach(p => {
        const section = document.getElementById(`page-${p}`);
        const navBtn = document.getElementById(`nav-${p}`);
        
        if (p === pageId) {
            section.classList.remove('hidden');
            if (navBtn) navBtn.classList.add('nav-link-active');
        } else {
            section.classList.add('hidden');
            if (navBtn) navBtn.classList.remove('nav-link-active');
        }
    });
    
    // Scroll smoothly to top upon changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Default page load
navigateTo('home');

// Mobile Menu Toggle logic
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Dark / Light Theme Toggle logic
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon text-slate-700';
    } else {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun text-amber-500';
    }
});

// Download CV trigger
function downloadCV() {
    window.print();
}

// Copy email address to clipboard with Toast Notification
function copyEmail() {
    const email = "ridahassan.work@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied: ridahassan.work@gmail.com");
    }).catch(() => {
        showToast("Email: ridahassan.work@gmail.com");
    });
}

/**
 * Handles Send a Message Form Submission
 */
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('form-name').value;
    
    showToast(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = message;
    
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 3500);
}