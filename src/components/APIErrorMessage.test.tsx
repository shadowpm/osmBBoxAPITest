import { render } from '@testing-library/react';
import APIErrorMessage from './APIErrorMessage';

describe('APIErrorMessage Component', () => {
  test('renders with error message', () => {
    const errorMessage = 'An error occurred!';
    const { getByText } = render(<APIErrorMessage erorMessage={errorMessage} />);

    const errorTextElement = getByText(errorMessage);
    expect(errorTextElement).toBeInTheDocument();
    expect(errorTextElement).toHaveClass('error-text');
  });
});
