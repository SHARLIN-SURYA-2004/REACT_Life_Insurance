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

const TermLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Term Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Term Life Insurance?</SectionHeading>
        <Text>
          Term Life Insurance is a type of life insurance policy that provides coverage for a specified period, or "term." If the insured person dies during this term, a death benefit is paid out to the beneficiaries. If the term expires and the insured is still alive, the policy typically terminates with no payout, unless it is renewed or converted into a different type of policy.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Term Life Insurance</SectionHeading>
        <List>
          <ListItem className='li-con'><FaCheckCircle /> Fixed Coverage Period: Coverage is provided for a specific term, such as 10, 20, or 30 years.</ListItem>
          <ListItem className='li-con'><FaCheckCircle /> Death Benefit: If the insured passes away during the term, the beneficiaries receive the death benefit.</ListItem>
          <ListItem className='li-con'><FaCheckCircle /> No Cash Value: Unlike whole life insurance, term life insurance does not accumulate cash value.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Term Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Affordability: Lower premiums compared to permanent life insurance.</ListItem>
          <ListItem><FaCheckCircle /> Simplicity: The policy is straightforward and easy to understand.</ListItem>
          <ListItem><FaCheckCircle /> Flexibility: Various term lengths are available to match your needs.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Term Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> No Savings Component: There is no cash value; if the policyholder outlives the term, there is no payout.</ListItem>
          <ListItem><FaTimesCircle /> Increasing Premiums with Age: Renewal after the term ends can be costly as premiums increase with age.</ListItem>
          <ListItem><FaTimesCircle /> Temporary Coverage: Once the term ends, the coverage stops unless the policy is renewed or converted.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Term Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Individuals with dependents who rely on their income.</ListItem>
          <ListItem><FaCheckCircle /> People with specific financial obligations, such as a mortgage or children's education.</ListItem>
          <ListItem><FaCheckCircle /> Those seeking a cost-effective way to provide financial security for their family.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Term Life Insurance</SectionHeading>
        <Text>
          To apply for term life insurance, you typically need to follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Determine Coverage Needs: Consider factors such as income, debts, future expenses, and financial goals.</ListItem>
          <ListItem><FaCheckCircle /> Choose a Term Length: Select a term that aligns with your financial obligations and goals.</ListItem>
          <ListItem><FaCheckCircle /> Get Quotes: Compare quotes from different insurance providers to find the best rates and terms.</ListItem>
          <ListItem><FaCheckCircle /> Submit an Application: Fill out an application form with personal and health information.</ListItem>
          <ListItem><FaCheckCircle /> Undergo a Medical Exam: Some policies require a medical exam to assess your health.</ListItem>
          <ListItem><FaCheckCircle /> Review and Accept the Policy: Once approved, review the policy details and accept the coverage.</ListItem>
        </List>
      </Section>

      <Link to="/termlife">
      <Button>Apply for Term Life Insurance</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default TermLifeInsuranceTerms;
