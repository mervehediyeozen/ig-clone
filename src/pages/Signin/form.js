import React from 'react'
import { FormControl, FormLabel, Input, Box, Flex, Center, Button, Image, HStack, Text, Divider, Stack } from '@chakra-ui/react'
import { Formik } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import indir from '../../images/indir.png'
import face from '../../images/face.png'
import { Validate } from './yup'
import { useAuth } from '../../contexts/AuthContext'




function Form() {
  const navigate = useNavigate()
  const {isLogged, loggedIn} = useAuth();

  const initialValues = {
    name: '',
    password: '',
  }

  // Formik submit handler
  const handleSubmit = (values) => {
    isLogged({name: values.name , password: values.password});
    
    navigate('/Main')
  }

  return (
    <>
      <Flex justifyContent="center" mt="35px" border="1px" height="410px" boxShadow="lg" borderColor="blackAlpha.300" w="350px">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit} // Formik'e submit fonksiyonunu veriyoruz
          validationSchema={Validate}
        >
          {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
            <form onSubmit={handleSubmit}> {/* Formik'in handleSubmit fonksiyonunu çağırıyoruz */}
              <Box mt="40px">
                <Center>
                  <Image height="60px" width="190px" src={logo} />
                </Center>
              </Box>
              <Box mt="25px">
                <FormControl>
                  <FormLabel htmlFor="name"></FormLabel>
                  <Input
                    bg="gray.50"
                    type="text"
                    size="sm"
                    id="name"
                    name="name"
                    placeholder="Adınızı girin"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && <Text color="red.500">{errors.name}</Text>}
                </FormControl>

                <FormControl mt="5px">
                  <FormLabel htmlFor="password"></FormLabel>
                  <Input
                    size="sm"
                    bg="gray.50"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Şifrenizi girin"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && <Text color="red.500">{errors.password}</Text>}
                </FormControl>
              </Box>

              <Button mt="15px" type="submit" rounded="lg" size="sm" width="full" bg="blue.300" variant="solid" color="white">
                Giriş Yap
              </Button>

              <HStack mt="15px">
                <Divider width="80px" borderColor="blackAlpha.600" />
                <Text fontSize="15px" color="blackAlpha.700">
                  YA DA
                </Text>
                <Divider width="80px" borderColor="blackAlpha.600" />
              </HStack>

              <HStack mt="15px" justify="center">
                <Image src={face} width="15px" height="15px" />
                <Link to="/">
                  <Text fontSize="15px" color="blue.300">
                    Facebook ile Giriş Yap
                  </Text>
                </Link>
              </HStack>

              <Box mt="15px" justify="center" textAlign="center">
                <Link to="/">
                  <Text fontSize="14px" color="gray.600">
                    Şifreni mi unuttun?
                  </Text>
                </Link>
              </Box>
            </form>
          )}
        </Formik>
      </Flex>

      <Stack boxShadow="lg" justifyContent="center" alignItems="center" w="350px" mt="10px" border="1px" height="60px" borderColor="blackAlpha.400">
        <HStack m="10px" justifyContent="center" textAlign="center">
          <Text fontSize="14px" color="blackAlpha.900">
            Hesabın Yok mu?
          </Text>
          <Link to="/">
            <Text color="blue.400">Kaydol</Text>
          </Link>
        </HStack>
      </Stack>

      <Stack justifyContent="center" alignItems="center" w="350px">
        <Text mt="7px" color="blackAlpha.900">
          Uygulamayı indir.
        </Text>
        <Box justifyContent="center" textAlign="center">
          <Link to="/">
            <Image src={indir} w="255px" height="65px" />
          </Link>
        </Box>
      </Stack>
    </>
  )
}

export default Form
