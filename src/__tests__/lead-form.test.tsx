import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LeadForm from '@/components/lead-form';

// 覆盖 Formspree 提交，避免真实网络请求
function mockSuccessfulFetch() {
  return vi.spyOn(global, 'fetch').mockResolvedValueOnce({
    ok: true,
  } as Response);
}

describe('LeadForm', () => {
  it('shows success message after submitting name and contact', async () => {
    mockSuccessfulFetch();
    const user = userEvent.setup();
    render(<LeadForm source="test" />);

    const nameInput = screen.getByLabelText(/称呼/);
    const contactInput = screen.getByLabelText(/联系方式/);

    await user.type(nameInput, '张三');
    await user.type(contactInput, '13800138000');

    const button = screen.getByRole('button', { name: /保存结果并获取报告/ });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(/已收到/)).toBeInTheDocument();
    });
  });

  it('does not submit when fields are empty', async () => {
    const user = userEvent.setup();
    render(<LeadForm source="test" />);

    const button = screen.getByRole('button', { name: /保存结果并获取报告/ });
    await user.click(button);

    expect(screen.getByText(/留下联系方式/)).toBeInTheDocument();
  });

  it('renders the form with title and fields', () => {
    render(<LeadForm source="roi" />);

    expect(screen.getByRole('heading', { name: '保存结果并获取报告' })).toBeInTheDocument();
    expect(screen.getByLabelText(/称呼/)).toBeInTheDocument();
    expect(screen.getByLabelText(/联系方式/)).toBeInTheDocument();
  });
});
