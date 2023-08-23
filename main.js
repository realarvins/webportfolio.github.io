


    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    // var tablinks = document.getElementsByClassName("tab-links");

    function opentab(tabname) {
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        document.getElementById(tabname).classList.add("active-tab");
    }



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwMzDp5NIyoDgcxRhdedo9JqY0IOE0hANnCdyzMkDMx5_MF0n9pPV_A8_a4_CJLYDSj/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = alert("Thank you! your form is submitted successfully")
      setTimeout(function(){
        msg.innerHTML = ""
      },5000) 
      form.reset()
    } )
   
    .catch(error => console.error('Error!', error.message))
  })
