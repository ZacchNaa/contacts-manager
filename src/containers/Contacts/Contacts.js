import React, { useContext } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import { GlobalContext } from "../../context/Provider";

function Contacts() {
  const context = useContext(GlobalContext);
  console.log(context);
  return (
    <div>
      <MenuBar />

      <h1>All Contacts</h1>
    </div>
  );
}

export default Contacts;
