document.addEventListener("DOMContentLoaded", async () => {
  async function data() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data.results[0];
  }

  async function displaydata() {
    let userdata = await data();
    console.log(userdata);
    const username = document.querySelector("#username");
    const user_profile = document.querySelector("#pict");
    const full_name = document.querySelector("#full_name");
    const gender = document.querySelector("#gender");
    const dob = document.querySelector("#dob");
    const address = document.querySelector("#address");
    const email = document.querySelector("#email");
    const dateandtime = userdata.dob.date;
    const date = new Date(dateandtime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    console.log(userdata.name.first);
    full_name.textContent = `${userdata.name.title} ${userdata.name.first} ${userdata.name.last}`;
    user_profile.src = userdata.picture.large;
    username.textContent = userdata.login.username;
    gender.textContent = userdata.gender;
    dob.textContent = `${day}-${month}-${year}`;
    address.textContent = `${userdata.location.street.number} ${userdata.location.street.name}, ${userdata.location.city}, ${userdata.location.state}, ${userdata.location.country}`;
    email.textContent = userdata.email;
  }

  const userCard = document.querySelector(".user-card");

  userCard.addEventListener("click", () => {
    if (userCard.classList.contains("expanded")) {
      userCard.classList.remove("expanded");
    } else {
      userCard.classList.add("expanded");
    }
  });

  const generate_user = document.querySelector("#generate_user");
  generate_user.addEventListener("click", displaydata);
  displaydata();
});
