import React, { useState } from "react";
import "./feedbackstyle.css";
import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function FeedbackForm() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));
  const navigate = useNavigate();
  const linkUserHome = () => {
    navigate("/userhome");
  };

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [university, setUniversity] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherOccupation, setFatheOccupation] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [numOfSibblings, setNumOfSibblings] = useState("");
  const [revenue, setRevenue] = useState("");
  const [drive, setDrive] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  async function submitForm() {
    const result = await axios.post(
      "http://localhost:5000/api/boardim/feedback",
      {
        fullName: fullName,
        address: address,
        dob: dob,
        university: university,
        universityRegistrationNumber: registrationNumber,
        fatherName: fatherName,
        fatherOccupation: fatherOccupation,
        motherName: motherName,
        motherOccupation: motherOccupation,
        numberOfSibblings: numOfSibblings,
        monthlyRevenue: revenue,
        url: drive,
        email: email,
        telephoneNumber: telephoneNumber,
        feedback: feedback,
      }
    );

    if (result.data.success) {
      Swal.fire("Feedback Added Successfully!", "You Submitted", "success")
        .then(() => {
          linkUserHome();
        })
        .catch(() => {
          linkUserHome();
        });
    }
  }

  function checkError() {
    if (fullName === "") {
      return true;
    } else if (address === "") {
      return true;
    } else if (dob === "") {
      return true;
    } else if (university === "") {
      return true;
    } else if (registrationNumber === "") {
      return true;
    } else if (
      fatherName === "" ||
      fatherOccupation === "" ||
      motherName === "" ||
      motherOccupation === ""
    ) {
      return true;
    } else if (numOfSibblings === "") {
      return true;
    } else if (revenue === "") {
      return true;
    } else if (drive === "") {
      return true;
    } else if (email === "" || !checkEmailValidity(email)) {
      return true;
    } else if (
      telephoneNumber === "" ||
      !checkTelephoneValidity(telephoneNumber) ||
      !containsNumbers(telephoneNumber)
    ) {
      return true;
    } else if (feedback === "" || feedback.length < 300) {
      return true;
    }
    return false;
  }

  function checkEmailValidity(emailAdress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) return true;
    else return false;
  }
  function containsNumbers(str) {
    var regexp = /\d/g;
    return regexp.test(str);
  }
  function checkTelephoneValidity(telephoneNumber) {
    if (telephoneNumber.length >= 7) {
      return true;
    }
    return false;
  }
  return (
    <div className="page">
      <form>
        <h2 className="form-headline">Feedback of the Web Site</h2>

        <div className="feedback-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {fullName === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Address</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {address === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              required
              className="form-input"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {dob === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">University</label>
            <select
              required
              className="form-input"
              onChange={(e) => {
                setUniversity(e.target.value);
              }}
            >
              <option className="form-input" value="">
                select
              </option>
              <option className="form-input" value="University of Colombo">
                University of Colombo
              </option>
              <option className="form-input" value="University of Moratuwa">
                University of Moratuwa
              </option>
              <option
                className="form-input"
                value="University of Sri Jayawardanapura"
              >
                University of Sri Jayawardanapura
              </option>
            </select>
            <span style={{ color: "red" }}>
              {university === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">University Registration No</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setRegistrationNumber(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {registrationNumber === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Father's Name</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {fatherName === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Father's Occupation</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setFatheOccupation(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {fatherOccupation === ""
                ? "can not be empty / If no please put No"
                : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Mother's Name</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setMotherName(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {motherName === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Mother's Occupation</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setMotherOccupation(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {motherOccupation === ""
                ? "can not be empty / If no please put No"
                : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">No of siblings</label>
            <input
              type="number"
              min={0}
              required
              className="form-input"
              onChange={(e) => {
                setNumOfSibblings(e.target.value.toString());
              }}
            ></input>
            <span style={{ color: "red" }}>
              {numOfSibblings === ""
                ? "can not be empty / If no please put 0"
                : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Monthly revenue of family</label>
            <input
              type="number"
              required
              min={0}
              className="form-input"
              onChange={(e) => {
                setRevenue(e.target.value.toString());
              }}
            ></input>
            <span style={{ color: "red" }}>
              {revenue === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">
              Drive Link for Certified copy of monthly revenue of family
            </label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setDrive(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {drive === "" ? "can not be empty" : ""}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {email === ""
                ? "can not be empty"
                : checkEmailValidity(email)
                ? ""
                : "Should be a valid Email"}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">Contact No</label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setTelephoneNumber(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {telephoneNumber === ""
                ? "can not be empty"
                : checkTelephoneValidity(telephoneNumber) &
                  containsNumbers(telephoneNumber)
                ? ""
                : "Please Provide valid telephone number"}
            </span>
          </div>
          <div className="form-group">
            <label className="form-label">
              Give your feedback regarding the service
            </label>
            <input
              type="text"
              required
              className="form-input"
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
            ></input>
            <span style={{ color: "red" }}>
              {feedback === "" || feedback.length < 300
                ? "Feedback should have atleast 300 word count"
                : ""}
            </span>
          </div>
          <div className="form-group">
            <ColorButton onClick={submitForm} disabled={checkError()}>
              Submit Form
            </ColorButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
