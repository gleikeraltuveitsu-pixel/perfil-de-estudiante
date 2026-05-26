// src/components/FeatureCard.jsx
export function FeatureCard({ title, children, customClass = "" }) {
  return (
    <div className={`panel ${customClass}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}