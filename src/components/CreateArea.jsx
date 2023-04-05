import React, { useState } from "react";

function CreateArea(props) {
  const [emoji, setEmoji] = useState({
    emojiAv: "",
    emojiName: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEmoji((prevEmoji) => {
      return {
        ...prevEmoji,
        [name]: value,
      };
    });
  }

  function submitEmoji(event) {
    props.onAdd(emoji);
    setEmoji({
      emojiAv: "",
      emojiName: "",
      description: "",
    });
    event.preventDefault()
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="emojiAv"
          value={emoji.emojiAv}
          placeholder="Emoji eg 🥵"
        />
        <input
          onChange={handleChange}
          name="emojiName"
          value={emoji.emojiName}
          placeholder="Emoji's Name"
        />
        <textarea
          onChange={handleChange}
          name="description"
          value={emoji.description}
          placeholder="Description"
          rows="3"
        />
        <button onClick={submitEmoji}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
