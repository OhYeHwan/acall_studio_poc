import React from "react";
import CardList from "../CardList/CardList.jsx";
import ButtonList from "../ButtonItemList/ButtonItemList.jsx";
import { StoreSec, Section, SectionTitle } from "./StoreSectionElements.jsx";

const StoreSection = () => {
  return (
    <StoreSec>
      <Section>
        <SectionTitle>이번주 인기 고객센터 앱</SectionTitle>
        <CardList></CardList>
      </Section>
      <Section>
        <SectionTitle>이번주 인기 고객센터 앱</SectionTitle>
        <ButtonList></ButtonList>
      </Section>
    </StoreSec>
  );
};

export default StoreSection;
