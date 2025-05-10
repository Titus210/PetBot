import  { useState } from 'react';
import styled from 'styled-components';
import data from '../../../assets/data/helpInfo';

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const Subtitle = styled.h2`
  color: #555;
  margin-top: 10px;
  font-size: 1.4rem;
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const Explanation = styled.div`
  margin-left: 20px;
`;

const HelpSupport: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState('');

  const handleDropdownClick = (category: string) => {
    setOpenDropdown(openDropdown === category ? '' : category);
  };

  return (
    <Container>
      <Title>Help and Support</Title>

      {data.map((categoryData, index) => (
        <div key={index}>
          <Subtitle onClick={() => handleDropdownClick(categoryData.category)}>
            {categoryData.category}
          </Subtitle>
          {openDropdown === categoryData.category && (
            <List>
              {categoryData.items.map((item, itemIndex) => (
                <ListItem key={itemIndex}>
                  <Subtitle onClick={() => handleDropdownClick(item.heading)}>
                    {item.heading}
                  </Subtitle>
                  {openDropdown === item.heading && (
                    <Explanation>{item.explanation}</Explanation>
                  )}
                </ListItem>
              ))}
            </List>
          )}
        </div>
      ))}

      <Subtitle>Contact Us</Subtitle>
      <Explanation>
        If you have any further questions or need assistance, please feel free to reach out to our support team at
        support@petbot.com. Our team is available 24/7 to help you with any issues or concerns you may have.
      </Explanation>
    </Container>
  );
};

export default HelpSupport;
