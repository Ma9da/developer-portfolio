import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Education, Contacts, Projects, Achievement, Experience, Footer, Services } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Experience />
            <Services/>
            <Achievement />
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
