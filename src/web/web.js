import React, { Component } from 'react';
import Header from '../components/header';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import Main from '../components/main';
import Footer from '../components/footer';

class WebView extends Component {
    render() {
        return(
            <div className="web">
                <Header />
                <NavBar />
                <section className="middle">
                    <SideBar />
                    <Main />
                </section>
                <Footer />
            </div>
        )
    }
}

export default WebView;