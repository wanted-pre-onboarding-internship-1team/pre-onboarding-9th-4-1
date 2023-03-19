import OrdersTabel from '../component/OrdersTabel';
import React, { ReactElement, useState } from 'react';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import styled from 'styled-components';

interface Tab {
  id: number;
  title: string;
  content: ReactElement;
}

export default function MainPage() {
  const TABS: Tab[] = [
    {
      id: 0,
      title: '주문현황',
      content: <OrdersTabel />,
    },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <SideBar>
        <Logo>
          <LogoTitle>SWITCHWON</LogoTitle>
        </Logo>
        <SidebarInner>
          <MenuList>
            {TABS.map(tab => {
              return (
                <MenuListLi key={tab.id}>
                  <Menu onClick={() => setCurrentTab(tab.id)}>
                    <MenuIcon>
                      <MdOutlineDashboardCustomize />
                    </MenuIcon>
                    <MenuTitle>{tab.title}</MenuTitle>
                  </Menu>
                </MenuListLi>
              );
            })}
          </MenuList>
        </SidebarInner>
      </SideBar>
      {TABS.filter(({ id }) => id === currentTab).map(tab => tab.content)}
    </>
  );
}

const SideBar = styled.div`
  position: fixed;
  width: 240px;
  height: 100%;
  min-height: 100vh;
  padding-top: 30px;
  background: #f7941d;
`;

const Logo = styled.div``;

const LogoTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  font-size: 1.7rem;
  color: white;
`;

const SidebarInner = styled.div``;

const MenuList = styled.ul``;

const Menu = styled.button`
  margin: 0;
  padding: 20px;
  padding-top: 0;
  width: 100%;
  background-color: transparent;
  border: 0;
`;

const MenuIcon = styled.span`
  font-size: 20px;
  color: white;
  vertical-align: middle;
`;

const MenuTitle = styled.span`
  padding-left: 15px;
  color: white;
  border: 2px solid transparent;
  outline: none;
  transition: all 0.1s ease;
  cursor: pointer;
  font-size: 20px;
`;

const MenuListLi = styled.li``;
