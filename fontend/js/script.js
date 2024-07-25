const banner = document.querySelectorAll('.banner');
for (let index = 0; index < banner.length; index++) {
    banner[index].style.left = index * 100 + "%";
}