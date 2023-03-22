import Button from '../component/common/Button';
import Tag from '../component/common/Tag';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

test('test Button component', () => {
  const handleClick = jest.fn();

  render(
    <Button onClick={handleClick} styleType='outline'>
      Hello World!
    </Button>
  );

  const button = screen.getByRole('button');

  expect(button.innerHTML).toBe('Hello World!');
});
test('test Tag component', () => {
  render(<Tag value='111' />);

  const tag = screen.getByText(/111/);
  expect(tag).toBeInTheDocument();
});
