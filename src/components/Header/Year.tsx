// This component displays the current year in a specific format. It is used in the header and the footer of the website.
const Year = () => {
  return (
    <>
      <div className="flex flex-row items-end text-alt text-xs w-1/6 opacity-70 pl-2">
        <div className="flex items-center justify-center">&copy;</div>
        <div className="flex items-center justify-center">2025</div>
      </div>
    </>
  );
};
export default Year;
