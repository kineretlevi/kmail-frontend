// For typescript enabling imports of .PNG and .gif.
declare module "*.PNG" {
  const value: string;
  export default value;
  }
  
declare module '*.gif' {
  const value: string;
  export default value;
}