import React, { useState } from "react";
import { Button, Select, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: "0px",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexFlow: "column wrap",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    minHeight: "85vh",
    maxHeight: "95vh",
    width: "800px",
    backgroundColor: "#f4f5f7",
    borderRadius: ".5%",
    border: "2px solid black",
    outline: "none",
    padding: "18px 32px",
  },
  cardGeneralInformation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "12vh",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardStats: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "732px",
    height: "500px",
  },
  smallForms: {
    width: 182,
  },
  textBox: {
    width: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const CreateCard = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("Test Modal");
  const [titleEditable, setTitleEditable] = useState(false);
  const [status, setStatus] = useState("In Progress");
  const [statusEditable, setStatusEditable] = useState(false);
  const [points, setPoints] = useState("5");
  const [pointsEditable, setPointsEditable] = useState(false);
  const [assignee, setAssignee] = useState("Sam Rosenthal");
  const [assigneeEditable, setAssigneeEditable] = useState(false);
  const [acceptanceCriteria, setAcceptanceCriteria] = useState("Test Criteria");
  const [acceptanceCriteriaEditable, setAcceptanceCriteriaEditable] = useState(
    false
  );
  const [description, setDescription] = useState("Test Description");
  const [descriptionEditable, setDescriptionEditable] = useState(false);

  return (
    <div className={classes.center}>
      <div
        id="cardCreationHeader"
        className={classes.header}
        onClick={() => setTitleEditable(!titleEditable)}
      >
        {titleEditable ? (
          <TextField
            className={classes.smallForms}
            id="title"
            label="Title"
            //onChange={}
            value={title}
          />
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <div
        id="cardGeneralInformation"
        className={classes.cardGeneralInformation}
      >
        <div id="cardStats" className={classes.cardStats}>
          <div onClick={() => setAssigneeEditable(!assigneeEditable)}>
            {assigneeEditable ? (
              <TextField
                className={classes.smallForms}
                id="assignee"
                label="Assignee"
                // onChange={handleAssignee}
                value={assignee}
              />
            ) : (
              <h3 className={classes.smallForms}>{assignee}</h3>
            )}
          </div>
          <div onClick={() => setPointsEditable(!pointsEditable)}>
            {pointsEditable ? (
              <TextField
                className={classes.smallForms}
                id="points"
                label="Story Points"
                // onChange={handlePoints}
                value={points}
              />
            ) : (
              <h3>{points}</h3>
            )}
          </div>
          <div onClick={() => setStatusEditable(!statusEditable)}>
            {statusEditable ? (
              <FormControl className={classes.smallForms}>
                <InputLabel id="card-status">Status</InputLabel>
                <Select
                  labelId="card-status"
                  id="card-status-select"
                  value={status}
                  // onChange={handleDropDown}
                >
                  <MenuItem value={"To Do"}>To Do</MenuItem>
                  <MenuItem value={"In Progress"}>In Progress</MenuItem>
                  <MenuItem value={"In Test"}>In Test</MenuItem>
                  <MenuItem value={"Done"}>Done</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <h3>{status}</h3>
            )}
          </div>
        </div>
      </div>
      <div id="cardContent" className={classes.cardContent}>
        <div
          className={classes.textBox}
          onClick={() =>
            setAcceptanceCriteriaEditable(!acceptanceCriteriaEditable)
          }
        >
          {acceptanceCriteriaEditable ? (
            <TextField
              multiline
              rows={10}
              variant="outlined"
              id="acceptanceCriteria"
              label="Acceptance Criteria"
              className={classes.textBox}
              value={acceptanceCriteria}
              // onChange={handleAcceptranceCriteria}
            />
          ) : (
            <h3>{acceptanceCriteria}</h3>
          )}
        </div>
        <div
          className={classes.textBox}
          onClick={() => setDescriptionEditable(!descriptionEditable)}
        >
          {descriptionEditable ? (
            <TextField
              multiline
              rows={10}
              variant="outlined"
              id="description"
              label="Description"
              className={classes.textBox}
              value={description}
              // onChange={handleDescription}
            />
          ) : (
            <h3>{description}</h3>
          )}
        </div>
      </div>
      <div id="cardCreationFooter" className={classes.footer}>
        <Button
          variant="contained"
          color="primary"
          // onClick={createCard}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateCard;
