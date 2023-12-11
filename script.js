// code in this file can be added to the bundle.js file after the command 
// rollup, to add this functionality. This is merely a placeholder file, because 
// this code gets deleted from the bundle.js file after the command rollup.

let loginForm = document.getElementById('submit-form');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subscribed = document.querySelector('#subscribe-checkbox').checked;
    let selectHealthOptions = document.getElementById('select-health-options').value;
    let allergySwitch = document.getElementById('allergy-switch').selected;
    
    console.log('name: = ', name);
    console.log('email: = ', email);
    console.log('subscribed: = ', subscribed);
    console.log('selectHealthOptions: = ', selectHealthOptions);
    console.log('allergySwitch: = ', allergySwitch);
  });

  const anchorEl = document.body.querySelector('#usage-popover-anchor');
  const menuEl = document.body.querySelector('#usage-popover');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });