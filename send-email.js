document.getElementById('contactForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/.netlify/functions/contact-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert(`Failed to submit form: ${error.message}`);
  }
});