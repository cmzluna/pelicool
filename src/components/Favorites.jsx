import React from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function User() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <React.Fragment>
      <section className="content">
        <h3>Favorites</h3>

        <ul>
          {favorites?.map((el) => (
            <li>{el.Title}</li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
