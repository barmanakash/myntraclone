import React, { Component } from "react";
import Myimg from "../component/assest/akash_photo1.jpeg"
import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import ImageFooter from "../component/assest/footerimage.png"
import ImageFootersec from "../component/assest/footerimagesec.png"
import Googleplay from "../component/assest/googleplay.png"
import Appstore from "../component/assest/appstore.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Middilepart from "./middilepar";
import Middilepart from "./middilepar";
import Navbar from "./navbar";
import TopImage from "./assest/topone.jpg"
import RanveerMyntra from "./assest/ranveermyntra.jpg"
import Myntragif from "./assest/myntragif.gif"
import First from "./assest/first.jpg"
import Second from "./assest/secund.jpg"
import Third from "./assest/thirdmyntra.jpg"

class Practice extends Component {
    render() {
        const akash = () => {
            const value = {
                age: 24,
                name: "Akash Barman",
                city: "jabalpur",
                state: "Madhya Pradesh",
                country: "india",
                pinCode: 482021,
                mobileNumber: 6261081914,
                image: Myimg
            }
            return (
                <>
                    <Box>
                        <Box>
                            <img src={TopImage} alt="toponeimage" style={{height:"120px", width:"1350px",paddingTop:"80px"}}/>
                        </Box>
                        <Box>
                            <img src={RanveerMyntra} alt="ranveerimage" style={{height:"auto", width:"1450px", paddingLeft:"30px",}}/>
                        </Box>
                        <Box style={{display:"flex", height:"120px", width:"1450px", backgroundColor:"", marginLeft:"30px",marginBottom :"" }}>
                            <img src={First} alt="imgfirst" style={{height:"", width:"483.3px"}}/>
                            <img src={Second} alt="secimage" style={{height:"", width:"483.3px"}}/>
                            <img src={Third} alt="thirdimage" style={{height:"", width:"483.3px"}}/>
                        </Box>

                        {/* <Box>
                            <img src={Myntragif} alt="toponeimage" style={{height:"120px", width:"1450px",paddingLeft:"30px" }}/>
                        </Box>
                        <Typography>Web - App</Typography> */}
                        {/* <Typography>{JSON.stringify(value)}</Typography> */}
                        {/* <Box>
                            <img src={value.image} alt={value.age} style={{ display: "flex", justifyContent: "end", alignContent: "center", borderRadius: "100px" }} />
                            <Typography>{value.name}</Typography>

                        </Box> */}
                    </Box>

                </>

            );
        }

        const adition = () => {
            return (
                <>
                    {/* <Box>
                        <Typography style={{ font: "inherit", fontFamily: "sans-serif" }}>Software Engineer with 2 years of experience, including 9 months in front-end development (React.js, JavaScript, HTML, CSS, MUI) and 15 months in mainframe development (z/TPF, Assembler, SabreTalk). Skilled in building responsive web applications, integrating RESTful APIs, and improving system efficiency. Strong problem-solving abilities and experience collaborating with cross-functional teams to deliver high-quality solutions</Typography>
                    </Box> */}
                </>
            )
        }

        const page = () => {
            return (
                <></>
                // <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                //     <Box style={{ height: "275px", width: "475px", backgroundColor: "#ff00a1", borderRadius: "20px" }}></Box>
                //     <Box style={{ height: "275px", width: "475px", backgroundColor: "#ff00a1", borderRadius: "20px" }}></Box>
                //     <Box style={{ height: "275px", width: "475px", backgroundColor: "#ff00a1", borderRadius: "20px" }}></Box>
                // </Box>
            )
        }

        const footer = () => {
            return (
                <Box style={{ display: "flex", height: "auto", width: "auto", backgroundColor: "", marginTop: "4%", marginLeft: "5%", marginRight: "5%", flexDirection: "column" }}>
                    <Box style={{ display: "flex", flexDirection: "row", gap: "110px", marginLeft: "5%", marginTop: "2%", backgroundColor: "" }}>
                        <Box style={{ backgroundColor: "" }}>
                            <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto" }}>ONLINE SHOPPING</Typography>
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
                            <Box style={{ display: "flex", flexDirection: "column", marginTop: "10%" }}>
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
                            <Box style={{ marginTop: "10%" }}>
                                <Typography style={{ fontSize: "12px", fontWeight: "700", fontFamily: "roboto", backgroundColor: "" }}>KEEP IN TOUCH</Typography>
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
                    <Box style={{ height: "100px", width: "100", backgroundColor: "white", marginLeft: "5%", marginTop: "" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
                            Adidas Shoes | Woodland Shoes |
                            Jewellery | Designers Sarees</Typography>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-between", marginLeft: "5%" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>in case of any concern, Contact Us</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>© 2025 www.myntra.com. All rights reserved.</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", cursor: "pointer", paddingBottom: "5px", lineHeight: "normal" }}>A Flipkart company</Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%" }}>
                        <Typography style={{ fontSize: "15px", fontWeight: "700", fontFamily: "roboto" }}>Registered Office Address</Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Buildings Alyssa,</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Begonia and Clover situated in Embassy Tech Village,</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Outer Ring Road,</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Devarabeesanahalli Village,</Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", gap: "500px" }}>
                        <Box>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Buildings Alyssa,</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Begonia and Clover situated in Embassy Tech Village,</Typography>
                        </Box>
                        <Box>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>CIN: U72300KA2007PTC041799</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Telephone: +91-80-61561999</Typography>

                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "3%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>ONLINE SHOPPING MADE EASY AT MYNTRA</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</Typography>

                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "3%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", paddingBottom: "5px", lineHeight: "normal" }}>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "", flexDirection: "column", backgroundColor: "", marginTop: "1%", gap: "20px" }}>
                        <Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>1.</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Smart men’s clothing -</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your
                                </Typography>
                            </Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>2.</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Trendy women’s clothing -</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look                                </Typography>
                            </Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>3.</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Fashionable footwear -</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for                                </Typography>
                            </Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>4.</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Stylish accessories -</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches                                </Typography>
                            </Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>5.</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Fun and frolic -</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips.                                </Typography>
                            </Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>6.</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Beauty begins here  -</Typography>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care                                </Typography>
                            </Box>
                            <Box style={{ display: "flex", marginLeft: "7%", padding: "0" }}>
                                <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>
                                    attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>AFFORDABLE FASHION AT YOUR FINGERTIPS</Typography>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>MYNTRA INSIDER</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</Typography>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>Insider</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <ul >
                                <li style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</li>
                                <li style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal", marginTop: "5px" }}>Curated collections from celeb stylists.</li>
                            </ul>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>Elite</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <ul >
                                <li style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</li>
                                <li style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal", marginTop: "5px" }}>Exclusive early access to Limited Edition products.</li>
                            </ul>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>Icon</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <ul >
                                <li style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Chance to get on guest lists for special events.</li>
                            </ul>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</Typography>
                        </Box>
                    </Box>
                    <Box style={{ marginTop: "1.5%" }}>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0" }}>
                            <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>1.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Keep Up With What Your Favourite Fashion Icons Are Upto</Typography>
                        </Box>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0", flexDirection: "column", gap: "10px", marginTop: "1%" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world</Typography>
                        </Box>
                    </Box>
                    <Box style={{ marginTop: "1.5%" }}>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0" }}>
                            <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>2.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Quick Fashion Tip And Tricks</Typography>
                        </Box>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0", flexDirection: "column", gap: "10px", marginTop: "1%" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</Typography>
                        </Box>
                    </Box>
                    <Box style={{ marginTop: "1.5%" }}>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0" }}>
                            <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>3.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Updates on What Is Trending and New Product Launches</Typography>
                        </Box>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0", flexDirection: "column", gap: "10px", marginTop: "1%" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</Typography>
                        </Box>
                    </Box>
                    <Box style={{ marginTop: "1.5%" }}>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0" }}>
                            <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>4.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Explicit Step-By-Step Beauty Routines From Experts</Typography>
                        </Box>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0", flexDirection: "column", gap: "10px", marginTop: "1%" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.</Typography>
                        </Box>
                    </Box>
                    <Box style={{ marginTop: "1.5%" }}>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0" }}>
                            <Typography style={{ color: "#696b79", display: "block", lineHeight: "normal" }}>5.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", lineHeight: "normal", fontWeight: "700" }}>Celebrity Confessions And A Look Into Their Lives</Typography>
                        </Box>
                        <Box style={{ display: "flex", marginLeft: "10%", padding: "0", flexDirection: "column", gap: "10px", marginTop: "1%" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</Typography>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>MYNTRA APP</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</Typography>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>HISTORY OF MYNTRA</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</Typography>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "5%", marginTop: "2%", flexDirection: "column" }}>
                        <Typography style={{ color: "#696b79", display: "block", fontSize: "14px", paddingBottom: "5px", lineHeight: "normal", fontWeight: "700" }}>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</Typography>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.</Typography>
                            <Typography style={{ color: "#696b79", display: "block", fontSize: "15px", lineHeight: "normal" }}>Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</Typography>
                        </Box>
                    </Box>
                </Box>
            )
        }
        return (
            <>
                <Navbar/>    
                <Box>{akash()}</Box>
                <Box>{adition()}</Box>
                <Box>{page()}</Box>
                <Middilepart/>
                <Box>{footer()}</Box>

            </>

        )
    }
}

export default Practice;