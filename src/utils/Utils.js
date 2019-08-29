export const arrayBufferToBase64Src = (buffer) => {
  let binary = '';
  const bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach(b => binary += String.fromCharCode(b));
  const str = window.btoa(binary);
  const base64Flag = 'data:image/jpeg;base64,';
  return base64Flag + str;
}