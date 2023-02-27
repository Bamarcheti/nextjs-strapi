import styled from "@emotion/styled"
import Link from "next/link"
import { rem } from "polished"
import { Box, Flex } from 'reflexbox'
import Navigation from "./Navigation"

const Header = ({ isDark, navigation }: any) => {
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/" legacyBehavior>
              <a>
                <img src="/images/logo.svg" alt="Sites logo" />
                <span className="logo-text">Next Movies</span>
              </a>
            </Link>
          </div>
          <Navigation navigation={navigation} />
        </Flex>
      </Box>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background: ${props => props.isDark ? '#000000' : '#efefef' };
  padding: 20px;
  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`


export default Header