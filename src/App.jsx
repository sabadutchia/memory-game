import CardGrid from "./components/CardGrid";

function App() {
  // Mock data
  const elements = [
    {
      index: "0",
      title: "Hola",
      url: "https://images.unsplash.com/photo-1721332149112-c54e68990d99?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      index: "0",
      title: "Hola",
      url: "https://images.unsplash.com/photo-1721332149112-c54e68990d99?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      index: "0",
      title: "Hola",
      url: "https://images.unsplash.com/photo-1721332149112-c54e68990d99?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      index: "0",
      title: "Hola",
      url: "https://images.unsplash.com/photo-1721332149112-c54e68990d99?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <CardGrid elements={elements}></CardGrid>
    </>
  );
}

export default App;
