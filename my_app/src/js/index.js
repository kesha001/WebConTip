const token = localStorage.getItem('jwt access');
const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
    }
}
fetch("http://localhost:8000/api/v1/account/users/me/", options)
    .then(response => {
        if (response.status > 400) {
            return this.setState(() => {
                return { placeholder: "Something went wrong!" };
            });
        }
        return response.json();
    });
logOut= (e)=> {
  e.preventDefault();
    localStorage.removeItem('jwt access');
    localStorage.removeItem('jwt refresh');
    return res.json();
  });
};

if (!token) {
  document.getElementById('logout').hidden = true;
}
else{
    document.getElementById('login').hidden = true;
}
