import React from "react";
import "./listpage.scss";
import { listData } from "../../lib/dummmydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
function ListPage() {
  const data = listData;
  return (
    <div className="listpage">
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapcontainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
