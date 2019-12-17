import React from "react";
import styled from "styled-components";
import "./Field.css";
import goal from "../assets/goal.png";

const Wrapper = styled.div`
margin-left: 25px
display: flex
align-items: center
justify-content: center`


export default class Field extends React.Component {
  state = {};

  render() {
    return (
      <Wrapper>
          <img className="goal-post-left" src={goal} alt="" height="100" />

          <div className="fieldDiv">

              <div className="trapezoid"></div>
              <h3 className="team-1">BEARS</h3>
              <h3 className="team-2">TIGERS</h3>
            <div id="horizontal-list">
              <h4>10</h4>
              <h4>50</h4>
              <h4>10</h4>
            </div>
            </div>

          <img className="goal-post-right" src={goal} alt="" height="100" />
      </Wrapper>
    );
  }
}
