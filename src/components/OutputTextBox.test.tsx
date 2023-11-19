import { render } from '@testing-library/react';
import OutputTextBox from './OutputTextBox';

describe('OutputTextBox Component', () => {
  test('renders with output text', () => {
    const outputText = 'Sample output text';
    const { getByText } = render(<OutputTextBox outputText={outputText} />);

    const outputTextElement = getByText(outputText);
    expect(outputTextElement).toBeInTheDocument();
    expect(outputTextElement).toHaveClass('json-box');
  });

  test('renders without output text', () => {
    const { container } = render(<OutputTextBox />);
    
    // Assuming you want to test that the component renders without output text
    expect(container.querySelector('.json-box')).toBeEmptyDOMElement();
  });
});
