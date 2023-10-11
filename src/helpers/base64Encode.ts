/**
 * Returns a promise that resolves to a base64 encoded string of a given file.
 */
const base64Encode = (file: File): Promise<string> => {
  return new Promise((resolve, reject): void => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>): void => {
      const encoded = event.target?.result;

      if (encoded && typeof encoded === 'string') {
        resolve(encoded);
      } else {
        reject('Failed to encode file.');
      }
    };

    reader.onerror = (): void => reject(reader.error);

    reader.readAsDataURL(file);
  });
};

export default base64Encode;
