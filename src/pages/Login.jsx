import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormLabel,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";


export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  console.log('eee',account, password);
  const handleShowClick = () => setShowPassword(!showPassword);

  const onSubmit = (e) => {
    if(account==='admin'&& password==='Admin&8181'){
      return navigate('/profile')
    }else{
      return alert(t('error'))
    }
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      p='50px'
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">{t('welcome')}</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={e => e.preventDefault()}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <Input placeholder={t('login_account')} onChange={(e) => setAccount(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t('password')}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? t('hide') : t('show')}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={onSubmit}
              >
                {
                  t('login')
                }
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
