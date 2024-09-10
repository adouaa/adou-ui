import React from "react";
import { withTranslation } from "react-i18next";

interface TabItemProps {
  label?: string;
  url?: string;
  children?: any;
  active?: boolean;
  contentPadding?: string;
}

const TabItem = (props: TabItemProps) => {
  const { label, url, children, active, contentPadding } = props;
  return (
    <>
      <div
        className={`${active ? "" : "d-none"}`}
        style={{
          padding: contentPadding || "0px 10px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default withTranslation()(TabItem);
