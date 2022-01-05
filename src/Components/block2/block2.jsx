import "../block2/block2.css";
import Biotech from "../../Assets/images/partner-biotech.png";
import Express from "../../Assets/images/partner-express.png";
import Smilehome from "../../Assets/images/partner-smilehome.png";
import Connect from "../../Assets/images/partner-connect.png";
import Homebuild from "../../Assets/images/partner-homebuild.png";

function Partners() {
    return (
        <section className="partners">
            <div className="container">
                <h2 className="partners__title">Our Partners</h2>
                <div className="partners__wrapper">
                    <img src={Biotech} alt="biotech"/>
                    <img src={Express} alt="express"/>
                    <img src={Smilehome} alt="smilehome"/>
                    <img src={Connect} alt="connect"/>
                    <img src={Homebuild} alt="homebuild"/>
                </div>
            </div>
        </section>
    )
}

export default Partners;