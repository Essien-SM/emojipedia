import React, { useState } from "react";
import Entry from "./Entry";
import CreateArea from "./CreateArea";

function App() {
  const [icons, setEmojis] = useState([]);

  function addEmoji(NewEmoji) {
    setEmojis((prevEmojis) => {
      return [...prevEmojis, NewEmoji];
    });
  }

  function deleteEmoji(id){
    setEmojis(prevEmojis=>{
      return prevEmojis.filter((emojiItem, index)=>{
        return index !== id
      })
    })
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <CreateArea onAdd={addEmoji} />
      <dl className="dictionary">
        {icons.map((emojiItem, index) => {
          return (
            <Entry
              key={index}
              id={index}
              emoji={emojiItem.emojiAv}
              name={emojiItem.emojiName}
              description={emojiItem.description}
              onDelete={deleteEmoji}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
