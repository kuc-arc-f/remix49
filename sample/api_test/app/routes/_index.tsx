import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{}}>
      <h1 className="text-4xl font-bold">Welcome to Remix</h1>
      <hr />
    </div>
  );
}
