const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // inputs values
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const agreeTerms = document.querySelector("#agree-terms").checked;

  // validation
  if (!agreeTerms) {
    alert("Você precisa aceitar os termos!");
    return;
  }

  const userData = {
    firstName,
    lastName,
    email,
    password,
  };

  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Usuário cadastrado com sucesso!");
      form.reset(); // clean the form
    } else {
      alert("Erro ao cadastrar usuário");
    }
  } catch (error) {
    console.error(error);
    alert("Erro na conexão com o servidor");
  }
});
