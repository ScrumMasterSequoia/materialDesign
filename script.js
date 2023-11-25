let loginForm = document.getElementById('submit-form');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();


    // debug the form to fix the <label><input> stuff
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
//   const anchorEl = document.body.querySelector('#usage-anchor');
//   const menuEl = document.body.querySelector('#usage-menu');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });



