import React from 'react';
import './DropdownSelect.scss';

interface DropdownSelectProps {
  onSelected: (image: File | null) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  onSelected,
}): JSX.Element => {
  const [isDragEntered, setIsDragEntered] = React.useState(false);
  const [fileNamne, setFileName] = React.useState<string | null>(null);

  const handleFile = (file: File | null): void => {
    if (file) {
      if (file.type !== 'image/jpeg') {
        alert('Please select a jpg image');
        return;
      }

      setFileName(file.name);
    }

    onSelected(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragEntered(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.item(0);
    handleFile(file || null);
  };

  return (
    <>
      {fileNamne ? (
        <div className="dropdown-preview">
          {fileNamne}
          <button
            onClick={(): void => setFileName(null)}
            className="icon-delete"></button>
        </div>
      ) : (
        <div
          className={`dropdown-select ${isDragEntered ? 'drag-entered' : ''}`}
          onDrop={handleDrop}
          onDragLeave={(): void => setIsDragEntered(false)}
          onDragEnter={(): void => setIsDragEntered(true)}>
          <div>Drop image here or select to select</div>
          <input type="file" accept="image/jpeg" onChange={handleSelect} />
        </div>
      )}
    </>
  );
};

export default DropdownSelect;
