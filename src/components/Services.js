import { useEffect, useState } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://127.0.0.1:8000/api/services/")
        .then((response) => setServices(response.data))
        .catch((error) => console.error("Ошибка:", error));
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Обновлять каждые 10 секунд

    return () => clearInterval(interval); // Очистка таймера при размонтировании
  }, []);

  return (
    <section className="services">
      <h2>Наши услуги</h2>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
