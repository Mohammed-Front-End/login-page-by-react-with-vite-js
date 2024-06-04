import { ReactNode } from 'react'

const HeadingTitle =( {title, children}: { children: ReactNode  ,title: string,}) =>{
  console.log(title);
  console.log(children);
  
  return (
    <h2 style={{ fontSize: 35, margin: 21 }}>
      {title}
      {children}
    </h2>
  );
}
export default HeadingTitle;