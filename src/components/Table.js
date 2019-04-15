import React, { Component } from "react";

import TableHeader from "./TableHeader";
import TableListItem from "./TableListItem";

export default class extends Component {
  render() {
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <TableHeader />
            <TableListItem />
          </table>
        </div>
      </section>
    );
  }
}
