import React from 'react';
import { MainContainer, DivExperience, Paragraph, ParagraphCentered, ParagraphDate, ExperienceContainer, SpanColored, InfoDiv, DescriptionDiv } from './styles';
import { ExperienceTitle, H1_Revert } from '../../styles';

const Experience = ({ user }) => {
    return (
        <MainContainer>

            <ExperienceTitle>
                <H1_Revert>Experience</H1_Revert>
            </ExperienceTitle>

            <ExperienceContainer>
                {user.work.map((work, i) => (
                    <DivExperience key={i}>
                        <InfoDiv>
                            <ParagraphCentered>{work.position}<SpanColored> @ {work.company}</SpanColored></ParagraphCentered>
                            {
                                work.end.month ? (
                                    <ParagraphDate>{new Date(work.start.year, parseInt(work.start.month) - 1, 1).toLocaleString('default', { month: 'long' })} {work.start.year} - {new Date(work.end.year, work.end.month - 1, 1).toLocaleString('default', { month: 'long' })} {work.end.year}</ParagraphDate>
                                ) : (
                                    <ParagraphDate>{new Date(work.start.year, parseInt(work.start.month) - 1, 1).toLocaleString('default', { month: 'long' })} {work.start.year} - Present</ParagraphDate>
                                )

                            }
                            <ParagraphDate>{work.location}</ParagraphDate>
                        </InfoDiv>

                        <DescriptionDiv>
                            <Paragraph>{work.summary}</Paragraph>
                        </DescriptionDiv>

                    </DivExperience>
                ))}
            </ExperienceContainer>
        </MainContainer >
    )
}
export default Experience;