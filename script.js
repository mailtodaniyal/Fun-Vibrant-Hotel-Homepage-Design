        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.slider-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                slides[index].classList.add('active');
                dots[index].classList.add('active');
                currentSlide = index;
            }
            
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    showSlide(slideIndex);
                });
            });
            
            setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 5000);
            
            const bookingWidget = document.querySelector('.booking-widget');
            window.addEventListener('scroll', function() {
                if (window.innerWidth > 992) {
                    const scrollPosition = window.scrollY;
                    const heroHeight = document.querySelector('.hero').offsetHeight;
                    const widgetPosition = heroHeight / 2 - bookingWidget.offsetHeight / 2;
                    
                    if (scrollPosition < heroHeight - bookingWidget.offsetHeight) {
                        bookingWidget.style.transform = `translateY(${widgetPosition + scrollPosition}px)`;
                    }
                }
            });
            
            const pulseButton = document.querySelector('.pulse');
            setInterval(() => {
                pulseButton.classList.toggle('pulse');
                setTimeout(() => {
                    pulseButton.classList.toggle('pulse');
                }, 2000);
            }, 4000);
        });
