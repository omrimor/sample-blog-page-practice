export const PostsGrid: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-6 select-text">
      {children}
    </div>
  );
};
