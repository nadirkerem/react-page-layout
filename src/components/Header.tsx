interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="flex h-10 items-center justify-center border">
      <p className="font-bold">{children}</p>
    </div>
  );
}
