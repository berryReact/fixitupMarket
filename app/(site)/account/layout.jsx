import AccountList from "@/app/_components/AccountList";

function Layout({ children }) {
  return (
    <div className="flex min-h-full flex-col">
      <AccountList />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default Layout;
