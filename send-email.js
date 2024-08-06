 // Initialize Firebase
 const firebaseConfig = {
  apiKey: "AIzaSyCRRGLY5wimSd9GdJt3Np-BFI9tFAFjvnU",
  authDomain: "conversion-6394a.firebaseapp.com",
  projectId: "conversion-6394a",
  storageBucket: "conversion-6394a.appspot.com",
  messagingSenderId: "1053184555205",
  appId: "1:1053184555205:web:f85d614a068cfccde218ac"
};
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  try {
    await firestore.collection('submissions').add({
      name,
      email,
      message,
      timestamp: new Date(),
    });
    alert('Submission received!');
    this.reset();
  } catch (error) {
    console.error('Error storing submission:', error);
    alert('Failed to submit form.');
  }
});