import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const redirectHandler = setTimeout(() => {
      navigation('/');
    }, 3000);

    return () => clearTimeout(redirectHandler);
  }, [navigation]);

  return (
    <ErrorPageContainer>
      <Title>404 - Page not found</Title>
      <Description>
        The page you are looking for does not exist.
        <br />
        3초 후 메인 페이지로 이동합니다.
      </Description>
    </ErrorPageContainer>
  );
};

export default ErrorPage;

const ErrorPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 22px;
  color: #666;
  text-align: center;
  line-height: 1.2;
`;
