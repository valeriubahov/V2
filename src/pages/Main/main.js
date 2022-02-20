import React from 'react';
import { Element } from 'react-scroll'
import StartPage from '../../components/StartPage';
import Home from '.././About';
import Experience from '.././WorkExperience';
// import Education from '.././Education';
import Layout from '../../components/Layout';
import Contact from '../Contact/contact';


class Main extends React.Component {
    constructor(user) {
        super(user);
        this.setState({ user });
    }
    render() {
        return (
            <>
                <Layout user={this.props.user}>
                    <Element id='home' name='home'>
                        <StartPage user={this.props.user} />
                    </Element>
                    <Element id='about' name='about'>
                        <Home user={this.props.user}></Home>
                    </Element>
                    <Element id='experience' name='work'>
                        <Experience user={this.props.user}></Experience>
                    </Element>
                    <Contact></Contact>
                </Layout>
            </>
        )
    }
}
export default Main;