import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "3px",
    objectFit: "cover",
    maxHeight: "700px",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      justifySelf: "flex-end",
    },
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    margin: "10px",
    flexGrow: 1,
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    height: "39vh",
  },
  container: {
    marginTop: "25px",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  commentsInnerContainer: {
    maxHeight: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
  commentTextContainer: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
