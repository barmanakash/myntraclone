import { Box, Button, Divider, Popper, Typography } from '@mui/material';
import React, { Component } from 'react'
import MyntraIcon from './assest/iconmyntra.jpg';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import { withNavigation } from "./NavigateHOC";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openPopper: null,
        };
        this.menRef = React.createRef();
        this.womenRef = React.createRef();
        this.kidsRef = React.createRef();
        this.prfileRef = React.createRef();
        this.homeRef = React.createRef();
        this.beautyRef = React.createRef();
        this.genzRef = React.createRef();
        this.closeTimer = null;
    }

    scheduleClose = () => {
        if (this.closeTimer) clearTimeout(this.closeTimer);
        this.closeTimer = setTimeout(() => {
            this.setState({ openPopper: null });
            this.closeTimer = null;
        }, 120);
    };

    cancelScheduledClose = () => {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    };

    componentWillUnmount() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
    openPopper = (which) => {
        this.cancelScheduledClose();
        this.setState({ openPopper: which });
    };

    handleNavigate = (screenName) => {
        this.props.navigate(screenName);
    };
    render() {
        const { openPopper } = this.state;

        return (
            <>
                <Box
                    style={{
                        display: "flex",
                        height: "80px",
                        width: "1520px",
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 12px 0 rgba(0, 0, 0, .05)",
                        position: "fixed"
                    }}
                >
                    <Box style={{ display: "flex", cursor: "pointer", padding: "27px", gap: "80px" }}>
                        <img src={MyntraIcon} alt="icon"
                            onClick={() => this.handleNavigate("/")}
                            style={{ height: "36px", width: "53px", padding: "" }} />
                        <Box style={{ display: "flex", gap: "40px", marginLeft: "10px", marginTop: "10px", marginLeft: "" }}>
                            <Box style={{ display: "flex", gap: "40px", marginTop: "" }}>
                                <Typography
                                    ref={this.menRef}
                                    onMouseEnter={() => this.openPopper("men")}
                                    onMouseLeave={this.scheduleClose}
                                    style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "", lineHeight: "normal", fontWeight: "700" }}
                                >
                                    MEN
                                </Typography>
                                <Typography
                                    ref={this.womenRef}
                                    onMouseEnter={() => this.openPopper("women")}
                                    onMouseLeave={this.scheduleClose}
                                    style={{
                                        color: "#696b79",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        paddingBottom: "5px",
                                        display: "inline-block",
                                    }}
                                >
                                    WOMEN
                                </Typography>
                                <Typography
                                    ref={this.kidsRef}
                                    onMouseEnter={() => this.openPopper("kids")}
                                    onMouseLeave={this.scheduleClose}
                                    onClick={() => this.handleNavigate("/kids")}
                                    style={{
                                        color: "#696b79",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        paddingBottom: "5px",
                                        display: "inline-block",
                                    }}
                                >
                                    KIDS
                                </Typography>

                                <Typography
                                    ref={this.homeRef}
                                    onMouseEnter={() => this.openPopper("home")}
                                    onMouseLeave={this.scheduleClose}
                                    onClick={() => this.handleNavigate("/home")}
                                    style={{
                                        color: "#696b79",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        paddingBottom: "5px",
                                        display: "inline-block",

                                    }}
                                >
                                    HOME
                                </Typography>

                                <Typography
                                    ref={this.beautyRef}
                                    onMouseEnter={() => this.openPopper("beauty")}
                                    onMouseLeave={this.scheduleClose}
                                    style={{
                                        color: "#696b79",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        paddingBottom: "5px",
                                        display: "inline-block",

                                    }}
                                >
                                    BEAUTY
                                </Typography>

                                <Typography
                                    ref={this.genzRef}
                                    onMouseEnter={() => this.openPopper("genz")}
                                    onMouseLeave={this.scheduleClose}
                                    style={{
                                        color: "#696b79",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        paddingBottom: "5px",
                                        display: "inline-block",

                                    }}
                                >
                                    GENZ
                                </Typography>


                                <Popper
                                    open={openPopper === "women"}
                                    anchorEl={this.womenRef.current}
                                    placement="bottom-start"
                                >
                                    <Box
                                        onMouseEnter={this.cancelScheduledClose}
                                        onMouseLeave={this.scheduleClose}
                                        style={{
                                            display: "flex",
                                            marginTop: "27px",
                                            height: "450px",
                                            width: "1080px",
                                            boxShadow: 3,
                                            backgroundColor: "white"
                                        }}
                                    >
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700" }}>Topwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Blazers & Coat</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Suits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rain Jackets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Indian and Festive Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Kurtas & kurt sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>sherwanis</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Nehru Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Dhotis</Typography>
                                            </Box>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700" }}>Bottomwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jeans</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Shorts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Track Pants & Joggers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>InnerWear & sleepwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Briefs & Trunks</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Boxers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Vests</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sleepwear & Longwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Thermals</Typography>
                                            </Box>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700" }}>Footwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sneakers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sandals & Floaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Flip Flops</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Socks</Typography>
                                            </Box>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Personal Care & Grooming</Typography>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Sunglasses & Frames</Typography>
                                            <Typography style={{ color: "#FB56C1", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Watches</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Sports & Active Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Sandals</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Active T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Tracksuits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets & Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Accessories</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Swimwear</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Gadgets</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Smart Wearables</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Fitness Gadgets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Headphones</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Speakers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Fashion Accessories</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Wallets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Belts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Perfumes & Body Mists</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Trimmers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Deodorants</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Ties, Cufflinks & Pocket Squares</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Accessory Gift Sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Caps & Hats</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}> Mufflers, Scarves & Gloves</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Phone Cases</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rings & Wristwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Helmets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Bags & Backpacks</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Luggages & Trolleys</Typography>
                                        </Box>
                                    </Box>
                                </Popper>

                                <Popper
                                    open={openPopper === "kids"}
                                    anchorEl={this.kidsRef.current}
                                    placement="bottom-start"
                                >
                                    <Box
                                        onMouseEnter={this.cancelScheduledClose}
                                        onMouseLeave={this.scheduleClose}
                                        style={{
                                            display: "flex",
                                            bgcolor: "white",
                                            marginTop: "27px",
                                            height: "450px",
                                            width: "1080px",
                                            boxShadow: 3,
                                            backgroundColor: "white"
                                        }}
                                    >
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Topwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Blazers & Coat</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Suits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rain Jackets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Indian and Festive Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Kurtas & kurt sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>sherwanis</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Nehru Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Dhotis</Typography>
                                            </Box>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Bottomwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jeans</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Shorts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Track Pants & Joggers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>InnerWear & sleepwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Briefs & Trunks</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Boxers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Vests</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sleepwear & Longwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Thermals</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Footwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sneakers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sandals & Floaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Flip Flops</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Socks</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Personal Care & Grooming</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Sunglasses & Frames</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Watches</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Sports & Active Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Sandals</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Active T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Tracksuits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets & Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Accessories</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Swimwear</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Gadgets</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Smart Wearables</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Fitness Gadgets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Headphones</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Speakers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Fashion Accessories</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Wallets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Belts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Perfumes & Body Mists</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Trimmers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Deodorants</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Ties, Cufflinks & Pocket Squares</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Accessory Gift Sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Caps & Hats</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}> Mufflers, Scarves & Gloves</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Phone Cases</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rings & Wristwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Helmets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Bags & Backpacks</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Luggages & Trolleys</Typography>
                                        </Box>
                                    </Box>
                                </Popper>

                                <Popper
                                    open={openPopper === "men"}
                                    anchorEl={this.menRef.current}
                                    placement="bottom-start"
                                >
                                    <Box
                                        onMouseEnter={this.cancelScheduledClose}
                                        onMouseLeave={this.scheduleClose}
                                        style={{
                                            display: "flex",
                                            bgcolor: "white",
                                            marginTop: "27px",
                                            height: "450px",
                                            width: "1080px",
                                            boxShadow: 3,
                                            backgroundColor: "white"
                                        }}
                                    >
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Topwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Blazers & Coat</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Suits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rain Jackets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Indian and Festive Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Kurtas & kurt sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>sherwanis</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Nehru Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Dhotis</Typography>
                                            </Box>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Bottomwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jeans</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Shorts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Track Pants & Joggers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>InnerWear & sleepwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Briefs & Trunks</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Boxers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Vests</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sleepwear & Longwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Thermals</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Footwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sneakers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sandals & Floaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Flip Flops</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Socks</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Personal Care & Grooming</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Sunglasses & Frames</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Watches</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Sports & Active Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Sandals</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Active T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Tracksuits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets & Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Accessories</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Swimwear</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Gadgets</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Smart Wearables</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Fitness Gadgets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Headphones</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Speakers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Fashion Accessories</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Wallets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Belts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Perfumes & Body Mists</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Trimmers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Deodorants</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Ties, Cufflinks & Pocket Squares</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Accessory Gift Sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Caps & Hats</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}> Mufflers, Scarves & Gloves</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Phone Cases</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rings & Wristwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Helmets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Bags & Backpacks</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Luggages & Trolleys</Typography>
                                        </Box>
                                    </Box>
                                </Popper>

                                <Popper
                                    open={openPopper === "home"}
                                    anchorEl={this.homeRef.current}
                                    placement="bottom-start"
                                >
                                    <Box
                                        onMouseEnter={this.cancelScheduledClose}
                                        onMouseLeave={this.scheduleClose}
                                        style={{
                                            display: "flex",
                                            marginTop: "27px",
                                            height: "450px",
                                            width: "1080px",
                                            boxShadow: 3,
                                            backgroundColor: "white",
                                            position: "absolute",
                                            right: "-900px",

                                        }}
                                    >
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#F2C210", fontSize: "", fontWeight: "700" }}>Topwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Blazers & Coat</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Suits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rain Jackets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Indian and Festive Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Kurtas & kurt sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>sherwanis</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Nehru Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Dhotis</Typography>
                                            </Box>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Bottomwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jeans</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Shorts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Track Pants & Joggers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>InnerWear & sleepwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Briefs & Trunks</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Boxers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Vests</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sleepwear & Longwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Thermals</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Footwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sneakers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sandals & Floaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Flip Flops</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Socks</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Personal Care & Grooming</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Sunglasses & Frames</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Watches</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Sports & Active Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Sandals</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Active T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Tracksuits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets & Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Accessories</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Swimwear</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Gadgets</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Smart Wearables</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Fitness Gadgets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Headphones</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Speakers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Fashion Accessories</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Wallets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Belts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Perfumes & Body Mists</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Trimmers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Deodorants</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Ties, Cufflinks & Pocket Squares</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Accessory Gift Sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Caps & Hats</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}> Mufflers, Scarves & Gloves</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Phone Cases</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rings & Wristwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Helmets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Bags & Backpacks</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Luggages & Trolleys</Typography>
                                        </Box>
                                    </Box>
                                </Popper>

                                <Popper
                                    open={openPopper === "beauty"}
                                    anchorEl={this.beautyRef.current}
                                    placement="bottom-start"
                                >
                                    <Box
                                        onMouseEnter={this.cancelScheduledClose}
                                        onMouseLeave={this.scheduleClose}
                                        style={{
                                            display: "flex",
                                            marginTop: "27px",
                                            height: "450px",
                                            width: "1080px",
                                            boxShadow: 3,
                                            backgroundColor: "white",
                                            position: "absolute",
                                            right: "-900px",

                                        }}
                                    >
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#0DB7AF", fontSize: "", fontWeight: "700" }}>Topwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Blazers & Coat</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Suits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rain Jackets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Indian and Festive Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Kurtas & kurt sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>sherwanis</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Nehru Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Dhotis</Typography>
                                            </Box>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Bottomwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jeans</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Shorts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Track Pants & Joggers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>InnerWear & sleepwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Briefs & Trunks</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Boxers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Vests</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sleepwear & Longwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Thermals</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Footwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sneakers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sandals & Floaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Flip Flops</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Socks</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Personal Care & Grooming</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Sunglasses & Frames</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Watches</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Sports & Active Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Sandals</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Active T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Tracksuits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets & Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Accessories</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Swimwear</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Gadgets</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Smart Wearables</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Fitness Gadgets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Headphones</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Speakers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Fashion Accessories</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Wallets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Belts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Perfumes & Body Mists</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Trimmers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Deodorants</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Ties, Cufflinks & Pocket Squares</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Accessory Gift Sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Caps & Hats</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}> Mufflers, Scarves & Gloves</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Phone Cases</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rings & Wristwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Helmets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Bags & Backpacks</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Luggages & Trolleys</Typography>
                                        </Box>
                                    </Box>
                                </Popper>

                                <Popper
                                    open={openPopper === "genz"}
                                    anchorEl={this.genzRef.current}
                                    placement="bottom-start"
                                >
                                    <Box
                                        onMouseEnter={this.cancelScheduledClose}
                                        onMouseLeave={this.scheduleClose}
                                        style={{
                                            display: "flex",
                                            marginTop: "27px",
                                            height: "450px",
                                            width: "1080px",
                                            boxShadow: 3,
                                            backgroundColor: "white",
                                            position: "absolute",
                                            right: "-700px",

                                        }}
                                    >
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#0DB7AF", fontSize: "", fontWeight: "700" }}>Topwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sweaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Blazers & Coat</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Suits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rain Jackets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Indian and Festive Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Kurtas & kurt sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>sherwanis</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Nehru Jackets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Dhotis</Typography>
                                            </Box>

                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Bottomwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jeans</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Trousers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Shorts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Track Pants & Joggers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>InnerWear & sleepwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Briefs & Trunks</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Boxers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Vests</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sleepwear & Longwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Thermals</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Footwear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Casual Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Formal Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sneakers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sandals & Floaters</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Flip Flops</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Socks</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Personal Care & Grooming</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Sunglasses & Frames</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Watches</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Sports & Active Wear</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Shoes</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Sandals</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Active T-shirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Tracksuits</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Jackets & Sweatshirts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Sports Accessories</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Swimwear</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Gadgets</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Smart Wearables</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Fitness Gadgets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Headphones</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Speakers</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Plus size</Typography>
                                        </Box>
                                        <Box style={{ height: "400px", width: "216px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700" }}>Fashion Accessories</Typography>
                                            <Box style={{ paddingTop: "10px", }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Wallets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Belts</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Perfumes & Body Mists</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Trimmers</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Deodorants</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Ties, Cufflinks & Pocket Squares</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Accessory Gift Sets</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Caps & Hats</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}> Mufflers, Scarves & Gloves</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Phone Cases</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Rings & Wristwear</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Helmets</Typography>
                                            </Box>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Bags & Backpacks</Typography>
                                            <Typography style={{ color: "#ff3f6cff", fontSize: "", fontWeight: "700", paddingTop: "10px" }}>Luggages & Trolleys</Typography>
                                        </Box>
                                    </Box>
                                </Popper>
                            </Box>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>STUDIO</Typography>
                        </Box>
                        <Box style={{ position: "relative", display: "inline-block" }}>
                            <SearchIcon
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "10px",
                                    transform: "translateY(-50%)",
                                    color: "#888",
                                    paddingTop: "15px"
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search for products, brands and more"
                                style={{
                                    height: "36px",
                                    width: "400px",
                                    borderRadius: "2px",
                                    border: "1px solid #e0e0e0",
                                    paddingLeft: "40px",
                                    outline: "none"
                                }}
                            />
                        </Box>

                        <Box style={{ display: "flex", gap: "30px" }}>
                            <Box>
                                <PermIdentityIcon />
                                <Typography
                                    ref={this.prfileRef}
                                    onMouseEnter={() => this.openPopper("profile")}
                                    onMouseLeave={this.scheduleClose}
                                    style={{ color: "#696b79", display: "block", fontSize: "12px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700", marginLeft: "-4px" }}>Profile</Typography>
                                <Popper
                                    open={openPopper === "profile"}
                                    anchorEl={this.prfileRef.current}
                                    placement="bottom-start"
                                >
                                    <Box
                                        onMouseEnter={this.cancelScheduledClose}
                                        onMouseLeave={this.scheduleClose}
                                        style={{
                                            display: "flex",
                                            marginTop: "4px",
                                            height: "450px",
                                            width: "300px",
                                            boxShadow: 3,
                                            marginLeft: "40%",
                                            backgroundColor: "white"
                                        }}
                                    >
                                        <Box style={{ height: "400px", width: "300px", backgroundColor: "", paddingLeft: "25px", paddingTop: "10px" }}>
                                            <Typography style={{ color: "", fontSize: "", fontWeight: "700" }}>Welcome</Typography>
                                            <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>To access acount and manage orders</Typography>
                                            <Button
                                                onClick={() => this.handleNavigate("/login")}
                                                style={{ color: "#ff3f6cff", border: "0.5px solid gray", backgroundColor: "white", fontWeight: "bold", marginTop: "20px" }}>LOGIN & SIGNUP</Button>
                                            <Divider style={{ paddingTop: "10px" }} />
                                            <Box style={{ paddingTop: "10px", }}>
                                            </Box>
                                            <Box style={{ display: "flex", flexDirection: "column", paddingTop: "10px", gap: "5px" }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Orders</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Wishlist</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Gift Cards</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Contact Us</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Myntra Insider</Typography>
                                            </Box>
                                            <Divider style={{ paddingTop: "10px" }} />
                                            <Box style={{ display: "flex", flexDirection: "column", paddingTop: "10px", gap: "5px" }}>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Myntra Credit</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>coupons</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Saved Cards</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Saved VPA</Typography>
                                                <Typography style={{ color: "#535766", fontSize: "14px", fontWeight: "400", cursor: "pointer" }}>Saved Address</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Popper>
                            </Box>
                            <Box>
                                <FavoriteBorderIcon />
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "12px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700", marginLeft: "-8px" }}>Wishlist</Typography>
                            </Box><Box>
                                <WorkOutlineIcon />
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "12px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>Bag</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        )
    }
}

export default withNavigation(Navbar);