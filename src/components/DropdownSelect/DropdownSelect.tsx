import React from 'react';
import './DropdownSelect.scss';

interface DropdownSelectProps {}

const DropdownSelect: React.FC<DropdownSelectProps> = (): JSX.Element => {
  const [isDragEntered, setIsDragEntered] = React.useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragEntered(false);
  };

  return (
    <div
      className={`dropdown-select ${isDragEntered ? 'drag-entered' : ''}`}
      onDrop={handleDrop}
      onDragLeave={(): void => setIsDragEntered(false)}
      onDragEnter={(): void => setIsDragEntered(true)}>
      <div>Drop image here or select to select</div>
      <input type="file" accept="image/*" />
    </div>
  );
};

export default DropdownSelect;
