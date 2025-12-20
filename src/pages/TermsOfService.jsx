import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
    return (
        <div className="terms-of-service-page">
            {/* Terms of Usage Section */}
            <section className="terms-section">
                <div className="terms-container">
                    <h1 className="section-heading">TERMS OF USAGE</h1>
                    <div className="section-divider"></div>

                    <p>
                        The terms of use this agreement set forth the standards of use of http://www.careersatcore.com and all of its associated pages and websites. Herein www.careersatcore.com and all such associated pages and websites are collectively referred as the "website."
                    </p>

                    <p>
                        The words "you" and "user" as used from now refers to all the individuals accessing or using the website for any reason.
                    </p>

                    <p>
                        By using the website you represent that you have read and agreed to have accepted all the terms and conditions of this agreement as well as guidelines and privacy policy collectively represented as "Terms of usage."
                    </p>

                    <p>
                        All the terms of using the website and services are provided below. Please read it carefully. Using the website and the services confirms your acceptance of the terms. If you are unwilling to be bound by these terms of use, please do not access website or use the services.
                    </p>

                    <h3 className="sub-heading">1. Eligibility:</h3>
                    <p>
                        As an individual you must be 18 years of age or above. By using the website and the services you represent and warrant that you have the right, authority to enter into terms of usage to abide by all of the terms and conditions provided in the agreement. You also abide by the fact that you will use website in a manner consistent with all the laws and regulations.
                    </p>

                    <h3 className="sub-heading">2. Services:</h3>
                    <p>
                        Users are entitled to use the services-job assistance, resume service, online questionnaire as per as the information provided on the portal from time to time.
                    </p>

                    <h3 className="sub-heading">3. Restrictions on use of the website:</h3>
                    <p>
                        Users shall not use the Website in order to broadcast, dispense, accumulate or destroy material, including without limitation content provided by the company. For any unlawful purpose or in violation of any applicable law, bylaw, international law or laws of any other country; or in a manner that will disobey the copyright, trademark or other intellectual property rights of others or violate the privacy, promotion or other personal rights of others, or that is defamatory, slanderous, obscene, threatening, abusive or is offensive to users of the Website, such as content or messages that promotes racism, bigotry, hatred or physical harm of any kind against any group or individual; or that is false and misleading; or that harasses or advocates harassment of another person.
                    </p>

                    <p>
                        Users are also prohibited from violating or attempting to violate the security of the Website- (i) accessing data not intended for the user or logging into a server or account which the User is not authorized to access; (ii) attempting to probe, scan the system or network or to breach security or authentication measures without proper authorization; (iii) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus to Website. Violations of system or network security may result in civil or criminal liability.
                    </p>

                    <p>
                        Users shall not alter, acclimatize, convert or reverse engineer any portion of the Website and/or Services; remove any copyright, trademark or other proprietary rights notices contained in or on the Website and/or Service; use any robot, spider, site search/retrieval application, or other device to retrieve any portion of the Website and/or Service or for crawling the Website and scraping content or to dodge the technological methods adopted by the Website to prevent such prohibited use. Reformat or frame any portion of the web pages that are part of the Website and/or Service; create user accounts by automated means or under false or fake pretenses; create or transmit unwanted electronic communications such as "spam" to other users of the Website. Submit any content or material that falsely express or imply that such content or material is sponsored or endorsed by the Company or the Website; transmit any viruses, worms, defects, Trojan horses or other items of a destructive nature; use of the Website or Services to violate the security of any computer network, crack passwords or security encryption codes, transfer or store illegal material including that are deemed threatening or obscene; copy or store any content offered on the Website for other than your own use.
                    </p>

                    <h3 className="sub-heading">4. Company solution for violation of terms:</h3>
                    <p>
                        The company or the website may review any content, information provided by you. In case the company finds in its sole discretion that the user violates any terms of this agreement, the company and the website reserves right to take actions to control such violation by removing the content from the website or terminating the account of the violator and blocking their use to access the website and the services.
                    </p>

                    <h3 className="sub-heading">5. Terms and conditions for job seekers:</h3>
                    <p>
                        Registration is mandatory for Candidates and requires the Candidates to provide certain basic information about them such as name, age, sex, industry, experience, salary/CTC expectation and accordingly whatever is necessary to create an Account. The advance membership will only be completed and the Services offered with advanced membership will only commence after the receipt of membership fees by the Company. Notwithstanding anything contained herein, the term of the Agreement will commence from the date of such receipt of membership Fee.
                    </p>

                    <h3 className="sub-heading">6. Payment of job search assistance fee:</h3>
                    <p>
                        The Company shall provide the User with facilities/gateways to pay the job search assistance fee through credit cards (visa and MasterCard), debit cards, demand drafts, pay orders, cheques, cash cards or phone call. It is understood and agreed by the User that the Services shall only commence after realization of money in the accounts of the Company. It is understood and agreed by the User that in no event whatsoever, the Company or website shall take any responsibility or liability for malfunctioning or defect in any payment procedure. Payment of the Fee shall be the sole responsibility of the User. The company is also not liable to refund any fee once the transaction is completed with complete consent of the candidate. The User may be liable to pay all applicable charges, fees, duties, taxes, levies and assessments for availing the Services through the Website.
                    </p>

                    <h3 className="sub-heading">7. Modification of terms of usage:</h3>
                    <p>
                        Terms of Use for the Website and the Services can be modified by the Company, at any time without prior notice, and such modifications will be effective only when new changes are implemented on the Website. You agree to review the Terms of Use periodically so that you are aware of any such modifications and the Company shall not be liable for any loss suffered by you on your failure to review such modified Terms of Use.
                    </p>
                </div>
            </section>

            {/* Discover More Section */}
            <section className="discover-section">
                <div className="discover-container">
                    <span className="discover-text">Discover more</span>
                    <a href="https://www.facebook.com/corecareer" target="_blank" rel="noopener noreferrer" className="discover-link">
                        <span className="fb-icon">f</span> Core Careers Pvt. Ltd.
                    </a>
                    <a href="https://www.facebook.com/corecareer" target="_blank" rel="noopener noreferrer" className="discover-link">
                        <span className="fb-icon">f</span> Core Careers Pvt. Ltd
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
