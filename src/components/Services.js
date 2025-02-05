import React from 'react';
import Slider from "react-slick";

// Список услуг
const servicesList = [
  "Инвентаризация старых вредных веществ",
  "Разработка НДВ",
  "План мероприятий по уменьшению выбросов в атмосферный воздух",
  "Разработка ПНООЛР",
  "Проект СЗЗ",
  "Оценка риска для здоровья населения",
  "Программа ПЭК",
  "Сопровождение основной деятельности",
  "Постановка на учет объектов НВОС"
];

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: false, // Убираем возможность переменной ширины для элементов
  };

  return (
    <section className="services">
      <h2>Наши услуги</h2>
      <Slider {...settings}>
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Services;
