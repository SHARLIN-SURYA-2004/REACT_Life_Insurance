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

const IndexedUniversalLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Indexed Universal Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Indexed Universal Life Insurance?</SectionHeading>
        <Text>
          Indexed Universal Life Insurance (IUL) is a type of permanent life insurance that combines flexible premiums and adjustable death benefits with a cash value component linked to a stock market index. The cash value grows based on the performance of the chosen index, offering potential for higher returns while providing protection against market losses.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Indexed Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Flexible Premiums: Premium payments can be adjusted within certain limits based on your financial needs.</ListItem>
          <ListItem><FaCheckCircle /> Indexed Growth: Cash value growth is tied to a stock market index, providing potential for higher returns.</ListItem>
          <ListItem><FaCheckCircle /> Adjustable Death Benefit: The death benefit amount can be increased or decreased as needed.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Indexed Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Potential for Growth: Cash value may grow based on the performance of the linked index.</ListItem>
          <ListItem><FaCheckCircle /> Protection Against Losses: There is typically a guaranteed minimum interest rate, which protects against market downturns.</ListItem>
          <ListItem><FaCheckCircle /> Flexibility: Offers adjustable premiums and death benefits to match changing needs and financial situations.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Indexed Universal Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Market Risk: The cash value growth is tied to market performance and can be affected by index fluctuations.</ListItem>
          <ListItem><FaTimesCircle /> Caps on Gains: Growth potential is usually capped, limiting the maximum return on cash value.</ListItem>
          <ListItem><FaTimesCircle /> Complexity: The policy can be complex, requiring careful management of premiums and investment options.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Indexed Universal Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals seeking a combination of flexible premiums and investment opportunities.</ListItem>
          <ListItem><FaCheckCircle /> Those who want potential for cash value growth linked to market performance with protection against losses.</ListItem>
          <ListItem><FaCheckCircle /> People looking for lifelong coverage with the flexibility to adjust premiums and death benefits.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Indexed Universal Life Insurance</SectionHeading>
        <Text>
          To apply for indexed universal life insurance, follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Assess your financial goals, obligations, and risk tolerance.</ListItem>
          <ListItem><FaCheckCircle /> Choose an Index: Select a stock market index that aligns with your financial objectives.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different insurance providers to find the best option.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Complete an application form with personal and health information.</ListItem>
          <ListItem><FaCheckCircle /> Undergo a Medical Exam: A medical exam may be required to assess your health status.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Carefully review policy terms and conditions before accepting the coverage.</ListItem>
        </List>
      </Section>
      <Link to="/indexeduniversallife">
      <Button>Apply for Indexed Universal Life Insurance</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default IndexedUniversalLifeInsuranceTerms;
