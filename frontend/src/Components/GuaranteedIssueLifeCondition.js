import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  padding: 40px;
  background: white;
  color: #333;
  border-radius: 8px;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top:50px;
  margin-bottom:50px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2575fc;
  text-align: center;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #6a11cb;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 10px;
`;

const SectionHeading = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #2575fc;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #666;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 50px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  font-size: 1rem;
  display: flex;
  height:20px;
  align-items: center;
  background: white;

  & svg {
    margin-right: 10px;
    color: #2575fc;
  }
`;

const Button = styled.button`
  background: #34da89;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  display: block;
  margin: 20px auto;
  text-align: center;

  &:hover {
    background: #50C878;
  }
`;

const GuaranteedIssueLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Guaranteed Issue Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Guaranteed Issue Life Insurance?</SectionHeading>
        <Text>
          Guaranteed Issue Life Insurance is a type of life insurance policy that guarantees acceptance without requiring a medical exam or health questions. This policy is designed to provide coverage to individuals who may not qualify for other types of life insurance due to health conditions or advanced age.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Guaranteed Issue Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> No Medical Exam Required: Applicants do not need to undergo a medical exam or answer detailed health questions.</ListItem>
          <ListItem><FaCheckCircle /> Guaranteed Acceptance: As long as you meet the basic eligibility requirements, acceptance is guaranteed.</ListItem>
          <ListItem><FaCheckCircle /> Fixed Premiums: Premiums remain consistent, providing predictable costs.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Guaranteed Issue Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Accessibility: Provides coverage to those who may not qualify for traditional life insurance.</ListItem>
          <ListItem><FaCheckCircle /> Simplicity: The application process is straightforward with no medical exams required.</ListItem>
          <ListItem><FaCheckCircle /> Predictable Costs: Fixed premiums make budgeting easier and avoid unexpected premium increases.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Guaranteed Issue Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Higher Premiums: Premiums are typically higher compared to other life insurance policies due to the guaranteed acceptance.</ListItem>
          <ListItem><FaTimesCircle /> Limited Coverage Amounts: Coverage amounts may be lower compared to other types of policies.</ListItem>
          <ListItem><FaTimesCircle /> Limited Benefits: There may be restrictions or a waiting period before full benefits are payable.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Guaranteed Issue Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals with Health Issues: Those who have difficulty qualifying for traditional life insurance due to health conditions.</ListItem>
          <ListItem><FaCheckCircle /> Seniors: Older individuals who may face challenges with obtaining coverage due to age or health.</ListItem>
          <ListItem><FaCheckCircle /> Those Seeking Simplicity: Individuals looking for a straightforward application process without medical requirements.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Guaranteed Issue Life Insurance</SectionHeading>
        <Text>
          To apply for guaranteed issue life insurance, follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Evaluate your financial needs and decide on the appropriate coverage amount.</ListItem>
          <ListItem><FaCheckCircle /> Check Eligibility: Ensure you meet the basic eligibility requirements for the policy.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different insurance providers to find the best option.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Complete the application form, providing necessary personal information.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Review the policy terms and conditions carefully before accepting the coverage.</ListItem>
        </List>
      </Section>
      <Link to="/guaranteedissuelife">
      <Button>Apply for Guaranteed Issue Life Insurance</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default GuaranteedIssueLifeInsuranceTerms;
