import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../db";
import { deleteDoc, doc, getDoc } from "firebase/firestore";

function ContactDetails() {
  const [contact, setContact] = React.useState(null);
  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchContact() {
      const document = await getDoc(doc(db, "contacts", params.id));

      if (document.exists()) {
        setContact({
          id: document.id,
          ...document.data()
        });
      }
    }

    fetchContact();
  }, [params.id]);

  async function deleteHandler() {
    await deleteDoc(doc(db, "contacts", params.id));
    navigate("/");
  }

  if (!contact) {
    return <p>Loading...</p>;
  }

  return (
    <section className="details">
      <h2>{contact.firstName} {contact.lastName}</h2>

      <div className="details-card">
        {Object.entries(contact).map(([key, value]) => {
          if (key === "id") {
            return null;
          }

          return (
            <p key={key}>
              <strong>{key}: </strong>
              {value}
            </p>
          );
        })}
      </div>

      <div className="actions">
        <Link className="button" to={`/edit/${contact.id}`}>Edit</Link>
        <button className="danger" onClick={deleteHandler}>Delete</button>
      </div>
    </section>
  );
}

export default ContactDetails;