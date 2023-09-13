import styled from 'styled-components';

const CustomTooltip = ({active, payload}: any) => {
  if (active && payload) {
    return (
      <StyledCustomTooltip>
        <p className='location'>{`${payload[0].payload.id}`}</p>
        {payload.map((data: any, index: number) => (
          <p key={index} style={{color: data.color}}>
            {`${data.name}: ${data.value}`}
          </p>
        ))}
      </StyledCustomTooltip>
    );
  }

  return null;
};

export default CustomTooltip;

const StyledCustomTooltip = styled.div`
  background-color: white;
  padding: 15px 10px;
  border-radius: 10px;
  border: 1px solid cornflowerblue;

  .location {
    padding-bottom: 5px;
    font-weight: 600;
  }
`;
