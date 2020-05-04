handleSubmit = event => {
    event.preventDefault()
    let options = {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:8000/api/v1/auth/login/', options)
        .then(res => {
            if (res.status != 200){
                alert("wrong credentials");
                return false;
            }
            window.location.replace('profile.html');
        })
        .then(data => {
            if(data){
                localStorage.setItem('jwt access', data.access);
                localStorage.setItem('jwt refresh', data.refresh);
            }else{
                localStorage.setItem('error', data.refresh);
            }
        });
}

window.onload = function() {
  if (localStorage.getItem('error')) {
    document.getElementById('errorShow').innerHTML = localStorage.getItem('error');
  }
  localStorage.removeItem('error');
};
