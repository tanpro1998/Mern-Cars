import React from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAllCars } from "../redux/actions/carsActions";
import Loading from "../components/Loading";
import { Col, Row } from "antd";

function BookingCar({ match }) {
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars());
    if (cars.length > 0) {
      setCar(cars.find((item) => item._id === match.params.id));
    }
  }, [cars]);

  return (
    <Layout>
      {loading && <Loading />}
      <Row>
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} alt="" className="carImg2" />
        </Col>
      </Row>
    </Layout>
  );
}

export default BookingCar;
