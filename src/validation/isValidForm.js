export default (type, data) => {
  if (type === 'text') {
    data = data.trim();
    const regex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');
    return regex.test(data);
  }
  if (type === 'password') {
    if (data === '') {
      return false;
    } 
    return true;
  }
};
