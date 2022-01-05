import "../block3/block3.css";
import Img1 from "../../Assets/images/img1.png";
import Img2 from "../../Assets/images/img2.png";
import Img3 from "../../Assets/images/img3.png";
import Img4 from "../../Assets/images/img4.png";
import Img5 from "../../Assets/images/img5.png";
import Img6 from "../../Assets/images/img6.png";

function Properties() {
    return (
<section className="properties">
            <div className="container">
                <div className="properties__title-wrapper">
                    <h2 className="properties__title">Popular Properties</h2>
                    <p className="properties__text">view all</p>
                </div>
                <div className="properties__wrapper">
                    <div className="properties__box">
                        <img className="properties__img" src={Img1} alt=""/>
                        <ul className="properties__list">
                            <li className="properties__item">
                                <h3 className="properties__name">Capital hill residence</h3>
                                <i className="properties__icon-red fas fa-heart"></i>
                            </li>
                            <li className="properties__item">East London</li>
                            <li className="properties__item">
                                <ul className="properties__list2">
                                    <li className="properties__rooms">6</li>
                                    <li className="properties__rooms">2</li>
                                    <li className="properties__rooms">3</li>
                                </ul>
                            </li>
                            <li className="properties__item">
                                <p className="properties__price">$5527.00</p>
                                <a className="properties__link" href="#">View Details</a>
                            </li>
                        </ul>
                    </div>

                    <div className="properties__box">
                        <img className="properties__img" src={Img2} alt=""/>
                        <ul className="properties__list">
                            <li className="properties__item">
                                <h3 className="properties__name">Picket Fence Realty</h3>
                                <i className="properties__icon fas fa-heart"></i>
                            </li>
                            <li className="properties__item">East London</li>
                            <li className="properties__item">
                                <ul className="properties__list2">
                                    <li className="properties__rooms">6</li>
                                    <li className="properties__rooms">2</li>
                                    <li className="properties__rooms">3</li>
                                </ul>
                            </li>
                            <li className="properties__item">
                                <p className="properties__price">$6727.00</p>
                                <a className="properties__link" href="#">View Details</a>
                            </li>
                        </ul>
                    </div>

                    <div className="properties__box">
                        <img className="properties__img" src={Img3} alt=""/>
                        <ul className="properties__list">
                            <li className="properties__item">
                                <h3 className="properties__name">Banyon Tree Realty</h3>
                                <i className="properties__icon-red fas fa-heart"></i>
                            </li>
                            <li className="properties__item">East London</li>
                            <li className="properties__item">
                                <ul className="properties__list2">
                                    <li className="properties__rooms">6</li>
                                    <li className="properties__rooms">2</li>
                                    <li className="properties__rooms">3</li>
                                </ul>
                            </li>
                            <li className="properties__item">
                                <p className="properties__price">$4327.00</p>
                                <a className="properties__link" href="#">View Details</a>
                            </li>
                        </ul>
                    </div>

                    <div className="properties__box">
                        <img className="properties__img" src={Img4} alt=""/>
                        <ul className="properties__list">
                            <li className="properties__item">
                                <h3 className="properties__name">Corsair Real Estate</h3>
                                <i className="properties__icon fas fa-heart"></i>
                            </li>
                            <li className="properties__item">East London</li>
                            <li className="properties__item">
                                <ul className="properties__list2">
                                    <li className="properties__rooms">6</li>
                                    <li className="properties__rooms">2</li>
                                    <li className="properties__rooms">3</li>
                                </ul>
                            </li>
                            <li className="properties__item">
                                <p className="properties__price">$4427.00</p>
                                <a className="properties__link" href="#">View Details</a>
                            </li>
                        </ul>
                    </div>

                    <div className="properties__box">
                        <img className="properties__img" src={Img5} alt=""/>
                        <ul className="properties__list">
                            <li className="properties__item">
                                <h3 className="properties__name">Sequoia Real Estate</h3>
                                <i className="properties__icon-red fas fa-heart"></i>
                            </li>
                            <li className="properties__item">East London</li>
                            <li className="properties__item">
                                <ul className="properties__list2">
                                    <li className="properties__rooms">6</li>
                                    <li className="properties__rooms">2</li>
                                    <li className="properties__rooms">3</li>
                                </ul>
                            </li>
                            <li className="properties__item">
                                <p className="properties__price">$4527.00</p>
                                <a className="properties__link" href="#">View Details</a>
                            </li>
                        </ul>
                    </div>

                    <div className="properties__box">
                        <img className="properties__img" src={Img6} alt=""/>
                        <ul className="properties__list">
                            <li className="properties__item">
                                <h3 className="properties__name">Strive Partners Realty</h3>
                                <i className="properties__icon fas fa-heart"></i>
                            </li>
                            <li className="properties__item">East London</li>
                            <li className="properties__item">
                                <ul className="properties__list2">
                                    <li className="properties__rooms">6</li>
                                    <li className="properties__rooms">2</li>
                                    <li className="properties__rooms">3</li>
                                </ul>
                            </li>
                            <li className="properties__item">
                                <p className="properties__price">$5527.00</p>
                                <a className="properties__link" href="#">View Details</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Properties;