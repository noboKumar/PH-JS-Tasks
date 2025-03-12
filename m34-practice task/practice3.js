const fetchData = async () => {
  try {
    let response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    let data = await response.json();
    console.log(data.joke);
  } catch {
    console.log(error);
  }
};
fetchData();