import { Outlet, Link } from "react-router-dom";
import { Flex, Button, Text, Box } from "@chakra-ui/react"
import { useTranslation } from 'react-i18next';
import SwitchLang from "../../features/switchLng/SwitchLang"

const Layout = () => {
  const { t } = useTranslation();
  
  return (
    <Box margin='20px'>
      <Flex mb='20px' justifyContent='space-between'>
        <Flex gap='20px' mb='20px'>
          <Link _hover={{ color: 'orange' }} to="/"><Text fontSize='28px'>T9tw</Text></Link>
          <Link to="/welcome"><Button>{t('welcome')}</Button></Link>
          <Link to="/profile"><Button>{t('profile')}</Button></Link>
        </Flex>

        <SwitchLang />
      </Flex>

      <Outlet />
    </Box>
  )
};

export default Layout;