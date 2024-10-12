import { ReactNode } from "react";

type Props = {
  name: string;
  headerBtn?: ReactNode;
  isSmallText?: boolean;
};

const Header = ({ name, headerBtn, isSmallText = false }: Props) => {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <h1
        className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}
      >
        {name}
      </h1>
      {headerBtn}
    </div>
  );
};

export default Header;
