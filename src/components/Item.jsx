export default function Item({ float = "left", title }) {
  console.log(float);
  return (
    <div
      style={{
        width: 500,
        height: 200,
        borderWidth: 1,
        background: "white",
        color: "red",
        display: "flex",
        alignContent: "center",
        marginBottom: 50,
      }}
    >
      {float === "left" && (
        <img
          height={200}
          src="https://xelltechnology.com/wp-content/uploads/2022/04/dummy6.jpg"
          alt=""
        />
      )}
      <p>{title}</p>
      {float === "right" && (
        <img
          height={200}
          src="https://xelltechnology.com/wp-content/uploads/2022/04/dummy6.jpg"
          alt=""
        />
      )}
    </div>
  );
}
