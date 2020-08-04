import Board from 'react-trello';
import React, { Component } from 'react';

class BoatBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
        lanes: [
          {
            id: 'lane-1',
            title: 'Docked',
            cards: []
          },
          {
            id: 'lane-2',
            title: 'Outbound to Sea',
            cards: []
          },
          {
            id: 'lane-3',
            title: 'Inbound to Harbour',
            cards: []
          },
          {
            id: 'lane-4',
            title: 'Maintenance',
            cards: []
          },
        ]
    }
      return (
        <div className="BoatBoard">
          <Board data={data} editable={true} style={{backgroundColor: 'white'}} />
        </div>
      );
  }
}
export default BoatBoard;
