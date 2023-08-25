import Description from "@/components/Description"
import PageContainer from "@/components/PageContainer"
import Main from "@/components/Main"
import Title from "@/components/Title"

export default async function Home() {
  const data = await getPosts()

  return (
    <PageContainer>
      <Main>
        <Title>words from others (for me)</Title>
        <Description>a recipe for disaster</Description>
        <div className="text-red-900">
          {data.data.map((post) => (
            <div key={post.attributes.slug}>{post.attributes.title}</div>
          ))}
        </div>
      </Main>
    </PageContainer>
  )
}

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/api/posts`)

  if (!res.ok) {
    throw new Error("Failed to fetch data from API")
  }
  return res.json()
}
