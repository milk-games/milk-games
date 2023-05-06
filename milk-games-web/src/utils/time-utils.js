export default {
  toMonthString(time) {
    return new Date(time).toLocaleDateString('default', { month: 'long' });
  },
};
