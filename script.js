const openBtn = document.getElementById("burger_menu");
const closeBtn = document.getElementById("close_btn");
const sidebar = document.getElementById("sidebar");

openBtn.addEventListener("click", function(){
    sidebar.style.width = '45vw';
})
closeBtn.addEventListener('click', function(){
    sidebar.style.width = '0';
})
