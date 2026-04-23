import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../db";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function EditContact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchContact() {
      const document = await getDoc(doc(db, "contacts", params.id));

      if (document.exists()) {
        const data = document.data();

        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      }
    }

    fetchContact();
  }, [params.id]);

  async function submitHandler(e) {
    e.preventDefault();

    await updateDoc(doc(db, "contacts", params.id), {
      firstName,
      lastName,
      email
    });

    navigate(`/contacts/${params.id}`);
  }

  return (
    <section>
      <h2>Edit Contact</h2>

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

        <button type="submit">Update Contact</button>
      </form>
    </section>
  );
}

export default EditContact;