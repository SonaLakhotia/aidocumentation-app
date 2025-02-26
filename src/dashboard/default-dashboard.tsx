import React from "react";
import { Box, Button, H2, H5, Illustration, IllustrationProps, Text } from '@adminjs/design-system'
import { styled } from '@adminjs/design-system/styled-components'
import { useTranslation } from 'adminjs'

const pageHeaderHeight = 300
const pageHeaderPaddingY = 74
const pageHeaderPaddingX = 250

export const DashboardHeader: React.FC = () => {
    return (
      <Box data-css="default-dashboard">
        <Box
          position="relative"
          overflow="hidden"
          bg="white"
          height={pageHeaderHeight}
          py={pageHeaderPaddingY}
          px={['default', 'lg', pageHeaderPaddingX]}
        >
          <Text textAlign="center" color="grey100">
            <H2 fontWeight="bold">AI/ML System Documentation</H2>
          </Text>
        </Box>
      </Box>
    )
  }

  type BoxType = {
    variant: string
    title: string
    subtitle: string
    href: string
  }

  const boxes = ({ translateMessage }): Array<BoxType> => [
    {
      variant: 'Details',
      title: "Dataset Documentation",
      subtitle: "Review dataset details",
      href: '',
    },
    {
      variant: 'Details',
      title: "ML Model Documentation",
      subtitle: "Review ML model information",
      href: '',
    },
    {
      variant: 'Details',
      title: "AI System Documentation",
      subtitle: "View AI system attributes",
      href: '',
    },
  ]

  const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.space.md};
  transition: all 0.1s ease-in;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary60};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  & .dsc-icon svg, .gh-icon svg {
    width: 64px;
    height: 64px;
  }
`

Card.defaultProps = {
  variant: 'container',
  boxShadow: 'card',
}

export const Dashboard: React.FC = () => {
  const { translateMessage, translateButton } = useTranslation()

  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={['xl', 'xl', '-100px']}
        mb="xl"
        mx={[0, 0, 0, 'auto']}
        px={['default', 'lg', 'xxl', '0']}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        {boxes({ translateMessage }).map((box, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index} width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
            <Card as="a" href={box.href} target="_blank">
              <Text textAlign="center">
                <H5 mt="md">{box.title}</H5>
                <Text>{box.subtitle}</Text>
              </Text>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
export default Dashboard;