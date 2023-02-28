import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const GoBackButton = styled(Button)`
  margin-bottom: 50px;
  background-color: #a61f69;
`;

function GoBackBtn() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Button variant="contained">Contained</Button> */}
      <GoBackButton
        variant="contained"
        size="large"
        id="my-element"
        onClick={() => navigate(-1)}
      >
        Go back
      </GoBackButton>
      <Tooltip anchorId="my-element" content="Tak schválne" place="right" />
    </div>
  );
}

export default GoBackBtn;
