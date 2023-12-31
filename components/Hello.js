import PageContainer from "@/components/PageContainer"
import Main from "@/components/Main"
import Title from "@/components/Title"
import Description from "@/components/Description"
import Link from "next/link"

const Hello = () => {
  return (
    <PageContainer>
      <Main>
        <Title>Welcome to our Next.js Strapi client</Title>
        <Description>
          Click to see the template used to create this
          <Link
            className="text-red-500"
            href="https://github.com/malgamves/next-13-website-template"
          >
            {" "}
            course{" "}
          </Link>
        </Description>
      </Main>
    </PageContainer>
  )
}

export default Hello
