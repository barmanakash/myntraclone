import { Box, Button, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import Navbar from "./navbar";
import LoginImage from "./assest/loginimage.jpg"
import { withNavigation } from "./NavigateHOC";


class LoginSignup extends Component {

    handleNavigate = (screenName) => {
        this.props.navigate(screenName);
    };
    render() {
        return (
            <>
                <Box><Navbar />
                </Box>
                <Box style={{ display: "flex", backgroundColor: "#FDEFEB", height: "120vh" }}>

                    <Box style={{ display: "flex", height: "700px", width: "400px", backgroundColor: "white", marginLeft: "600px", marginTop: "100px", flexDirection: "column" }}>
                        <Box> < img src={LoginImage} alt="loginsignupimage" style={{ display: "flex", height: "", width: "400px" }} /></Box>
                        <Box style={{ display: "flex", flexDirection: "row", gap: "7px", paddingTop: "40px", paddingLeft: "20px" }} >
                            <Typography style={{
                                color: "#424553",
                                fontSize: "20px",
                                fontWeight: "700",
                                paddingBottom: "5px",
                                display: "inline-block",
                            }}>Login</Typography>
                            <Typography>or</Typography>
                            <Typography style={{
                                color: "#424553",
                                fontSize: "20px",
                                fontWeight: "700",
                                paddingBottom: "5px",
                                display: "inline-block",
                            }}>Signup</Typography>
                        </Box>
                        <Box>
                            <TextField
                                placeholder="+91 | Mobile Number"
                                sx={{
                                    width: "350px",
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                    },
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", gap: "5px", marginLeft: "20px", marginTop: "20px", }}>
                            <Typography style={{ color: "#5F6270", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>By countinue, i agree to the</Typography>
                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Terms of use</Typography>
                            <Typography style={{ color: "#5F6270", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>&</Typography>
                        </Box>
                        <Box style={{ display: "flex", gap: "5px", marginLeft: "20px" }}>
                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "" }}>Privacy policy</Typography>
                            <Typography style={{ color: "#5F6270", fontSize: "", fontWeight: "700", paddingTop: "" }}>and i am above 18 years old.</Typography>
                        </Box>
                        <Button style={{ color: "white", fontSize: "12px", backgroundColor: "#93959e", fontWeight: "bold", marginTop: "20px", marginLeft: "20px", width: "350px" }}>CONTINUE</Button>
                        <Box style={{ display: "flex", marginLeft: "20px", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "13px", fontWeight: "400" }}>Have trouble loggin in ?</Typography>
                            <Typography 
                            onClick={() => this.handleNavigate("/gethelp")}
                            style={{ fontSize: "13px", color: "#ff3f6cff", fontWeight: "700", cursor: "pointer" }}>Get help</Typography>
                        </Box>
                    </Box>
                </Box>
            </>

        )
    }
}

export default withNavigation(LoginSignup);