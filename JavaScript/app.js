
document.getElementById("home").addEventListener("click", () => {
    window.document.location.reload(true);
});

// Menu Toggle
const display_menu = document.querySelector("nav");
const menu_box = document.querySelector(".menu-container");
const bar_one = document.querySelector(".menu-bar-1");
const bar_two = document.querySelector(".menu-bar-2");

menu_box.addEventListener("click", () => {
    display_menu.classList.toggle("show-menu");
    bar_one.classList.toggle("bar-one");
    bar_two.classList.toggle("bar-two");
});

const project_details = [{
    live: "https://vaibhav-xt-paytm.netlify.app/",
    github: "https://github.com/vaibhav-xt/LandingPage/tree/master/Paytm_Clone/Source%20Code",
    img: "./images/paytm.png",
    title: "Paytm Clone",
    tags: ["HTML", "Tailwind CSS", "CSS", "JavaScript"],
},
{
    live: "https://github.com/vaibhav-xt/OIBSIP_Pizza-delivery-app",
    github: "https://github.com/vaibhav-xt/OIBSIP_Pizza-delivery-app",
    img: "https://sketchfav.com/imgs/free-sketch-mobile-app-design/0x0_pizza-delivery-ordering-app-freebie-day-250-365-project365-u5.jpg",
    title: "Pizza Delivery",
    tags: ["React", "Redux", "NodeJs", "MongoDb"],
},
{
    live: "https://vaibhav-xt-duplicate-character-remove.netlify.app/",
    github: "https://github.com/vaibhav-xt/React-Projects/tree/master/duplicate-character-remover",
    img: "./images/duplicate_remover.png",
    title: "Duplicate Character Remover",
    tags: ["React", "Bootstrap"],
},
{
    live: "https://react-calculator-c7b3f.web.app/",
    github: "https://github.com/vaibhav-xt/React-Projects/tree/master/calculator",
    img: "https://digitalcampaignsstorage.blob.core.windows.net/sugar-calculator/production/images/calculatorillustration.jpg",
    title: "Calculator",
    tags: ["React App"],
},
{
    live: "https://github.com/vaibhav-xt/React-Projects/tree/master/mera-notebook",
    github: "https://github.com/vaibhav-xt/React-Projects/tree/master/mera-notebook",
    img: "https://cdn.thewirecutter.com/wp-content/uploads/2020/01/sleepweek-lowres-2x1-1145985262.jpg?auto=webp&quality=75&crop=2:1&width=1024",
    title: "Education Page",
    tags: ["React", "MongoDB", "useContext", "JSON Web Token"],
},
{
    live: "https://vaibhav-xt-certificate-generator.netlify.app/",
    github: "https://github.com/vaibhav-xt/Vanilla-Javascript-Projects/tree/master/Certificate-generator",
    img: "./images/certificate.png",
    title: "Certificate Generator",
    tags: ["HTML", "CSS", "JavaScript"],
},
];

// Added Projects Dynamically
const project_container = document.querySelector(".all-projects");
const latest_project = document.querySelector(".hero-project-display");

project_details.forEach((project, index) => {
    content = `
            <div class="project-info-display">
                    <p>project info.</p>
                    <div class="project-info">
                        <a href="${project.live}" target="_blank"><i class="fa-solid fa-display"></i></a>
                        <a href="${project.github}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                    </div>
                    
            <div class="project-img">
                <img src="${project.img}" alt="">
            </div>
            <div class="project-detail">
            <h3>${project.title}</h3>
                <div class="project-tag append-tag">

                </div>
                </div>
                `;

    latest_content = `
            <div class="project-info-display">
                    <p>project info.</p>
                    <div class="project-info">
                        <a href="${project.live}" target="_blank"><i class="fa-solid fa-display"></i></a>
                        <a href="${project.github}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                    </div>
                    
            <div class="project-img">
                <img src="${project.img}" alt="">
            </div>
            <div class="project-detail">
            <h3>${project.title}</h3>
                <div class="project-tag append-tag">
                    <span>${project.tags[0]}</span>
                    <span>${project.tags[1]}</span>
                    <span>${project.tags[2]}</span>
                    <span>${project.tags[3]}</span>
                </div>
            </div>
        `;

    const div = document.createElement("div");
    div.classList.add("hero-project", "project-bg-color", "add-tags");
    div.innerHTML = content;
    project_container.append(div);

    if (index < 2) {
        const latest_div = document.createElement("div");
        latest_div.classList.add("hero-project");
        latest_div.innerHTML = latest_content;
        latest_project.append(latest_div);
    }
});

// Adding Project Tags
const arr_length = project_details.length;
var count = 0;

while (count < arr_length) {
    const latest_tag = document.querySelector(
        ".hero-project-display .hero-project"
    );
    const tag_main = document.querySelectorAll(".add-tags");
    const append_tag = tag_main[count].querySelector(".append-tag");

    project_details[count].tags.forEach((tag, index) => {
        if (index < 4) {
            const span = document.createElement("span");
            span.innerHTML = tag;
            append_tag.append(span);
        }
    });
    count++;
}

// Form Display
const form_display = document.querySelector(".contact-us");
const btns = document.querySelectorAll(".contact-btn");
const back = document.querySelector(".back");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        form_display.classList.toggle("form-display");
    });
});

back.addEventListener("click", () => {
    form_display.classList.toggle("form-display");
});

// Send form to Email
var form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.querySelector(".feedback");
    var details = {
        name: document.querySelector(".name"),
        email: document.querySelector(".email"),
        topic: document.querySelector(".topic"),
        message: document.querySelector(".message"),
    };
    emailjs
        .send("service_byyadsn", "template_4fzq7h9", {
            from_name: details.name.value,
            email_id: details.email.value,
            topic: details.topic.value,
            message: details.message.value,
        })
        .then(function () {
            details.name.value = "";
            details.email.value = "";
            details.topic.value = "";
            details.message.value = "";
            var set = setInterval((feedback.style.height = "100%"), 2000);

            setTimeout(() => {
                feedback.style.height = "0";
            }, 2000);
        });
});

const explore_all = document.querySelectorAll(".explore-btn");
const about_me = document.querySelector(".about-me");
const fixed_window_right = document.querySelector(".floating-window");
const other_section = document.querySelector(".other-section");
const footer = document.querySelector("footer");

explore_all.forEach((explore, index) => {
    explore.addEventListener("click", () => {
        about_me.style.display = "flex";
        other_section.style.display = "block";
        footer.style.display = "flex";
        fixed_window_right.style.display = "flex";

        if (index == explore_all.length - 1) {
            let height = window.innerHeight * (102 / 100);
            window.scrollTo(0, height);
        } else if (index == explore_all.length - 3) {
            let height = window.innerHeight * (105 / 100);
            window.scrollTo(0, height);
        }
    });
});
