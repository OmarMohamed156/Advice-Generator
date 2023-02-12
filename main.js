function getRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("title").innerHTML = `ADVICE # ${data?.slip?.id}`;
      document.getElementById("advice").innerHTML = `“${data?.slip?.advice}”`;
    })
    .catch((err) => {
      console.log(err);
    });
}

window.onload = getRandomAdvice();
