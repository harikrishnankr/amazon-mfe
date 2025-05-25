import { RootState } from "@amazon-mfe/shared-store";
import { useSelector } from "react-redux";

export function Header() {
  const shellState = useSelector((state: RootState) => state.shell);

  console.log(shellState);

  return (
    <header className="h-12 w-full bg-blue-900 px-4 flex items-center">
      <h1 className="text-white text-2xl">Amazon</h1>
    </header>
  );
}
