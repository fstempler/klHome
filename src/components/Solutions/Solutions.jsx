import './solutions.css';
import blockchain from '../../assets/solutions/blockchain.avif';
import ecommerce from '../../assets/solutions/ecommerce.avif';
import native from '../../assets/solutions/native.avif';
import native2 from '../../assets/solutions/native2.avif';
import onDemand from '../../assets/solutions/onDemand.avif';
import rrss from '../../assets/solutions/rrss.avif';
import rrss2 from '../../assets/solutions/rrss2.avif';
import rrss3 from '../../assets/solutions/rrss3.avif';

const Solutions = () => {
    return (
        <>
        <div className='solutions__MainContainer container' id='Solutions'>
            <div className='solutions__Title-Container container'>
                <h1 className='solutions__Title'>
                    Our Solutions
                </h1>
                <p className='solutions__Subtitle'>
                We offer a wide range of development solutions for any industry and use case.
                </p>
            </div>
            <div className='solutions__Card-Container row'>
                <div className='row solutions__Card-Container1 row-cols-lg-4 row-cols-md-2 row-cols-sm-1'>                    
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Pink" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={rrss} className="card-img-top solutions__img" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">SOCIAL NETWORKS</h5>
                        <p className="card-text solutions__Card-Text">Any type of social networks, microblogs, discussion groups, forums, messaging, video, and many others.</p>                                               
                    </div>
                </div>
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Blue" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={rrss2} className="card-img-top solutions__img" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">SOCIAL NETWORKS</h5>
                        <p className="card-text solutions__Card-Text">Any type of social networks, microblogs, discussion groups, forums, messaging, video, and many others.</p>                                               
                    </div>
                </div>
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Orange" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={ecommerce} className="card-img-top solutions__img" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">E-COMMERCE</h5>
                        <p className="card-text solutions__Card-Text">Online stores, auctions, B2B transactions, or even corporate tenders - both retail and wholesale.</p>                                               
                    </div>
                </div>
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Green" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={native} className="card-img-top solutions__img solutions__img-native" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">NATIVE IOS AND ANDROID APPS</h5>
                        <p className="card-text solutions__Card-Text">We convert any Bubble application to native Android and iOS app.</p>                                               
                    </div>
                </div>
                </div>
                
                {/* INSERT ANOTHER ROW */}
                <div className='row solutions__Card-Container2 row-cols-lg-4 row-cols-md-3 row-cols-sm-1'>
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Green" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={blockchain} className="card-img-top solutions__img" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">BLOCKCHAIN & CRYPTO</h5>
                        <p className="card-text solutions__Card-Text">Decentralised web3 applications based on most popular blockchains.</p>                                               
                    </div>
                </div>
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Pink" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={rrss3} className="card-img-top solutions__img" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">SOCIAL NETWORKS</h5>
                        <p className="card-text solutions__Card-Text">With an open API we can build any fully hosted backend solution for your app or website.</p>                                               
                    </div>
                </div>
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Blue" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={onDemand} className="card-img-top solutions__img" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">ON DEMAND SERVICES WITH PAYMENTS</h5>
                        <p className="card-text solutions__Card-Text">User to user payments for sites and services (like Uber), credit cards, and many other payment methods supported.</p>                                               
                    </div>
                </div>
                <div className="card col-md-6 border-0 solutions__Card-Style solutions__Card-Blue" style={{width: '14rem', maxWidth: '14rem'}}>
                    <img src={native2} className="card-img-top solutions__img" alt="Social Network" />
                    <div className="card-body">
                        <h5 className="card-title solutions__Card-Title">NATIVE IOS AND ANDROID APPS</h5>
                        <p className="card-text solutions__Card-Text">A place where you track internals, or manage databases (think CRMs)</p>                                               
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Solutions