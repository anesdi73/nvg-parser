declare module "*.json" {
  //Json is automagically loaded and parsed to an object
  const content: Object;
  export default content;
}
