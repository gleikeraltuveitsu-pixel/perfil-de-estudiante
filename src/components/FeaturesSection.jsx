// src/components/FeaturesSection.jsx
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section className="content">
      <FeatureCard title="Habilidades">
        <ul>
          <li>Desarrollo web (HTML, CSS, JavaScript)</li>
          <li>Programación en Python</li>
          <li>Gestión de proyectos</li>
          <li>Diseño UI/UX básico</li>
        </ul>
      </FeatureCard>

      <FeatureCard title="Sobre mí">
        <p>
          Soy un estudiante motivado con interés en crear soluciones claras y modernas.
          Me gusta trabajar en proyectos colaborativos y aprender nuevas tecnologías.
        </p>
        <div className="contact-wrapper">
          <a className="contact-button" href="mailto:contacto@ejemplo.com">Contacto</a>
        </div>
      </FeatureCard>

      {/* Le pasamos la clase "projects" para que ocupe el ancho completo según tu CSS */}
      <FeatureCard title="Proyectos" customClass="projects">
        <div className="project-item">
          <h3>Portafolio personal</h3>
          <p>Una página web sencilla para mostrar mis habilidades y proyectos más recientes.</p>
        </div>
        <div className="project-item">
          <h3>App de tareas</h3>
          <p>Una aplicación para organizar actividades académicas con un diseño limpio e intuitivo.</p>
        </div>
      </FeatureCard>
    </section>
  );
}