export const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="rounded-xl py-2 px-3 uppercase bg-brandPrimary-200/10 text-brandPrimary-300 text-sm font-medium">
      {children}
    </span>
  );
};
