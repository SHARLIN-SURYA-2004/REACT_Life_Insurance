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

const WholeLifeInsuranceTerms = () => {
  return (
    <main>
      <Header/>
    <Container>
      <Heading>Whole Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Whole Life Insurance?</SectionHeading>
        <Text>
          Whole Life Insurance is a type of permanent life insurance that provides lifelong coverage. As long as the premiums are paid, the policy remains in force, and a death benefit is paid to the beneficiaries upon the insured person's death. Whole life insurance also includes a savings component, known as cash value, which grows over time.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Whole Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Lifetime Coverage: Whole life insurance provides coverage for the insured's entire life, as long as premiums are paid.</ListItem>
          <ListItem><FaCheckCircle /> Death Benefit: A guaranteed death benefit is paid to the beneficiaries upon the insured's death.</ListItem>
          <ListItem><FaCheckCircle /> Cash Value: The policy accumulates cash value over time, which can be borrowed against or withdrawn.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Whole Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Guaranteed Death Benefit: Provides financial security to beneficiaries.</ListItem>
          <ListItem><FaCheckCircle /> Cash Value Accumulation: The policy builds cash value that can be used during the policyholder's lifetime.</ListItem>
          <ListItem><FaCheckCircle /> Fixed Premiums: Premiums remain level throughout the life of the policy.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Whole Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Higher Premiums: Whole life insurance typically has higher premiums compared to term life insurance.</ListItem>
          <ListItem><FaTimesCircle /> Complexity: The policy can be more complex to understand due to its savings component.</ListItem>
          <ListItem><FaTimesCircle /> Limited Investment Control: The insurer manages the cash value investment, limiting policyholder control.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Whole Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals seeking lifelong coverage.</ListItem>
          <ListItem><FaCheckCircle /> People who want to accumulate cash value.</ListItem>
          <ListItem><FaCheckCircle /> Those looking for a guaranteed death benefit for their beneficiaries.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Whole Life Insurance</SectionHeading>
        <Text>
          To apply for whole life insurance, you typically need to follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Assess your financial situation and future obligations.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different insurance providers.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Provide personal and health information.</ListItem>
          <ListItem><FaCheckCircle /> Undergo a Medical Exam: Some policies require a medical exam.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Once approved, review the policy details and accept the coverage.</ListItem>
        </List>
      </Section>
    <Link to="/wholelife">
    <Button>Apply for Whole Life Insurance</Button>
    </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default WholeLifeInsuranceTerms;
