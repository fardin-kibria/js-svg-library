let url = 'http://localhost:8000/students';

document.getElementById('add-button').addEventListener('click', function(evt) {
    evt.preventDefault();

    const newForm = document.querySelector("form")
    const formData = new FormData(newForm);

        axios.post(`${url}`, {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            location: formData.get("location"),
        }).then((response) => {
            let insertedStudent = response.data;
            if (insertedStudent.firstName === "" || insertedStudent.lastName === "" || insertedStudent.location === "") {
                axios.delete(`${url}/${insertedStudent.id}`);
                window.alert("Please fill in the information required.");
            } else {
            let message = document.getElementById("message-box");
            message.replaceChildren();
            message.insertAdjacentHTML ('beforeend',
            `The student has been added to the database. Click to access the student details <a href = "${url}/${insertedStudent.id}">here</a>`);
            document.getElementById("message-box").hidden = false;
            document.getElementById('add-button').disabled = true;
            };
        });
    });