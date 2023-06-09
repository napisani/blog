import Layout from '../components/layout'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Contact() {
  return (
    <Layout>
      <h1 className='page-title'>Contact Details</h1>
      <div className="container">
        <div className="content">
          <p>
            Feel free reach out regarding anything on this site, software in general, or just to say hi.
          </p>

          <h2 className="subtitle mt-6">Contact Info:</h2>
          <div className="font-mono">
            <ul className="ml-5">
              <li>
                <FontAwesomeIcon className="w-4 inline-block" icon={faEnvelope} size="sm" /> napisani88 [at] gmail [dot] com
              </li>
              <li>
                <a href="https://github.com/napisani">
                  <FontAwesomeIcon className="w-4 inline-block" icon={faGithub} size="sm" /> Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nick-pisani-b6a1a9b/">
                  <FontAwesomeIcon className="w-4 inline-block" icon={faLinkedin} size="sm" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
