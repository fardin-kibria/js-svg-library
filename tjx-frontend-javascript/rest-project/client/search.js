let url = 'http://localhost:8000/students';

document.getElementById('search-button').addEventListener('click', async(evt) => {
  let search_value = document.getElementById('search-name').value;

  const {data:search} = await axios.get(url + `?lastName_like=${search_value}`);
  if (search){
    let rows = generateRows(search);
    let list = document.getElementById('search-body');
    list.append(...rows);
    document.querySelector("table").hidden = false;
  } else {
    window.alert("This student does not exist in the database!");
  }
});

function generateRows(students) {
  let rows = students.map((student) => {
    let row = document.createElement('tr');
    row.insertAdjacentHTML(
      'beforeend',
      `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.location}</td>
    `
    );
    return row;
  });
  return rows;
}
