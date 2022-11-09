function submitData(userName, userEmail) {
    let userInfoObj = {
        name: userName,
        email: userEmail
    }

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfoObj)
    })
    .then(response => response.json())
    .then(userInfo => document.body.innerHTML = userInfo.id)
    .catch(error => document.body.innerHTML = error)
}