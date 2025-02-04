import Image from "next/image";

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-7 w-full">
        <Image
          src={"/layer/layers_01.png"}
          alt="layer background"
          width={221.54}
          height={1033.85}
          className="bg-contain"
        />
        <Image
          src={"/layer/layers_01.png"}
          alt="layer background"
          width={221.54}
          height={1033.85}
          className="bg-contain"
        />

        <Image
          src={"/layer/layers_01.png"}
          alt="layer background"
          width={221.54}
          height={1033.85}
          className="bg-contain"
        />
        <Image
          src={"/layer/layers_01.png"}
          alt="layer background"
          width={221.54}
          height={1033.85}
          className="bg-contain"
        />
        <Image
          src={"/layer/layers_01.png"}
          alt="layer background"
          width={221.54}
          height={1033.85}
          className="bg-contain"
        />
        <Image
          src={"/layer/layers_01.png"}
          alt="layer background"
          width={221.54}
          height={1033.85}
          className="bg-contain"
        />
        <Image
          src={"/layer/layers_01.png"}
          alt="layer background"
          width={221.54}
          height={1033.85}
          className="bg-contain"
        />
      </div>
    </div>
  );
}
