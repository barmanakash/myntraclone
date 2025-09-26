import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Navbar from "./navbar";
import ImageSliderKids from "./imagesliderkids";
import Brandone from "./assest/brandone.jpg";
import Toppicks from "./assest/toppicks.jpg";
import HMGilr from "./assest/HMgirl.jpg";


class Kids extends Component {
    Tabone = () => {
        return (
            <Box
                style={{
                    display: "flex",
                    marginTop: "20px",
                    flexDirection: "column",
                    overflowX: "hidden"
                }}
            >
                <Typography
                    style={{
                        height: "100px",
                        width: "100%",
                        maxWidth: "1200px",
                        fontSize: "28.8px",
                        color: "#3e4152",
                        margin: "50px 0px 10px 60px",
                        fontWeight: "700",
                        letterSpacing: ".15em"
                    }}
                >
                    FAVOURITE BRANDS
                </Typography>

                <Box>
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                    <img src={Brandone} alt="Brand One" style={{ width: "165px", height: "165px" }} />
                </Box>
                <Typography
                    style={{
                        height: "100px",
                        width: "100%",
                        maxWidth: "1200px",
                        fontSize: "28.8px",
                        color: "#3e4152",
                        margin: "50px 0px 10px 60px",
                        fontWeight: "700",
                        letterSpacing: ".15em"
                    }}
                >
                    TOP PICKS
                </Typography>
                <Box>
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                    <img src={Toppicks} alt="Brand One" style={{ width: "135px", height: "100px" }} />
                </Box>
                <Typography
                    style={{
                        height: "100px",
                        width: "100%",
                        maxWidth: "1200px",
                        fontSize: "28.8px",
                        color: "#3e4152",
                        margin: "50px 0px 10px 60px",
                        fontWeight: "700",
                        letterSpacing: ".15em"
                    }}
                >
                    ICONIC BRANDS
                </Typography>
                <Box>
                    <img src={HMGilr} alt="Brand One" style={{ width: "300px", height: "320px", cursor: "pointer" }} />
                    <img src={HMGilr} alt="Brand One" style={{ width: "300px", height: "320px", cursor: "pointer" }} />
                    <img src={HMGilr} alt="Brand One" style={{ width: "300px", height: "320px", cursor: "pointer" }} />
                    <img src={HMGilr} alt="Brand One" style={{ width: "300px", height: "320px", cursor: "pointer" }} />
                    <img src={HMGilr} alt="Brand One" style={{ width: "300px", height: "320px", cursor: "pointer" }} />

                </Box>
                <Typography
                    style={{
                        height: "100px",
                        width: "100%",
                        maxWidth: "1200px",
                        fontSize: "28.8px",
                        color: "#3e4152",
                        margin: "50px 0px 10px 60px",
                        fontWeight: "700",
                        letterSpacing: ".15em"
                    }}
                >
                    FASHION & ESSENTIALS
                </Typography>

            </Box>
        );
    };

    render() {
        return (
            <>
                <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
                    <Navbar />
                </Box>

                <Box sx={{ marginTop: "7%", overflowX: "hidden" }}>
                    <ImageSliderKids />
                    {this.Tabone()}
                </Box>
            </>
        );
    }
}

export default Kids;
