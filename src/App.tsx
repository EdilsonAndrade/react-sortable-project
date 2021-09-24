import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc';


function App() {
  const [sortableItems, setSortableItems] = useState<string[]>([]);

  useEffect(()=>{
    const newItems:string[] =[];
let i =1;
    while(i<100){
      console.log('vaii')
      newItems.push(`Item ${i}`)
      i++
    }
  
    console.log(newItems, 'entrei')
    setSortableItems(newItems);
  },[])

  const SortableItem = SortableElement(({value}:{value:string}) => <div>{value}</div>);
  const SortableList = SortableContainer(({sortableItems}:{sortableItems:string[]}) => {
    return (
      <div style={{position:'relative', 
      background: '#f3f3f3',  
      border:'1px solid #efefef', 
      borderRadius:'3px', 
      outline:'none',
      }}>
        {sortableItems.map((value, index) => {
          console.log(value, index, 'edilson')
          return(
          <SortableItem key={`item-${value}`} index={index} value={value} />
          )})}
      </div>
    );
  });


  const onSortEnd = ({oldIndex, newIndex}:{oldIndex:number, newIndex:number})=>{

    const newposition = arrayMove(sortableItems,oldIndex, newIndex);

    setSortableItems(newposition)
  }
  return (
    <div style={{height:'7150px'}}>
    <SortableList sortableItems={sortableItems} onSortEnd={onSortEnd} useWindowAsScrollContainer={true} />
    </div>
   
  );
}

export default App;
