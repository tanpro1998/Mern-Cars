import React from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCars } from "../redux/actions/carsActions";
import { Row, Col } from "antd";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  return (
    <Layout>
      {loading === true && <Loading />}
      <Row justify="center" gulter={16} className="mt-5">
        {cars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24} key={car._id}>
              <div className="car p-2 bs1">
                <img src={car.image} alt="" className="carImg" />
                <div className="car-content d-flex align-items-center justify-content-between">
                  <div>
                    <p className="title">{car.name}</p>
                    <p className="desc">RentPerHour: {car.rentPerHour}</p>
                  </div>
                  <div>
                    <button className="btn1 mr-2">
                      <Link to={`/booking/${car._id}`}>Book Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
}

export default Home;
