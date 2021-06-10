import styled from "styled-components";

const CardStyles = styled.div`
  /* border: 1px solid black; */
  display: flex;
  color: var(--darkGreen);
  font-size: 0.75em;
  min-width: 350px;
  align-items: center;
  padding: 0.5em;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0px 8px 14px 2.5px rgba(0, 0, 0, 0.3);
  }
  .cardIcon {
    margin-right: 1rem;
    width: 60px;
    display: flex;
  }
`;

const IconCard = ({ icon, content }) => {
  return (
    <CardStyles>
      <div className="cardIcon">{icon}</div>
      {content}
    </CardStyles>
  );
};

export default IconCard;
