import React from 'react';
import { Paragraph, ColorBlockStart, H1 } from '../../styles';
import { Unscrollable, HomeDiv, ImageBlock, ImageOfMe, SpanColored, SkillsList } from './styles';

const recentSkills = ['JavaScript (ES6+)', 'Electron', 'React', 'Angular', 'Node.js', 'Java'];

class About extends React.Component {

  constructor(user) {
    super(user);
    this.setState(user);
  }
  render() {
    return (
      <HomeDiv>
        <ColorBlockStart>
          <H1>About Me</H1>
          <Unscrollable>
            <Paragraph>Hello, My name is <SpanColored>Valeriu</SpanColored> and I love creating websites and applications. </Paragraph>
            <Paragraph>I'm a <SpanColored>Full Stack Developer</SpanColored> located in Canada. I have a serious passion for computers, software, and everything related to the IT world. </Paragraph>
            <Paragraph><SpanColored>Fast-learner</SpanColored> and well-organized person, problem solver, independent employee with high attention to detail. I love animals, snowboarding, video games, films, and TV series.</Paragraph>
            <Paragraph><SpanColored>Interested</SpanColored> in the entire development spectrum and working on ambitious projects with positive people.</Paragraph>
            <Paragraph>Here are a few technologies I’ve been working with recently:</Paragraph>
            <div>
              <SkillsList>
                {recentSkills.map((skill, i) => (
                  <li key={i}>
                    {skill}
                  </li>
                ))}
              </SkillsList>
            </div>
          </Unscrollable>
        </ColorBlockStart>
        <ImageBlock>
          <ImageOfMe data-main-image="" sizes="(min-width: 500px) 500px, 100vw" decoding="async" src={require('./Photo.jpg')} alt="NoImage?"></ImageOfMe>
        </ImageBlock>
      </HomeDiv>
    );
  }
}

export default About;