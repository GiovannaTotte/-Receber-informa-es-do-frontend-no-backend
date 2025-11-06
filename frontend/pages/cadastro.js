document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.onclick = (event) => {
        event.preventDefault();
        sendUser();
    }
});

function sendUser() {
    const name = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#senha").value;

    const user = { name, email, password };
    console.log(user);

    fetch("http://localhost:3333/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    })
}
