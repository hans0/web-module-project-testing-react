import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';


//Tasks:
//1. Build an example data structure that contains the show data in the correct format. 
//A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
const testShow = {
  //add in approprate test data structure here.
  id: 1,
  name: 'Stranger Things',
  seasons: [
    {
      id: 1,
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
      id: 2,
      name: 'Season 2',
      episodes: []
    },
    {
      id: 3,
      name: 'Season 3',
      episodes: []
    },
  ],
  summary: `A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.`
}

//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
test('renders testShow and no selected Season without errors', ()=>{
  render(<Show show={testShow} selectedSeason={"none"} />);
});

//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for its existance)
test('renders Loading component when prop show is null', () => {
  render(<Show show={null} />);
  expect(screen.getByText(/fetching data.../i)).toBeInTheDocument();
});

//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
test('renders same number of options seasons are passed in', ()=>{
  render(<Show show={testShow} selectedSeason={"none"} />);
  expect(screen.getAllByTestId(/season-option/i)).toHaveLength(testShow.seasons.length);
});

//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
test('handleSelect is called when an season is selected', () => {
  const mockHandleSelect = jest.fn();
  render(<Show show={testShow} selectedSeason={"none"} handleSelect={mockHandleSelect} />);
  const seasonDropdown = screen.getByLabelText(/select a season/i);
  userEvent.selectOptions(seasonDropdown, ['1'])
  expect(mockHandleSelect).toHaveBeenCalledTimes(1);
});

//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
  const mockHandleSelect = jest.fn();
  const { rerender } = render(<Show show={testShow} selectedSeason={"none"}  handleSelect={mockHandleSelect} />);
  expect(screen.queryAllByTestId('episodes-container')).toHaveLength(0);
  rerender(<Show show={testShow} selectedSeason={'1'} />);
  expect(screen.queryAllByTestId('episodes-container')).toHaveLength(1);

  // expect(screen.queryByText(/will byers/i)).toBeInTheDocument();
});

