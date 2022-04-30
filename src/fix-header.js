
function fixHeader() {
    if (window.scrollY > header.clientHeight) {
      header.classList.add('fix-header')
      page.style.marginTop = header.clientHeight + 'px';
    } else {
      header.classList.remove('fix-header')
      page.style.marginTop = 0;
    }
  }
  
  
  window.addEventListener('wheel', function(evt) {
    if(evt.deltaY < 0) {
      //  поймали
       console.log('поймали: ');
   }
  });
  
  window.addEventListener('scroll', fixHeader)