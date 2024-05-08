const convertToTag = (str) => {
  let tags = [];
  const regex = /\[(.*?)\]/g;
  const temp = str?.match(regex);
  temp && (tags = temp.map((match) => match?.slice(1, -1)));
  return tags;
};

export default convertToTag;
