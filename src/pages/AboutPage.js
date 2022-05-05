import React from 'react'
import styled from 'styled-components'

import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='about' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cumque
            expedita ipsa deleniti doloremque eaque. Explicabo laudantium
            adipisci sunt eligendi? Suscipit quasi, tempora omnis repellat non
            fugiat consectetur laborum tempore labore at, quas officiis
            praesentium eveniet minima cum hic molestias aliquam reprehenderit
            illo. Quod aliquam laudantium ad ducimus officiis. Nostrum doloribus
            quod atque rem molestias officia perspiciatis incidunt aperiam
            fugiat voluptates debitis deserunt saepe, iure velit! Blanditiis
            facilis temporibus eius animi earum ipsam! Ullam, iure.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
