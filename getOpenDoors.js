const getOpenDoors = (number) => {
  const doorList = [];
  const openDoors = [];
  for (let i = 0; i < number; i++) {
    const door = {
      id: i + 1,
      isOpen: false,
    };
    doorList.push(door);
  }

  for (let round = 1; round <= doorList.length; round++) {
    for (const door of doorList) {
      if (door.id % round === 0) door.isOpen = !door.isOpen;
    }
  }

  for (let i = 0; i < doorList.length; i++) {
    const door = doorList[i];
    if (door.isOpen === true) openDoors.push(door.id);
  }

  return openDoors;

  /* return doorList.reduce(
    (acc, cur) => (cur.isOpen ? [...acc, cur.id] : [...acc], [])
  ); */
};

module.exports = getOpenDoors;
