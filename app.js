const secondHand = document.getElementById("seconds");
  const minsHand = document.getElementById("minutes");
  const hourHand = document.getElementById("hour");

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg) scale(0.98)`;
    // secondHand.style.transform = `scale(1)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg) scale(0.8) `;
    // minsHand.style.transform = `scale(0.6)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg) scale(0.5)`;
    // hourHand.style.transform =  `scale(0.4)`;
  }

  setInterval(setDate, 1000);

  setDate();
