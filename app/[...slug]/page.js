import Description from "@/components/Description"
import PageContainer from "@/components/PageContainer"
import Main from "@/components/Main"
import Title from "@/components/Title"

export default function Blog({ params }) {
  const { slug } = params
  return (
    <PageContainer>
      <Main>
        <Title>{slug}</Title>
        <Description>This is a page called {slug}</Description>
      </Main>
    </PageContainer>
  )
}
