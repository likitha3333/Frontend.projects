const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 120){

        header.classList.add("show");

    }else{

        header.classList.remove("show");

    }

});


const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle("show");

    });

});