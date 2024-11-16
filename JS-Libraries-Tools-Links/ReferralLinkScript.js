//This code should be called in the footer section of your HTML, it will look for UTM/URL Parameters and save them in session storage, then populate the hidden fields in your form.

const queryForm = (settings) => {
    const reset = settings && settings.reset ? settings.reset : false;
    const self = window.location.toString();
    const querystring = self.split("?");
  
    if (querystring.length > 1) {
      const pairs = querystring[1].split("&");
      for (let i = 0; i < pairs.length; i++) {
        const keyval = pairs[i].split("=");
        if (reset || sessionStorage.getItem(keyval[0]) === null) {
          sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
        }
      }
    }
  
    const hiddenFields = document.querySelectorAll("input[type=hidden], input[type=text]");
    for (let i = 0; i < hiddenFields.length; i++) {
      const param = sessionStorage.getItem(hiddenFields[i].name);
      if (param) {
        document.getElementsByName(hiddenFields[i].name)[0].value = param;
      }
    }
  };
  
  setTimeout(() => {
    queryForm();
  }, 3000);
  
  // To use in a JavaScript file, simply import or include this file and call queryForm(settings) when needed.
  