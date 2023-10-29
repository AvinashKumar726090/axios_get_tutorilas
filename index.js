fetch('https://crudcrud.com/api/4c9e68a245584180a4f46738601ce586/todos', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    name: 'Write Tests',
    done: false
  })
})
.then(response => response.json())
.then(data => console.log(data))