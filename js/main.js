console.log(document.querySelector("title").innerText);

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(`error en fechtDATA${error}`);
  }
};
