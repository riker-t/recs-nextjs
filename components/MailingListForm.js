import styles from './MailingListForm.module.css'
import { useState } from "react";


export default function MailingListForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");


  function handleSubmit(event) {

    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "mailing-list",
        email
      }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }


  return (
    <form
      className={styles.form}
      data-netlify="true"
      name="mailing-list"
      onSubmit={handleSubmit}
    >
      <h3>Interested in learning more?</h3>
      <p>Stay ahead with the latest updates and product releases! Subscribe to our mailing list and be among the first to know about new features and exclusive promotions. </p>


      <div style={{ display: submitted ? "none" : "block" }}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={styles.inputEmail}
          required
        />
      </div>
      {submitted && <p>Thank you for subscribing! We'll reach out with more information as development continues.</p>}
      <button type="submit" disabled={submitted} className={styles.subscribeButton}>
        {submitted ? "Done!" : "Subscribe"}
      </button>

    </form>
  )
}
