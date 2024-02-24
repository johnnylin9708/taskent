import { Navbar } from "./components/navbar";

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboradLayout;
