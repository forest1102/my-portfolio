declare module "*/languages.json" {
  type Lang = Array<{
    locale: string
    name: string
  }>

  const data: Lang;

  export default data;
}