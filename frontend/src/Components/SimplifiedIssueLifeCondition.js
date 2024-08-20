import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

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

const SimplifiedIssueLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Simplified Issue Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Simplified Issue Life Insurance?</SectionHeading>
        <Text>
          Simplified Issue Life Insurance is a type of life insurance that requires less medical underwriting compared to traditional policies. Applicants answer a few health-related questions but are not required to undergo a medical exam. This policy is designed for those seeking coverage without extensive medical scrutiny.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Simplified Issue Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> No Medical Exam Required: The application process does not include a medical exam, only a health questionnaire.</ListItem>
          <ListItem><FaCheckCircle /> Faster Approval: The approval process is quicker compared to traditional policies due to reduced medical requirements.</ListItem>
          <ListItem><FaCheckCircle /> Fixed Premiums: Premiums are consistent and easy to budget for.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Simplified Issue Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Accessibility: Easier to qualify for compared to traditional life insurance, especially for those with minor health issues.</ListItem>
          <ListItem><FaCheckCircle /> Quick Process: The application process is streamlined and faster.</ListItem>
          <ListItem><FaCheckCircle /> Predictable Costs: Fixed premiums make it straightforward to manage your budget.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Simplified Issue Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Higher Premiums: Premiums may be higher compared to fully underwritten policies due to the reduced medical screening.</ListItem>
          <ListItem><FaTimesCircle /> Limited Coverage: Coverage amounts may be lower than traditional policies.</ListItem>
          <ListItem><FaTimesCircle /> Health Questions: Despite no medical exam, the health questionnaire might still affect eligibility and premiums.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Simplified Issue Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals with Minor Health Issues: Those who may not qualify for traditional life insurance but have manageable health conditions.</ListItem>
          <ListItem><FaCheckCircle /> Busy Individuals: Those seeking a quick and straightforward application process.</ListItem>
          <ListItem><FaCheckCircle /> People Needing Immediate Coverage: Individuals who need life insurance coverage quickly without extensive delays.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Simplified Issue Life Insurance</SectionHeading>
        <Text>
          To apply for simplified issue life insurance, follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Assess your financial needs and choose an appropriate coverage amount.</ListItem>
          <ListItem><FaCheckCircle /> Complete Health Questionnaire: Answer the health-related questions accurately.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different insurers to find the best option for you.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Complete the application process online or through an agent.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Carefully review the terms and conditions before accepting the coverage.</ListItem>
        </List>
      </Section>
      <Link to="/simplifiedissuelife">
      <Button>Apply for Simplified Issue Life Insurance</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default SimplifiedIssueLifeInsuranceTerms;
