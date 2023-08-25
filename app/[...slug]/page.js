import PageContainer from "@/components/PageContainer"
import Title from "@/components/Title"
import Back from "@/components/Back"
import LeftGrid from "@/components/LeftGrid"
import RightGrid from "@/components/RightGrid"
import Content from "@/components/Content"
import Centered from "@/components/Centered"
import Description from "@/components/Description"
import Link from "next/link"

export default async function Blog({ params }) {
  const { slug } = params
  const data = await getPage(slug)
  const post = data.data[0]

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <PageContainer>
      <LeftGrid>
        <Centered>
          <Title>{post.attributes.title}</Title>
          <Description>
            by{" "}
            <span className="text-red-700 italic">
              {" "}
              {post.attributes.author}{" "}
            </span>{" "}
            on {reformatDate(post.attributes.date)}
          </Description>
          <Back>
            <Link href="/"> &larr; go back home</Link>
          </Back>
        </Centered>
      </LeftGrid>
      <RightGrid>
        <Centered>
          <Content>{post.attributes.body}</Content>
        </Centered>
      </RightGrid>
    </PageContainer>
  )
}

async function getPage(pageSlug) {
  const res = await fetch(
    `${process.env.API_URL}/api/posts?filters[slug][$eq]=${pageSlug}`
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data from API")
  }
  return res.json()
}
