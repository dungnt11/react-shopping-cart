import React, { Component } from "react";
import { connect } from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {this.props.products.map(e => {
            return (
              <div key={e.id} className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img src={e.img} className="img-fluid" alt="" />
                    <a>
                      <div className="mask waves-light waves-effect waves-light" />
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <strong>
                        <a>{e.name}</a>
                      </strong>
                    </h4>
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <p className="card-text">{e.decription}</p>
                    <div className="card-footer">
                      <span className="left">{e.price}$</span>
                      <span className="right">
                        <a
                          className="btn-floating blue-gradient"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Add to Cart"
                        >
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product
  };
};

export default connect(mapStateToProps)(Products);
