import { Body } from "../Interfaces/FiltersBody";



const apicall = async (body: Body) => {
  const response = await fetch("http://localhost:5000/api/v1/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const users = await response.json();
  return users;
};

export default apicall;
