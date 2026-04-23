import React from "react";
import { useNavigate } from "react-router-dom";
import db from "../db";
import { addDoc, collection } from "firebase/firestore";

function NewContact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();

    const document = await addDoc(collection(db, "contacts"), {
      firstName,
      lastName,
      email
    });

    navigate(`/contacts/${document.id}`);
  }

  return (
    <section>
      <h2>New Contact</h2>

      <form onSubmit={submitHandler}>
        <label>
          First Name
          <input value={firstName} onChange={e => setFirstName(e.target.value)} required />
        </label>

        <label>
          Last Name
          <input value={lastName} onChange={e => setLastName(e.target.value)} required />
        </label>

        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>

        <button type="submit">Create Contact</button>
      </form>
    </section>
  );
}

export default NewContact;