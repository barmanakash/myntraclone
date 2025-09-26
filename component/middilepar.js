import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Myntraimage from "./assest/myntra.jpg"
import MyntraIteams from "./assest/girlpicnow.jpg"
import Myntraimagetop from "./assest/topmyntraimage.jpg"
import New from "./New";


class Middilepart extends Component {
    render() {
        const image = () => {
            return (
                <>
                <Box style={{ display: "flex", flexWrap: "wrap", width: "", marginLeft: "3.5%", padding: "4px" }}>
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                </Box>
                <Box style={{display:"flex",justifyContent: "center"}}>
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                    <img src={MyntraIteams} alt="iamge1" style={{ height: "322.725px", width: "200px" }} />
                </Box>
                </>
            )
        }
        const mid = () => {
            return (
                <Box>
                    <Box>
                        <img src={Myntraimage} alt="imgformyntra" style={{ display: "flex", height: "auto", width: "100%" }} />
                    </Box>
                </Box>
            )
        }
        const top = () => {
            return (
                <Box>
                    <Box style={{ marginBottom: "" }}>
                        <img src={Myntraimagetop} alt="imgformyntra" style={{ display: "flex", height: "auto", width: "100%" }} />
                    </Box>
                </Box>
            )
        }
        return (
            <>
                <New/>
                <Box>{top()}</Box>
                <Box>{image()}</Box>
                <Box>{mid()}</Box>
            </>

        )
    }
}

export default Middilepart;