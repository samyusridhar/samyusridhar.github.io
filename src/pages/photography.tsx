/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const sliderStyle = {
  ".slick-prev:before, .slick-next:before": {
    color: `heading`,
  }
}

const albumNameStyle = {
  "text-align": 'center',
  color: `heading`,
}

const Photography = () => {
  const data = useStaticQuery(graphql`
    {
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
      <h2 sx={{ ...albumNameStyle }}>Menton, France</h2>
      <section>
        <Slider sx={{ ...sliderStyle }}>
          {data.mentonFrance.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
      <h2 sx={{ ...albumNameStyle }}>Yellowstone National Park</h2>
      <section>
        <Slider sx={{ ...sliderStyle }}>
          {data.yellowstone.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
      <h2 sx={{ ...albumNameStyle }}>People</h2>
      <section>
        <Slider sx={{ ...sliderStyle }}>
          {data.people.nodes.map((item, index) => {
            return <Img fluid={item.childImageSharp.fluid} />
          })}
        </Slider>
      </section>
    </Layout>
  )
}

export default Photography
