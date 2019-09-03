export const arrayBufferToBase64Src = buffer => {
  const bytes = [].slice.call(new Uint8Array(buffer));
  const binary = bytes.map(b => String.fromCharCode(b)).join('');
  const str = window.btoa(binary);
  const base64Flag = 'data:image/jpeg;base64,';
  return base64Flag + str;
};

export default arrayBufferToBase64Src;
