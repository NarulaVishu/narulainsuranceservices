const counters = document.querySelectorAll('.counter');

const startCounting = (counter) => {
  const target = +counter.getAttribute('data-target');
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16);

  let current = 0;

  const updateCount = () => {
    current += increment;

    if (current < target) {
      counter.innerText = Math.floor(current) + "+";
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
            // Navbar js
            var toggleOpen = document.getElementById('toggleOpen');
            var toggleClose = document.getElementById('toggleClose');
            var collapseMenu = document.getElementById('collapseMenu');

            function handleClick() {
                if (collapseMenu.style.display === 'block') {
                    collapseMenu.style.display = 'none';
                } else {
                    collapseMenu.style.display = 'block';
                }
            }

            toggleOpen.addEventListener('click', handleClick);
            toggleClose.addEventListener('click', handleClick);

            // FAQ js
             const toggles = document.querySelectorAll(".faq-toggle");

    toggles.forEach(toggle => {
      toggle.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        // Close all other open items
        document.querySelectorAll(".faq-content").forEach(item => {
          if (item !== content) {
            item.style.maxHeight = null;
            item.previousElementSibling.querySelector(".icon").textContent = "+";
          }
        });

        // Toggle current item
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.textContent = "+";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.textContent = "−";
        }
      });
    });

            // scroll
            document.querySelectorAll("a[href^='#']").forEach(anchor => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute("href");
                    const target = document.querySelector(targetId);
                    const offset = 70; // control scroll position

                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - offset,
                            behavior: "smooth"
                        });
                    }
                });
            });

        });


        