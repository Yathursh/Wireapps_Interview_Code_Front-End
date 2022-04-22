import React from "react";
import Card from "./Card";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <h1 style={{ marginTop: 20 }}>Modern Walk</h1>
      <hr></hr>
      <h2
        style={{
          textAlign: "left",
          marginLeft: 110,
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        Flash Sale
      </h2>
      <div>
        <Card />
      </div>
      <h2 style={{ textAlign: "left", marginLeft: 110, marginTop: 40 }}>
        Categories
      </h2>
      <div>
        <Categories />
      </div>
    </>
  );
}
