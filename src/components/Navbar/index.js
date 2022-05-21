import React from "react";
import { useNavigate } from "react-router-dom";
import "./st-nav.module.scss";
import styles from "./st-nav.module.scss";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar__buttons">
        <div className={styles.navbar}>
          <span>Get Talent</span>
          <div className={styles.navbar__buttons}>
            <span onClick={() => navigate("/")}>Home</span>
            <span onClick={() => navigate("/edit")}>Crear</span>
          </div>
        </div>
      </div>
    </div>
  );
}
