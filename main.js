const country = document.getElementById("country")
const phone = document.getElementById("phone")
const button = document.getElementById("btn")


button.addEventListener("click", () => {
  const wa = "https://Wa.me/"

  if (country.value == "") {
    country.style.border = "2px solid red"

    event.preventDefault()
  }

  else if (phone.value == "") {
    event.preventDefault()
    phone.style.border = "2px solid red"
  }

  else {
    event.preventDefault()
    const output = wa + "+" + country.value + phone.value
    country.style.border = "1px solid black"
    phone.style.border = "1px solid black"
    document.getElementById("link").href = output
    country.value = null
    phone.value = null

    let data = []
    data.push(output)
    console.log(data)

  }



})