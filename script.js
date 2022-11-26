console.log("JS working");

const isMobile = window.innerWidth < 640 ? true : false;

document.getElementById("divider").innerHTML = isMobile
  ? '<img src="./images/pattern-divider-mobile.svg" />'
  : '<img src="./images/pattern-divider-desktop.svg" />';

document.getElementById("diceBtn").onclick = async () => {
  const data = await fetch("https://api.adviceslip.com/advice").then((res) =>
    res.json()
  );

  document.getElementById("advice-number").innerHTML = data.slip.id;
  document.getElementById("qoutes").innerHTML = data.slip.advice;
  //console.log(`clicked: ${data}`);
  //console.log(data);
};
