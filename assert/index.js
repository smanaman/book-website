let leftButton = document.getElementById('left-btn');
let rightButton = document.getElementById('right-btn');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider-img');
let currentSlide = 0;
const totalSlides = slides.length;

// Hide left button initially since we start at slide 0
leftButton.style.display = 'none';

const updateSlider = () => {
    // Hide/show buttons based on current slide
    leftButton.style.display = currentSlide === 0 ? 'none' : 'block';
    rightButton.style.display = currentSlide === totalSlides - 1 ? 'none' : 'block';
    
    // Move the slider
    slider.scrollTo({
        left: currentSlide * slider.offsetWidth,
        behavior: 'smooth'
    });
};

rightButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
    }
});

leftButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

// Make responsive on window resize
window.addEventListener('resize', () => {
    slider.scrollTo({
        left: currentSlide * slider.offsetWidth,
        behavior: 'auto'
    });
});



let tl = gsap.timeline()


tl.from("h1", {
  y: -50,
  duration: 2.3,
  dealy: 1,
  stagger: 0.3,
  opacity: 0
})

tl.from("#navtext", {
  y: -50,
  duration: 1,
  dealy: 1,
  stagger: 0.3,
  opacity: 0
})

gsap.from("#StudentBasic", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#StudentBasic",
    scroller: "body",


  }
})
gsap.from("#rightslide", {
  x: -300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#rightslide",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#leftslide", {
  x: 300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#leftslide",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#rightslide2", {
  x: -300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#rightslide2",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#leftslide2", {
  x: 300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#leftslide2",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})

gsap.from("#rightslide3", {
  x: -300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#rightslide3",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#leftslide3", {
  x: 300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#leftslide3",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from(".product",{

  y:200,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:".product",
    // markers:true,
    start:"top 40%",
    end: "top 40%",
    scrub:3,
    
  }
})


gsap.to(".SmartWriteText p",{
  transform: "translateX(-83%)",

  scrollTrigger:{
    trigger:".SmartWriteText",
    scroll:'body',
    // markers:true,
  start:"top 0%",
  end:"30%",
  scrub: 3,
  pin: true,

  }

})
document.addEventListener('DOMContentLoaded', function() {
    // Notebook Customizer Functionality
    // Size Options
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update notebook size in 3D view
            const notebook3d = document.querySelector('.notebook-3d');
            if (this.dataset.size === 'a4') {
                notebook3d.style.width = '300px';
                notebook3d.style.height = '420px';
            } else if (this.dataset.size === 'b6') {
                notebook3d.style.width = '200px';
                notebook3d.style.height = '280px';
            } else {
                notebook3d.style.width = '250px';
                notebook3d.style.height = '350px';
            }
            
            // Update hidden field
            document.getElementById('selected-size').value = this.textContent;
        });
    });

    // Paper Options
    const paperButtons = document.querySelectorAll('.paper-btn');
    const notebookPages = document.getElementById('notebook-pages');
    paperButtons.forEach(button => {
        button.addEventListener('click', function() {
            paperButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update pages visual
            notebookPages.innerHTML = '';
            if (this.dataset.paper === 'lined') {
                for (let i = 0; i < 20; i++) {
                    const line = document.createElement('div');
                    line.className = 'page-line';
                    line.style.top = `${5 + (i * 5)}%`;
                    notebookPages.appendChild(line);
                }
            } else if (this.dataset.paper === 'grid') {
                notebookPages.style.backgroundImage = 'linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px)';
                notebookPages.style.backgroundSize = '20px 20px';
            } else if (this.dataset.paper === 'dot') {
                notebookPages.style.backgroundImage = 'radial-gradient(#ccc 1px, transparent 1px)';
                notebookPages.style.backgroundSize = '15px 15px';
            } else {
                notebookPages.style.backgroundImage = 'none';
            }
            
            // Update hidden field
            document.getElementById('selected-paper').value = this.textContent;
        });
    });

    // Color Options
    const colorOptions = document.querySelectorAll('.color-option');
    const notebookCover = document.getElementById('notebook-cover');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            notebookCover.style.backgroundColor = this.style.backgroundColor;
            
            // Update hidden field
            document.getElementById('selected-color').value = this.dataset.color;
        });
    });

    // Initialize with default paper style (lined)
    const defaultPaperBtn = document.querySelector('.paper-btn.active');
    defaultPaperBtn.click();

    // Form submission handler
    const form = document.getElementById('notebook-request-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Disable button during submission
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        formMessage.textContent = '';

        // Using FormSubmit.co as a free form submission service
        // Replace 'your-email@example.com' with your actual email
        fetch('https://formsubmit.co/ajax/amansanvat@gmail.com', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                size: formData.get('size'),
                paper: formData.get('paper'),
                color: formData.get('color'),
                email: formData.get('email'),
                notes: formData.get('notes'),
                _subject: 'New Notebook Request - Smart Write',
                _template: 'table'
            })
        })
        .then(response => response.json())
        .then(data => {
            formMessage.textContent = 'Thank you! Your request has been sent. We\'ll contact you soon.';
            formMessage.style.color = '#28a745';
            form.reset();
            
            // Reset to default selections
            document.querySelector('.size-btn[data-size="a5"]').click();
            document.querySelector('.paper-btn[data-paper="lined"]').click();
            document.querySelector('.color-option[data-color="black"]').click();
        })
        .catch(error => {
            formMessage.textContent = 'There was an error sending your request. Please try again later.';
            formMessage.style.color = '#dc3545';
            console.error('Error:', error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-envelope"></i> Request This Notebook';
        });
    });

    // 3D notebook hover effect
    const notebook3d = document.querySelector('.notebook-3d');
    notebook3d.addEventListener('mouseenter', function() {
        gsap.to(this, {
            rotationY: -25,
            rotationX: 10,
            duration: 0.5
        });
    });
    notebook3d.addEventListener('mouseleave', function() {
        gsap.to(this, {
            rotationY: -15,
            rotationX: 10,
            duration: 0.5
        });
    });

    // GSAP animations for the section
    gsap.from(".notebook-3d", {
        scrollTrigger: {
            trigger: ".notebook-builder",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from(".builder-options", {
        scrollTrigger: {
            trigger: ".notebook-builder",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3
    });
});

// nav bar
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', function() {
        // Toggle mobile menu visibility
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
            // Reset hamburger icon
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        } else {
            mobileMenu.style.display = 'block';
            // Optional: animate hamburger to X
            hamburger.innerHTML = '<span style="transform: rotate(45deg) translate(5px, 5px);"></span><span style="opacity: 0;"></span><span style="transform: rotate(-45deg) translate(5px, -5px);"></span>';
        }
    });
    
    // Close menu when clicking on a link (optional)
    const mobileItems = document.querySelectorAll('.mobile-nav-item');
    mobileItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        });
    });
    
 
});