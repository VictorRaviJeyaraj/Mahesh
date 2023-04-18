import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './Stylesheet/dashboard.css'
// import './images/crm.png'
const Dashboard =()=>{
    return(

<div class="featured-section-wrap featured-section-wrap-row">
  <div class="content-wrap bottom-animated middle-animated animated top-animated">
  <h6 class="featured-title">FEATURED APPS</h6>
    <div class="region-promo">
      <div class="promotion-app">
      <a href="crm/?zmc=zoho-fa&amp;ireft=ohome">
        <span class="promo-appicon promo-crm">CRM</span>
        <div>
          <h3>Complete CRM Platform</h3>
          <p>End-to-end, fully customizable CRM solution for growing businesses and enterprises.</p>
          <span class="learn-more" >Sign Up Now</span>
        </div>
      </a>
      </div>
      {/* <a href="books/?zmc=zoho-fa&amp;ireft=ohome" class="zpa-sa">
          <span class="promo-appicon promo-books">Books</span>
          <div>
            <h3>Powerful Financial Platform</h3>
            <p>Complete accounting software with end-to-end VAT and E-Invoicing compliance for growing businesses and enterprises.</p>
            <span class="learn-more" >Sign Up Now</span>
          </div>
        </a> */}
        <ul >
          <li class="zp-main-apps zp-main-books zapp-show">
            <a href="books/?zmc=zoho-fa&amp;ireft=ohome" data_goto_en="id,th,vi,it">
              <span></span>Books
                <label>Powerful financial platform for growing businesses.</label>
                <em >Sign Up Now</em>
            </a>
          </li>
          <li class="zp-main-apps zp-main-mail zapp-show" >
            <a href="mail/?zmc=zoho-fa&amp;ireft=ohome">
              <span></span>Mail
              <label>Secure business email.</label>
              <em >Sign Up Now</em>
            </a>
          </li>
          <li class="zp-main-apps zp-main-people zapp-show" >
            <a href="people/?zmc=zoho-fa&amp;ireft=ohome">
              <span></span>People
              <label>Smart HR management software.</label>
              <em >Sign Up Now</em>
            </a>
          </li>
          <li class="zp-main-apps zp-main-projects zapp-show" >
            <a href="projects/?zmc=zoho-fa&amp;ireft=ohome">
              <span></span>Projects
              <label>Plan and track projects.</label>
              <em >Sign Up Now</em>
            </a>
          </li>
          </ul>
      

    </div>
  </div>
</div>
      
    )
}
export default Dashboard;