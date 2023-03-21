import React from 'react';
import styled from 'styled-components';

const AdminHeader = () => {
  return (
    <AdminHeaderWrapper>
      <Title>Today's Orders</Title>
    </AdminHeaderWrapper>
  );
};

const AdminHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  flex: 0 0 auto;
`;

const Title = styled.h2`
  margin-right: auto;
  font-size: 2rem;
  font-weight: 700;
`;

export default AdminHeader;
