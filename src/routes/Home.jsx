import React from "react";
import { Link } from "react-router-dom";
import db from "../db";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [contacts, setContacts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    async function fetchContacts() {
      const querySnapshot = await getDocs(collection(db, "contacts"));

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      data.sort((a, b) => a.lastName.localeCompare(b.lastName));

      setContacts(data);
    }

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <section>
      <h2>Contacts</h2>

      <input
        className="search"
        type="text"
        placeholder="Search by first or last name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="contact-list">
        {filteredContacts.map(contact => (
          <Link className="contact-card" key={contact.id} to={`/contacts/${contact.id}`}>
            <strong>{contact.lastName}, {contact.firstName}</strong>
            <span>{contact.email}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;