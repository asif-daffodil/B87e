const headers = document.querySelector('.headers');
const headersChildArr = Array.from(headers.children);
const details = document.querySelector('.details');
const detailsChildArr = Array.from(details.children);

headersChildArr.forEach((header, index) => {
  header.addEventListener('click', () => {
    for (let i = 0; i < headersChildArr.length; i++) {
      if (i === index) {
        headersChildArr[i].classList.add('active');
        detailsChildArr[i].classList.add('active');
      } else {
        headersChildArr[i].classList.remove('active');
        detailsChildArr[i].classList.remove('active');
      }
    }
  });
});