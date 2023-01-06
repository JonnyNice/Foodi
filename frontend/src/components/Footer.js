import './Footer.css'
import {Link} from "react-router-dom"

import React from 'react'

function Footer() {
  return (
    <section className="footer">
        <section className="footer-social-media">
            <a href="https://github.com/JonnyNice/recipeapp" target="_blank">This Repo Here</a>
        </section>
        <section className="footer-info">
            <section className="footer-info-left">
              <section className= "footer-info_name">
                Flatiron School Phase 3 Project:
              </section>
              <section className= "footer-info_returns">
             Junior Developers Ian, JSON, and William
                <br />
              </section>

            </section>
            <section className="footer-info-center"> 
              <section className="footer-info_email">
                
              </section>
              <section className="footer-info_terms">
              ©{(new Date().getFullYear())} IJW, Inc. All Rights Reserved              
              
                
              </section>
                
            </section>
            <section className="footer-info-right">
              
              <section className="footer-info_contact">
                <Link
                  to="/about" exact>
                  About This Project
                </Link>
                <br />
                <a href="mailto:william.j.german2@gmail.com">Send Us Feedback!</a>
              </section>
            </section>
        </section>
    </section>
  )
}

export default Footer