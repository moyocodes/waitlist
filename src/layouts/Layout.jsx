import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import PropTypes from "prop-types";
import { AppSidebar } from "@/components/ui/app-sidebar";
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
