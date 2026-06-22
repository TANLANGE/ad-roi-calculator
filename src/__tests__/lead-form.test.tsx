import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LeadForm from '@/components/lead-form';

describe('LeadForm', () => {
  it('shows success message after submitting name and contact', async () => {
    const user = userEvent.setup();
    render(<LeadForm source="test" />);

    const nameInput = screen.getByLabelText(/称呼/);
    const contactInput = screen.getByLabelText(/联系方式/);

    await user.type(nameInput, '张三');
    await user.type(contactInput, '13800138000');

    const button = screen.getByRole('button', { name: /保存结果并获取报告/ });
    await user.click(button);

    expect(
      screen.getByText('已收到，我们会把结果整理思路留给你。')
    ).toBeInTheDocument();
  });

  it('does not submit when fields are empty', async () => {
    const user = userEvent.setup();
    render(<LeadForm source="test" />);

    const button = screen.getByRole('button', { name: /保存结果并获取报告/ });
    await user.click(button);

    expect(
      screen.queryByText('已收到，我们会把结果整理思路留给你。')
    ).not.toBeInTheDocument();
  });

  it('renders a hidden source field', () => {
    render(<LeadForm source="roi" />);

    const hiddenInput = document.querySelector('input[name="source"]') as HTMLInputElement;
    expect(hiddenInput).toBeInTheDocument();
    expect(hiddenInput.value).toBe('roi');
  });
});
