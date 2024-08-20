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

const GroupLifeInsuranceTerms = () => {
  return (
    <main>
    <Header/>
    <Container>
      <Heading>Group Life Insurance Terms and Conditions</Heading>
      <SubHeading>Understanding Your Policy</SubHeading>

      <Section>
        <SectionHeading>What is Group Life Insurance?</SectionHeading>
        <Text>
          Group Life Insurance is a type of life insurance coverage that is offered to a group of people, typically through an employer or organization. It provides a death benefit to the beneficiaries of insured individuals in the group, usually without requiring individual medical underwriting. This type of insurance is often used as an employee benefit or organizational perk.
        </Text>
      </Section>

      <Section>
        <SectionHeading>Key Features of Group Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Simplified Underwriting: No individual medical exams are typically required for members of the group.</ListItem>
          <ListItem><FaCheckCircle /> Coverage for All Members: Coverage is generally provided to all eligible members of the group.</ListItem>
          <ListItem><FaCheckCircle /> Lower Premiums: Premiums are often lower due to the collective nature of the policy.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Advantages of Group Life Insurance</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Cost-Effective: Premiums are usually lower compared to individual policies due to group discounts.</ListItem>
          <ListItem><FaCheckCircle /> Accessibility: Easier to obtain coverage as it does not typically require individual medical underwriting.</ListItem>
          <ListItem><FaCheckCircle /> Coverage for All Members: Ensures that all eligible members of the group are covered, regardless of their health status.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Disadvantages of Group Life Insurance</SectionHeading>
        <List>
          <ListItem><FaTimesCircle /> Limited Coverage: Coverage amounts may be lower compared to individual policies and may not fully meet personal needs.</ListItem>
          <ListItem><FaTimesCircle /> Lack of Portability: Coverage usually ends when you leave the group or organization, and you may not be able to continue the policy individually.</ListItem>
          <ListItem><FaTimesCircle /> One-Size-Fits-All: The policy may not be tailored to individual needs or preferences.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Who Should Consider Group Life Insurance?</SectionHeading>
        <List>
          <ListItem><FaCheckCircle /> Employers and Organizations: Those looking to provide a valuable benefit to employees or members.</ListItem>
          <ListItem><FaCheckCircle /> Individuals Seeking Cost-Effective Coverage: Those who want affordable life insurance coverage without the need for individual medical exams.</ListItem>
          <ListItem><FaCheckCircle /> People Seeking Basic Coverage: Individuals who need basic life insurance coverage without the complexities of individual policies.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionHeading>Applying for Group Life Insurance</SectionHeading>
        <Text>
          To apply for group life insurance, follow these steps:
        </Text>
        <List>
          <ListItem><FaCheckCircle /> Contact an Insurance Provider: Reach out to an insurance provider to discuss group life insurance options.</ListItem>
          <ListItem><FaCheckCircle /> Assess Group Needs: Evaluate the coverage needs of the group and determine the appropriate coverage amount.</ListItem>
          <ListItem><FaCheckCircle /> Obtain Quotes: Get quotes from various insurance providers to find the best option for the group.</ListItem>
          <ListItem><FaCheckCircle /> Enroll the Group: Enroll eligible members in the group policy.</ListItem>
          <ListItem><FaCheckCircle /> Review and Finalize: Review the policy terms and conditions and finalize the coverage for the group.</ListItem>
        </List>
      </Section>
      <Link to="/grouplife">
      <Button>Get Group Life Insurance Quote</Button>
      </Link>
    </Container>
    <Footer/>
    </main>
  );
};

export default GroupLifeInsuranceTerms;
