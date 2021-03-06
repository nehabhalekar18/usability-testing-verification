import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";

import "./SimpleDialogDemo.css";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      className="ss"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}>
      <List>
        <ListItem button onClick={() => handleListItemClick("share")}>
          <ShareIcon className="del" />
          <ListItemText primary="Share" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("edit")}>
          <EditIcon className="del" />
          <ListItemText primary="Edit" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("delete")}>
          <DeleteIcon className="del" />
          <ListItemText primary="Delete" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
