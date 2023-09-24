export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <main className="main">
        <h1>journal id: {params.id}</h1>
        <p>testing testing testing</p>
      </main>
    </>
  );
}
