

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./uzvler.css";
import { Col, Row } from "antd";
import { fetchCategories } from "../../Slice/Uzvlerslice";

const ProductList = () => {
  const dispatch = useDispatch();
  const productlist = useSelector((state) => state.uzvler.items);

  const loading = useSelector((state) => state.uzvler.loading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="Uzvler">
      <div className="uzvbashliq">
        <span>Üzvlərimiz</span>
        <h2>Top bəxşiş toplayanlar</h2>

        <p>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
      </div>

      <div className="container">
        <div className="productList">
          {loading ? (
            <svg viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
          ) : (
            <Row>
              {productlist.map((product) => (
                <Col sm={24} md={12} lg={8} key={Number(product.id)}>
                  <div className="card-inner">
                    <div className="card">
                      <div className="cardimg">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="card-body">
                        <h1>{product.name}</h1>
                        <p>{product.profession}</p>
                        <h3>{product.price}</h3>
                        <h4>{product.supporter}</h4>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
