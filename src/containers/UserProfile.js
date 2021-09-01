import React from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UserProfile() {
  return (
    <React.Fragment>
      <Header />

      <section className="content"></section>

      <Footer />
    </React.Fragment>
  );
}
