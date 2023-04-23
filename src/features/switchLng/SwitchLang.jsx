import React from 'react'
import i18n from 'i18next'
import { Flex, Button, Text, Box } from "@chakra-ui/react"


const lngs = [
    { code: 'en', nativeName: 'English' },
    { code: 'zh', nativeName: 'Chinese' },
];


export default function SwitchLang() {
    return (
        <Flex gap='10px'>
            {lngs.map((lng) => (
                <Button
                    key={lng.code}
                    onClick={() => i18n.changeLanguage(lng.code)}
                >
                    {lng.nativeName}
                </Button>
            )
            )}
        </Flex>
    )
}
