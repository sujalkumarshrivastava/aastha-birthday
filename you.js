const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const birthdayText = document.querySelector("#birthdayText");
const btnTwo = document.querySelector("#btnTwo");
const textSection = document.querySelector(".text");
const hbdSong = document.querySelector(".hpd");

btn.addEventListener("click", () => {

    img.style.opacity = 1;          
    img.style.transition = "none";  

    img.style.bottom = "50%";
    img.style.right = "50%";
    img.style.transform = "translate(50%, 50%)";

    birthdayText.style.opacity = 1;
    birthdayText.style.top = "50%";

    hbdSong.currentTime = 0; 
    hbdSong.play();

    setTimeout(() => {
        birthdayText.style.top = "calc(50% + 100px)";
        birthdayText.style.transform = "translateX(-50%)";

        btnTwo.style.opacity = 1;
        btnTwo.style.top = "calc(50% + 200px)";
    }, 2000);
});



btnTwo.addEventListener("click", () => {
   
    img.style.transition = "all 1s ease-in-out";
    birthdayText.style.transition = "all 1s ease-in-out";
    btnTwo.style.transition = "all 1s ease-in-out";

    img.style.opacity = 0;
    birthdayText.style.opacity = 0;
    btnTwo.style.opacity = 0;


    textSection.scrollIntoView({ behavior: "smooth" });

    const firstText = document.querySelector(".first");
    const secondText = document.querySelector(".second");
    firstText.style.opacity = 1;
    secondText.style.opacity = 1;
});
