import React from 'react';

// '#313131';
const GRID_INITIAL_COLOR = 'rgba(49, 49, 49, 0.5)';
// const GRIT_INITIAL_OPACITY = 1;
export default class PixelCell extends React.Component {
  shouldComponentUpdate(nextProps) {
    const keys = ['color', 'width'];
    const isSame = keys.every(
      key => this.props.cell[key] === nextProps.cell[key]
    );
    return !isSame;
  }
  render() {
    const {
      cell: { color, width },
      id,
      drawHandlers: { onMouseDown, onMouseOver }
    } = this.props;
    const styles = {
      width: `${width}%`,
      paddingBottom: `${width}%`,
      backgroundColor: color || GRID_INITIAL_COLOR
      // opacity: opacity || GRIT_INITIAL_OPACITY
    };

    return (
      <div
        onMouseDown={ev => onMouseDown(id, ev)}
        onMouseOver={ev => onMouseOver(id, ev)}
        onFocus={ev => onMouseOver(id, ev)}
        onTouchStart={ev => onMouseDown(id, ev)}
        style={styles}
      />
    );
  }
}
