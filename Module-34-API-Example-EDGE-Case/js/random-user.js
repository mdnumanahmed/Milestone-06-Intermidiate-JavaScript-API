const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = (user) => {
    console.log(user.results[0]);
    const {name, email, dob, location, picture} = user.results[0]
    const userContainer = document.getElementById('user')
    userContainer.innerHTML = `
        <p><img src="${picture?.large}" alt=""></p>
        <h3>Name: ${name?.first + ' ' + name?.last}</h3>
        <p>Email: ${email}</p>
        <p>Date of Birth: ${dob?.date} </p>
        <p>Street: ${location?.street?.name}</p>
        <p>City: ${location?.city}</p>
        <p>Country: ${location?.country}</p>
    `
}

loadRandomUser()