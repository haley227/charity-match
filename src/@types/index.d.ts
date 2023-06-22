// This is from https://stackoverflow.com/questions/59281568/typescript-and-react-with-gatsby-loader-unable-to-import-images-as-modules
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

type SvgComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;
declare module '*.inline.svg' {
  const content: SvgComponent;
  export default content;
}

// interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

// declare module '*.svg' {
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   const content: string;

//   export { ReactComponent };
//   export default content;
// }
