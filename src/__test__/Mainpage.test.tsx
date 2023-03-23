import Mainpage from './../pages/Mainpage';
import { setup, renderAll } from './setup.test';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Mainpage', () => {
  beforeEach(() => {
    setup();
    renderAll(<Mainpage />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('검색창에 검색하는 단어를 포함한 이름의 고객이 표에 보여져야한다.', async () => {
    const keyword = 'Holmes Howard';
    const searchBar = (await screen.findByTestId(
      'admin-search-bar'
    )) as HTMLInputElement;

    userEvent.type(searchBar, keyword);

    const userIdCell = await screen.findAllByTestId(
      'table-body-cell-customer_name'
    );

    userIdCell.forEach(id => {
      expect(id).toHaveTextContent(keyword);
    });
  });
});
