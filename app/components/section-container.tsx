import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="items-center flex flex-col justify-center  md:px-4 max-md:px-5 ">
      <div className="w-full max-w-[1253px] h-full max-md:max-w-full max-md:my-10 relative overflow-hidden ">
        {children}
      </div>
    </section>
  );
}
