import './Footer.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Footer = () => {
    const scrollTo = () => {
        window.scrollTo(0,0);
    }
    return ( 
        <>
            <div className="Footer">
                <a onClick={scrollTo}>
                    <div className="FooterBottomTop">
                        <ExpandLessIcon/>
                    </div>
                </a>
                

                <div className="FooterVerRow">
                    <div className="FooterVerCol">
                        <div className="FooterVerColHead">
                            Get To Know Us
                        </div>
                        <ul>
                            <li>Amzon</li>
                            <li>Services</li>
                            <li>Amazon Cares</li>
                            <li>Gift Products</li>
                        </ul>
                    </div>

                    {/* Second */}
                    <div className="FooterVerCol">
                        <div className="FooterVerColHead">
                            Connect To Us
                        </div>
                        <ul>
                            <li>Meta</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>

                    {/* Third */}
                    <div className="FooterVerCol">
                        <div className="FooterVerColHead">
                            Make Money
                        </div>
                        <ul>
                            <li>Amzon Pay</li>
                            <li>Become an Affiliate</li>
                            <li>Sell on Amazon </li>
                            <li>Loay Alkashif</li>
                        </ul>
                    </div>
                </div>


                <div className="FooterLast">
                    <span className="FooterMess">Amazon Clone &copy; Loay Alkashif</span>
                </div>
            </div>
        </>
     );
}
 
export default Footer;