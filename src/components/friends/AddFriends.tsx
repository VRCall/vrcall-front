import React, { useState } from "react";
import { addFriend } from "../../services/addFriends";

export const AddFriends: React.FC = () => {
  const [friendName, setFriendName] = useState<string>("");

  const handleAddFriend = async () => {
    if (!friendName) {
      alert("Please enter a friend name");
    }
    friendName.trim();

    const newFriend = await addFriend(friendName);
    alert(newFriend.message);
  };

  return (
    <>
      <h1>Add Friends</h1>
      <input type="text" onChange={(e) => setFriendName(e.target.value)} />
      <br />
      <button onClick={() => handleAddFriend()}>Enregistrer</button>
    </>
  );
};

export default AddFriends;
