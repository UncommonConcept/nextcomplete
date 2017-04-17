import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Complete Air and Heat Service - DFW  </h1>
    <ul>
      <h2>Service</h2>
        <ol>
          <li>
            Solar Attic Ventilation is the state of the art in Ventilation .  it requires no electricity to operate only the self contained solar panel kit.  That means you save big $$$ by not needing an electric
          </li>
          <li>
              Attic Insulation make sure your home is insulated properly.   We offer fiberglass and cellulose insulation to insulate your home and make it the most efficient it can be !
          </li>
          <li>
              We repair and replace all makes and models, Repair or Design/replace duct systems, Air quality control &amp; Hepa filtration systems, UV Lights &amp;  Ozone air scrubbers, solar attic ventilation, attic insul
          </li>
          <li>
                We repair and replace all makes and models, Repair or Design/replace duct systems, Air quality control & Hepa filtration systems, UV Lights & Ozone air scrubbers, solar attic ventilation, attic insulation, & radiant barrier
          </li>
        </ol>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)