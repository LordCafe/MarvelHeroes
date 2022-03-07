import React, { useState } from 'react';


function Onload(event) {
  let current = event.target;
  current.classList.add("visibleImg");
}


function ChooseImage(thumbnail) {
  let newImage = "https://grainy-gradients.vercel.app/noise.svg";
  try {

    let image = thumbnail.path + "/portrait_uncanny." + thumbnail.extension;
    newImage = image.replace("http", "https")
    // Declara una nueva variable de estado, la cual llamaremos “count”
  } catch (error) {

  }
  return newImage;
}

function Example({ title, id, thumbnail }) {
  let newImage = ChooseImage(thumbnail);
  const [count, setCount] = useState(0);

  return (
    <div id={id} class="col s12 m3 marvel-thumbnail">
      <div class="card">
        <div class="card-image">
          <figure>
            <a href={"/comic/"+id} >
                          <img
              class="tooltipped"
              data-position="right"
              data-tooltip="I am a tooltip"
              src={newImage}
              alt="Trulli"
              onLoad={Onload}
            />

            </a>

            <figcaption>{title}</figcaption>
          </figure>
        </div>
      </div>
    </div>

  );
}

export default Example;
