// const signUp = document.querySelector(".signupbtn");
const signUp = document.getElementById("signup")
// console.log(signUp);
signUp.addEventListener("click", async (e) => {
  console.log("Hello")
  e.preventDefault();
  console.log(e.target);
  const body = {
    username: e.target[1].value,
    email: e.target[0].value,
    aadhar: e.target[2].value,
    number: e.target[3].value,
    password: e.target[4].value,
  };
  const signup = await fetch(
    "https://peaceful-fortress-28413.herokuapp.com/createUser",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await signup.json();
  if (data.status === "OK") {
    alert("Sign up successful");
    window.location.href = "registered.html";
  } else {
    alert("try again !!");
  }
});
