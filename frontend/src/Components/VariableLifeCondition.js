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

const VariableLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Variable Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Variable Life Insurance?</SectionHeading>
        <Text>
          Variable Life Insurance is a type of permanent life insurance that provides a death benefit as well as a savings component. The savings component can be invested in various market securities, allowing the cash value and death benefit to fluctuate based on the performance of the investments.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Variable Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Investment Component: Policyholders can allocate cash value among different investment options.</ListItem>
          <ListItem><FaCheckCircle /> Permanent Coverage: Provides lifelong coverage as long as premiums are paid.</ListItem>
          <ListItem><FaCheckCircle /> Death Benefit Flexibility: The death benefit can increase or decrease based on the performance of the investments.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Variable Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Growth Potential: Offers the potential for significant cash value growth.</ListItem>
          <ListItem><FaCheckCircle /> Tax Benefits: Cash value growth is tax-deferred.</ListItem>
          <ListItem><FaCheckCircle /> Lifelong Coverage: Provides coverage for the insured's entire life, as long as premiums are paid.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Variable Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Market Risk: Cash value and death benefit are subject to market fluctuations.</ListItem>
          <ListItem><FaTimesCircle /> Complexity: The policy can be complex to manage due to investment choices.</ListItem>
          <ListItem><FaTimesCircle /> Higher Costs: Typically has higher premiums compared to other life insurance policies.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Variable Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals comfortable with investment risks.</ListItem>
          <ListItem><FaCheckCircle /> People seeking potential cash value growth.</ListItem>
          <ListItem><FaCheckCircle /> Those wanting lifelong coverage with investment opportunities.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Variable Life Insurance</SectionHeading>
        <Text>
          To apply for variable life insurance, follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Assess your financial situation and risk tolerance.</ListItem>
          <ListItem><FaCheckCircle /> Choose Investment Options: Review and select from available investment choices.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different insurance providers.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Provide personal and health information.</ListItem>
          <ListItem><FaCheckCircle /> Undergo a Medical Exam: Some policies require a medical exam.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Once approved, review policy details and accept the coverage.</ListItem>
        </List>
      </Section>
      <Link to="/variablelifecondition">
    <Button>Apply for Variable Life Insurance</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default VariableLifeInsuranceTerms;
