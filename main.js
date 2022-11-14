const country = document.getElementById("country")
const phone = document.getElementById("phone")
const button = document.getElementById("btn")


button.addEventListener("click", () => {

  const wa = "https://Wa.me/"
  const output = wa + "+" + country.value + phone.value

  document.getElementById("link").href = output
  country.value = null
  phone.value = null

})