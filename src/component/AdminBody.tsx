import { COMMON_COLOR } from './../constants/colors';
import Table from './common/Table';
import styled from 'styled-components';

const AdminBody = () => {
  const dummyColumns = [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Price',
      accessorKey: 'price',
    },
    {
      header: 'Quantity',
      accessorKey: 'quantity',
    },
  ];

  const dummyData = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        price: 100,
        quantity: 1,
      });
    }
    return items;
  };

  return (
    <AdminBodyWrapper>
      <Table data={dummyData()} columns={dummyColumns} />
    </AdminBodyWrapper>
  );
};

const AdminBodyWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 -32px;
  border-top: 1px solid ${COMMON_COLOR.border};
  border-bottom: 1px solid ${COMMON_COLOR.border};
  overflow-y: auto;
`;

export default AdminBody;
