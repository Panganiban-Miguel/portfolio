import React from "react";

export default function CertCard({ name, issuer, year, link, thumbnail }) {
  return (
    <article className="cert-card">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-link"
      >
        <div className="cert-icon" aria-hidden="true">
          <img src={thumbnail} alt={name} />
        </div>

        <div className="cert-body">
          <div className="cert-name">{name}</div>
          <div className="cert-issuer">
            {issuer} • {year}
          </div>
        </div>
      </a>
    </article>
  );
}