import { render, fireEvent } from '@testing-library/react';
import LabelledInput from './LabelledInput';

describe('LabelledInput Component', () => {
  test('renders input correctly', () => {
    const { getByLabelText } = render(
      <LabelledInput
        inputName="testInput"
        inputValue="42"
        onInputChange={() => {}}
        inputLabel="Test Label"
      />
    );

    const inputElement = getByLabelText('Test Label');
    expect(inputElement).toBeInTheDocument();
  });

  test('handles input change', () => {
    const mockInputChange = jest.fn();
    const { getByLabelText } = render(
      <LabelledInput
        inputName="testInput"
        inputValue="42"
        onInputChange={mockInputChange}
        inputLabel="Test Label"
      />
    );

    const inputElement = getByLabelText('Test Label');
    fireEvent.change(inputElement, { target: { value: '123' } });

    expect(mockInputChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test('applies error class when hasError is true', () => {
    const { container } = render(
      <LabelledInput
        inputName="testInput"
        inputValue="42"
        onInputChange={() => {}}
        inputLabel="Test Label"
        hasError
      />
    );

    const inputElement = container.querySelector('.beautiful-input');
    expect(inputElement).toHaveClass('error-border');
  });

  test('does not apply error class when hasError is false', () => {
    const { container } = render(
      <LabelledInput
        inputName="testInput"
        inputValue="42"
        onInputChange={() => {}}
        inputLabel="Test Label"
      />
    );

    const inputElement = container.querySelector('.beautiful-input');
    expect(inputElement).not.toHaveClass('error-border');
  });
});
