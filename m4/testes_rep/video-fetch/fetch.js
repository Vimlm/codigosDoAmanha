const url = 'https://jsonplaceholder.typicode.com/photos';

const body = document.querySelector('body');

async function getAllPhotos() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.map((image) => {
    const div = document.createElement('div');
    const id = document.createElement('id');
    const title = document.createElement('h1');
    const img = document.createElement('img');
  
    id.innerText = image.id;
    title.innerText = image.title;
    img.setAttribute('src', image.url);
  
    div.appendChild(id);
    div.appendChild(title);
    div.appendChild(img);

    body.appendChild(div);
  });
}



getAllPhotos();