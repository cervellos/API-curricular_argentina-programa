/**variable Global */

/**variable global */
console.log(document.querySelector("title").innerText)

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/")
    const data = await res.json()
    console.log(data)
    const curriculum = {
      /**personal data */
      gender: data.results[0].gender,
      title: data.results[0].name.title,
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      /**picture */
      large: data.results[0].picture.large,
      medium: data.results[0].picture.medium,
      thumbnail: data.results[0].picture.thumbnail,
      /*location*/
      street:
        data.results[0].location.street.name +
        " " +
        data.results[0].location.street.numer,
      city: data.results[0].location.city,
      state: data.results[0].location.state,
      country: data.results[0].location.country,
      postcode: data.results[0].location.postcode,
      /**loaction coodernada */
      latitude: data.results[0].location.coordinates.latitude,
      longitude: data.results[0].location.coordinates.longitude,
      timezone: data.results[0].location.timezone.offset,
      timezoneDes: data.results[0].location.timezone.description,
      //personal data
      email: data.results[0].email,
      //user credencial
      uuid: data.results[0].login.uuid,
      username: data.results[0].login.username,
      password: data.results[0].login.password,
      salt: data.results[0].login.salt,
      md5: data.results[0].login.md5,
      sha1: data.results[0].login.sha1,
      sha256: data.results[0].login.sha256,
      //date personal
      dateBirth: data.results[0].dob.date,
      age: data.results[0].dob.age,
      //resgistered:
      date: data.results[0].registered.date,
      ageResg: data.results[0].registered.age,
      phone: data.results[0].phone,
      cell: data.results[0].cell,
      id: data.results[0].id.name + " : " + data.results[0].id.value,
      //info
      seed: data.info.seed,
      results: data.info.results,
      page: data.info.page,
      version: data.info.version,
    }
    console.log(curriculum)

    paintCard(curriculum)
  } catch (error) {
    console.log(`error en fechtDATA${error}`)
  }
}

const paintCard = async (curriculum) => {
  try {
    const res = await fetch("template/card.hbs")
    const templateHbs = await res.text()
    const template = Handlebars.compile(templateHbs)
    const html = template({ curriculum })
    console.log(html)

    document.getElementsByClassName("card-container")[0].innerHTML = html
    //evento botton debe ir adentro de la funcion de handlebars para funcionar correctamente
    const button = document.querySelectorAll(".button")
    const displays = document.querySelectorAll(".display--off")
    console.log(button)
    async function toggleFunction(e) {
      e.preventDefault()
      const targe = e.target.classList[1]
      console.log(targe)
      switch (targe) {
        case "boton-location":
          displays[0].classList.toggle("display--off")
          break
        case "boton-credencial":
          displays[1].classList.toggle("display--off")
          break
        case "boton-resgistered":
          displays[2].classList.toggle("display--off")
          break
        case "boton-info":
          displays[3].classList.toggle("display--off")
          break
      }
    }
    button.forEach(addEventListener("click", toggleFunction))
  } catch (error) {
    console.error(`este error esta en paintCard ${error}`)
  }
}
/* cursos pointer disabled
const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e

  const rect = target.getBoundingClientRect(),
    x = (e.clientX = rect.left),
    y = (e.clientY = rect.top)

  target.style.setProperty("--nouse-x", `${x}px`)
  target.style.setProperty("--nouse-y", `${y}px`)
}

for (const card of document.querySelectorAll(".card-container")) {
  card.onmousemove = (e) => handleOnMouseMove(e)
}
*/

console.log(document.getElementById("myBtn"))
console.dir(document.getElementsByClassName("card-container")[0].innerHTML)
