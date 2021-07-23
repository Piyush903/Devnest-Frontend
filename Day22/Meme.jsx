import React, { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [Form, setForm] = useState({
    template_id: meme.id,
    username: "mkrn",
    password: "newMemeapi@123",
    boxes: []
  });

  const genrateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${Form.template_id}&username=${Form.username}&password=${Form.password}`;
    Form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setMeme({ ...meme, url: data.data.url });
        else setMeme(null);
      });
  };
  return (
    <div className="meme">
      <img src={meme.url} alt="" />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = Form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...Form, boxes: newBoxes });
            }}
          />
        ))}
      </div>
      <div>
        <button onClick={genrateMeme}>Genrate Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose template
        </button>
      </div>
    </div>
  );
};

export default Meme;
