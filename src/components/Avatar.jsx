import Image from "next/image";

function Avatar({ user }) {
  return (
    <div className="flex justify-between items-center space-x-2 border-2 border-white rounded-full p-2">
      <div className="flex justify-center items-center w-7 h-7">
        <Image
          src={user.image}
          alt=""
          width={460}
          height={460}
          className="object-cover rounded-full"
        />
      </div>
      <div className="">
        <p className="text-white">{user.name}</p>
      </div>
    </div>
  );
}

export default Avatar;
