import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
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

const VariableUniversalLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Variable Universal Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Variable Universal Life Insurance?</SectionHeading>
        <Text>
          Variable Universal Life Insurance (VUL) is a type of permanent life insurance that combines the flexible features of universal life insurance with the investment options of variable life insurance. Policyholders can adjust premiums, death benefits, and choose from a variety of investment options.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Variable Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Flexible Premiums: Policyholders can adjust their premium payments within set limits.</ListItem>
          <ListItem><FaCheckCircle /> Investment Choices: Cash value can be invested in various market-based options.</ListItem>
          <ListItem><FaCheckCircle /> Adjustable Death Benefit: Death benefits can be modified as needed.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Variable Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Investment Flexibility: Allows for potential growth of the cash value based on investment performance.</ListItem>
          <ListItem><FaCheckCircle /> Tax-Deferred Growth: Cash value accumulates on a tax-deferred basis.</ListItem>
          <ListItem><FaCheckCircle /> Lifelong Coverage: Provides coverage for the insured's entire life, as long as premiums are maintained.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Variable Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Market Risk: The cash value and death benefit can fluctuate based on market performance.</ListItem>
          <ListItem><FaTimesCircle /> Higher Costs: Typically has higher premiums and fees due to the investment component.</ListItem>
          <ListItem><FaTimesCircle /> Complexity: The policy can be complex to manage, requiring careful attention to investment performance.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Variable Universal Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals seeking flexible premium payments and death benefits.</ListItem>
          <ListItem><FaCheckCircle /> Those interested in investment opportunities within their life insurance policy.</ListItem>
          <ListItem><FaCheckCircle /> People looking for lifelong coverage with potential for cash value growth.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Variable Universal Life Insurance</SectionHeading>
        <Text>
          To apply for variable universal life insurance, you typically need to follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Assess your financial goals, obligations, and risk tolerance.</ListItem>
          <ListItem><FaCheckCircle /> Choose Investment Options: Select from a range of investment choices to match your financial goals.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different providers to find the best fit for your needs.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Provide personal and health information as part of the application process.</ListItem>
          <ListItem><FaCheckCircle /> Undergo a Medical Exam: A medical exam may be required to assess your health.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Once approved, carefully review the policy terms before accepting coverage.</ListItem>
        </List>
      </Section>
      <Link to="/variableuniversallife">
      <Button>Apply for Variable Universal Life Insurance</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default VariableUniversalLifeInsuranceTerms;
