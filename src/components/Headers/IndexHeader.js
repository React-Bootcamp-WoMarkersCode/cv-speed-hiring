import React from "react";
import { Container } from "reactstrap";

function IndexHeader({props}) {
 const { urlImg, title, description } = props;
  
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: `url(${urlImg})`
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">{title}</h1>
            </div>
            <h2 className="presentation-subtitle text-center">{description}</h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
