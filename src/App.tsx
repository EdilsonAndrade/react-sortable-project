import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc';
import './App.scss';

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
      <div style={{ 
      background: '#f3f3f3'
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
    <div>
    <nav className="container">
    <ul className="container__menu">
      <li>menu 1</li>  
      <li>menu 2</li>  
      <li>menu 3</li>  
    </ul>  
    
    </nav>
    <div style={{background:'#444', display:"flex", justifyContent:"center", alignItems:"center", color:'#fff', width:'100%', height:'200px', fontSize:'45px'}}>
      TESTE 
    </div>
    <div style={{display:'flex', flexDirection:"row"}}>
    <aside style={{display:'flex', flexDirection:"column", background:"#ffc"}}>
          <div>
            outros elementos
          </div>
      </aside>
    <aside style={{display:'flex', flexDirection:"column"}}>
    
    <SortableList sortableItems={sortableItems} onSortEnd={onSortEnd} useWindowAsScrollContainer={true} />
      </aside>  
    

    </div>
    </div>
   
  );
}

export default App;
