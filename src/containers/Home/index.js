import React from "react";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        {/* this div just like a Jumbotron */}
        <div
          style={{ padding: "40px", margin: "5rem", backgroundColor: "#FFF" }}
          className="text-center"
        >
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            sapiente? Corporis atque hic a sequi officiis consectetur aliquid
            fuga est qui repellendus deleniti odio laboriosam eligendi,
            voluptatibus ipsa! Quas natus beatae quaerat delectus fugiat earum
            dolor sequi aperiam. Quas, unde? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam soluta quod iste aliquid ad
            voluptas!
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
