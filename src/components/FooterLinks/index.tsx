import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IFooterLinks } from "../../utilities/footerlinks";
import "./footer.css";
interface IFooterLinksComponent {
  title?: string | null | undefined;
  linkItems: IFooterLinks[];
}
const FooterLinks = ({ title, linkItems }: IFooterLinksComponent) => {
  return (
    <>
      <h5 className="footerTitle">{title}</h5>

      {linkItems.map((item: IFooterLinks) => {
        return (
          <Row>
            <Link to={item.path} className="links footerlinks">
              {item.text}
            </Link>
          </Row>
        );
      })}
    </>
  );
};
export default FooterLinks;
