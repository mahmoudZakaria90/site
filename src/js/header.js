function experience() {
  const startDate = 2014;
  const currentDate = new Date().getFullYear();
  return currentDate - startDate;
}

module.exports = function() {
  let el = document.querySelector("#heroTextSlider");
  let data = [
    `A Front-end developer with <strong>+${experience()}</strong> years of experience.`,
    "Thinking out of the box and seeking for knowledge is my vision.",
    'For hiring, <a href="mailto:m.zakria90@gmail.com">m.zakria90@gmail.com</a>'
  ];

  function init() {
    el.innerHTML = `<span class="show">${data[0]}</span>`;
    for (let i = 1; i < data.length; i++) {
      let temp = `<span>${data[i]}</span>`;
      el.innerHTML += temp;
    }
  }

  function slide() {
    init();
    let i = 0;
    let slider = setInterval(function() {
      i++;
      if (i == data.length) {
        i = 0;
      }
      for (let i = 0; i < data.length; i++) {
        document.getElementById("heroTextSlider").children[i].className = "";
      }
      document.getElementById("heroTextSlider").children[i].className = "show";
    }, 5000);
  }
  slide();
};
