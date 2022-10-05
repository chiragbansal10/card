import { useState } from "react";

const CardAmount = () => {
  let [money, setMoney] = useState(() => {
    return 0;
  });
  function AddMoney() {
    setMoney((previousMoney) => previousMoney + 1000);
  }
  function AddMoneyInput() {
       
        let inputVal=document.getElementById("myInput").value
        setMoney((previousMoney) => 
        inputVal<previousMoney?
        previousMoney + parseInt(inputVal):previousMoney
        )
  }
  function withdrawMoney() {
    setMoney((previousMoney) => previousMoney - 500);
  }
  function withdrawMoneyInput() {
    let inputVal=document.getElementById("myInput").value
   
    setMoney((previousMoney) => 
    inputVal<previousMoney?
    previousMoney - inputVal:previousMoney
    );
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
        <input type="number" id="myInput"></input><br/><br/>
        <button onClick={AddMoneyInput}>Add Money</button>
        <button onClick={withdrawMoneyInput}>Withdraw Money</button>
      </div>
    </div>
  );
};
export default CardAmount;
