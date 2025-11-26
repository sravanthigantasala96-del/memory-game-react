import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router";
import Typography from "@mui/material/Typography";

export default function AlertDialog(props) {
  const { isOpen, totalMoves, bestScore, onRestart, stars } = props;
  <Link to="/">Home</Link>;
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Congratulations!!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Stars */}
    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
      {stars?.map((star, i) => (
        <span key={i} style={{ opacity: star }}>⭐</span>
      ))}
    </div>

    <Typography gutterBottom>TotalMoves: {totalMoves}</Typography>
    <Typography gutterBottom>BestScore: {bestScore}</Typography>
  </DialogContentText>
</DialogContent>
        <DialogActions>
          <Button variant="outlined" component={Link} to="/">
            Home
          </Button>
          <Button variant="outlined" onClick={onRestart}>
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
