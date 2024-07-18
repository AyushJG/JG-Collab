import Image from "next/image";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-favorites.svg" height={300} width={300} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6 ">No Favorite boards !</h2>
      <p className="text-muted-foreground textg-sm mt-2 ">
        Try favoriting a board.
      </p>
    </div>
  );
};

export default EmptyFavorites;
