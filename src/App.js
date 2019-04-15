import React, { Component } from "react";

//import component
import Header from "./components/Header";
import Products from "./components/Products";
import Status from "./components/Status";
import Table from "./components/Table";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <Products />
            <Status />
            <Table />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
