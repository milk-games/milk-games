/**
 *
 * @param {DragEvent} e
 */
function dragStart(e, data) {
  e.dataTransfer.setData('text/plain', JSON.stringify(data));
}

/**
 *
 * @param {DragEvent} e
 */
function dragOver(e) {
  e.preventDefault();
}

/**
 *
 * @param {DragEvent} e
 * @param {Function} set
 */
function dragEnd(e, set) {
  const data = e.dataTransfer.getData('text');
  set(JSON.parse(data));
}

export { dragStart, dragEnd, dragOver };
