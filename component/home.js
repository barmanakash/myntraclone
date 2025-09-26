import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import Navbar from "./navbar";
import HomeImage from "../component/assest/home.jpg";
import FirstBad from "../component/assest/badfirst.jpg";
import Badsecound from "../component/assest/badsecound.jpg";
import Thirdimage from "../component/assest/thirdart.jpg";
import ForthImage from "../component/assest/forthlamp.jpg";
import Fifthimage from "../component/assest/fifthkitchen.jpg";
import Sixthimage from "../component/assest/forthbath.jpg";
import HomeFooter from "./homefooter";
import HomePage from "../component/assest/homepage.jpg";
import FirstPageimage from "../component/assest/Weddingchecklist.jpg";
import Colorofseason from "../component/assest/colorofseasone.jpg";
import BeautiofHome from "../component/assest/beautyof home.jpg";
import FirstLogo from "../component/assest/firslogo.jpg";
import SecLogo from "../component/assest/secoundlogo.jpg";
import ThirdLogo from "../component/assest/thirdlogo.jpg";
import ForthLogo from "../component/assest/forthlogo.jpg";
import FifthtLogo from "../component/assest/lastlogo.jpg";
import Mid from "../component/assest/mid.jpg";



class Home extends Component {

    FirstPage = () => {
        return (
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "", marginTop: "", minHeight: "254.5vh", width: "auto", backgroundColor: "", }}>
                <Box style={{ marginTop: "7%", marginLeft: "50px" }}>
                    <img src={HomeImage} style={{ height: "346.5px", width: "1420px" }} />
                </Box>
                <Box style={{ display: "flex", height: "346.5px", width: "1420px", backgroundColor: "", marginLeft: "50px" }}>
                    <Box style={{ height: "1423px", width: "1025px", backgroundColor: "" }}>
                        <Typography style={{ display: "flex", fontSize: "1.8em", fontFamily: "segoe UI", fontWeight: "500", margin: "50px 0px 10px 30px" }}>NICE TO SEE YOU, COME ON IN!</Typography>
                        <Box>
                            <Box display={{ display: "flex", gap: "20px", }}>
                                <img src={FirstBad} alt="imgh" style={{ height: "372.08px", width: "476.29px" }} />
                                <img src={Badsecound} alt="imgh" style={{ height: "372.08px", width: "476.29px" }} />
                            </Box>
                            <Box display={{ display: "flex", gap: "20px", }}>
                                <img src={Thirdimage} alt="imgh" style={{ height: "372.08px", width: "476.29px" }} />
                                <img src={ForthImage} alt="imgh" style={{ height: "372.08px", width: "476.29px" }} />
                            </Box>
                            <Box display={{ display: "flex", gap: "20px", }}>
                                <img src={Fifthimage} alt="imgh" style={{ height: "372.08px", width: "476.29px" }} />
                                <img src={Sixthimage} alt="imgh" style={{ height: "372.08px", width: "476.29px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal", marginTop: "10%" }}>Furnishings & Bed Linen</Typography>
                        <Box style={{ marginTop: "10px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bed Sheets</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bedding Sets & Bed Covers</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Blankets, Quilts & Dohars</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Pillows & Pillow Covers</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Cushions & Cushion Covers</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Curtains</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Mats & Dhurries</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Carpets</Typography>
                        </Box>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal", marginTop: "5%" }}>Bath & Bed Linen</Typography>
                        <Box style={{ marginTop: "10px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Towels & Towel Sets</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bath Robes</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bathroom Accessories</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Shower Curtains</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bath Rugs</Typography>
                        </Box>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal", marginTop: "5%" }}>Home Décor</Typography>
                        <Box style={{ marginTop: "10px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Pooja Essentials</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Laptop Table</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Ottomans</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Artificial Flowers & Plants</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Candles & Candle Holders</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Clocks</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Planters & Garden Accessories</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Home Fragrances</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Mirrors</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Wall Art</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Wall Décor</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Wall Shelves</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Showpieces & Vases</Typography>
                        </Box>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal", marginTop: "5%" }}>Lamps & Lighting</Typography>
                        <Box style={{ marginTop: "10px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Floor Lamps</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Table Lamps</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Wall Lamp & String Lights</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bathroom Lights & Outdoor Lamps</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Ceiling Lamps</Typography>
                        </Box>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal", marginTop: "5%" }}>Kitchen & Table</Typography>
                        <Box style={{ marginTop: "10px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Dinnerware</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Cups & Mugs</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Water Bottles</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bakeware</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Trays & Serveware</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Bar & Drinkware</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Cookware & Kitchen Tools</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Kitchen Storage</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Table Covers & Furnishings</Typography>
                        </Box>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal", marginTop: "5%" }}>Storage & Organisers</Typography>
                        <Box style={{ marginTop: "10px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Organisers</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Hooks & Holders</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    Secound = () =>{
        return(
            <Box>
                <img src={HomePage} alt="gkhksd" style={{height:"194px", width:"1513px"}}/>
                <Box style={{display:"flex", marginLeft:"50px", gap:"20px"}}>
                    <img src={FirstPageimage} alt="jkhjghgc" style={{height:"457px", width:"432px",}}/>
                    <img src={Colorofseason} alt="jkhjghgc" style={{height:"457px", width:"432px",}}/>
                    <img src={BeautiofHome} alt="jkhjghgc" style={{height:"457px", width:"432px",}}/>
                </Box>
                <Box>
                    <img src={Mid} style={{height:"150px",width:"1182px", marginLeft:"50px"}}/>
                </Box>
                <Box style={{display:"flex", marginLeft:"50px", gap:"20px"}}>
                    <img src={FirstLogo} alt="fdsdsds" style={{height:"165.48px", width:"256px"}}/>
                    <img src={SecLogo} alt="fdsdsds" style={{height:"165.48px", width:"256px"}}/>
                    <img src={ThirdLogo} alt="fdsdsds" style={{height:"165.48px", width:"256px"}}/>
                    <img src={ForthLogo} alt="fdsdsds" style={{height:"165.48px", width:"256px"}}/>
                    <img src={FifthtLogo} alt="fdsdsds" style={{height:"165.48px", width:"256px"}}/>

                </Box>
            </Box>
        )
    }

    render() {
        return (
            <>
                <Navbar />
                <Box>{this.FirstPage()}</Box>
                <Box>{this.Secound()}</Box>
                <HomeFooter/>

            </>
        )
    }
}

export default Home;