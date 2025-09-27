// Toggle between List and Grid view
function toggleView() {
    const viewButton = document.getElementById("view-toggle");
    const menuItems = document.querySelectorAll(".menu-items");

    menuItems.forEach(menu => {
        menu.classList.toggle("grid-view");
    });

    if (viewButton.innerText === "Switch to Grid View") {
        viewButton.innerText = "Switch to List View";
    } else {
        viewButton.innerText = "Switch to Grid View";
    }
}
