import "../block5/block5.css";
import PageImg from "../../Assets/images/icons/page-scroll.png";

function Customer() {
    return (
        <section className="customer">
            <div className="container">
                <div className="customer__text-box">
                    <p className="customer__text">reviews</p>
                    <h2 className="customer__title">Our valuable customer says</h2>
                </div>
                <div className="customer__wrapper">
                    <div className="customer__box">
                        <h4 className="customer__name">Justin Lee</h4>
                        <p className="customer__bio">Products Designer at Ito</p>
                        <p className="customer__desc">A good real estate agent doesn’t disappear once the closing IN signed.Buying a bigger home doesn’t necessarily mean spendi more money.Been there. Done that. Sold. Bought 
                            Bringing It All Together.</p>
                    </div>
                    <div className="customer__box">
                        <h4 className="customer__name">Angel Cathe</h4>
                        <p className="customer__bio">Products Designer at Ito</p>
                        <p className="customer__desc">A good real estate agent doesn’t disappear once the closing IN signed.Buying a bigger home doesn’t necessarily mean spendi more money.Been there. Done that. Sold. Bought 
                            Bringing It All Together.</p>
                    </div>
                </div>
                <img className="customer__page" src={PageImg} alt=""/>
            </div>
        </section>
    )
}

export default Customer;