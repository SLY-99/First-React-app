import "../block4/block4.css";
import SafetyIcon from "../../Assets/images/icons/icon-shield.png";
import ConditionerIcon from "../../Assets/images/icons/icon-conditioner.png";
import FlowerIcon from "../../Assets/images/icons/icon-flower.png";
import CarIcon from "../../Assets/images/icons/icon-car.png";
import SofaIcon from "../../Assets/images/icons/icon-sofa.png";
import SwimmingIcon from "../../Assets/images/icons/icon-swimming.png";
import ImgBuilding from "../../Assets/images/img-block4.png";

function Privelege() {
    return (
<section className="privelege">
            <div className="container">
                <div className="privelege__text-box">
                    <h2 className="privelege__title">Property Featured</h2>
                    <p className="privelege__desc">Real estate is a crowded field. But with the number of buyers purchasing homes through real estate agents and brokers growing there’s plenty of </p>
                </div>
                <div className="privelege__wrapper">
                    <div className="privelege__miniwrapper">
                        <div className="privelege__box">
                            <img className="privelege__icon" src={SafetyIcon} alt=""/>
                            <h3 className="privelege__subtitle">100% Security</h3>
                            <p className="privelege__text">For many of us, buying a home is a dre and one not easily attainable.</p>
                        </div>
                        <div className="privelege__box">
                            <img className="privelege__icon" src={ConditionerIcon} alt=""/>
                            <h3 className="privelege__subtitle">Free air conditioner</h3>
                            <p className="privelege__text">For many of us, buying a home is a dre and one not easily attainable.</p>
                        </div>
                        <div className="privelege__box">
                            <img className="privelege__icon" src={FlowerIcon} alt=""/>
                            <h3 className="privelege__subtitle">Flower garden</h3>
                            <p className="privelege__text">For many of us, buying a home is a dre and one not easily attainable.</p>
                        </div>
                    </div>
                    <img className="privelege__img" src={ImgBuilding} alt=""/>
                    <div className="privelege__miniwrapper2">
                        <div className="privelege__box">
                            <img className="privelege__icon" src={CarIcon} alt=""/>
                            <h3 className="privelege__subtitle">Parkers & movers</h3>
                            <p className="privelege__text">For many of us, buying a home is a dre and one not easily attainable.</p>
                        </div>
                        <div className="privelege__box">
                            <img className="privelege__icon" src={SofaIcon}alt=""/>
                            <h3 className="privelege__subtitle">Rental furniture</h3>
                            <p className="privelege__text">For many of us, buying a home is a dre and one not easily attainable.</p>
                        </div>
                        <div className="privelege__box">
                            <img className="privelege__icon" src={SwimmingIcon} alt=""/>
                            <h3 className="privelege__subtitle">Swimming pool</h3>
                            <p className="privelege__text">For many of us, buying a home is a dre and one not easily attainable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Privelege;