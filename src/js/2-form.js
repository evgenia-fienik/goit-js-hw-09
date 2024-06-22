let formData = { email: '', message: '' };

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener('input', function (event) {
    if (event.target.name === 'email') {
      formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
      formData.message = event.target.value.trim();
    }
    window.localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(formData)
    );
  });

  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
      alert('Fill please all fields');
    } else {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      formData = { email: '', message: '' };
      emailInput.value = '';
      messageInput.value = '';
    }
  });
});
