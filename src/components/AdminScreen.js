import React from "react";
import { auth } from "../firebase";

export default function AdminScreen() {
  return (
    <div>
      <h1>AdminScreen</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}
