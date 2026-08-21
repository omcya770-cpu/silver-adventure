
// =====================================================
// 1. WAIT FOR THE WEBSITE TO LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio website loaded successfully!");

    // =================================================
    // 2. NAVIGATION LINKS
    // =================================================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log("Navigation clicked:", link.textContent);

        });

    });


    // =================================================
    // 3. PROJECT CARDS
    // =================================================

    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {

        project.addEventListener("click", () => {

            console.log(`Project ${index + 1} selected`);

        });

    });


    // =================================================
    // 4. SCROLL REVEAL ANIMATION
    // =================================================

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});