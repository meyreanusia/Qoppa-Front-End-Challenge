const URL = "http://localhost:3000/SingUp";

async function handleNewUser(data) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição, Status: ${response.status}`);
    }

    return response;
    
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}

export default handleNewUser;
