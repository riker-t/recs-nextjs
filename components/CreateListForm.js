import React, { useState } from 'react';
import styles from './CreateListForm.module.css';
import List from './List';



export default function CreateListForm() {
  const [name, setName] = useState('');
  const [textBlob, setTextBlob] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const prompt = "Hello"
    try {
      const response = await fetch('/api/call_openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
          // Do something with the result, e.g., console.log(data.choices[0].text)
          setIsSubmitted(true);
          console.log(data.choices[0])
        } else {
          console.error('No result from OpenAI API');
        }
      } else {
        console.error('Error calling serverless function');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return <List />;
  }

  return (
    <div className={styles.formContainer}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.formControl}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="textBlob">Paste a big blob of text</label>
            <textarea
              id="textBlob"
              name="textBlob"
              value={textBlob}
              onChange={(e) => setTextBlob(e.target.value)}
              className={styles.formControl}
              rows={5}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};