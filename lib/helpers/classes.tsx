function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

export default classes;

const scopedClassMaker = (prifix: string) => {
  return (name: string) => {
    return [prifix, name].filter(Boolean).join("-");
  };
};

export { scopedClassMaker };
