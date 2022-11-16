const country = document.getElementById("country")
const phone = document.getElementById("phone")
const button = document.getElementById("btn")
const url = "https://Wa.me/"
const link = document.getElementById("link")

button.addEventListener("click", () => {

  event.preventDefault()

  phoneVal = phone.value
  countryVal = country.value


  if (phoneVal.trim() != 0) {
    country.style.border = "1px solid red"
    phone.style.border = "1px solid red"
    let get = localStorage.getItem(JSON.parse(1))

    if (get == null) {
      data = []
    }

    else {
      data = JSON.parse(get)
    }
    data.push("+" + countryVal + phoneVal)
    let set = localStorage.setItem(1, JSON.stringify(data))
  }

  else {
    phone.style.border = "1px solid red"
    country.style.border = "1px solid red"
  }


  sshow()
  link.href = url + "+" + country.value + phone.value
  country.value = null
  phone.value = null
})


// Show Funsion.
let sshow = (() => {
  let get = localStorage.getItem(JSON.parse(1))

  if (get == null) {
    data = []
  }
  else {
    data = JSON.parse(get)
  }

  let insert = ""
  data.forEach((item, index) => {
    let table = document.getElementById("table")
    insert += `<tr>
            <td class="no">${index + 1}</td>
            <td class="phone">${item}</td>
            <td  class="chat" ><a href="${url}${item}"class"goto"><i class="fa-brands fa-whatsapp"></i></a></td>
            <td class="del" onClick="del(${index})"><i class="fa-solid fa-trash"></i></td>
          </tr>`
    table.innerHTML = insert
  })
})

sshow()





// Delete Button Funsion.
let del = (index) => {
  let get = localStorage.getItem(JSON.parse(1))
  data = JSON.parse(get)
  data.splice(index, 1)
  localStorage.setItem(1, JSON.stringify(data))
  location.reload()
}