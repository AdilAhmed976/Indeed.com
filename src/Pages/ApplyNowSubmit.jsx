import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ApplyNowSubmit = () => {
  let data = JSON.parse(localStorage.getItem("Applied_Data"));

  let jobTitle = localStorage.getItem("jobTitle");
  const navigate = useNavigate();
  
  return (
    <Box    
      sx={{
        margin: "auto",
        width: "300px",
        height: "220px",
        fontSize: "18px",
        fontWeight: "500",
        border: "1px solid black",
        padding: "16px",
        paddingTop: "13px",
        marginTop: "100px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        Name: {data.firstName}
        {data.lastName}
      </Box>

      <Box sx={{ display: "flex" }}>E-mail: {data.email}</Box>

      <Box sx={{ display: "flex" }}>Job Title: {jobTitle}</Box>

      <Box sx={{ display: "flex" }}>Phone: {data.phone}</Box>
      <Box sx={{ display: "flex" }}>
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
          component="label"
        >
          {" "}
          Go to home{" "}
        </Button>
      </Box>
    </Box>
  );
};

