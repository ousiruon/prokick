import Logo from "../Header/Logo";
// This component is used to display the contact information in the footer of the website
// It includes the company logo and the address information.
const SubContact = () => {
  return (
    <>
      <div className="w-full flex flex-row border-t-1 border-alt text-main">
        <div className="flex items-center justify-center w-2/4 md:w-1/4">
          <Logo currentLayout={3} />
        </div>
        <div className="flex flex-col items-end justify-end w-2/4 md:w-3/4 border-l-1 border-alt py-20 px-4 text-justify">
          <div className="title font-bold opacity-70">
            General & New Business
          </div>
          <div className="address flex flex-col items-end">
            <div>1234 Elm Street,</div>
            <div>Apt 5B Springfield,</div>
            <div> IL 62704 USA</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubContact;
