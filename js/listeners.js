$(document).ready(function () {

  const target = document.querySelector('#ck5-textarea'); // Ensure this ID matches your CKEditor textarea

  target.addEventListener('paste', function () {
    setTimeout(() => {
    //   for (let i = 0; i < 3; i++) {
        cleanHTML(); // Call cleanHTML function after pasting
      
      // Scroll to the top by updating href
      window.location.href = '#cms__main-content';
      target.scrollTop = 0;
    }, 100); // Small delay to ensure pasted content is processed
  });















});