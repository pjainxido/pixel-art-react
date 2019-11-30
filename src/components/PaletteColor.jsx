import React from 'react';

const PaletteColor = props => {
  const {
    positionInPalette,
    width,
    color,
    selected,
    selectPaletteColor
  } = props;

  const handleClick = () => selectPaletteColor(positionInPalette);

  // const cellOpacity = opacity;
  const cellColor = color;
  const styles = {
    width: `${width}%`,
    paddingBottom: `${width}%`,
    backgroundColor: cellColor
  };

  return (
    <button
      className={`palette-color
        ${selected ? 'selected' : ''}`}
      style={styles}
      onClick={handleClick}
    />
  );
};

export default PaletteColor;
