/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const sliderProps = {
  dots: true,
  sx: {
    ".slick-prev:before, .slick-next:before": {
      color: `heading`,
    },
    ".slick-dots li button::before": {
      color: `heading`,
    },
  },
}

const albumNameStyle = {
  "text-align": 'center',
  color: `heading`,
}

const Photography = () => {
  const data = useStaticQuery(graphql`
    {
      india2021: allFile(filter: {relativeDirectory: {eq: "india_2021"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      mentonFrance: allFile(filter: {relativeDirectory: {eq: "menton_france"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      yellowstone: allFile(filter: {relativeDirectory: {eq: "yellowstone"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      newYorkCity: allFile(filter: {relativeDirectory: {eq: "nyc"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      people: allFile(filter: {relativeDirectory: {eq: "people"}}) {
        nodes {
            childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
            }
        }
      }
    }
  `)

  return (
    <Layout>      
      <h2 sx={{ ...albumNameStyle }}>Tamil Nadu &amp; Karnataka, India</h2>
      <section>
        <Slider { ...sliderProps }>
          {data.india2021.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
      <br/>
      <h2 sx={{ ...albumNameStyle }}>Menton, France</h2>
      <section>
        <Slider { ...sliderProps }>
          {data.mentonFrance.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
      <br/>
      <h2 sx={{ ...albumNameStyle }}>Yellowstone National Park</h2>
      <section>
        <Slider { ...sliderProps }>
          {data.yellowstone.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
      <br/>
      <h2 sx={{ ...albumNameStyle }}>New York City, USA</h2>
      <section>
        <Slider { ...sliderProps }>
          {data.newYorkCity.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
      <br/>
      <h2 sx={{ ...albumNameStyle }}>People</h2>
      <section>
        <Slider { ...sliderProps }>
          {data.people.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
    </Layout>
  )
}

export default Photography
