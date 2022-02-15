import {Container, Col, Row} from "react-bootstrap/esm";
import "./profile.css";
import profile from '../../assets/profile/profile.png';
import cover from '../../assets/profile/coverImg.jpg';

// This will have the state through useReducer and it will supply to the sub components via props
const Profile = () => {
    return(
        <div className="profile_container">
            <Container className="tbl_cont">
                <Row className="row_cont cont_1">
                    {/* <Col sm>Profile Holder</Col> */}
                    <div className="prof_img_holder">
                        <div className="bgcover_holder">
                            <img className="cover_img" src={cover}></img>
                        </div>
                        <div className="image_holder">
                            <Row className="image_row">
                                <Col sm={4} className="img_col">
                                    <div className="img_holder">
                                        <img className="img_icon" src={profile}></img>
                                    </div>
                                    <div className="info_holder">
                                        <span className="ih_name">Sangeetha</span>
                                        <span className="ih_email">san@gmail.com</span>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Row>
                <Row className="row_cont cont_2">
                    <Col className="order_col meta_data" sm>Total Orders</Col>
                    <Col className="return_col meta_data" sm>Total returns</Col>
                    <Col className="wishlist_col meta_data" sm>Total Wishlist</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile;