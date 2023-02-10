console.log(document.querySelector("title").innerText);

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    console.log(data);
    const curriculum = {
      gender: data.results[0].gender,
      title: data.results[0].name.title,
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      img: data.results[0].picture.large,
      street:
        data.results[0].location.street.name +
        " " +
        data.results[0].location.street.numer,
      city: data.results[0].location.city,
      state: data.results[0].location.state,
      country: data.results[0].location.country,
      postcode: data.results[0].location.postcode,
      //coordinates: data.results[0].coordinates,
      //timezone: data.results[0].timezone,
      email: data.results[0].email,
      //login: data.results[0].login,
      date: data.results[0].dob.date,
      age: data.results[0].dob.age,
      //resgistered: data.results[0].resgistered,
      //phone: data.results[0].registered.phone,
      //cell: data.results[0].registered.cell,
      id: data.results[0].id.name + " " + data.results[0].id.value,
      //info:results[0].info
    };
    console.log(curriculum);

    paintCard(curriculum);
  } catch (error) {
    console.log(`error en fechtDATA${error}`);
  }
};

const paintCard = async (curriculum) => {
  try {
    const res = await fetch("template/card.hbs");
    const templateHbs = await res.text();
    const template = Handlebars.compile(templateHbs);
    const html = template({ curriculum });
    console.log(html);

    document.getElementsByClassName("card-container")[0].innerHTML = html;
  } catch (error) {
    console.error(`este error esta en paintCard ${error}`);
  }
};

console.dir(document.getElementsByClassName("card-container")[0].innerHTML);
