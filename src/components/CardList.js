import React from "react";
import Card from "./Card";

const CardLst = (props) => {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default CardLst;
