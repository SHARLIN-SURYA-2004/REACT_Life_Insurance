import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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

const UniversalLifeInsuranceTerms = () => {
  return (
    <main>
      <Header/>
    <Container>
      <Heading>Universal Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Universal Life Insurance?</SectionHeading>
        <Text>
          Universal Life Insurance is a type of permanent life insurance that provides flexibility in premium payments and death benefits. It combines a death benefit with a savings component, which earns interest based on current market rates. Policyholders can adjust their premiums and death benefits within certain limits.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Flexible Premiums: Policyholders can adjust their premium payments within certain limits.</ListItem>
          <ListItem><FaCheckCircle /> Adjustable Death Benefit: The death benefit can be increased or decreased as needed.</ListItem>
          <ListItem><FaCheckCircle /> Cash Value: The policy accumulates cash value that earns interest based on current market rates.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Flexibility: Adjustable premiums and death benefits to match policyholder needs.</ListItem>
          <ListItem><FaCheckCircle /> Cash Value Growth: The savings component earns interest, potentially increasing over time.</ListItem>
          <ListItem><FaCheckCircle /> Lifelong Coverage: Provides coverage for the insured's entire life, as long as premiums are paid.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Complexity: The policy can be more complex to understand due to its flexibility and cash value component.</ListItem>
          <ListItem><FaTimesCircle /> Higher Costs: Universal life insurance typically has higher premiums compared to term life insurance.</ListItem>
          <ListItem><FaTimesCircle /> Interest Rate Fluctuations: Cash value growth depends on market interest rates, which can vary.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Universal Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals seeking flexible premium payments and death benefits.</ListItem>
          <ListItem><FaCheckCircle /> People looking for a policy that accumulates cash value.</ListItem>
          <ListItem><FaCheckCircle /> Those who want lifelong coverage with the potential for cash value growth.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Universal Life Insurance</SectionHeading>
        <Text>
          To apply for universal life insurance, you typically need to follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Assess your financial situation and future obligations.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different insurance providers.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Provide personal and health information.</ListItem>
          <ListItem><FaCheckCircle /> Undergo a Medical Exam: Some policies require a medical exam.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Once approved, review the policy details and accept the coverage.</ListItem>
        </List>
      </Section>
      <Link to="/universallife">
    <Button>Apply for Universal Life Insurance</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default UniversalLifeInsuranceTerms;
