const ovenTemp = document.querySelector("#ovenTemp");
const airTemp = document.querySelector("#airTemp");
const ovenTime = document.querySelector("#ovenTime");
const airTime = document.querySelector("#airTime");
const convertBtn = document.querySelector("#convertBtn");


convertBtn.addEventListener("click", (event) => {
    const newTemp = (ovenTemp.value - "25");
    const newTime = (ovenTime.value * "0.80");

    airTemp.innerText = `${newTemp} °F`;
    airTime.innerText = `${newTime} min`;
})

