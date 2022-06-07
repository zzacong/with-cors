import Image from 'next/image'

import Wrapper from '$components/Wrapper'

export default function FlowerPage() {
  return (
    <Wrapper>
      <img
        src={`${process.env.NEXT_PUBLIC_FLOWER_HOST}/flower.jpg`}
        alt="flower"
        width={400}
        height={800}
      />
    </Wrapper>
  )
}
