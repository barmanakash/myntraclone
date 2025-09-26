import { Box, Button, Divider, Typography } from "@mui/material";
import React, { Component } from "react";
import Navbar from "./navbar";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GetFooter from "./getfooter";
class GetHelp extends Component {



    first = () => {
        return (
            <Box
                style={{
                    display: "flex",
                    height: "30vh",
                    width: "auto",
                    justifyContent: "center",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "1000px",
                        width: "1000px",
                        marginTop: "100px",
                        backgroundColor: "",
                    }}
                >

                    <Box style={{ display: "flex", gap: "260px" }}>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "",
                            gap: "7px",
                            height: "50px",
                            marginTop: "18px",
                            marginLeft: "10px",
                        }}>
                            <Typography style={{ fontSize: "20px", fontFamily: "", fontWeight: "700", color: "#282c3f", height: "20px", width: "150px", backgroundColor: "" }}>HELP CENTER</Typography>
                            <Typography style={{ fontSize: "14px", fontFamily: "", color: "#696b79" }}>we are here to help you</Typography>
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "20px",
                                padding: "10px",
                            }}
                        >
                            <Box
                                style={{
                                    height: "50px",
                                    width: "500px",
                                    marginLeft: "20px",
                                    border: "1px solid #A8A9B1",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    padding: "8px",
                                    backgroundColor: "",
                                }}
                            >
                                <WorkOutlineIcon style={{ height: "50px", width: "50px" }} />

                                <Box style={{ display: "flex", flexDirection: "column", gap: "-2px", width: "340px", backgroundColor: "" }}>
                                    <Typography
                                        style={{
                                            fontSize: "12px",
                                            color: "#696b79",
                                            fontWeight: "700",
                                        }}
                                    >
                                        TRACK, CANCEL, RETURN/EXCHANGE
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: "14px",
                                            fontFamily: "Assistant",
                                            color: "#696b79",
                                        }}
                                    >
                                        Manage your purchases
                                    </Typography>
                                </Box>

                                <Box>
                                    <Button
                                        style={{
                                            color: "#14CDA8",
                                            border: "1px solid #14CDA8",
                                            height: "40px",
                                            width: "92px",
                                            fontSize: "12px",
                                            textAlign: "center",
                                            padding: "12px 24px",
                                            borderRadius: "4px",
                                            background: "white",
                                        }}
                                    >
                                        ORDERS
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Divider />
                    {/* <Box>
                        <Typography>lkhjgfhjkl;'</Typography>
                    </Box> */}
                </Box>
            </Box>

        )
    }

    secoundpage = () => {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "100vh", // full viewport height
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        height: "70vh",
                        width: "1000px",
                        backgroundColor: "",
                    }}
                >
                    <Box style={{display:"flex", height:"528px", width:"300px", backgroundColor:"", flexDirection:"column", marginLeft:"5px"}}>
                        <Typography style={{color: "#282c3f", fontWeight:"700",fontSize:"12px", marginBottom:"16px"}}>SELECT QUERY TYPE</Typography>
                        <Box style={{ display:"flex"}}>
                            <Typography style={{color: "#696b79", fontWeight:"700",fontSize:"14px",marginBottom:"20px",width:"250px"}}>Order Related queries</Typography>
                            <Typography style={{fontSize:"22px",lineHeight:"1", color:"#94969F"}}>&gt;</Typography>
                        </Box>
                        <Box style={{ display:"flex"}}>
                            <Typography style={{color: "#696b79", fontWeight:"700",fontSize:"14px",marginBottom:"20px",width:"250px"}}>Non-order related issues</Typography>
                            <Typography style={{fontSize:"22px",lineHeight:"1",color:"#94969F"}}>&gt;</Typography>
                        </Box>
                        <Box style={{ display:"flex"}}>
                            <Typography style={{color: "#696b79", fontWeight:"700",fontSize:"14px", marginBottom:"40px", width:"250px"}}>Recent issues</Typography>
                            <Typography style={{fontSize:"22px", lineHeight:"1",color:"#94969F"}}>&gt;</Typography>
                        </Box>
                        <Divider/>
                         <Box style={{ display:"flex"}}>
                            <Typography style={{color: "#696b79", fontWeight:"700",fontSize:"14px", marginTop:"20px",width:"250px"}}>Frequently asked questions</Typography>
                             <Typography style={{fontSize:"22px",marginTop:"16px",color:"#94969F"}}>&gt;</Typography>
                        </Box>
                        <Box style={{ display:"flex", flexDirection:"column", gap:"", marginTop:"60%"}}>
                            <Typography style={{color: "#696b79", fontWeight:"700",fontSize:"14px"}}>Want to reach us old style? Here is our</Typography>
                            <Typography style={{color:"#526cd0", fontSize:"14px",}}>postal address</Typography>
                        </Box>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", width:"1px", height:"500px", backgroundColor:"#EAEAEC", marginLeft:"20px"}}>
                    </Box>
                    <Box>2</Box>
                </Box>
            </Box>

        )
    }
    render() {
        return (
            <>
                <Navbar />
                <Box>{this.first()}</Box>
                <Box>{this.secoundpage()}</Box>
                <GetFooter/>
            </>
        )
    }
}


export default GetHelp;