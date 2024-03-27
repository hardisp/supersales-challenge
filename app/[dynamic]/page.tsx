"use client"
import { Box, Container } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

export default function AboutPage() {
  const pathname = usePathname()
  return (
    <Container>
        <h1>{pathname}</h1>
    </Container>
  )
}
