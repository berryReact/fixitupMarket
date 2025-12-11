function LatestItems() {
  const latestItems = [];

  return (
    <div className="p-5">
      <header>
        <h2>Latest Items</h2>
      </header>
      <div className="">
        {latestItems.map((item) => {
          console.log(item);
        })}
      </div>
    </div>
  );
}

export default LatestItems;
