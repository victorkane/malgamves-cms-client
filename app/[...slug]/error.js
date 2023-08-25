"use client"

import Link from "next/link"
import Description from "@/components/Description"
import PageContainer from "@/components/PageContainer"
import Main from "@/components/Main"
import Title from "@/components/Title"

export default function Error({ reset, error }) {
  return (
    <PageContainer>
      <Main>
        <Title>
          Try returning to the{" "}
          <Link href="/" className="hover:underline">
            Home Page
          </Link>
        </Title>
        <Description>{error.message}</Description>
      </Main>
    </PageContainer>
  )
}
