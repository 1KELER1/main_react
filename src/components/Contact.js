import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Контакты</h2>
      <p>Телефон: (800) 123-45-67</p>
      <p>Email: eco@angtu.ru</p>
      <form>
        <input type="email" placeholder="Ваш email" />
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default Contact;
