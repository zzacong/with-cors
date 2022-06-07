import Wrapper from '$components/Wrapper'
import PageTitle from '$components/PageTitle'

export default function FlowerPage() {
  return (
    <Wrapper>
      <PageTitle>Flower</PageTitle>

      <img
        src={`${process.env.NEXT_PUBLIC_FLOWER_HOST}/flower.jpg`}
        alt="flower"
        width={400}
        height={800}
      />
    </Wrapper>
  )
}
