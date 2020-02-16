import React from 'react';

function ListItem(props) {
  return <li>{props.content}</li>;
}

class Dwarf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dwarves: [
        {
          name: 'Sleepy',
          id: 'asdfgr'
        },
        {
          name: 'Grumpy',
          id: 'jgutfh'
        },
        {
          name: 'Gimli',
          id: 'kglfpe'
        },
        {
          name: 'Bruenor',
          id: 'lsowem'
        },
      ],
    };
  }

  render() {
    return(
      <div>
        <h1>Dwarf List: </h1>
        <ul>
          {this.state.dwarves.map(dwarf => (<ListItem key={dwarf.id} id={dwarf.id} content={dwarf.name} /> ))}
        </ul>
      </div>
    );
  }

}

export default Dwarf;
