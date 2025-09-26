import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Googleplay from "../component/assest/googleplay.png";
import Appstore from "../component/assest/appstore.png";
import ImageFooter from "../component/assest/footerimage.png";
import ImageFootersec from "../component/assest/footerimagesec.png";

class GetFooter extends Component {
    render() {
        return (
            <Box style={{ display: "flex", height: "auto", width: "1200px", backgroundColor: "", marginTop: "4%", marginLeft: "5%", marginRight: "5%", flexDirection: "column" }}>
                <Box style={{ display: "flex", flexDirection: "row", gap: "50px", marginLeft: "15%", marginTop: "2%", backgroundColor: "" }}>
                    <Box style={{ backgroundColor: "" }}>
                        <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto", color: "#3366CC" }}>ONLINE SHOPPING</Typography>
                        <Box style={{ backgroundColor: "", display: "flex", flexDirection: "column", marginTop: "10%" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Men</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Woman</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Kids</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Home</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Beauty</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Genz</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Gift Cards</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Myntra Insider</Typography>
                            <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto" }}>USEFUL LINKS</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Blog</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Careers</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>site Map</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Corporate Information</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Whitehat</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Cleartrip</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Myntra Global</Typography>
                            <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto" }}>POPULAR SEARCH</Typography>
                            <Box style={{ marginTop: "10px" }}>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto", backgroundColor: "" }}>CUSTOMER POLICIES</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", marginTop: "10%", backgroundColor: "" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Contact Us</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>FAQ</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>T & C</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Terms of Use</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Track Orders</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Shipping</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Cancellation</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Returns</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Privacy policy</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Grievance Redressal</Typography>
                        </Box>
                    </Box>

                    <Box style={{}}>
                        <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto", backgroundColor: "" }}>EXPERIENCE MYNTRA APP ON MOBILE</Typography>
                        <Box style={{ display: "flex", gap: "10%", marginTop: "9%" }}>
                            <img src={Googleplay} alt="gimage" style={{ height: "42px", width: "139px" }} />
                            <img src={Appstore} alt="appimage" style={{ height: "42px", width: "139px" }} />
                        </Box>
                        <Box style={{ display:"flex",marginTop: "10%", flexDirection:"column" }}>
                            <Box style={{ display: "flex", flexDirection: "column" }}>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>In case of any concerns contact us on</Typography>
                                <Typography style={{fontWeight:"bold"}}>+91-80-61561999</Typography>
                            </Box>
                            <Box style={{marginTop:"10%"}}>
                                <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto", backgroundColor: "" }}>KEEP IN TOUCH</Typography>
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", gap: "8px" }}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <YouTubeIcon />
                            <InstagramIcon />
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "white", height: "110px" }}>
                        <Box style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                            <Box>
                                <img src={ImageFooter} alt="image" style={{ height: "40px", width: "48px" }} />
                            </Box>
                            <Box style={{ display: "flex", flexDirection: "column", height: "41px", width: "250px" }}>
                                <Typography style={{ font: "16px" }}>100% ORIGINAL guarantee for</Typography>
                                <Typography>all products at myntra.com</Typography>

                            </Box>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                            <Box>
                                <img src={ImageFootersec} alt="image" style={{ height: "40px", width: "48px" }} />
                            </Box>
                            <Box style={{ display: "flex", flexDirection: "column", height: "41px", width: "250px" }}>
                                <Typography style={{ font: "16px" }}>100% ORIGINAL guarantee for</Typography>
                                <Typography>all products at myntra.com</Typography>

                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box style={{ height: "100px", width: "1000px", backgroundColor: "white", marginLeft: "15%", marginTop: "" }}>
                    <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
                        Adidas Shoes | Woodland Shoes |
                        Jewellery | Designers Sarees</Typography>
                </Box>
                <Box style={{ display: "flex", justifyContent: "space-between", marginLeft: "15%", }}>
                    <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>in case of any concern, Contact Us</Typography>
                    <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>© 2025 www.myntra.com. All rights reserved.</Typography>
                    <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>A Flipkart company</Typography>
                </Box>
            </Box>
        )
    }
}
export default GetFooter;