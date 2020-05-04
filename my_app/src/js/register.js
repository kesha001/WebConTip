document.getElementById('username').value = '';
document.getElementById('email').value = '';

const regForm = document.getElementById('register');

regForm.handleSubmit = event => {
  if (this.state.password == this.state.re_password) {
    alert('Success! Authenticate me!');
    event.preventDefault();
    // Authenticate User
    let options = {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    fetch('http://localhost:8000/api/v1/account/users/', options)
        .then(res => {
            if (res.status != 201){
                alert("Something went wrong");
            }
            else {
                alert("good");
            }
            return res.json();
        }).then(res2 => {
            if (data.email) {
              localStorage.setItem('error', data.email);
            }
            if (data.username) {
              localStorage.setItem('error', data.username);
            }
            if (data.detail) {
              localStorage.setItem('error', data.detail);
          }
            });
  }
  else {
    alert('Error: Passwords do not match.');
    event.preventDefault();
  }


  window.onload = function() {
    if (localStorage.getItem('error')) {
      document.getElementById('errorShow').innerHTML =
      localStorage.getItem('error');
    }
    localStorage.removeItem('error');
  };
