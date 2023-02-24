const randomUser = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => randomUser2(data))
}

const randomUser2=user=>{
    const nameUser = document.getElementById('name');
    nameUser.innerHTML=user.results[0].name.first;
    // console.log(user.results[0].name.first)
    console.log(user.results[0].name.title);

    const gender = user.results[0].gender;
    document.getElementById('gender').innerHTML = gender;

    const location = user.results[0].location.city;
    document.getElementById('location').innerHTML = location;

    const picture = user.results[0].picture.large;
    document.getElementById('picture').innerHTML=picture;
}
randomUser();