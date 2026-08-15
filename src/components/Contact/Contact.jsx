import "./Contact.css";

export function Contact({ contact, onDeleteContact }) {
  return (
    <li className="contact">
      <p>
        {contact.name}: {contact.number}
      </p>

      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}