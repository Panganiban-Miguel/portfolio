import React from "react";
import { Link } from 'react-router-dom';

export default function ProjCard({ name, module, desc, path, thumbnail }) {
  return (
    <div className="proj-card">
      <Link to={path} className="proj-path">
        <div className="proj-icon" aria-hidden="true">
          <img src={thumbnail} alt={name} />
        </div>

        <div className="proj-body">
          <div className="proj-name">{name}</div>
          <div className="proj-desc">{module} • {desc}</div>
        </div>
      </Link>
    </div> 
  );
}