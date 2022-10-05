import { useState } from "react";

const CardAmount = () => {
  let [money, setMoney] = useState(() => {
    return 0;
  });
  function AddMoney() {
    setMoney((previousMoney) => previousMoney + 1000);
  }
  function withdrawMoney() {
    setMoney((previousMoney) => previousMoney - 500);
  }
  return (
    <div>
      <img src="img_avatar.png"></img>
      <p>Username: chiragbansal</p>
      <p>amount: 100</p>
      <h1>{money}</h1>
      <button onClick={AddMoney}>Add Money</button>
      <h1>{money}</h1>
      <button onClick={withdrawMoney}>Withdraw Money</button>
      <br />
      <br />
      <div>
        <input ></input>
        <button onClick={AddMoney}>Add Money</button>
        <button onClick={withdrawMoney}>Withdraw Money</button>
      </div>
    </div>
  );
};
export default CardAmount;
