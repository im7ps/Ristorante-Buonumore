//import AOS from "aos";
//import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

AOS.init({
  duration: 600,
});
document.addEventListener("aos:in", ({ detail }) => {
  console.log("animated in", detail);
});

document.addEventListener("aos:out", ({ detail }) => {
  console.log("animated out", detail);
});

/*navbar*/
$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});

function test() {
    const sidebar = document.getElementById('sidebar-left');
    const classSidebar = sidebar.className;
    if (classSidebar.includes('hidden')) { // SE INCLUDE IDDEN VUOL DIRE CHE E' GIA NASCOSTO
        sidebar.className = 'sidenav';
    } else { // SE E' VISIBILE
        sidebar.className = 'sidenav hidden'; // PORCO DIO

    }
}







