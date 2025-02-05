import React from 'react';

const servicesList = [
  "Инвентаризация выбросов вредных веществ",
  "Разработка НДВ",
  "План мероприятий по уменьшению выбросов",
  "Разработка ПНООЛР",
  "Проект СЗЗ",
  "Оценка риска для здоровья населения",
  "Программа ПЭК",
  "Сопровождение экологической деятельности",
  "Постановка на учет объектов НВОС"
];

function Services() {
  return (
    <section className="services">
      <h2>Наши услуги</h2>
      <ul>
        {servicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
