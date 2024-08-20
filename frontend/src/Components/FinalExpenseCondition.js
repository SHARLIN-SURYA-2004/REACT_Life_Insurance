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

const FinalExpenseLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Final Expense Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Final Expense Life Insurance?</SectionHeading>
        <Text>
          Final Expense Life Insurance is a type of life insurance specifically designed to cover funeral and burial costs, as well as other end-of-life expenses. It provides a smaller death benefit compared to other types of life insurance, typically ranging from $5,000 to $25,000, which is intended to ease the financial burden on your loved ones.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Final Expense Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Simplified Underwriting: Typically, no medical exam is required; approval is often based on answers to health questions.</ListItem>
          <ListItem><FaCheckCircle /> Fixed Premiums: Premiums remain level and do not increase over time.</ListItem>
          <ListItem><FaCheckCircle /> Whole Life Coverage: The policy lasts for the lifetime of the insured, as long as premiums are paid.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Final Expense Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Affordable Premiums: Generally more affordable than larger life insurance policies due to the smaller coverage amount.</ListItem>
          <ListItem><FaCheckCircle /> Easy to Qualify: Easier to obtain compared to traditional life insurance, especially for older adults or those with health issues.</ListItem>
          <ListItem><FaCheckCircle /> Peace of Mind: Ensures that your loved ones will not have to bear the financial burden of final expenses.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Final Expense Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Limited Coverage: The death benefit may not be sufficient to cover all financial obligations, especially if there are debts or ongoing expenses.</ListItem>
          <ListItem><FaTimesCircle /> Higher Cost Per Dollar: Compared to term life insurance, the cost per dollar of coverage is higher due to the smaller coverage amounts and whole life nature of the policy.</ListItem>
          <ListItem><FaTimesCircle /> Not a Savings Vehicle: Unlike other types of whole life insurance, Final Expense Insurance is not intended as an investment or savings tool.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Final Expense Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals Without Savings for Funeral Costs: Those who do not have sufficient savings set aside for final expenses.</ListItem>
          <ListItem><FaCheckCircle /> Older Adults Seeking Permanent Coverage: Those who want lifelong coverage without the need for a medical exam.</ListItem>
          <ListItem><FaCheckCircle /> People Seeking Simplified Application: Those looking for a straightforward and quick application process.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Final Expense Life Insurance</SectionHeading>
        <Text>
          To apply for final expense life insurance, follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Research Policies: Compare different final expense policies to find one that meets your needs.</ListItem>
          <ListItem><FaCheckCircle /> Complete the Application: Fill out an application with basic personal and health information.</ListItem>
          <ListItem><FaCheckCircle /> Answer Health Questions: Provide answers to a few basic health questions (no medical exam required).</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Carefully review the policy details and accept the coverage.</ListItem>
          <ListItem><FaCheckCircle /> Start Paying Premiums: Begin paying your premiums to keep the policy active.</ListItem>
        </List>
      </Section>
      <Link to="/finalexpense">
      <Button>Get Final Expense Life Insurance Quote</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default FinalExpenseLifeInsuranceTerms;
