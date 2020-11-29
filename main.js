document.querySelector("#nav-search_btn").addEventListener("click",toggleSearchContainer)
document.querySelector("#search-form_close").addEventListener("click",toggleSearchContainer)

document.querySelector("#nav_btn").addEventListener("click",toggleNavigationContainer)
document.querySelector("#nav_close").addEventListener("click",toggleNavigationContainer)



function toggleNavigationContainer(){
    document.querySelector(".navbar").classList.toggle("z-top");

    let bg = document.querySelector(".black-bg");
    bg.classList.toggle("hide");



    let nav_con = document.querySelector(".nav-container");
    nav_con.classList.toggle("hide");
    nav_con.classList.toggle("z-top");
    nav_con.classList.toggle("fade-in-right");  
}




function toggleSearchContainer(){
    document.querySelector(".navbar").classList.toggle("z-top");

    let bg = document.querySelector(".black-bg");
    bg.classList.toggle("hide");

    let search_con = document.querySelector(".search-container");
    search_con.classList.toggle("hide");
    search_con.classList.toggle("z-top");
    search_con.classList.toggle("fade-in-top");
}

