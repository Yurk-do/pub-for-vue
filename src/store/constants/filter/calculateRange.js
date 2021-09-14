export default function (value, item) {
  item = parseInt(item);
  value = value.split(" ");
  if (value.includes("until")) {
    return item < parseInt(value[1]);
  }
  if (value.includes("from")) {
    return parseInt(value[1]) < item && item < parseInt(value[3]);
  } else {
    return item > parseInt(value[2]);
  }
}
