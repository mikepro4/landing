'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var LegalContent = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section className="default-page-section">
        <div className="container rich-text narrow">
          <h2 id="TermsOfUse" className="h1">CompStak Terms of Use</h2>
          <p className="h6">Effective Date: June 19, 2014</p>
          <h3>1. Introduction</h3>
          <p>Please carefully review these Terms of Use (“<b>TOU</b>” or “<b>Agreement</b>”), for CompStak, Inc. (“<b>CompStak</b>”, “<b>We</b>”, or “<b>Us</b>”) as they contain important information regarding your legal rights, remedies, and obligations. These TOU apply if you visit, view, use, or access (collectively, “<b>access</b>”) CompStak’s websites made available on CompStak.com (the “<b>Website</b>”), and/or (hereinafter, “<b>or</b>”) if, through any Internet-enabled mechanism (including, but not limited to a crawler or bot), you access data, information, products, services, or applications (collectively, with the Website, the “<b>Services</b>”) made available by or from CompStak.</p>
          <h3>2. Legally Binding Agreement</h3>
          <p>By accessing the Services, you represent and warrant that you have read and understood, and agree to be bound by these TOU and that you acknowledge the adequacy of consideration for this Agreement. Please review this document carefully as it is a legally binding document between you and CompStak. <b>If you do not agree to these TOU, you are prohibited from accessing, and must immediately discontinue your access of the Services. Please exit and discontinue all access immediately.</b></p>
          <h3>Eligibility</h3>
          <p>The Services are not targeted to, and should not be used by, persons under the age of 18. BY ACCESSING THE SERVICES, YOU REPRESENT AND WARRANT THAT YOU ARE AT LEAST 18 YEARS OLD, ARE LEGALLY QUALIFIED TO ENTER INTO AND FORM CONTRACTS UNDER APPLICABLE LAW, and are not barred from accessing the Services under the laws of any applicable jurisdiction.</p>
          <p>If you are using the Services on behalf of a company, entity, or organization (each a “<b>Subscribing Entity</b>”), then you represent and warrant that you: (i) are an authorized representative of that Subscribing Entity with the authority to bind such entity to the TOU and (ii) agree to be bound by the TOU individually and on behalf of such Subscribing Entity. You further represent and warrant that the Subscribing Entity is not a CompStak Competitor, nor are you or your Subscribing Entity using the Services for or on behalf of a CompStak Competitor, as defined in Section 8(B)(ix).</p>
          <h3>4. Privacy Policy; Changes to Agreement</h3>
          <ol className="abc">
            <li><p><span className="underlined">Privacy Policy</span>. By accessing the Services, you consent to the collection and use of certain information about you, as specified in the Services’ Privacy Policy (the “<b>Privacy Policy</b>”), incorporated hereto and available <a href="#PrivacyPolicy">here</a>. CompStak encourages users of the Services to frequently check the Privacy Policy for changes. By accessing the Services, you represent and warrant that you have read and understood, and agree to be bound by, the Privacy Policy. IF YOU DO NOT UNDERSTAND OR DO NOT AGREE TO BE BOUND BY THE PRIVACY POLICY, YOU MUST IMMEDIATELY EXIT AND DISCONTINUE ALL ACCESS TO THE SERVICES.</p></li>
            <li><p><span className="underlined">Changes</span>. COMPSTAK RESERVES THE RIGHT TO CHANGE THIS AGREEMENT AND/OR THE PRIVACY POLICY AT ANY TIME. Notice of any such change will be given by the posting of a new version or a change notice on the Services; provided, however, that CompStak will use commercially reasonable efforts to notify you of any material changes to these TOU at least 30 days in advance of the effective date of such material change. Changed TOU will be indicated by the “effective date” at the top of this Agreement. If you do not agree to such changes, please exit and discontinue all access to the Services immediately. It is your responsibility to review this Agreement and the Privacy Policy periodically. If at any time you find any TOU or the Privacy Policy unacceptable, you must immediately leave, and refrain from using, the Services.</p></li>
          </ol>
          <h3>5. Member Registration, User Name, and Points</h3>
          <ol className="abc">
            <li><p><span className="underlined">Member Registration</span>. By accessing the Services, you are not automatically a CompStak <b>Member</b>; you are a “Visitor.” In order to become a CompStak member (“Member”), you are required to complete a registration process. You certify, represent and warrant that the information you provide therein is true, accurate, complete, current, and that it belongs to you. You shall keep your information complete and up-to-date at all times. Failure to maintain your registration information may cause your access to the Services to be interrupted, suspended, or terminated. You are responsible for monitoring your account, changing your password periodically and notifying CompStak immediately of any unauthorized use or breach of security of your password.</p></li>
            <li><p><span className="underlined">Members and Contacts</span>. Your Member registration information and information you provide regarding commercial properties is automatically entered into CompStak’s proprietary database (the “<b>Database</b>”), which contains, among other things, building information, completed lease deal information (including, but not limited to rental rates, leased squared footage, tenant name and real estate broker and salesperson name), and related property, tenant and market information. Please note: as a Member, you may contribute to and access the Database; however, CompStak retains all proprietary and intellectual property rights to the Database, and you do not retain any ownership rights in the Database as a result of any information you provide. Likewise, information contributed to the Database may be shared with other Members and with third parties, in CompStak’s discretion. To learn more about our Database, please see Section 10.</p></li>
            <li><p><span className="underlined">User Name</span>. In order to access certain Services as a Member, you must log on with a unique user name or email address.</p></li>
            <li><p><span className="underlined">Points</span>. The Services allow you to earn points or credits (“<b>Points</b>”) by performing certain actions. Points are not real money, do not have monetary value, and may never be redeemed for “real world” money, or other items of monetary value from outside of the Services without our written permission. While we may use terms like “buy”, “earn”, “ spend” or “sell” in reference to Points, we do so only for convenience and such terms in no way indicate that Points have monetary value or are real money. You acknowledge that Points are not real currency and are not redeemable for any sum of money from us at any time. We make no guarantee as to the nature, quality or value of the features of the Services.</p>
              <ol className="roman">
                <li><p><span className="underlined">License</span>. Points obtained via the Services are provided to you under a limited, personal, revocable, non-transferable (except as specifically provided below), non-sublicensable license to use within the Services. Points may not be transferred (except as specifically provided below) or resold in any manner, including, without limitation, by means of any direct sale or auction service. You have no property interest, right or title in or to any such Points appearing or originating in the Services, or any other attributes associated with use of the Services.</p></li>
                <li><p><span className="underlined">Limitation of Liability</span>. We have no liability for hacking or loss of your Points; provided that we will use commercially reasonable efforts to restore Points in the event of any hacking or loss. We have no obligation to, and will not, reimburse you for any Points or any goods or services obtained via Points that are forfeited due to your violation of the TOU. We reserve the right, without prior notification, to limit the quantity of Points and/or to refuse to provide you with any Points. Price, exchangeability, and availability of Points are determined by us in our sole discretion and are subject to change without notice. You agree that we have the absolute right to manage, distribute, regulate, control, modify, cancel, restrict, terminate and/or eliminate Points as we see fit in our sole discretion, and that we will have no liability for exercising such right. You agree that under no circumstances are we liable to you for any damages or claims that may arise from the loss or use of your Points regardless of the circumstances. You absolve us of any responsibility to maintain or update your Points balance. However, if there is a loss of Points in your account due to technical or operational problems with the Services, we may replenish the lost Points once the loss has been verified. Without limiting any of the foregoing, our maximum liability or responsibility to you is to replenish the Points lost.</p></li>
                <li><p><span className="underlined">Redemption</span>. You may redeem Points for CompStak Data or as otherwise set forth on the Services. We will, in our sole discretion, determine and communicate the availability and exchange rate for any Points, which may be modified at any time. All redemptions are subject to the TOU and all limitations and requirements stated via the Services. All redemptions of Points are final. Once your Points have been redeemed, they will be subtracted from your Point balance and will not be refunded or returned, except in our sole discretion. CompStak may also issue Points at no charge to users, at its discretion.</p></li>
                <li><p><span className="underlined">Loss of Points</span>. CompStak may subtract Points from your account if it determines, in its sole discretion, that you did not properly “earn” the Points, including if CompStak Data you previously submitted is outdated or has been superseded by other CompStak Data submission.</p></li>
                <li><p><span className="underlined">Allocation between Members</span>. Points may be transferred among Members who are using the Services under the same Plan (as defined below).</p></li>
              </ol>
            </li>
          </ol>
          <h3>6. Subscription Accounts</h3>
          <ol className="abc">
            <li><p><span className="underlined">Generally</span>. CompStak offers additional, paid, services (each, a "Plan"). Subscription fees and terms vary and additional conditions, restrictions and limitations may apply to each Plan and will be as set forth in a separate agreement between you and CompStak (a “<b>Master Subscription Agreement</b>”).</p></li>
            <li><p><span className="underlined">Method of Payment</span>. Payment terms will be as set forth in the Master Subscription Agreement.</p></li>
          </ol>
          <h3>7. Your License to Use</h3>
          <p>Subject to your compliance with the terms and conditions of this Agreement, and any other agreement between you and CompStak, CompStak grants you a non-exclusive, non-sublicensable, non-assignable, revocable, non-transferable license to access the Services. Except as expressly set forth herein, this Agreement grants you no rights in or to the intellectual property of CompStak or any other party. In the event that you breach any provision of this Agreement, your rights under this paragraph will immediately terminate. By accepting this license, you agree that all information contained in the Database, and the compilation of such information, is the proprietary, confidential information of CompStak, that you will safeguard and protect such information, and that you will use the information in accordance with the Code (as defined below). Your obligations set forth above shall survive termination of this Agreement.</p>
          <h3>8. Code of Conduct</h3>
          <p>The Services allow commercial real estate professionals to share “comp” information. This sharing of information through the functionality of the Services is the only permitted use of the Services. All Members and Visitors must fully comply with the following CompStak Code of Conduct (the “<b>Code</b>”) at all times. You certify, represent and warrant that you will not violate this Code.</p>
          <ol className="abc">
            <li><p><span className="underlined">Restrictions on Inputting Information</span> You shall not enter trade secrets or illegal or improper information in or through the Services (either directly through the Services or via any transmission to CompStak, including email), including, without limitation, the following:</p>
              <ol className="roman">
                <li><p>Information that is known to be false, inaccurate, incorrect, incomplete, inexact, outdated or otherwise wrong;</p></li>
                <li><p>Information subject to confidentiality, non-disclosure, non-competition, trade secret or proprietary rights, limitations or restrictions;</p></li>
                <li><p>Information that infringes the copyrights or intellectual property rights of others;</p></li>
                <li><p>Home addresses, Social Security numbers or credit card numbers;</p></li>
                <li><p>Information that is sexually explicit, profane, pornographic, immoral, obscene, vulgar, offensive, inflammatory, violent, dangerous, harmful, threatening, abusive, harassing, hateful, discriminatory or racially, ethnically or otherwise objectionable, or which may solicit information from anyone under the age of 18;</p></li>
                <li><p>Information that is defamatory, libelous, fraudulent, knowingly incorrect, or invasive of privacy or publicity rights of others;</p></li>
                <li><p>Information that advocates or encourages conduct that could constitute a criminal offense;</p></li>
                <li><p>Information that is actionable or may subject CompStak to legal action or liability of any kind;</p></li>
                <li><p>Information obtained directly from CoStar Group, or any affiliate, subsidiary or related entity of CoStar Realty Information, Inc.</p></li>
                <li><p>Information that violates any applicable local, state, national or international law, regulation, or convention; or</p></li>
                <li><p>Information that violates any provision of this Agreement or any other agreement or policy set forth by CompStak.</p></li>
              </ol>
            </li>
            <li><p><span className="underlined">Use of Information Obtained via the Services</span>. CompStak has no actual control over use of information by you or any other user outside the Services. You shall not use information accessed through the Services for any purpose or in any manner that is illegal or improper, including, without limitation, the following:</p>
              <ol className="roman">
                <li><p>For any purpose, activity or in any manner that is criminal, illegal or actionable;</p></li>
                <li><p>In violation of any local, state, national or international laws, regulations or conventions;</p></li>
                <li><p>To illegally ‘spam’ anyone or to sell, give, make available or otherwise distribute information to a spammer or for the purpose of spamming;</p></li>
                <li><p>For unethical marketing activities;</p></li>
                <li><p>To communicate with anyone using language or in any manner that is sexually explicit, profane, pornographic, immoral, obscene, vulgar, offensive, violent, dangerous, harmful, threatening, abusive, harassing, hateful, discriminatory, or racially, ethnically or otherwise objectionable;</p></li>
                <li><p>To prepare or compile information that is distributed in any manner or form to any third-party;</p></li>
                <li><p>To enhance, verify, supplement, append, confirm, or modify any compilation of information that is thereinafter distributed in any manner or form to a third-party;</p></li>
                <li><p>For sale, re-sale, sub-license, commercial use, or redistribution of any kind, without CompStak’s express, prior consent.;</p></li>
                <li><p>For, at the direction of, or on behalf of (directly or indirectly) any company whose primary business to provide an online commercial real estate analytics platform, including but not limited to, CoStar Group (a “<b>CompStak Competitor</b>”), or to build a competitive product.</p></li>
              </ol>
            </li>
            <li><p><span className="underlined">Acts against the Services</span>. You shall not attempt to or engage in potentially harmful acts that are directed against the Services including, without limitation, the following:</p>
              <ol className="roman">
                <li><p>Using the Services in contravention of any other agreement to which you are a party, including without limitation any employment agreement to which you may be a party;</p></li>
                <li><p>Causing, allowing or assisting any other person to use your account or impersonate you;</p></li>
                <li><p>Sharing your password or login with any other person;</p></li>
                <li><p>Logging onto a server or account that you are not authorized to access;</p></li>
                <li><p>Forging screen names, manipulating identifiers, or otherwise impersonating any other person or misrepresenting your identity or affiliation with any person or entity;</p></li>
                <li><p>Emulating or faking usage of the Services;</p></li>
                <li><p>Violating or attempting to violate any security features of the Services;</p></li>
                <li><p>Using manual or automated software, devices, scripts robots, other means or processes to access, “scrape,” “crawl” or “spider” any pages contained in the Services;</p></li>
                <li><p>Falsely stating or otherwise misrepresenting your affiliation with any person or entity;</p></li>
                <li><p>Introducing viruses, worms, software, Trojan horses or other similar harmful code into the Services;</p></li>
                <li><p>Interfering or attempting to interfere with the use of the Services by any other user, host or network, including, without limitation by means of submitting a virus, overloading, “flooding,” “spamming,” “mail bombing,” or “crashing” the Services;</p></li>
                <li><p>Causing, allowing or assisting machines, bots or automated services to access or use the Services without the express written permission of CompStak;</p></li>
                <li><p>Tampering with the operation, functionality or the security of the Services;</p></li>
                <li><p>Attempting to override or circumvent any security or usage rules embedded into the Services that permit digital materials to be protected;</p></li>
                <li><p>Attempting to probe, scan, or test the vulnerability of the Services, or any associated system or network, or breach any security or authentication measures;</p></li>
                <li><p>Misusing, tricking, disrupting or otherwise interfering with the functioning of the Services;</p></li>
                <li><p>Harvesting or collecting email addresses or other contact information of other users from the Services by electronic or other means;</p></li>
                <li><p>Reverse engineering, decompiling, disassembling, deciphering or otherwise attempting to derive the source code for any underlying intellectual property used to provide the Services;</p></li>
                <li><p>Engaging in “framing,” “mirroring,” or otherwise simulating the appearance or function of the Services;</p></li>
                <li><p>Uploading, posting, transmitting, sharing, storing or otherwise making available any content that CompStak in its sole discretion deems to be harmful, threatening, unlawful, defamatory, infringing, abusive, inflammatory, harassing, vulgar, obscene, fraudulent, invasive of privacy or publicity rights, hateful, or racially, ethnically or otherwise objectionable;</p></li>
                <li><p>Without CompStak’s prior, express consent, advertising or selling any products, services or otherwise (whether or not for profit), or soliciting others or using the Services for commercial purposes of any kind other than sharing comparables information with other real estate professionals.</p></li>
              </ol>
            </li>
            <li><p><span className="underlined">Suspected Misuse and Penalties</span>. CompStak may monitor the Services for violations of the Code, and you agree (a) not to bypass said monitoring, (b) that CompStak will not be liable for monitoring and (c) nothing CompStak says or does waives its rights to monitor the Services. CompStak shall be the sole and final arbiter of suspected Code violations. If CompStak determines that you have materially breached this agreement, it may, and without limiting any of its other remedies, immediately and without notice:</p>
              <ol className="roman">
                <li><p>Delete or modify content;</p></li>
                <li><p>Suspend your account;</p></li>
                <li><p>Terminate your account;</p></li>
                <li><p>Identify you to third parties;</p></li>
                <li><p>Take legal action.</p></li>
              </ol>
            </li>
          </ol>
          <p>You agree that you will be liable for breaches of the Code, and these TOU, by you and your affiliates, consultants, agents, contractors or employees and anyone else accessing the Services on your behalf (directly or indirectly), and you agree to pay CompStak liquidated damages as described below for any such breach of the Code, or these TOU. You agree that damages to CompStak from a breach of the Code or these TOU would be extremely difficult to quantify. Therefore, at CompStak’s option, in lieu of actual damages, CompStack will be entitled to $75,000 in liquidated damages as a reasonable estimate of our damages for each such breach. CompStak intends to cooperate fully with any law enforcement officials or agencies in the investigation of any violation of this Agreement or of any applicable laws.</p>
          <h3>9. Your Creative Content</h3>
          <p>Separate and apart from contributing to the Database, the Services may allow you to post content, such as messages, images, text, photos, graphics, audio, video or other material (<b>“your Creative Content</b>”) through message boards, forums, Member blogs or other interactive features. With respect to your Creative Content, while you retain any and all of your lawfully owned rights therein, you hereby grant CompStak a royalty-free, perpetual, irrevocable, worldwide, transferable, non-exclusive and fully-sublicensable right and license to view, store, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display your Creative Content (in whole or part) and/or to incorporate it in other works in any form, media, or technology now known or later developed, and to exercise the same rights with respect to such works. You also permit any Visitor of the Services to access, store, distribute, perform, reproduce and prepare derivative works of your Creative Content. No compensation will be paid to you or to any other person or entity with respect to your Creative Content. You grant CompStak the right to use your name and/or likeness and/or any name and/or likeness that you may submit in connection with your Creative Content if CompStak should choose, without compensation or need for your prior approval, or to exercise any of the rights licensed by you hereunder, in connection with a fictional name or persona or without any attribution at all. You also agree to irrevocably waive (and cause to be waived) any claims and assertions of moral rights or attribution with respect to your Creative Content.</p>
          <p>CompStak may remove your Creative Content at any time in its sole discretion. You are solely responsible at your own cost and expense to create backup copies of your Creative Content. Likewise, by accessing the Services you may be exposed to other Members’ Creative Content that you find offensive, indecent or objectionable -- you agree that you use the Services at your own risk.</p>
          <p>You agree that CompStak is not under any obligation of confidentiality, express or implied, with respect to your Creative Content. You represent and warrant that you own or otherwise control all necessary rights to your Creative Content, that it does not violate or infringe upon the intellectual property rights of a third party, that it is accurate, that it does not contain libelous, defamatory or otherwise unlawful material, that it does not violate anyone’s rights to publicity or privacy, that it will not cause injury to any person or entity, that it does not otherwise violate these TOU, and that you will indemnify CompStak and its service providers for all claims resulting from your Creative Content. UNDER NO CIRCUMSTANCES WILL COMPSTAK BE LIABLE IN ANY WAY FOR OR IN CONNECTION WITH YOUR CREATIVE CONTENT.</p>
          <p>As the provider of the Services, CompStak is only a forum and is not liable for any statements, representations, or omissions made through Your (or other Visitors’) Creative Content. Any opinions, advice, purported facts, or recommendations expressed therein are those of the Visitors who make them, and not those of CompStak; CompStak does not endorse any opinion, purported fact, recommendation or advice expressed therein. Likewise, it is your responsibility to exercise due care and caution (for your privacy, safety, and identity, among other concerns) when posting your Creative Content or accessing the Services.</p>
          <h3>10. The Commercial Real Estate Data and Information Available On the Servies</h3>
          <ol className="abc">
            <li><p><span className="underlined">Statement of Principles</span></p>
              <ol className="roman">
                <li><p></p></li>
              </ol>
            </li>
            <li><p><span className="underlined">Statement of Principles</span>.</p>
              <ol className="roman">
                <li><p>We are open, transparent and fair about our practices and policies with respect to the collection and use of information.</p></li>
                <li><p>We utilize our Members and leading edge technology to build and maintain the most comprehensive, accurate and up-to-date database possible of information regarding commercial properties, including building information, completed lease deal information (such as rental rates, leased square footage, tenant names, real estate broker names and salesperson names), and related property, tenant and market information (collectively, “<b>CompStak Data</b>”). We maintain security measures to reasonably safeguard the data and its use.</p></li>
                <li><p>We collect information that is necessary for the legitimate business purposes of CompStak and our Members. We collect information that is obtained lawfully and by fair means, and do not encourage members and users to disclose trade secrets.</p></li>
                <li><p>We will monitor privacy and data protection developments. We encourage Members to respect compliance programs with respect to their own use of the Services.</p></li>
              </ol>
            </li>
            <li><p><span className="underlined">Information Collected</span>. The Services make the following subsets of CompStak Data about commercial properties available to our Members: lease deal information (which may include, but is not limited to, rental rates, leased square footage, lease terms, floor(s) leased, landlord concessions, tenant names, real estate broker name, salesperson name, etc.), and related building information (which may include, but is not limited to, landlord name, address, building name, building agent, year built, building class, etc.).</p>
            </li>
            <li><p><span className="underlined">Sources of CompStak Data</span>.</p>
              <ol className="roman">
                <li><p>Our Members build and maintain the Services’ database of CompStak Data. CompStak may aggregate, supplement or enhance its CompStak Data from established, reputable sources and trusted data suppliers. CompStak may also add to CompStak Data by collecting and including openly and freely available commercial property information. Data providers may only contribute information to CompStak that they have a legal right to provide.</p></li>
                <li><p>CompStak Data available on the Services may be readily available without restriction from any number of different data sources, including:</p>
                  <ol>
                    <li><p>Public records: Records created and maintained by government agencies and open for public inspection and use.</p></li>
                    <li><p>Publicly available information: Information that is available to the general public from non-governmental sources.</p></li>
                    <li><p>Non-public available information provided to CompStak by a Member authorized to share such information: Information that is privately owned and is not available to the general public or that is generally offered for a fee for use and redistribution without restriction.</p></li>
                    <li><p>Openly available information: Information that has been made available without restriction by a property’s representatives, typically for their own convenience, competitive advantage, business benefit or other commercial purposes.</p></li>
                    <li><p>Derived information: Partial or derived information from any combination of the above sources that is assembled, aggregated, appended, calculated or associated together.</p></li>
                  </ol>
                </li>
              </ol>
            </li>
            <li><p><span className="underlined">Concerns about CompStak Data</span>. If you have any concerns about any CompStak Data, you can contact CompStak by email at support@CompStak.com.</p></li>
            <li><p><span className="underlined">Online Privacy Policy (Applicable to Members and Visitors)</span>. The Privacy Policy applies to information collected online from and about our members, users and visitors to CompStak. For more information, see the <a href="#PrivacyPolicy">Privacy Policy</a>.</p></li>
          </ol>
          <h3>11. Intellectual Property</h3>
          <p>The Services and all content and materials located thereon, including without limitation any CompStak names and logos (the “<b>CompStak Marks</b>”), Database, designs, text, graphics and other files, and the selection, arrangement and organization thereof, are the intellectual property of CompStak or its licensors. Except as explicitly provided, neither the Services nor this Agreement grant you any right, title or interest in or to any such content or materials. The CompStak Marks are trademarks or registered trademarks of CompStak. Other trademarks, service marks, graphics, logos and domain names appearing on the Services may be the trademarks of third parties. The Website is Copyright © 2014, CompStak, Inc., ALL RIGHTS RESERVED. Moreover, except as expressly stated herein, or as expressly granted by CompStak in a signed writing, you have no intellectual property or other rights in the information you contribute to the Database.</p>
          <p>As CompStak asks others to respect its intellectual property rights, CompStak respects the intellectual property rights of others. You agree that you shall not remove, obscure, or alter any proprietary rights notices (including copyright and trademark notices) which may be affixed to or contained within the Services. Likewise, if you have evidence, know, or have a good faith belief that your rights have been violated and you want CompStak to delete, edit, or disable the material in question, you must provide CompStak with all of the following information pursuant to the Digital Millennium Copyright Act (“DMCA”) by providing CompStak’s DMCA Agent (listed below) with the following information in writing:</p>
          <ol className="abc">
            <li><p>a physical or electronic signature of a person authorized to act on behalf of the owner of the exclusive right that is allegedly infringed;</p></li>
            <li><p>identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works;</p></li>
            <li><p>identification of the material that is claimed to be infringed or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit CompStak to locate the material;</p></li>
            <li><p>information reasonably sufficient to permit CompStak to contact you, such as an address, telephone number, and if available, an electronic mail address at which you may be contacted;</p></li>
            <li><p>a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</p></li>
            <li><p>a statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. For this notification to be effective, you must provide it to CompStak’s designated agent at:</p></li>
          </ol>
          <p>DMCA Agent<br/>
            CompStak.com<br/>
            CompStak, Inc.<br/>
            36 Cooper Square, 6th Floor<br/>
            New York, NY 10003<br/>
            copyright@compstak.com
          </p>
          <p>Please consult your legal counsel (or see 17 U.S.C. § 512) to confirm these requirements and your compliance therewith. It is CompStak’s policy to respond to notices of alleged infringement that comply with the DMCA. In addition, CompStak will promptly terminate without notice the accounts of users that are determined by CompStak to be “repeat infringers.” If CompStak receives more than three takedown notices regarding your any content you have submitted, including your Creative Content, then you will be considered a repeat infringer and your account will be terminated.</p>
          <p>You acknowledge that if you fail to comply with all of the requirements of this section, your DMCA notice may not be valid. Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.</p>
          <h3>12. Disclaimers; Limitation of Liability; Third Party Disputes</h3>
        </div>
      </section>
    )
  }
});

module.exports = LegalContent;