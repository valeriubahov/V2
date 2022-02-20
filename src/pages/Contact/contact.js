import React from 'react';
import { H3 } from '../../components/StartPage/styles';
import { SpanColored } from '../WorkExperience/styles';
import { MainContainer, Paragraph, Footer, StyledLink } from './styles';


const Contact = (props) => {
    return (
        <>
            <MainContainer>
                <H3>Get In Touch</H3>
                <Paragraph><SpanColored>Currently I'm looking for new opportunities.</SpanColored><br></br> Whether you have a question or just want to say hi, you can reach me on Facebook, LinkedIn or Email me.<br></br> I’ll try my best to get back to you!</Paragraph>
            </MainContainer>
            <Footer><StyledLink href="https://github.com/valeriubahov/portfolio" rel="noopener noreferrer" target="_blank"><div>Designed &amp; Built by Bahov Valeriu</div></StyledLink></Footer>
        </>
    )
}

export default Contact;