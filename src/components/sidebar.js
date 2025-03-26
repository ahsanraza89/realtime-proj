import Link from "next/link";

export default function SideBar() {
  return (
    <div 
      style={{
        borderRight: "2px solid #ccc",
        minHeight: "91vh",
        padding: "25px 15px",
        minWidth: "180px",  
        maxWidth: "220px",   
        overflowX: "auto"    
      }}
    >
      <ul className="list-unstyled" style={{ marginTop: "10px" }}>
        <li style={{ marginBottom: "15px", paddingRight: "20px" }}>
          <Link className="text-decoration-none" style={{ color: "#6f42c1" }} href="/pakage">
            <b>Package & Addons <br /> Management</b>
          </Link>
        </li>
        <li style={{ marginBottom: "15px", paddingRight: "20px" }}>
          <Link className="text-decoration-none" style={{ color: "#6f42c1" }} href="/accountDetails">
            <b>Account Details</b>
          </Link>
        </li>
        <li style={{ marginBottom: "15px", paddingRight: "20px" }}>
          <Link className="text-decoration-none" style={{ color: "#6f42c1" }} href="/payments">
            <b>Invoices & Payments</b>
          </Link>
        </li>
        <li style={{ marginBottom: "15px", paddingRight: "20px" }}>
          <Link className="text-decoration-none" style={{ color: "#6f42c1" }} href="/reqHelp">
            <b>Request Help</b>
          </Link>
        </li>
      </ul>
    </div>
  );
}
