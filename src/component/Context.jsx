import React, { createContext, useEffect, useState } from 'react';
import { apiPath } from '../api'; 

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);
  const [timeOff, setTimeOff] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsResponse = await fetch(apiPath('/teams')); 
        const teamsData = await teamsResponse.json();
        setTeams(teamsData);

        const membersResponse = await fetch(apiPath('/members')); 
        const membersData = await membersResponse.json();
        setMembers(membersData);

        const timeOffResponse = await fetch(apiPath('/timeoff'));
        const timeOffData = await timeOffResponse.json();
        setTimeOff(timeOffData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
    };
  }, []); 

  return (
    <MyContext.Provider value={{ teams, members, timeOff }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
