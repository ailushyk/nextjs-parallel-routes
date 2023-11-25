export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h3>Component: {params.id}</h3>
    </div>
  );
}
