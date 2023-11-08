import { useRouter } from "next/navigation";

const LabelMenu = ({
  children,
  path = "/",
}: {
  children: React.ReactNode;
  path?: string;
}) => {
  const router = useRouter();

  return (
    <label
      className='text-sm text-primary cursor-pointer'
      onClick={() => {
        router.push(path);
      }}
    >
      {children}
    </label>
  );
};

export default LabelMenu;
