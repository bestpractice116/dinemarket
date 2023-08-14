import Wrapper from "../shared/Wrapper";

const DetailedFooter = () => {
  return (
    <div className="my-10 md:my-0 md:mt-10">
      <div className="border border-t-black">
        <Wrapper>
          <div className="py-6 flex md:flex-row flex-col gap-5 md:gap-0 justify-between text-[#666666]">
            <div>
              <p>Copyright © 2022 Dine Market</p>
            </div>
            <div>
              Design by. <span className="text-black font-bold">Weird Design Studio</span>
            </div>
            <div>
              Code by. <span className="text-black font-bold">Hamza Naseem</span>{" "}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default DetailedFooter;
