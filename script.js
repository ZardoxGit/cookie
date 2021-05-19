var cookie = document.getElementsByClassName('cookie');
for(var i=0; i<cookie.length; i++) {
  cookie[i].addEventListener('click',
  function() {
    if(this.src.indexOf('cookie-1.jpg') != -1) {
      this.src = 'cookie-2.jpg'
    } else if (this.src.indexOf('cookie-2.jpg') != -1) {
      this.src = 'vomi.jpg'
    } else {
      this.remove()
    }
  })
}