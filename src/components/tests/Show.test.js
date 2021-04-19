import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. 
//A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
const testShow = {
  //add in approprate test data structure here.
  id: 1,
  name: 'Futurama',
  seasons: [
    {
      id: 's01',
      name: 'First Season',
      episodes: []
    },
    {
      id: 's02',
      name: 'Second Season',
      episodes: []
    },
    {
      id: 's03',
      name: 'Third Season',
      episodes: []
    },
  ]
}

//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
test('renders testShow and no selected Season without errors', ()=>{
  console.log(testShow)
  render(<Show show={testShow} selectedSeason={0} />)
});

//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
test('renders Loading component when prop show is null', () => {
});

//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
test('renders same number of options seasons are passed in', ()=>{
});

//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
test('handleSelect is called when an season is selected', () => {
});

//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
});

