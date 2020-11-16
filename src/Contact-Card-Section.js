/* eslint-disable */

import React from "react";
import Card from "./Card";

const Contact = () => (
  <section className="contact bg-success ">
  <div className="container ">
    <h2 className="text-white">
      We love new friends!
    </h2>
    <div className="row pb-5  ">
      <div className="col-4">
        <Card title="Japan" buttonText="Visit Japan" cardText="Visit Japan to explore your favourite anime studios" imageUrl="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div className="col-4">
      <Card title="South Korea" buttonText="Visit South Korea" cardText="Visit us to find out what cutting edge technology is being produced in the field of displays and processors" imageUrl="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div className="col-4">
        <Card title="Spain" buttonText="Visit Spain" cardText="Visit Spain to explore your favourite football club stadiums, like Real Madrid, Barcelona and Athletico Madrid" imageUrl="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
    </div>
  </div>
</section>
)

export default Contact;