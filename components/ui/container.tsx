interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps): React.ReactElement {
  //   return <div className="mx-auto max-w-7xl">{children}</div>;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

export default Container;
