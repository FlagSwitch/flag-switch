import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs: React.FC = () => {

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbNameMap: Record<string, string> = {
    '/projects': 'Projects',
    '/features': 'Features',
    '/users': 'Users',
    '/overview': 'Overview',
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
}

export default Breadcrumbs;