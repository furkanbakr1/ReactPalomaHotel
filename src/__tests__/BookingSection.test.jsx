import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingSection from '../components/BookingSection';
import { BrowserRouter } from 'react-router-dom';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

describe('BookingSection', () => {
  it('navigates with selected data on confirm', async () => {
    render(<BookingSection />, { wrapper: BrowserRouter });

    // open reservation calendar
    userEvent.click(screen.getAllByTestId('ExpandLessIcon')[0]);

    // select two dates
    userEvent.click(screen.getByRole('button', { name: '5' }));
    userEvent.click(screen.getByRole('button', { name: '10' }));

    // increase adults and children
    userEvent.click(screen.getAllByTestId('AddIcon')[0]);
    userEvent.click(screen.getAllByTestId('AddIcon')[1]);

    // confirm
    userEvent.click(screen.getByRole('button', { name: /Onayla/i }));

    expect(mockedNavigate).toHaveBeenCalledWith('/roomSelection', {
      state: { selectedDates: [5, 10], adults: 2, children: 1 },
    });
  });
});
