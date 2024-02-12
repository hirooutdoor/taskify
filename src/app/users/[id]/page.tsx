const IdPage = ({ params }: { params: { id: string } }) => (
  <div>
    <h1>You are ID is: {params.id}</h1>
  </div>
);

export default IdPage;
