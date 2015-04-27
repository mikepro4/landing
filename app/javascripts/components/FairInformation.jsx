'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var FairInformation = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section id="FairInformation" className="default-page-section">
        <div className="container rich-text narrow">
          <h2 className="h1">Fair Information Statement</h2>
          <p className="h6">Effective Date: December 8, 2011</p>
          <h3>Summary</h3>
          <p>This Fair Information Statement applies ONLY to the information about commercial properties that is compiled and available on CompStak.com (“CompStak, “We,” or “US”). THIS STATEMENT DOES NOT APPLY TO INFORMATION COLLECTED FROM OR ABOUT OUR MEMBERS OR VISITORS DURING REGISTRATION OR USE OF COMPSTAK.COM. Information collected from or about our Users is covered in our separate <a href="#PrivacyPolicy">Privacy Policy</a>. Capitalized terms used and not defined in this policy have the meaning given to them in the <a href="#TermsOfUse">Terms of Use</a>.</p>
          <h3>1. Statement Of Principles</h3>
          <p>CompStak.com is committed to the following principles:</p>
          <p>We are open, transparent and fair about our practices and policies with respect to the collection and use of information.</p>
          <p>We utilize our Users and leading edge technology to build and maintain the most comprehensive, accurate and up-to-date database possible of information regarding commercial properties, including building information (such as building pictures), completed lease deal information (such as rental rates, leased square footage, tenant names, real estate broker names and salesperson names), and related property, tenant and market information. We maintain security measures to reasonably safeguard the data and its use.</p>
          <p>We collect information that is necessary for the legitimate business purposes of CompStak® and our Users. We collect information that is obtained lawfully and by fair means, and do not encourage members and users to disclose trade secrets.</p>
          <p>We comply with all applicable laws. We will monitor privacy and data protection developments. We encourage Users to respect compliance programs with respect to their own use of CompStak.com.</p>
          <h3>2. Information Collected</h3>
          <p>CompStak.com makes the following information about commercial properties available to our Members: lease deal information (which may include, but is not limited to, rental rates, leased square footage, lease terms, floor(s) leased, landlord concessions, tenant names, real estate broker name, salesperson name, etc.), and related building information (which may include, but is not limited to, building pictures, landlord name, address, building name, building agent, year built, building class, etc.)</p>
          <h3>3. Sources Of CompStak.com commercial Property Information</h3>
          <p>Our Members build and maintain CompStak.com's Database. CompStak.com may aggregate, supplement or enhance its business information from established, reputable sources and trusted data suppliers. CompStak.com may also collect and include openly and freely available commercial property information itself. Data providers may only contribute information to CompStak.com that they have a legal right to provide.</p>
          <p>Information on CompStak.com may be readily available without restriction from any number of different data sources. The following types of information may be reflected in the Database:</p>
          <ul>
            <li><p>Public records: Records created and maintained by government agencies and open for public inspection and use.</p></li>
            <li><p>Publicly available information: Information that is available to the general public from non-governmental sources.</p></li>
            <li><p>Non-public available information: Information that is privately owned and is not available to the general public or that is generally offered for a fee for use and redistribution without restriction.</p></li>
            <li><p>Openly available information: Information that has been made available without restriction by a property’s representatives, typically for their own convenience, competitive advantage, business benefit or other commercial purposes.</p></li>
            <li><p>Freely available information: Information that is accessible or available on the Internet or from other offline sources.</p></li>
            <li><p>Derived information: Partial or derived information from any combination of the above sources that is assembled, aggregated, appended, calculated or associated together.</p></li>
          </ul>
          <h3>4. Concerns About Data Appearing In the Database</h3>
          <p>If you have any concerns about data appearing in our Database, you can contact CompStak.com support by email at support@CompStak.com.</p>
          <h3>5. Online Privacy Policy (Applicable to Members, Users and Visitors)</h3>
          <p>CompStak.com’s Privacy Policy applies to information collected online from and about our Community members, users and visitors to CompStak.com. For more information, see our <a href="#PrivacyPolicy">Privacy Policy</a>.</p>
        </div>
      </section>
    )
  }
});

module.exports = FairInformation;