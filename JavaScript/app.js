
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
    live: "https://paytm-cl0ne.netlify.app/",
    github: "https://github.com/vaibhav-xt/Paytm_Clone",
    img: "./images/paytm.png",
    title: "PayTm Clone",
    tags: ["HTML", "Tailwind CSS", "CSS", "JavaScript"],
},
{
    live: "https://landing-react-page.netlify.app/",
    github: "https://github.com/vaibhav-xt/ReactLanding-Page",
    img: "./images/react-page.png",
    title: "React Landing Page",
    tags: ["First React App", "HTML", "CSS", "JavaScript"],
},
{
    live: "https://taupe-florentine-318f94.netlify.app/",
    github: "https://github.com/vaibhav-xt/duplicate-character-remover",
    img: "./images/duplicate_remover.png",
    title: "Duplicate Character Remover",
    tags: ["React", "Bootstrap"],
},
{
    live: "https://elaborate-medovik-d3c4ca.netlify.app/",
    github: "https://github.com/vaibhav-xt/Tech-Mate",
    img: "./images/tech_mate.png",
    title: "Education Page",
    tags: ["Client Project", "HTML", "CSS", "JavaScript"],
},
{
    live: "https://jade-moonbeam-7f97d6.netlify.app/",
    github: "https://github.com/vaibhav-xt/Hosting-Landing-Page",
    img: "./images/hosting.png",
    title: "Hosting Landing",
    tags: ["HTML", "CSS", "JavScript"],
},
{
    live: "https://darling-gnome-b183e7.netlify.app/",
    github: "https://github.com/vaibhav-xt/Certificate-Generator",
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
