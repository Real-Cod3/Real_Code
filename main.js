// Custom Cursor
let innerCursor = document.querySelector(".inner-cursor")
let outerCursor = document.querySelector(".outer-cursor")

document.addEventListener("mousemove", mouseCursor)

function mouseCursor(e){
    let xMovement = e.clientX;
    let yMovement = e.clientY;

    innerCursor.style.left = `${xMovement}px`
    innerCursor.style.top = `${yMovement}px`
    outerCursor.style.left = `${xMovement}px`
    outerCursor.style.top = `${yMovement}px`
}

// Script for Full-Screen Page Loader

const loader = document.getElementById("Wrapper");

document.body.classList.add("is-loading");

function hideLoader() {
    if (!loader) return;

    loader.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
}

if (document.readyState === "complete") {
    hideLoader();
} else {
    window.addEventListener("load", hideLoader, {
        once: true
    });
}

// Your existing theme toggle script
            const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Load saved theme if exists
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Update icon visibility on load
    updateIcons();

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            localStorage.setItem("theme", "");
        } else {
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme");
        }

        updateIcons();
    });

    function updateIcons() {
        const isLight = body.classList.contains("light-theme");
        document.querySelector(".theme-toggle .sun").style.opacity = isLight ? "1" : "0";
        document.querySelector(".theme-toggle .moon").style.opacity = isLight ? "0" : "1";
    }

    
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });

        // Request Now
const close = document.getElementById("close");

const pen = document.getElementById("request_btn");
const open = document.getElementById("open_btn");
const opened = document.getElementById("opened_btn");

const modal = document.getElementById("modal");


close.addEventListener("click", ()=> {
    modal.style.display = 'none'
});
// Add for request button
pen.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

opened.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

open.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
// when clicked outside the form
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        }); 


        
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navOverlay = document.getElementById("navOverlay");

function setMenuOpen(open) {
    mainNav.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    navOverlay.classList.toggle("open", open);

    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
        "aria-label",
        open ? "Close navigation menu" : "Open navigation menu"
    );
}

menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("open");
    setMenuOpen(!isOpen);
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenuOpen(false));
});

navOverlay.addEventListener("click", () => setMenuOpen(false));

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        setMenuOpen(false);
    }
});
