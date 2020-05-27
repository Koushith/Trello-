// static data

const cards = [
  {
    id: 'card-1',
    title: 'learning to code',
  },
  {
    id: 'card-2',
    title: 'write a blog',
  },
  {
    id: 'card-3',
    title: 'tweet your progress',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
    listIds: ['list-1'],
  },
};

export default data;
