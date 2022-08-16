const Error = ({ msg }) => {
  return (
    <div className="bg-red-600 uppercase text-white rounded-md p-3 text-center text-bold mb-3">
      <p>{msg}</p>
    </div>
  );
};

export default Error;
