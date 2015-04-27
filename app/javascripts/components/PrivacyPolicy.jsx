'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var PrivacyPolicy = React.createClass({
  render: function () {
    return (
      <section id="PrivacyPolicy" className="default-page-section">
        <div className="container rich-text narrow">
          <h2 className="h1">CompStak Privacy Policy</h2>
          <p className="h6">Effective Date: December 8, 2011</p>
          <h3>Introduction</h3>
          <p>This policy covers how CompStak® (“CompStak,” “We,” or “Us”) treats Personally Identifiable Information (“PII”) and other information that CompStak collects in connection with our services, whether you are using our services as either a visitor to our website (“Visitor”) or as a user who has completed our registration process (“Members,” Visitors and Members collectively referred to as “Users”). CompStak considers PII to be information that can be traced directly back to and identifies an individual, such as name, address, email address, and/or phone number. We do not consider PII to include information that has been anonymized so that it does not allow a third party to easily identify a specific individual. This policy does not apply to our collection and use of data about commercial properties contained in our Database, which is covered in our Fair Information Statement, available <a href="#FairInformation">here</a>.</p>
          <p>Please read this policy carefully and review it often because it may change. By using this website and accepting the <a href="#TermsOfUse">Terms of Use</a> you agree to this Privacy Policy. IF YOU DO NOT AGREE TO THIS <b>PRIVACY POLICY</b>, YOU MAY NOT USE THE WEBSITE OR SERVICES.</p>
          <p>This Privacy Policy is incorporated into, and made a part of, CompStak’s <a href="#TermsOfUse">Terms of Use</a>, and capitalized terms used and not defined in this policy have the meaning given to them in the Terms of Use.</p>
          <h3>1. Scope of Privacy Policy</h3>
          <p>This Privacy Policy applies to PII and other information collected by CompStak through your use of CompStak or CompStak’s services and does not apply to any other information collected by CompStak through other means. When you navigate away from our website to websites controlled by third parties, you leave the CompStak website, at which point our Privacy Policy no longer applies. We do not provide a notice warning to Users when they are leaving our website.</p>
          <h3>2. The Information We Collect</h3>
          <p>CompStak’s services include the collection, aggregation, and organization of information about commercial properties, such as building information (including, but not limited to, building pictures), completed lease deal information (including, but not limited to, rental rates, leased squared footage, tenant names and real estate broker and salesperson names), and related property, tenant and market information. Members can provide such information for inclusion in our Database. By visiting our website or becoming a Member, you are authorizing us to gather, parse, and retain data and information that you provide to us as necessary to deliver and support our services.</p>
          <p>PII Collection. CompStak collects PII when you register. We may also collect PII from you in other ways, such as contacts with our customer-support team.</p>
          <p>Non-PII Collection. Whenever you visit CompStak, we also receive and record information on our server logs from your browser, including your IP address, CompStak cookie information, and the pages you request. We relate this information to the PII you provide. CompStak uses this information to provide our services, to improve our products and services, to contact you, to conduct research, and to develop and maintain anonymous or aggregated data and analytics.</p>
          <p>Member Screen Names. During registration, Members must create a unique screen name that may be publicly attributed (tied) to their use of our system and may be both displayed in our system or shared in public communications. Screen names are the key to keeping our Members anonymous when they are contributing information about commercial properties. Members should be careful not to include PII in their screen name.</p>
          <p>Member Passwords. During registration, Members must select a password. Passwords are used to secure Member information and the integrity of the system. We only store a one-way encryption of Member passwords which means passwords cannot be unencrypted by us. Our login page provides a way for Members to obtain access to the system in case they lose or forget their password.</p>
          <p>System Use Information. We use screen names to compile and process historical and statistical information about how and when our Users use the system. Historical and statistical information includes information about selected actions that our Members take while on the system. We may also aggregate and store historical and statistical information for Members or Visitors. System use information is collected, surveyed, evaluated and scored by the system to assess the quality of data. Member actions are effectively confirmed or challenged by the later actions of other Members. We use this evaluation process to maintain our collaborative, self-correcting system and to promote the development of the most accurate, complete and up-to-date data possible. Members are objectively rated by the system based upon their actions.</p>
          <p>Our system uses points as an incentive and a point balance will be maintained for each Member based upon system use information. We may also use this information to add, adjust or discontinue certain services or functionality and to enforce our policies and procedures. Compiled system use information, Member ratings, point balances and information on data submitted may be displayed online shared along with screen names both online and in other public communications.</p>
        </div>
      </section>
    )
  }
});

module.exports = PrivacyPolicy;