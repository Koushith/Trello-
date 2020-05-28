import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from './components/List/List';
import store from './utils/store';
import StoreApi from './utils/storeApi';
import InputContainer from './components/Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TopBar from './components/TopBar';

// similar to styled components- css in JS-
const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: '#ddd',
    width: 'auto',
    overflowY: 'auto',
  },
  listContainer: {
    display: 'flex',
  },
  wrapper: {
    width: '100%',
    height: 'auto',
  },
}));

export default function App() {
  // store has few static contents-
  const [data, setData] = useState(store);
  //  state for collapsing.
  const [open, setOpen] = useState(false);

  // referning to Styles avove
  const classes = useStyle();

  // add new todo
  const addMoreCard = (title, listId) => {
    console.log(title, listId);
    // uuid generates unique ID no
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    // refering to exixting data in lists
    const list = data.lists[listId];
    // along with the existing todo list, add new todo
    list.cards = [...list.cards, newCard];

    // update the state with newly added TODO
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log('destination', destination, 'source', source, draggableId);

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <div className={classes.wrapper}>
        <div className={classes.root}>
          <TopBar setOpen={setOpen} />

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='app' type='list' direction='horizontal'>
              {(provided) => (
                <div
                  className={classes.listContainer}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {data.listIds.map((listId, index) => {
                    const list = data.lists[listId];
                    return <List list={list} key={listId} index={index} />;
                  })}
                  <InputContainer type='list' />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </StoreApi.Provider>
  );
}
