export default function PostFetchRequest(data, link) {
  fetch(`http://localhost:2005/${link}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
