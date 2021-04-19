///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
import React from 'react';
import { render, screen, act } from '@testing-library/react';

import Display from './../Display';
import mockFetchShow from '../../api/fetchShow';
import userEvent from '@testing-library/user-event';
// console.log(mockFetchShow);

//2. Test that the Display component renders without any passed in props.
test("Display renders without being passed in props", () => {
  render(<Display />);
})

//3. Rebuild or copy a show test data element as used in the previous set of tests.
const testShow = {
  //add in approprate test data structure here.
  id: 1,
  name: 'Stranger Things',
  seasons: [
    {
      id: '1',
      name: 'Season 1',
      episodes: [
        {
          id: 553946,
          image: "https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          name: "Chapter One: The Vanishing of Will Byers",
          number: 1,
          runtime: 60,
          season: 1,
          summary : "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
          type: "regular",
          url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        }
      ]
    },
    {
      id: '2',
      name: 'Season 2',
      episodes: []
    },
    {
      id: '3',
      name: 'Season 3',
      episodes: []
    },
  ]
}

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
jest.mock('../../api/fetchShow')

test('when fetch button is pressed, the Show component will display', async () => {
  mockFetchShow.mockResolvedValueOnce(testShow);
  const { rerender } = render(<Display />);
  rerender(<Display />);
  await act(async () => {
    userEvent.click(await screen.findByRole('button', {name: /press to get show data/i}));
  });
  expect(screen.findByTestId('show-container')).toBeTruthy();
  

  
})

//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
test('when fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in test data', async () => {
  mockFetchShow.mockResolvedValueOnce(testShow);
  const { rerender } = render(<Display />);
  rerender(<Display />);
  await act(async () => {
    userEvent.click(await screen.findByRole('button', {name: /press to get show data/i}));
  });
  expect(screen.findByTestId('show-container')).toBeTruthy();
  // userEvent.click(screen.findAllById('seasons'))
  // expect(await screen.findAllByLabelText(/select a season/i)).toHaveLength(3);
  const seasonDropdown = screen.getByLabelText(/select a season/i);
  expect(seasonDropdown).toHaveLength(testShow.seasons.length + 1);
});

//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
test('', () => {

});
