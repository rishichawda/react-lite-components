export const getColor = (type) => {
  switch (type) {
    case 'primary':
      return '#2979ff';
    case 'secondary':
      return '#616161';
    case 'success':
      return '#689F38';
    case 'warning':
      return '#FF9800';
    case 'danger':
      return '#D32F2F';
    case 'dark':
      return '#212121';
    default:
      return '#eee';
  }
};

export const getTextColor = (type) => {
  switch (type) {
    case 'primary': case 'success': case 'danger': case 'dark': case 'secondary': case 'warning':
      return 'white';
    default:
      return 'black';
  }
};
