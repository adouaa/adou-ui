import React from "react";
import { withTranslation } from "react-i18next";

interface TabItemProps {
  label?: string;
  children?: any;
  active?: boolean;
  contentPadding?: string;
}

const TabItem = (props: TabItemProps) => {
  const { label, children, active, contentPadding } = props;
  return (
    <>
      {active && (
        <div style={{ padding: contentPadding || "0px 10px" }}>{children}</div>
      )}
    </>
  );
};

export default withTranslation()(TabItem);
