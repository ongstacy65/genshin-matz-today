import React from 'react';
import MainContainer from './components/MainContainer'
import ListContainer from './components/ListContainer'
import MatzText from './components/MatzText'

const items = {
  "Talent": [
    {
      name: "Ballad Series",
      schedule: ["Wednesday", "Saturday", "Sunday"],
      location: "Forsaken Rift"
    },
    {
      name: "Diligence Series",
      schedule: ["Tuesday", "Friday", "Sunday"],
      location: "Taishan Mansion"
    },
    {
      name: "Freedom Series",
      schedule: ["Monday", "Thursday", "Sunday"],
      location: "Forsaken Rift"
    },
    {
      name: "Gold Series",
      schedule: ["Wednesday", "Saturday", "Sunday"],
      location: "Taishan Mansion"
    },
    {
      name: "Prosperity Series",
      schedule: ["Monday", "Thursday", "Sunday"],
      location: "Taishan Mansion"
    },
    {
      name: "Resistance Series",
      schedule: ["Tuesday", "Friday", "Sunday"],
      location: "Forsaken Rift"
    },
  ],
  "Weapon Ascension": [
    {
      name: "Boreal Wolf Series",
      schedule: ["Tuesday", "Friday", "Sunday"],
      location: "Cecilia Garden"
    },
    {
      name: "Decarabian Series",
      schedule: ["Monday", "Thursday", "Sunday"],
      location: "Cecilia Garden"
    },
    {
      name: "Dandelion Gladiator Series",
      schedule: ["Wednesday", "Saturday", "Sunday"],
      location: "Cecilia Garden"
    },
    {
      name: "Guyun Series",
      schedule: ["Monday", "Thursday", "Sunday"],
      location: "Hidden Palace of Lianshan Formula"
    },
    {
      name: "Mist Veiled Elixir Series",
      schedule: ["Tuesday", "Friday", "Sunday"],
      location: "Hidden Palace of Lianshan Formula"
    },
    {
      name: "Aerosiderite Series",
      schedule: ["Wednesday", "Saturday", "Sunday"],
      location: "Hidden Palace of Lianshan Formula"
    },
  ]
}

const day = new Date().toLocaleString('en-us', {  weekday: 'long' })
const matzForToday = Object.values(items).flatMap(list => list.filter(item => item.schedule.includes(day)))

function App() {
  return (
    <MainContainer>
      <ListContainer>
        {matzForToday.map(matz => <MatzText><strong>{matz.name}</strong> ({matz.location})</MatzText>)}
      </ListContainer>
    </MainContainer>
  );
}

export default App;
