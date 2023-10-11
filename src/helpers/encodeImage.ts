const encodeImage = (image: File): Promise<string> => {
  return new Promise((resolve, reject): void => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>): void => {
      const encoded = event.target?.result;
      if (encoded && typeof encoded === 'string') {
        resolve(encoded);
      } else {
        reject('Failed to encode image.');
      }
    };

    reader.onerror = (): void => {
      reject(reader.error);
    };

    reader.readAsDataURL(image);
  });
};

export default encodeImage;
