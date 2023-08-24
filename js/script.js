var icon1 =document.getElementById("icon-1");
        icon1.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if( document.body.classList.contains("dark-theme")){
                icon1.src="images/moon.png";
            }else{
                icon1.src="images/sun.png";
            }
};

var sidemenu = document.getElementById("sidemenu");
    
        function openmenu(){
          sidemenu.style.right="0"
        }
    
        function closemenu(){
          sidemenu.style.right="-200px";
};




