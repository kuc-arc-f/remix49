import type { MetaFunction } from "@remix-run/node";
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
//
type Props = {
  src: string;
  className?: string;
};
//
export function Mermaid({ src, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (src && ref.current) {
      mermaid.init({}, ref.current);
    }
  }, [ref.current, src]);

  return (
    <div className={className} ref={ref}>
      {src}
    </div>
  );
}
//
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
// 
const src1 = `erDiagram
  e01 ||--|{ e02: "1 対 多(1以上)"
  e01 ||--o{ e03: "1 対 多(0以上)"
  e01 ||--o| e04: "1 対 0か1"
`;
//
export default function Index() {
  //
  return (
  <div>
    <h1 className="text-4xl">Test2.tsx!</h1>
    <hr />
    <button>[ Test ]</button>
    <Mermaid src={src1} className={'mermaid1'} />
  </div>
  );
}
